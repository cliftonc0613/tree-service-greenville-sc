// Shared helpers for the seed scanner. Project-specific knowledge (which data
// file feeds which page, which fields a page needs) lives in seed.config.mjs,
// not here.

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

// ---------------------------------------------------------------------------
// TypeScript data-file loader
// ---------------------------------------------------------------------------
// Astro data files use extensionless relative imports and `@/` aliases, which
// plain Node can't resolve. Every Astro project ships esbuild (via Vite), so we
// borrow the project's own copy to bundle the file, then import the result.
// shared-scripts itself stays dependency-free.

const moduleCache = new Map();

export async function loadTs(projectRoot, relPath) {
  const abs = path.resolve(projectRoot, relPath);
  if (moduleCache.has(abs)) return moduleCache.get(abs);
  if (!fs.existsSync(abs)) throw new Error(`Data file not found: ${relPath}`);

  const require = createRequire(path.join(projectRoot, 'package.json'));
  let esbuild = null;
  try {
    esbuild = require('esbuild');
  } catch {
    // fall through to native import below
  }

  let mod;
  if (esbuild) {
    const result = await esbuild.build({
      entryPoints: [abs],
      absWorkingDir: projectRoot,
      bundle: true,
      format: 'esm',
      platform: 'node',
      packages: 'external',
      write: false,
      logLevel: 'silent',
      // Data files read import.meta.env (for example SITE in site.ts). It does not exist under plain Node.
      define: { 'import.meta.env': '{}' },
    });
    // Written inside the project's node_modules so any bare imports the data
    // file keeps (packages: 'external') still resolve against the project.
    const cacheDir = path.join(projectRoot, 'node_modules', '.cache', 'seed-scan');
    fs.mkdirSync(cacheDir, { recursive: true });
    const outFile = path.join(
      cacheDir,
      `${relPath.replace(/[^a-z0-9]+/gi, '_')}-${Date.now()}.mjs`,
    );
    fs.writeFileSync(outFile, result.outputFiles[0].text);
    try {
      mod = await import(pathToFileURL(outFile).href);
    } finally {
      fs.rmSync(outFile, { force: true });
    }
  } else {
    // Node 22.18+ strips types natively; works when imports carry extensions.
    mod = await import(pathToFileURL(abs).href);
  }
  moduleCache.set(abs, mod);
  return mod;
}

// ---------------------------------------------------------------------------
// Markdown with frontmatter (flat YAML subset used by Astro content files)
// ---------------------------------------------------------------------------

function parseScalar(raw) {
  const v = raw.trim();
  if (v === '') return '';
  if (/^["'].*["']$/.test(v)) return v.slice(1, -1).replace(/\\"/g, '"');
  if (v === 'true' || v === 'false') return v === 'true';
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  if (v.startsWith('[') && v.endsWith(']')) {
    try {
      return JSON.parse(v.replace(/'/g, '"'));
    } catch {
      return v.slice(1, -1).split(',').map((s) => parseScalar(s)).filter((s) => s !== '');
    }
  }
  return v;
}

export function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: text };
  const data = {};
  let listKey = null;
  for (const line of m[1].split(/\r?\n/)) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      data[listKey].push(parseScalar(item[1]));
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    if (kv[2].trim() === '') {
      data[kv[1]] = [];
      listKey = kv[1];
    } else {
      data[kv[1]] = parseScalar(kv[2]);
      listKey = null;
    }
  }
  return { data, body: m[2] };
}

export function readMarkdownDir(projectRoot, relDir) {
  const dir = path.resolve(projectRoot, relDir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f) && f.toUpperCase() !== 'CLAUDE.MD')
    .sort()
    .map((f) => {
      const { data, body } = parseFrontmatter(fs.readFileSync(path.join(dir, f), 'utf8'));
      return { file: path.join(relDir, f), slug: f.replace(/\.mdx?$/, ''), data, body };
    });
}

// ---------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------

export function stripTags(html) {
  return String(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function stripMarkdown(md) {
  return String(md)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|-]/g, ' ');
}

export function wordCount(text) {
  const clean = stripTags(text);
  return clean ? clean.split(/\s+/).filter(Boolean).length : 0;
}

export function extractMainText(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!m) return null;
  return stripTags(
    m[1].replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' '),
  );
}

export function getPath(obj, dotted) {
  return dotted.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

// ---------------------------------------------------------------------------
// Filesystem helpers
// ---------------------------------------------------------------------------

export function listFiles(dir, filter = () => true) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full, filter));
    else if (filter(full)) out.push(full);
  }
  return out;
}

export function newestMtime(dir, filter = () => true) {
  return listFiles(dir, filter).reduce((max, f) => Math.max(max, fs.statSync(f).mtimeMs), 0);
}
