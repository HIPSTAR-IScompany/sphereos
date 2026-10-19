// 日英の文書pairと固定sourceを検査する。意味同値・外部sourceの更新・deploy成功は判定しない。
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const batch = JSON.parse(readFileSync(join(root, 'sources/publication-batch-2026-10-19.json'), 'utf8'));
const errors = [];
const paths = new Set();
for (const pair of batch.pairs) {
  for (const key of ['japanese', 'english']) {
    const p = pair[key];
    if (!p || p.includes('..') || p.startsWith('/') || paths.has(p)) { errors.push('不正・重複path: ' + p); continue; }
    paths.add(p);
    if (!existsSync(join(root, p))) { errors.push('文書がない: ' + p); continue; }
    const text = readFileSync(join(root, p), 'utf8');
    if (!text.includes('canonical_language: ja-JP')) errors.push('正本言語がない: ' + p);
    if (key === 'english' && !text.includes('translation_status: reference-manuscript')) errors.push('写本状態がない: ' + p);
    if (!text.endsWith('\n')) errors.push('末尾改行がない: ' + p);
  }
  if (!pair.sources.length) errors.push('出典がない: ' + pair.japanese);
  for (const s of pair.sources) {
    if (!/^[a-f0-9]{40}$/.test(s.revision) || !s.url.includes('/blob/' + s.revision + '/')) errors.push('固定revisionでない: ' + s.path);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('文書検査: ' + batch.pairs.length + ' 日英pair、固定sourceと正本言語を確認。意味review・外部更新・deployは別検証。');
