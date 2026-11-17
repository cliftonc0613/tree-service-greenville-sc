---
title: "Sample post: how this blog template reads"
description: "A placeholder article that shows every part of the blog layout: key takeaways, headings, a table, links, and an FAQ. Replace it before publishing."
date: 2026-11-17
category: guide
tags:
  - sample
  - template
image:
  src: /images/pages/tree-removal.jpg
  alt: "Illustration of a crew removing a large tree from a Greenville yard"
draft: true
---

This is a placeholder post. It exists so the blog index and the single-post template have something to render while you build the real articles. It is marked `draft: true`, so it shows in `npm run dev` and is left out of every production build, the sitemap, and the blog index.

> **Key Takeaways**
>
> - Open each post with a direct answer, then explain.
> - Keep the takeaways to three or four short bullets.
> - Link to the matching service or town page where it helps the reader.
> - Delete this sample before launch.

## How do I add a real post?

Create a new `.md` file in `src/content/blog/`. The file name becomes the URL, so `stump-grinding-cost.md` is published at `/blog/stump-grinding-cost`. Copy the frontmatter from this file, change every field, and set `draft: false` when the post is ready.

## What can a post contain?

Headings, short paragraphs, lists, tables, and links all have styles that match the rest of the site.

| Element | Where it shows up |
| --- | --- |
| Category | Pill on cards, label under the page header |
| Tags | Listed at the end of the post |
| Image | Top of the post and on every card |

Link to related pages the way you would anywhere else, for example [tree removal](/services/tree-removal) or [our service areas](/service-areas).

## Frequently asked questions

### Does the sample show up on the live site?

No. Drafts are filtered out of production builds.

### Where do the category pills come from?

They are built from the `category` field of the published posts, so a new category appears as soon as a post uses it.

## Ready to publish?

Replace this text with a real answer for a Greenville homeowner, then turn the draft flag off.
