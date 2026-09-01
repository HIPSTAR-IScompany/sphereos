// site identityへ影響するファイルに旧domain／旧site名のhardcodeが混入していないか検査する。
// docs/配下のQ Atlantis Issueへの参照リンク等、正当な出典表記は対象外とする。
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = process.cwd();
const scanExtensions = new Set(['.ts', '.tsx', '.css', '.svg', '.json']);

function collectFiles(dir) {
  const results = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...collectFiles(full));
    } else if (scanExtensions.has(extname(name))) {
      results.push(full);
    }
  }
  return results;
}

const targets = [
  join(root, 'docusaurus.config.ts'),
  join(root, 'sidebars.ts'),
  ...collectFiles(join(root, 'src')),
  ...collectFiles(join(root, 'static')),
];

const forbidden = [
  { pattern: /quantaril\.cloud/i, label: 'quantaril.cloud (旧Q Atlantis domain)' },
  { pattern: /q-atlantis-publication-receipt/i, label: 'q-atlantis-publication-receipt (Q Atlantis固有receipt schema)' },
];

const failures = [];

for (const absPath of targets) {
  let source;
  try {
    source = readFileSync(absPath, 'utf8');
  } catch {
    continue;
  }

  for (const { pattern, label } of forbidden) {
    if (pattern.test(source)) {
      failures.push(`${absPath.replace(root + '/', '')}: ${label} を検出しました`);
    }
  }
}

if (failures.length > 0) {
  console.error('domain hardcode検査に失敗しました。');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('domain hardcode検査: 旧domain／旧receipt schemaのhardcodeはありません。');
