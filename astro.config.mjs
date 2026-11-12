// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(launch): replace with the real production domain (see LAUNCH_CHECKLIST.md).
const SITE = process.env.SITE_URL ?? 'https://greenvilletreeandstump.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  // No trailing slash, per knowledge/research/site-architecture.md decision 8.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
});
