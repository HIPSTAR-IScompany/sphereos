// 日本語正本とen-US写本の生成結果を検査する。公開先の到達性は検査しない。
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const buildDir = join(process.cwd(), 'build');
const publicationUrl = (process.env.PUBLICATION_URL ?? 'https://sphere.i-s.dev').replace(/\/$/, '');
const failures = [];

for (const locale of [
  { path: 'index.html', url: publicationUrl + '/', language: 'ja-JP', sitemap: 'sitemap.xml' },
  { path: 'en/index.html', url: publicationUrl + '/en/', language: 'en-US', sitemap: 'en/sitemap.xml' },
]) {
  const fullPath = join(buildDir, locale.path);
  if (!existsSync(fullPath)) {
    failures.push(locale.path + ': 生成されていません');
    continue;
  }
  const html = readFileSync(fullPath, 'utf8');
  const links = html.match(/<link\b[^>]*>/g) ?? [];
  const metas = html.match(/<meta\b[^>]*>/g) ?? [];
  if (!new RegExp('<html[^>]*lang="' + locale.language + '"').test(html)) {
    failures.push(locale.path + ': html langが ' + locale.language + ' ではありません');
  }
  if (!links.some(tag => /rel="canonical"/.test(tag) && tag.includes('href="' + locale.url + '"'))) {
    failures.push(locale.path + ': canonicalが ' + locale.url + ' を指していません');
  }
  if (!metas.some(tag => /property="og:url"/.test(tag) && tag.includes('content="' + locale.url + '"'))) {
    failures.push(locale.path + ': og:urlがcanonicalと一致しません');
  }
  for (const property of ['og:title', 'og:type']) {
    if (!metas.some(tag => tag.includes('property="' + property + '"') && /content="[^"]+"/.test(tag))) {
      failures.push(locale.path + ': ' + property + ' がありません');
    }
  }
  if (!metas.some(tag => /name="twitter:card"/.test(tag) && /content="summary(?:_large_image)?"/.test(tag))) {
    failures.push(locale.path + ': Twitter cardがありません');
  }
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  try {
    const jsonLd = JSON.parse(jsonLdMatch?.[1] ?? '');
    if (jsonLd.url !== publicationUrl + '/') throw new Error('WebSite url');
    if (!['ja-JP', 'en-US'].every(language => jsonLd.inLanguage?.includes(language))) throw new Error('inLanguage');
  } catch {
    failures.push(locale.path + ': WebSite JSON-LDのurlまたは言語が不正です');
  }
  const sitemapPath = join(buildDir, locale.sitemap);
  if (!existsSync(sitemapPath) || !readFileSync(sitemapPath, 'utf8').includes(locale.url)) {
    failures.push(locale.sitemap + ': locale URLがありません');
  }
}

if (failures.length) {
  console.error('SEO検査に失敗しました。\n' + failures.map(failure => '- ' + failure).join('\n'));
  process.exit(1);
}
console.log('SEO検査: ja-JP / en-USのlang・canonical・JSON-LD・OG・Twitter card・sitemapを確認しました。');
