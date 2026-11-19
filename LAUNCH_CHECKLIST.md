# Launch checklist: Greenville Tree & Stump Removal

Items that must be resolved by the owner or verified against real sources before this site goes live. Everything here came from gaps in the project files, not from guesses.

## Blocking (do not launch without these)

- [x] **Domain.** Set to `https://greenvilletreeandstumpremoval.com` in `astro.config.mjs` and `src/data/site.ts`. Confirm it is registered and points to Cloudflare Pages before launch.
- [x] **Phone.** `src/data/site.ts` now uses `(864) 432-5331`, set in both `phoneDisplay` and `phoneHref`.
- [x] **Email.** Set to `hello@greenvilletreeandstumpremoval.com` in `src/data/site.ts`. Confirm the mailbox exists and receives mail before launch.
- [x] **Lead webhook.** Set `PUBLIC_LEAD_WEBHOOK_URL` to the GoHighLevel / LeadConnector inbound webhook. Verified: a test lead submitted from the contact page arrived in GoHighLevel. Still set `PUBLIC_LEAD_WEBHOOK_URL` in the hosting provider's environment variables, since `.env` is not deployed. Before wiring it, run the CORS preflight from the user's webhook rule: `curl -sD - -o /dev/null -X OPTIONS <url> -H "Origin: https://YOURSITE" -H "Access-Control-Request-Method: POST"`. The form uses a normal CORS `fetch` and reports success only on a 2xx response. Until the variable is set, the form says online requests are not connected and asks the visitor to call.
- [ ] **Google Maps key.** The contact page map shows a plain Greenville view until `PUBLIC_GOOGLE_MAPS_KEY` is set. Then it draws the 25-mile service-area circle. No key exists yet. In Google Cloud, create a Maps JavaScript API key on a project with billing enabled, restrict it to the site's domain (HTTP referrers), and set the variable in the build environment. Do not commit the key value.
- [x] **Brand name.** Confirmed as "Greenville Tree & Stump Removal", always the full name (never a short form), set once as `business.name` in `src/data/site.ts`. It matches the logo (`greenville-tsr-logo.png`). Still open: `public/images/pages/about-truck.jpg` is a generated image that shows the previous logo on the truck door.
- [ ] **Business entity and schema.** Confirm the legal entity that holds the business and the Google Business Profile name, address, and phone. Schema and citations must match.
- [ ] **Credentials.** "Licensed," "insured," and "ISA certified" are not claimed anywhere. Add them only after proof. The About page has a placeholder block for this.
- [ ] **Owner name and founding year.** Not in the project files. Not published anywhere yet.
- [ ] **Privacy policy.** `/privacy-policy` is a draft. Have it reviewed and add the legal entity.
- [ ] **Terms of service.** `/terms-of-service` is built and linked in the footer, but it is a draft. Have it reviewed, add the legal entity name and governing state, and confirm the liability limit and the insurance and licensing wording match what the owner can back up.
- [x] **Thank-you page.** `/thank-you` is built (noindex, excluded from the sitemap). Lead forms redirect to it after the webhook returns 2xx, and it pushes `generate_lead` to `dataLayer` only when the visitor arrives from a form (`?from=`). Still to do: submit a real test lead on the live site and confirm the redirect and the lead in GoHighLevel.

- [ ] **Visible draft notices.** These render on the live pages and must be removed before launch: the "Draft" boxes on `/privacy-policy` and `/terms-of-service`. The contact-page "Placeholder" box is removed and the business email is shown there.

## Content to verify

- [ ] **Local geography.** The paragraphs on the four town pages use starting points from the playbook (I-385 and Fairview Road, Heritage Park, Wade Hampton Blvd / US 29, Enoree River, Taylors Mill, US 123, GSP Airport, BMW plant). Verify each landmark and road against a real source before launch.
- [ ] **Service area coverage.** Confirm which towns the crew actually serves. The town pages say the business serves them, based on the playbook's target list.
- [ ] **Cost page sourcing.** `/services/tree-removal-cost` uses market benchmark ranges from the persona file, which says "source not specified." Find and cite a source, or remove the ranges and keep only the factors.
- [ ] **Owner review of all copy.** Drafted by the build. The playbook says the owner edits before it ships.
- [ ] **Storm checklist.** The emergency page says a storm checklist is available on request. Create it or remove the sentence.
- [ ] **Photos.** The home hero has no photo yet. Add crew, equipment, and Greenville backdrop images with descriptive alt text (playbook image direction). The share image at `public/images/og-default.jpg` is currently the logo, so replace it with a 1200x630 photo.
- [ ] **Reviews and testimonials.** None are published, and none should be until they are real and verified.
- [ ] **Commercial and HOA.** Mentioned on the About, Arborist, and Land Clearing pages. Confirm the business wants this promoted (site-architecture.md decision 3).

## SEO and technical

- [x] **Titles.** All 131 built page titles are 60 characters or fewer, measured from the built HTML with `&` unescaped. Service, town, and combo titles keep the full "| Greenville Tree & Stump Removal" suffix; the words before it were shortened (for example "Storm Removal Taylors", "Tree Care Travelers Rest"). Owner should review that wording. The five blog pages take their titles from the post content and have no brand suffix.
- [x] **robots.txt and llms.txt.** Generated at build time from `SITE_URL`. robots.txt allows GPTBot, ClaudeBot, PerplexityBot, and Google-Extended.
- [ ] **Schema validation.** JSON-LD parses on all pages (HomeAndConstructionBusiness with geo and a 25-mile radius, Service, BlogPosting, BreadcrumbList). FAQPage was removed on purpose (Google limits it to government and healthcare sites). Run the live pages through Google's Rich Results Test after launch.
- [ ] **Search Console.** Submit `sitemap-index.xml` on launch day (site-architecture.md, build order step 2).
- [ ] **Citations.** Submit the directory list in the playbook once NAP is final: Bing Places, Apple Business Connect, Yelp, and the directories in seo-strategy section 7.
- [ ] **Hosting.** Plan is Cloudflare Pages (free tier). Output is static. Confirm the build command `npm run build` and output directory `dist`.
- [ ] **Combo pages (98).** `/services/[town]/[service]` for all 14 towns (7 services each). Each needs an owner review of the copy. Watch for cannibalization with the Simpsonville removal and Taylors tree service town pages (see site-architecture.md). The Simpsonville removal combo and the town page both target "tree removal Simpsonville".
- [ ] **Tier 2 and Tier 3 towns (10 pages, built).** Mauldin, Fountain Inn, Travelers Rest, Five Forks, Powdersville, Berea, Wade Hampton, Piedmont, Pickens, Woodruff. Verify each county assignment and every geography sentence against a real source. Five Forks, Berea, Wade Hampton, Piedmont, Pickens, and Woodruff have no playbook geography, so their pages state only county and distance. Confirm coverage with the owner before these pages go live. The Service Areas hub and footer list every town. The header dropdown lists only the four Tier 1 towns.
- [ ] **Thin-page risk (Tier 3 and some Tier 2).** Piedmont, Pickens, Woodruff, Berea, Wade Hampton, and Five Forks show little or no measured search volume (see playbook.md). Their combo pages are short. Consider `noindex` on the lowest-volume combos until Search Console shows impressions.

## Known deferred items

- Only the 16 launch pages plus privacy and 404 are built. Tier 2 and 3 town pages and `/services/[area]/[slug]` combo pages are not part of the launch set. The blog (`/blog`, three posts in `src/content/blog/`) is built on the `feature/create-blog` branch. On 2026-11-17 the posts' key claims were checked against the sources they link: Duke Energy (30 feet, live lines, vehicles, 10 feet, line-clearance crews, Greenville County service), GEICO (coverage, preventive removal, vehicles), and the UF/IFAS and ISA tree-risk guides. The Policygenius and PropertyCasualty360 pages cited in the insurance post were not re-read. Re-check any figure before changing it.
- Design audit run (accessibility, visual critique, polish). Browser-checked at 1440, 1024, 768, and 390 px on home, cost, contact, and a town page, with scripted checks (overflow, tap targets, headings, labels, tel links) on 18 built pages. Still to do before launch: a real-device pass on iOS Safari and Android Chrome, and a screen-reader pass.
- **AI-generated images.** The images on 11 pages (home, contact, both hubs' headers, 4 service pages, 4 towns) were generated with Nano Banana 2 (prompts in `knowledge/generations/*.json`, kept locally and git-ignored). They are illustrations, not photos of the real crew, equipment, or Greenville sites, and their alt text says so. Replace with real photos when the operator has them, and do not present generated people as the actual crew.
- **Five pages now use generated illustrations** (stump grinding, services hub, arborist, emergency tree removal, about). The images have no text, no logos, and no people, and they still need owner review before launch.
- **About page picture.** The hero image on `/about` (`public/images/pages/about-truck.jpg`) is a generated illustration of a white pickup with the company logo on the door, beside a backhoe. It is not a photo of the real truck or crew. Its alt text says so. Replace it with a real photo when the operator has one.
