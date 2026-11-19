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
//   // Optional: extra groups checked in the same run, each with its own distDir,
//   // minWords and expectedCount (same fields as above).
//   wordCountGroups: [{ distDir: 'dist/service-areas', minWords: 500, expectedCount: 14 }],
// }
import { readdirSync, existsSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { extractMainText, loadConfig } from './core.mjs';

const cwd = process.cwd();
const config = await loadConfig(cwd);

// The primary group is the top-level config. Any wordCountGroups entries run after it.
const groups = [
  { distDir: config.distDir, minWords: config.minWords, minWordsFor: config.minWordsFor, expectedCount: config.expectedCount },
  ...(config.wordCountGroups ?? []),
];

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

// Returns true when the group passes. Prints its own result.
function checkGroup({ distDir, minWords, minWordsFor, expectedCount }) {
  // Project change: optional minWordsFor(slug) lets one run use a different minimum
  // per page group (e.g. combo pages vs service pages). Falls back to minWords.
  const minFor = (slug) => (minWordsFor ? minWordsFor(slug) : minWords);

  const dir = path.resolve(cwd, distDir);
  if (!existsSync(dir)) {
    console.error(`${dir} does not exist — run the project build first.`);
    return false;
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
    const min = minFor(slug);
    if (wordCount < min) {
      failures.push({ slug, wordCount, min });
    }
  }

  console.log(`Checked ${checked} pages under ${distDir} (per-page word minimums).`);

  if (expectedCount !== undefined && checked !== expectedCount) {
    console.error(
      `\nExpected to check ${expectedCount} pages but only found ${checked}. ` +
        'This likely means the build output or route structure changed — failing loudly instead of silently passing.'
    );
    return false;
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} page(s) below the word-count minimum:`);
    for (const f of failures) {
      console.error(`  - ${distDir}/${f.slug}/ : ${f.note ?? `${f.wordCount} words (minimum ${f.min})`}`);
    }
    return false;
  }

  console.log('All pages meet the word-count minimum.');
  return true;
}

let allOk = true;
for (const group of groups) {
  if (!checkGroup(group)) allOk = false;
}
process.exit(allOk ? 0 : 1);
