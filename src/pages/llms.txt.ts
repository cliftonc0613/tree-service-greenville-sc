import type { APIRoute } from 'astro';
import { absoluteUrl, business, nav } from '@/data/site';
import { services } from '@/data/services';
import { getPosts } from '@/lib/blog';

// llms.txt: a plain-text business summary for AI assistants and answer engines.
// Built from the same data as the pages, so it cannot drift from the site.
// Only facts the site already publishes: no credentials, reviews, or prices are added here.
export const GET: APIRoute = async () => {
  const posts = (await getPosts()).filter((post) => !post.data.draft);

  const lines = [
    `# ${business.name}`,
    '',
    `> ${business.description} Phone: ${business.phoneDisplay}. Service area: Greenville, SC and nearby Upstate towns.`,
    '',
    `${business.name} is a service-area business. It does not publish a street address. Call ${business.phoneDisplay} or request a free estimate through the contact page.`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.metaDescription}`),
    '',
    '## Service areas',
    ...nav.areas.map((a) => `- [${a.label}](${absoluteUrl(a.href)})`),
    '',
    '## Key pages',
    `- [Home](${absoluteUrl('/')})`,
    `- [About](${absoluteUrl(nav.about.href)})`,
    `- [Contact and free estimate](${absoluteUrl(nav.contact.href)})`,
    `- [Privacy policy](${absoluteUrl(nav.privacy.href)})`,
  ];

  if (posts.length > 0) {
    lines.push('', '## Blog', `- [All articles](${absoluteUrl('/blog')})`);
    lines.push(...posts.map((p) => `- [${p.data.title}](${absoluteUrl(`/blog/${p.id}`)}): ${p.data.description}`));
  }

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
