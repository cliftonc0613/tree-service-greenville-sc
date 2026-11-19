# Greenville Tree & Stump Removal

Static marketing site for a tree removal, trimming, and stump grinding business in Greenville, SC and nearby Upstate towns. Built with Astro 5 and deployed as plain static files.

The business name is `Greenville Tree & Stump Removal`, set once in `src/data/site.ts`.

## Setup

Requirements: Node.js and npm.

```sh
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview   # serve dist/ locally
```

## Environment variables

Set these in your shell, a local `.env` file (not committed), or the hosting provider's environment settings. The site is static, so values are read at **build time**. After changing one, rebuild and redeploy.

| Variable | Required | Purpose |
| --- | --- | --- |
| `PUBLIC_LEAD_WEBHOOK_URL` | Yes, for the lead form | LeadConnector / GoHighLevel inbound webhook. Without it the form tells visitors online requests are not connected. Treat the URL as private. |
| `PUBLIC_GOOGLE_MAPS_KEY` | For the service-area map | Google Maps JavaScript API key, restricted to the site's domain. Without it the map shows plain Greenville with no service circle. |
| `SITE_URL` | Optional | Production origin. Defaults to `https://greenvilletreeandstumpremoval.com`. Used for canonical URLs, the sitemap, `robots.txt`, and schema. |

`.env` and `.env.*` are git-ignored, so the values are not in the repo. There is no `.env.example` yet.

## Deployment

The output is static. Use:

- Build command: `npm run build`
- Output directory: `dist`

Set `PUBLIC_LEAD_WEBHOOK_URL` and `PUBLIC_GOOGLE_MAPS_KEY` in the host's environment variables before the build. The hosting plan has not been chosen yet; Cloudflare Pages was the planned option.

## Where things live

| Path | Contents |
| --- | --- |
| `src/data/site.ts` | Business identity, phone, email, hours, credentials flags, nav, and the lead webhook and Maps key references. Change business facts here. |
| `src/data/services.ts` | The seven service pages: copy, images, FAQs, schema inputs. |
| `src/data/areas.ts` | Town pages: geography, landmarks, roads, FAQs. |
| `src/data/combos.ts` | Town-by-service pages (`/services/[town]/[service]`). |
| `src/data/types.ts` | Shared TypeScript types for the data files. |
| `src/pages/` | Routes: home, services, service areas, contact, about, blog, privacy policy, terms of service, thank-you, 404, `robots.txt`, `llms.txt`. |
| `src/components/` | Shared pieces: `SEO.astro` (titles, meta, LocalBusiness schema), `LeadForm.astro`, header, footer, FAQ, breadcrumbs, service-area map. |
| `src/layouts/BaseLayout.astro` | Page shell used by every route. |
| `src/content/blog/` | Blog posts (Markdown). |
| `src/lib/` | Blog helpers and syntax highlighting. |
| `src/styles/global.css` | All site styles. |
| `public/images/` | Logo, share image (`og-default.jpg`), and page images. |
| `LAUNCH_CHECKLIST.md` | Launch blockers, content checks, and the owner handoff table. Read this before launch. |
| `scripts/` | Build-time helpers: SEO checks, seed-data tools, and the county map generator. Each has a usage comment at the top. |
| `context/core/` | Business profile, brand palette, ideal client, and voice notes used when writing copy. |

## Conventions

- **Brand name:** always the full `Greenville Tree & Stump Removal` (from `business.name`). Page titles use the same name. Do not shorten it.
- **Titles:** keep every page title at 60 characters or fewer. Shorten the words before the ` | ` separator, not the brand.
- **Schema:** the LocalBusiness block is `HomeAndConstructionBusiness`, with geo and a 25-mile service radius. The FAQ page type is intentionally not used, because Google limits it to government and healthcare sites.
- **Credentials:** do not claim licenses, insurance, or certifications without proof from the owner. The flags in `src/data/site.ts` stay `false` until then.
- **Lead tracking:** the lead form redirects to `/thank-you?from=<page>` after the webhook returns a 2xx. The thank-you page pushes a `generate_lead` event to `dataLayer` only when it is reached that way, so direct visits do not count.
- **Images:** the current page images are AI-generated illustrations. Replace them with real photos before launch.

## Before launch

Client-facing checklist (plain language, no code): https://claude.ai/artifact/DKjA4HBcWjwHiiC9SuhYYQ. Hand this to the business owner. It lists what they need to send, decide, and review.

For the full technical list, work through `LAUNCH_CHECKLIST.md`. Blocking items include the legal entity name, the governing state for the terms, the Google Business Profile match, the lead webhook on the live host, and the lawyer review of the privacy and terms pages.
