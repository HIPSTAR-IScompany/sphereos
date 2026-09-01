// buildされたHTML出力から、canonical／JSON-LD／sitemapがPUBLICATION_URLへ
// 正しく紐づいていることを検査する。content移植前のためblog frontmatter等は対象外。
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const buildDir = join(root, 'build');
const PUBLICATION_URL = (process.env.PUBLICATION_URL ?? 'https://sphere.i-s.dev').replace(/\/$/, '');

const failures = [];

const indexPath = join(buildDir, 'index.html');
if (!existsSync(indexPath)) {
  console.error(`SEO検査に失敗しました。\n- ${indexPath} が見つかりません。先に npm run build を実行してください。`);
  process.exit(1);
}

const html = readFileSync(indexPath, 'utf8');

const canonicalTags = html.match(/<link[^>]*>/g) ?? [];
const hasCanonical = canonicalTags.some(
  (tag) => /rel="canonical"/.test(tag) && tag.includes(`href="${PUBLICATION_URL}/"`),
);
if (!hasCanonical) {
  failures.push(`index.html: canonical linkが ${PUBLICATION_URL}/ を指していません`);
}

const ogUrlTags = html.match(/<meta[^>]*>/g) ?? [];
const hasOgUrl = ogUrlTags.some(
  (tag) => /property="og:url"/.test(tag) && tag.includes(`content="${PUBLICATION_URL}/"`),
);
if (!hasOgUrl) {
  failures.push(`index.html: og:url metaが ${PUBLICATION_URL}/ を指していません`);
}

const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!jsonLdMatch) {
  failures.push('index.html: JSON-LD scriptがありません');
} else {
  try {
    const jsonLd = JSON.parse(jsonLdMatch[1]);
    if (jsonLd.url !== `${PUBLICATION_URL}/`) {
      failures.push(`index.html: JSON-LD urlが ${PUBLICATION_URL}/ ではありません (${jsonLd.url})`);
    }
  } catch {
    failures.push('index.html: JSON-LDがJSONとして解析できません');
  }
}

const sitemapPath = join(buildDir, 'sitemap.xml');
if (!existsSync(sitemapPath)) {
  failures.push('sitemap.xml が生成されていません');
} else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  if (!sitemap.includes(PUBLICATION_URL)) {
    failures.push(`sitemap.xml に ${PUBLICATION_URL} を含むURLがありません`);
  }
}

if (failures.length > 0) {
  console.error('SEO検査に失敗しました。');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO検査: canonical／JSON-LD／sitemapが ${PUBLICATION_URL} と一致しています。`);
