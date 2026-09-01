// build metadataへsource repositoryとcommitを残す。
// deploy成功の主張ではなく、build成果物とGit historyを結びつけるためのreceipt。
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const buildDir = join(root, 'build');
const SITE_ID = process.env.SITE_ID ?? 'sphereos-i-s-dev';

function resolveCommit() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
  try {
    return execSync('git rev-parse HEAD', { cwd: root }).toString().trim();
  } catch {
    return 'unknown';
  }
}

const receipt = {
  schema: 'is-site-publication-receipt/1',
  site_id: SITE_ID,
  repository: process.env.GITHUB_REPOSITORY ?? 'local',
  commit: resolveCommit(),
  run_id: process.env.GITHUB_RUN_ID ?? null,
  run_attempt: process.env.GITHUB_RUN_ATTEMPT ?? null,
  content_migrated: false,
};

mkdirSync(join(buildDir, '.well-known'), { recursive: true });
writeFileSync(
  join(buildDir, '.well-known', `${SITE_ID}-deployment.json`),
  `${JSON.stringify(receipt, null, 2)}\n`,
  'utf8',
);

console.log(`build receipt: build/.well-known/${SITE_ID}-deployment.json を出力しました。`);
