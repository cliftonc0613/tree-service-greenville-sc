# Launch checklist: Greenville Tree & Stump

Items that must be resolved by the owner or verified against real sources before this site goes live. Everything here came from gaps in the project files, not from guesses.

## Blocking (do not launch without these)

- [ ] **Domain.** `astro.config.mjs` uses `https://greenvilletreeandstump.com` as a stand-in. The playbook suggests GreenvilleTreeRemoval.com, GreenvilleSCTreeRemoval.com, or GreenvilleTreePros.com. Availability was not checked. Set `SITE_URL` or edit the config once chosen.
- [ ] **Phone.** `src/data/site.ts` uses `(864) 555-0100`, a reserved placeholder. Replace with the GoHighLevel local 864 tracking number and update `phoneHref`.
- [ ] **Email.** `hello@greenvilletreeandstump.com` is a placeholder. Replace in `src/data/site.ts`.
- [ ] **Lead webhook.** Set `PUBLIC_LEAD_WEBHOOK_URL` to the GoHighLevel / LeadConnector inbound webhook. Before wiring it, run the CORS preflight from the user's webhook rule: `curl -sD - -o /dev/null -X OPTIONS <url> -H "Origin: https://YOURSITE" -H "Access-Control-Request-Method: POST"`. The form uses a normal CORS `fetch` and reports success only on a 2xx response. Until the variable is set, the form says online requests are not connected and asks the visitor to call.
- [ ] **Brand name.** The playbook left the brand open. Confirm "Greenville Tree & Stump" or change it. It appears in `src/data/site.ts`, the logo, and schema.
- [ ] **Business entity and schema.** Confirm the legal entity that holds the business and the Google Business Profile name, address, and phone. Schema and citations must match.
- [ ] **Credentials.** "Licensed," "insured," and "ISA certified" are not claimed anywhere. Add them only after proof. The About page has a placeholder block for this.
- [ ] **Owner name and founding year.** Not in the project files. Not published anywhere yet.
- [ ] **Privacy policy.** `/privacy-policy` is a draft. Have it reviewed and add the legal entity.

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

- [ ] **Titles.** Several titles run 61 to 70 characters because the brand suffix is long. Shorten the longest (emergency, easley, about) if needed.
- [ ] **Search Console.** Submit `sitemap-index.xml` on launch day (site-architecture.md, build order step 2).
- [ ] **Citations.** Submit the directory list in the playbook once NAP is final: Bing Places, Apple Business Connect, Yelp, and the directories in seo-strategy section 7.
- [ ] **Hosting.** Plan is Cloudflare Pages (free tier). Output is static. Confirm the build command `npm run build` and output directory `dist`.
- [ ] **Tier 2 and Tier 3 towns.** Month two and three per site-architecture.md. Do not link to them until their pages exist. The Service Areas hub and dropdown list only the four launch towns.

## Known deferred items

- Only the 16 launch pages plus privacy and 404 are built. Tier 2 and 3 town pages, `/services/[area]/[slug]` combo pages, and a blog are not part of the launch set.
- Browser QA across desktop, tablet, and mobile was not run in this build. Run it before launch.
