import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts are visible only in `npm run dev`. */
export async function getPosts(): Promise<BlogPost[]> {
  const all = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  // Featured post first, then newest first.
  return all.sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured) || b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export interface BlogCategory {
  slug: string;
  label: string;
  count: number;
}

/** Categories in use, most posts first, then alphabetical. */
export function categoriesOf(posts: BlogPost[]): BlogCategory[] {
  const map = new Map<string, BlogCategory>();
  for (const p of posts) {
    const slug = categorySlug(p.data.category);
    const found = map.get(slug);
    if (found) found.count += 1;
    else map.set(slug, { slug, label: p.data.category, count: 1 });
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}

/** Up to `limit` other posts, same category first, then newest. */
export function relatedPosts(posts: BlogPost[], current: BlogPost, limit = 3): BlogPost[] {
  const others = posts.filter((p) => p.id !== current.id);
  const same = others.filter((p) => p.data.category === current.data.category);
  const rest = others.filter((p) => p.data.category !== current.data.category);
  return [...same, ...rest].slice(0, limit);
}
