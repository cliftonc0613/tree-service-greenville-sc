import type { APIRoute } from 'astro';
import { absoluteUrl } from '@/data/site';

// Generated at build time so the Sitemap line always follows SITE_URL (see LAUNCH_CHECKLIST.md domain item).
// AI crawlers are named explicitly so the allow rule is visible, not just implied by the wildcard.
const AI_CRAWLERS = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];

export const GET: APIRoute = () => {
  const groups = [
    'User-agent: *\nAllow: /',
    ...AI_CRAWLERS.map((agent) => `User-agent: ${agent}\nAllow: /`),
  ];
  const body = `${groups.join('\n\n')}\n\nSitemap: ${absoluteUrl('/sitemap-index.xml')}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
