// SEO check config for tree-service-greenville-sc.
//
// The site builds flat .html files (build.format 'file', trailingSlash 'never'),
// and every title and meta description comes from src/data/*.ts through the
// page templates. This config reads the rendered <title> and
// <meta name="description"> from dist/, so the checks test what visitors and
// search engines actually see, not a copy of the template logic.
//
// Run `npm run build` first. The checks read dist/ and will report stale output
// only if dist/ is older than the source.

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { loadTs } from './seed/core.mjs';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

function decode(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function htmlFiles(dir, base = dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(full, base);
    return e.name.endsWith('.html') ? [path.relative(base, full)] : [];
  });
}

function pageType(rel) {
  if (rel.startsWith('service-areas/')) return 'city';
  if (rel.startsWith('services/') && rel.split('/').length === 3) return 'combo';
  if (rel.startsWith('services/')) return 'service';
  return 'page';
}

function renderedMeta(file) {
  const html = readFileSync(file, 'utf8');
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  return {
    title: title === undefined ? undefined : decode(title.trim()),
    description: desc === undefined ? undefined : decode(desc.trim()),
  };
}

const rendered = htmlFiles(DIST).sort();
const { areas } = await loadTs(ROOT, 'src/data/areas.ts');
const { combos: comboList } = await loadTs(ROOT, 'src/data/combos.ts');

export default {
  // Titles and descriptions, read from the built pages.
  async pageGroups() {
    return rendered.map((rel) => {
      const { title, description } = renderedMeta(path.join(DIST, rel));
      const label = rel.replace(/\.html$/, '');
      return { pageType: pageType(rel), label, title, description };
    });
  },

  // Word count: the site's flat-file pages are not directory/index.html, so the
  // word check can't find them. Left at the directory the scanner expects so the
  // result is an honest failure, not a silent pass.
  distDir: 'dist/services',
  minWords: 700,
  expectedCount: areas.filter((a) => !a.hubOnly).length * 7,

  // Combo intros: the lead paragraph on each service x city page.
  combos: () =>
    comboList.map((c) => ({
      key1: c.service,
      key2: c.area,
      segments: [c.area, c.service],
    })),
  introPattern: /<p class="lead">([\s\S]*?)<\/p>/,
};
