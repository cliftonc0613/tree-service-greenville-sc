#!/usr/bin/env node
// Enforces a minimum word count on a directory of built pages (e.g. dist/services/*).
// Generic version of Palmetto State Locksmith's check-word-count.mjs — reads
// project specifics from a --config module instead of hardcoding them.
//
// Usage: node check-word-count.mjs --config seo-checks.config.mjs
//
// Config contract (default export):
// {
//   distDir: 'dist/services',   // path relative to cwd, one subfolder per page
//   minWords: 900,
//   expectedCount: 12,          // fails loudly if actual page count differs
// }
import { readdirSync, existsSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { extractMainText, loadConfig } from './core.mjs';

const cwd = process.cwd();
const config = await loadConfig(cwd);
const { distDir, minWords, expectedCount } = config;

const dir = path.resolve(cwd, distDir);
if (!existsSync(dir)) {
  console.error(`${dir} does not exist — run the project build first.`);
  process.exit(1);
}

// Project change: find <folder>/index.html at any depth under distDir, so nested
// routes like services/<area>/<service>/ are counted, not only the first level.
// distDir's own index.html (the hub page) is not counted.
function pageFolders(base, rel = '') {
  return readdirSync(path.join(base, rel), { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .flatMap((e) => {
      const next = path.join(rel, e.name);
      const here = existsSync(path.join(base, next, 'index.html')) ? [next] : [];
      return [...here, ...pageFolders(base, next)];
    });
}

let failures = [];
let checked = 0;

for (const slug of pageFolders(dir)) {
  const html = readFileSync(path.join(dir, slug, 'index.html'), 'utf8');
  const text = extractMainText(html);
  checked++;
  if (text === null) {
    failures.push({ slug, note: 'no <main> element found' });
    continue;
  }
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (wordCount < minWords) {
    failures.push({ slug, wordCount });
  }
}

console.log(`Checked ${checked} pages under ${distDir} (minimum: ${minWords} words).`);

if (expectedCount !== undefined && checked !== expectedCount) {
  console.error(
    `\nExpected to check ${expectedCount} pages but only found ${checked}. ` +
      'This likely means the build output or route structure changed — failing loudly instead of silently passing.'
  );
  process.exit(1);
}

if (failures.length > 0) {
  console.error(`\n${failures.length} page(s) below the word-count minimum:`);
  for (const f of failures) {
    console.error(`  - ${distDir}/${f.slug}/ : ${f.note ?? `${f.wordCount} words`}`);
  }
  process.exit(1);
}

console.log('All pages meet the word-count minimum.');
