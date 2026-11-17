import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live in src/content/blog/*.md. The file name is the URL: my-post.md becomes /blog/my-post.
// Posts with `draft: true` show in `npm run dev` but are left out of production builds,
// the blog index, category pages, related posts, and the sitemap.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    /** <title> and the page H1. */
    title: z.string(),
    /** Meta description and the intro under the H1. 150 to 160 characters. */
    description: z.string().min(60).max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** One category per post, e.g. "guide", "tips", "emergency", "cost". Becomes a /blog/category/<slug> page. */
    category: z.string(),
    tags: z.array(z.string()).default([]),
    /** Picture under /public, e.g. /images/pages/tree-removal.jpg. Say if it is an AI illustration in the alt text. */
    image: z.object({ src: z.string(), alt: z.string() }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
