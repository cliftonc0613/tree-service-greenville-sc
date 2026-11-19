// @ts-check
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The blog stays out of the sitemap until at least one non-draft post exists
// (the blog index is noindex while empty, so listing it would contradict itself).
const BLOG_DIR = new URL('./src/content/blog/', import.meta.url);
const hasPublishedPosts = existsSync(BLOG_DIR) &&
  readdirSync(BLOG_DIR).some(
    (f) => f.endsWith('.md') && !/^draft:\s*true\s*$/m.test(readFileSync(new URL(f, BLOG_DIR), 'utf8')),
  );

// TODO(launch): replace with the real production domain (see LAUNCH_CHECKLIST.md).
const SITE = process.env.SITE_URL ?? 'https://greenvilletreeandstumpremoval.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  // No trailing slash, per knowledge/research/site-architecture.md decision 8.
  trailingSlash: 'never',
  // Folder output (page/index.html). Public URLs stay slash-free because of trailingSlash above.
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you') && (hasPublishedPosts || !page.includes('/blog')),
    }),
  ],
});
