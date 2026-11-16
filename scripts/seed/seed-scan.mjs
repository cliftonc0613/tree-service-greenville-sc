#!/usr/bin/env node
// Scans an Astro site and reports which pages need content seeded.
//
//   node seed/seed-scan.mjs --project /path/to/site
//   node seed/seed-scan.mjs --project . --type city
//   node seed/seed-scan.mjs --project . --page woodruff-sc --all
//   node seed/seed-scan.mjs --project . --json            # writes seed-drafts/_scan.json
//   node seed/seed-scan.mjs --project . --json out.json
//
// Options:
//   --project <dir>   site root (default: cwd)
//   --config <file>   config module (default: <project>/scripts/seed.config.mjs,
//                     else seed.config.mjs next to this script)
//   --type <key>      only this page type (comma-separated allowed)
//   --page <id>       only pages whose id contains this text
//   --all             also list pages with no gaps
//   --optional        also report 'optional' fields
//   --json [file]     write the full machine-readable scan
//
// Exit code is always 0 unless the scan itself fails; gaps are information.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  loadTs,
  readMarkdownDir,
  wordCount,
  stripMarkdown,
  extractMainText,
  getPath,
  listFiles,
  newestMtime,
} from './core.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));

// --------------------------------------------------------------------------- args
function parseArgs(argv) {
  const args = { all: false, optional: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = argv[i + 1];
    const takeValue = () => (next && !next.startsWith('--') ? (i++, next) : true);
    if (a === '--project') args.project = takeValue();
    else if (a === '--config') args.config = takeValue();
    else if (a === '--type') args.type = takeValue();
    else if (a === '--page') args.page = takeValue();
    else if (a === '--json') args.json = takeValue();
    else if (a === '--all') args.all = true;
    else if (a === '--optional') args.optional = true;
    else if (a === '--help' || a === '-h') args.help = true;
    else throw new Error(`Unknown option: ${a}`);
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
if (args.help) {
  console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('\n').slice(1, 20).join('\n'));
  process.exit(0);
}

const project = path.resolve(args.project && args.project !== true ? args.project : process.cwd());
if (!fs.existsSync(path.join(project, 'package.json'))) {
  console.error(`Not a project root (no package.json): ${project}`);
  process.exit(1);
}

const projectConfig = path.join(project, 'scripts', 'seed.config.mjs');
const configPath = path.resolve(
  args.config && args.config !== true
    ? args.config
    : fs.existsSync(projectConfig)
      ? projectConfig
      : path.join(HERE, 'seed.config.mjs'),
);
const config = (await import(pathToFileURL(configPath).href)).default;

// --------------------------------------------------------------------------- ctx
const rel = (p) => path.resolve(project, p);

const researchText = (config.researchFiles ?? [])
  .flatMap((p) => {
    const abs = rel(p);
    if (!fs.existsSync(abs)) return [];
    return fs.statSync(abs).isDirectory() ? listFiles(abs, (f) => /\.(md|txt)$/.test(f)) : [abs];
  })
  .map((f) => fs.readFileSync(f, 'utf8'))
  .join('\n');

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const ctx = {
  project,
  load: (p) => loadTs(project, p),
  readFile: (p) => (fs.existsSync(rel(p)) ? fs.readFileSync(rel(p), 'utf8') : null),
  exists: (p) => fs.existsSync(rel(p)),
  markdown: (dir) => readMarkdownDir(project, dir),
  researchHas(term, { heading = false } = {}) {
    if (!researchText) return false;
    const t = escapeRe(term);
    const re = heading ? new RegExp(`^#{2,4}\\s+${t}\\b`, 'im') : new RegExp(`\\b${t}\\b`, 'i');
    return re.test(researchText);
  },
};

function imageExists(webPath) {
  if (!webPath) return false;
  if (/^https?:\/\//.test(webPath)) return true;
  return (config.imageRoots ?? ['public']).some((root) => fs.existsSync(path.join(rel(root), webPath)));
}

// --------------------------------------------------------------------------- field checks
const placeholderRes = config.placeholderPatterns ?? [];
const isPlaceholder = (v) => typeof v === 'string' && placeholderRes.some((re) => re.test(v));

function textOf(value, fieldPath) {
  if (fieldPath === 'body') return stripMarkdown(value);
  return value;
}

function checkField(item, spec) {
  const r = rawCheck(item, spec);
  // limitLevel lets a field be required to exist while length limits are softer.
  if (spec.limitLevel && ['thin', 'short', 'long'].includes(r.status)) r.level = spec.limitLevel;
  return r;
}

function rawCheck(item, spec) {
  const value = getPath(item.data, spec.path);
  const level = spec.level ?? 'required';
  const base = { field: spec.path, level };
  const empty =
    value == null ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0);

  if (spec.kind === 'image') {
    if (empty) return { ...base, status: 'missing' };
    return imageExists(value) ? { ...base, status: 'ok' } : { ...base, status: 'broken', note: `${value} not found` };
  }
  if (empty) return { ...base, status: 'missing' };

  if (spec.kind === 'number') {
    return typeof value === 'number' && value >= (spec.min ?? -Infinity)
      ? { ...base, status: 'ok' }
      : { ...base, status: 'missing', note: `value ${value}` };
  }

  if (spec.kind === 'list') {
    const arr = Array.isArray(value) ? value : Object.values(value);
    if (arr.some((x) => isPlaceholder(typeof x === 'string' ? x : JSON.stringify(x)))) {
      return { ...base, status: 'placeholder' };
    }
    if (spec.minItems && arr.length < spec.minItems) {
      return { ...base, status: 'thin', note: `${arr.length} items, want ${spec.minItems}+` };
    }
    if (spec.maxItems && arr.length > spec.maxItems) {
      return { ...base, status: 'long', note: `${arr.length} items, max ${spec.maxItems}` };
    }
    return { ...base, status: 'ok', note: `${arr.length} items` };
  }

  // text
  const str = String(value);
  if (isPlaceholder(str)) return { ...base, status: 'placeholder' };
  const words = wordCount(textOf(str, spec.path));
  if (spec.minWords && words < spec.minWords) {
    return { ...base, status: 'thin', note: `${words} words, want ${spec.minWords}+` };
  }
  if (spec.minChars && str.length < spec.minChars) {
    return { ...base, status: 'short', note: `${str.length} chars, want ${spec.minChars}-${spec.maxChars ?? '∞'}` };
  }
  if (spec.maxChars && str.length > spec.maxChars) {
    return { ...base, status: 'long', note: `${str.length} chars, max ${spec.maxChars}` };
  }
  return { ...base, status: 'ok', note: spec.minWords ? `${words} words` : undefined };
}

// --------------------------------------------------------------------------- dist word counts
const distDir = rel(config.dist ?? 'dist');
const hasDist = fs.existsSync(path.join(distDir, 'index.html'));
let distStale = false;
if (hasDist) {
  const builtAt = fs.statSync(path.join(distDir, 'index.html')).mtimeMs;
  const srcAt = newestMtime(rel('src'), (f) => !f.endsWith('CLAUDE.md') && !f.endsWith('.DS_Store'));
  distStale = srcAt > builtAt;
}

function builtWords(url) {
  if (!hasDist) return null;
  const file = path.join(distDir, url, 'index.html');
  if (!fs.existsSync(file)) return undefined; // page not in the build
  const text = extractMainText(fs.readFileSync(file, 'utf8'));
  return text == null ? null : wordCount(text);
}

// --------------------------------------------------------------------------- scan
const typeFilter = args.type && args.type !== true ? new Set(String(args.type).split(',')) : null;
const pageFilter = args.page && args.page !== true ? String(args.page) : null;
const reportLevels = new Set(['required', 'recommended', ...(args.optional ? ['optional'] : [])]);

const results = [];
for (const type of config.pageTypes) {
  if (typeFilter && !typeFilter.has(type.key)) continue;
  let items;
  try {
    items = await type.items(ctx);
  } catch (err) {
    results.push({ type: type.key, label: type.label, error: err.message, pages: [] });
    continue;
  }
  if (pageFilter) items = items.filter((it) => it.id.includes(pageFilter));

  const pages = items.map((item) => {
    const fields = [
      ...type.fields.map((spec) => checkField(item, spec)),
      ...(item.checks ?? []).map((c) => ({
        field: c.field,
        level: c.level ?? 'required',
        status: c.ok ? 'ok' : 'missing',
        note: c.ok ? undefined : c.note,
      })),
    ];
    const words = builtWords(item.url);
    if (type.minPageWords && typeof words === 'number') {
      fields.push({
        field: 'page words (built)',
        level: 'recommended',
        status: words >= type.minPageWords ? 'ok' : 'thin',
        note: `${words} words, want ${type.minPageWords}+`,
      });
    } else if (words === undefined) {
      fields.push({ field: 'page words (built)', level: 'recommended', status: 'missing', note: 'not in dist/ (rebuild?)' });
    }

    const gaps = fields.filter((f) => f.status !== 'ok' && reportLevels.has(f.level));
    const requiredGaps = gaps.filter((f) => f.level === 'required');
    const requiredTotal = fields.filter((f) => f.level === 'required').length;
    const requiredMissing = fields.filter((f) => f.level === 'required' && f.status === 'missing').length;
    const status =
      gaps.length === 0
        ? 'ok'
        : requiredTotal > 0 && requiredMissing === requiredTotal
          ? 'empty'
          : requiredGaps.length > 0
            ? 'needs-work'
            : 'could-improve';
    return { id: item.id, url: item.url, label: item.label, status, builtWords: words ?? null, fields, gaps };
  });

  results.push({
    type: type.key,
    label: type.label,
    source: type.source,
    research: type.research,
    pages,
  });
}

// Routes nobody claimed: a new page file the config doesn't know how to seed.
const claimed = new Set([
  ...config.pageTypes.flatMap((t) => t.routes ?? []),
  ...(config.skip ?? []).map((s) => s.route),
]);
const pageFiles = listFiles(rel('src/pages'), (f) => /\.(astro|md|mdx)$/.test(f) && !/CLAUDE\.md$/i.test(f)).map(
  (f) => path.relative(project, f),
);
const unmapped = typeFilter || pageFilter ? [] : pageFiles.filter((f) => !claimed.has(f));

// --------------------------------------------------------------------------- output
const ICON = { ok: '✓', 'could-improve': '·', 'needs-work': '!', empty: '✗' };
const pad = (s, n) => String(s).padEnd(n);

console.log(`\nSeed scan: ${path.basename(project)}`);
console.log(`Config:    ${path.relative(process.cwd(), configPath) || configPath}`);
console.log(
  `Build:     ${hasDist ? (distStale ? 'dist/ is OLDER than src/ — built word counts may be stale' : 'dist/ is current') : 'no dist/ — run npm run build for page word counts'}`,
);

console.log(`\n${pad('Type', 28)}${pad('Pages', 7)}${pad('OK', 6)}${pad('Improve', 9)}${pad('Needs', 7)}Empty`);
for (const r of results) {
  if (r.error) {
    console.log(`${pad(r.label, 28)}ERROR: ${r.error}`);
    continue;
  }
  const count = (s) => r.pages.filter((p) => p.status === s).length;
  console.log(
    `${pad(r.label, 28)}${pad(r.pages.length, 7)}${pad(count('ok'), 6)}${pad(count('could-improve'), 9)}${pad(count('needs-work'), 7)}${count('empty')}`,
  );
}

for (const r of results) {
  if (r.error) continue;
  const shown = r.pages.filter((p) => args.all || p.status !== 'ok');
  if (shown.length === 0) continue;
  console.log(`\n── ${r.label} (${r.type}) ── ${r.source}`);
  for (const p of shown) {
    console.log(`  ${ICON[p.status]} ${p.label}  ${p.url}`);
    const list = args.all ? p.fields.filter((f) => reportLevels.has(f.level)) : p.gaps;
    for (const f of list) {
      const tag = f.level === 'required' ? '' : ` (${f.level})`;
      console.log(`      ${pad(f.status, 12)}${f.field}${tag}${f.note ? ` — ${f.note}` : ''}`);
    }
  }
}

if (unmapped.length) {
  console.log('\n── Page files not covered by seed.config ──');
  for (const f of unmapped) console.log(`  ? ${f}`);
  console.log('  Add them to a page type\'s routes, or to skip[], in seed.config.mjs.');
}

console.log('\nLegend: ✗ empty  ! required gaps  · recommended gaps only  ✓ complete\n');

if (args.json) {
  const out =
    args.json === true ? path.join(project, 'seed-drafts', '_scan.json') : path.resolve(String(args.json));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(
    out,
    JSON.stringify(
      {
        project,
        config: configPath,
        scannedAt: new Date().toISOString(),
        dist: { present: hasDist, stale: distStale },
        contextFiles: (config.contextFiles ?? []).filter((f) => fs.existsSync(rel(f))),
        researchFiles: config.researchFiles ?? [],
        types: results,
        unmapped,
      },
      null,
      2,
    ),
  );
  console.log(`Wrote ${out}`);
}
