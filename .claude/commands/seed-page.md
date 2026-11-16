---
description: Research and seed SEO content into a local-business Astro site, page by page (city, homepage, service, highway, combo, blog)
argument-hint: "[page-id | --type <type>] [--project <path>] [--refresh] [--apply]"
---

# /seed-page

Seed a site's pages with researched, rank-focused content. This runs in four stages: scan, research, draft, apply. It writes structured data (the site's `src/data/*.ts` entries and blog markdown), never raw HTML, because the templates render the data.

Arguments: `$ARGUMENTS`

- `<page-id>`: a page id from the scan, such as `woodruff-sc`, `flatbed-towing`, `home`, or `una-sc/accident-recovery`. Partial matches are fine.
- `--type <key>`: every page of one type (`home`, `service`, `city`, `highway`, `combo`, `blog`, `static`).
- `--project <path>`: the site root. Defaults to the current directory.
- `--refresh`: rewrite fields that already have content. Without it, only empty, thin or placeholder fields are filled.
- `--apply`: apply drafts without stopping for review. Without it, stop after drafting and ask.

## Stage 0: Scan

1. Resolve the project root. It must contain `package.json` and `src/pages/`.
2. Find the scanner. Use `<project>/scripts/seed/seed-scan.mjs` if it exists, otherwise `/Users/cliftoncanady/web-apps/Yanir-websites/shared-scripts/seed/seed-scan.mjs`.
3. Run `node <scanner> --project <project> --json`. It writes `<project>/seed-drafts/_scan.json`. If `dist/` is missing or stale, run `npm run build` first so page word counts are real.
4. Pick the targets:
   - If an id or type was given, use the matching pages.
   - If nothing was given, show the scanner's summary table and use AskUserQuestion to choose a type or pages. Lead with the type that has the most `empty` or `needs-work` pages.
   - Unless `--refresh` is set, target only the gaps listed for each page. With `--refresh`, target every field in the type's config.
   - Batch limit: 5 pages per run (10 for `combo`, grouped by city). If more match, do the first batch and say how many remain.
5. If the scan lists unmapped page files, mention them once. Don't seed them.

## Stage 1: Load the site's rules

Read these before writing anything. The scan JSON's `contextFiles` and each type's `source` say where they are.

- The project `CLAUDE.md` and any `CLAUDE.md` in `src/data/` or `src/content/`.
- `context/core/business-profile.json`. Note `claims_to_avoid`, the offerings, whether prices may be published, and the service radius.
- The voice files (`voice-dna.json`, `voice-style-guide.md`) and the StoryBrand brandscript.
- The page type's source data file. Read the interface or type definitions and 2 or 3 complete existing entries. Match their style: quote style, whether HTML links are allowed in a field, sentence length, and how the business name and phone are referenced.
- The page template (`src/pages/...` from the type's `routes`). Check which fields render where, and which are plain text and which are HTML.
- The research files (`knowledge/research/`). Reuse what's there before researching again.

## Stage 2: Research

Follow the type's `research` recipe from the scan JSON. These are the tools for each job:

| Need | Tool |
|---|---|
| Keyword volume, difficulty, related keywords | OpenSEO `research_keywords`, `get_keyword_metrics` |
| Organic SERP and People Also Ask | OpenSEO `get_serp_results` |
| Local pack and map competitors | OpenSEO `get_local_serp_results`, `search_local_businesses` |
| Competitor page outlines (H2s, topics covered) | Firecrawl `firecrawl_scrape` on the top 3 organic URLs, using `formats: ["markdown"]` and `onlyMainContent` |
| City facts: population, ZIP codes, county, history, landmarks | Firecrawl `firecrawl_search`, then scrape the primary source (Census QuickFacts or Census Reporter, the city or county website, SCDOT, Wikipedia only as a lead to a primary source) |

### Backup when Firecrawl isn't working

Firecrawl is the first choice. Switch to the backup tools when a Firecrawl call does any of these:

- returns an error, times out, or says credits or the daily limit ran out
- returns an empty page, a login or captcha wall, or content that is clearly not the page asked for
- is not available in the session at all

| Firecrawl tool | Backup |
|---|---|
| `firecrawl_scrape` (read one page) | `WebFetch` on the same URL, with a prompt that asks for exactly what is needed (for example "list every H2 and H3 heading in order" or "give the population, the year, and the table it came from") |
| `firecrawl_search` (find pages) | `WebSearch` with the same query, then `WebFetch` on the results worth reading |

Rules for the backup:

1. Try Firecrawl once per URL. If it fails, go to WebFetch for that URL. Don't retry Firecrawl on the same URL.
2. If Firecrawl fails for a credit or limit reason, or fails on 2 URLs in a row, stop calling it and use the backup tools for the rest of the run.
3. WebFetch returns a summary of the page, not the full text. Ask for specific facts and for the exact figure as written on the page. Don't quote wording from a WebFetch result as if it were the page's own words.
4. If WebFetch also fails for a URL (blocked, redirected to another host, empty), try one other source for the same fact. If that fails too, record the fact as "Not found". Never fill it in from memory.
5. In the research file and the draft's Sources list, note which tool retrieved each fact, for example `(via WebFetch)`.
6. In the final report, say whether the backup was used and for which pages, so the user knows if Firecrawl needs attention.

OpenSEO has no backup for keyword metrics. If OpenSEO is down, use WebSearch to read the SERP and PAA by hand, leave volume and difficulty as "Not available", and say so in the brief.

The recipe for each page type:

- **home:** The primary keyword is `{service category} {home city} {state}`. Get metrics, related keywords, the top 10 results plus the local pack, PAA, and the H2 outline of the top 3 pages. Output a brief covering intent, the subtopics competitors cover that this site doesn't, entities to mention, and the title and meta angle.
- **service:** Research `{service} near me` and `{service} {home city} {state}`. Use the same SERP and PAA analysis. Look for depth topics such as equipment, process, edge cases and cost factors. FAQs come from PAA.
- **city:** Gather population with year and source, ZIP codes, county, distance and drive time from the business base, the main roads and exits through town, and one real landmark with sourced history. Also check the `{service category} {city} {state}` SERP and local pack.
- **highway:** Find the exits inside the service radius and the town at each exit, plus AADT and crash data if available. Note the state's rules on disabled vehicles and shoulder stops.
- **combo:** Reuse the city research. Add only what makes this service specific to this town, such as the road where these calls happen or the nearest impound lot or shop. The goal is a unique direct answer for the page.
- **blog:** Look for keyword gaps and PAA questions that no existing post or service page targets. Check for cannibalization against the scan's existing titles before choosing a topic.
- **static:** For About, use the business profile and voice files, and add no new claims. For FAQ, use PAA de-duplicated against the service FAQs.

**Credits:** OpenSEO charges credits. A batch of 5 pages usually needs fewer than 1,000. If a plan would go over 2,000 credits, ask first.

**Record every fact.** Before you use a fact in copy, add it to the research file with its source URL and the date you retrieved it. City facts go in the existing research file, or in `knowledge/research/{slug}.md` if the site has none, under a `### {City}` heading. That heading is what makes the scanner's research check pass. If a fact can't be verified, write "Not found" and leave it out of the copy. Never estimate a population, a distance or a date to fill a gap.

## Stage 3: Draft

Write one draft per page to `<project>/seed-drafts/{type}/{id}.md`, using this structure:

~~~markdown
# {Page label}  ({url})

## Brief
- Target keyword: … (volume, KD)
- Secondary: …
- Intent: …
- Competitors cover / we add: …
- PAA used: …

## Fields
```json
{ "description": "…", "directAnswer": "…", "faqs": [{ "question": "…", "answer": "…" }] }
```

## Sources
- population 4,538: Census QuickFacts, retrieved 2026-11-16, <url>
~~~

Use the field paths from the scan exactly. In normal mode, include only the fields being filled. Write values in the shape the TypeScript interface expects.

Writing rules, all mandatory:

1. **Truth:** Every local fact must trace to the Sources list. Never make up reviews, testimonials, ratings, years in business, fleet size, licenses or statistics. Respect `claims_to_avoid` word for word. Don't post prices unless the business profile allows it.
2. **Voice:** Follow the voice files. Write plainly and concretely. Don't use filler phrases such as "look no further", "in today's fast-paced world", "we pride ourselves", "top-notch", "seamless", or "your trusted partner".
3. **SEO placement:**
   - Put the target keyword in the title, the H1 or SEO h1, and the first 100 words.
   - Titles are 50 to 60 characters, including whatever the template appends.
   - Meta descriptions are 70 to 160 characters.
   - `directAnswer` should be 40 to 60 words and answer the query in its first sentence, so it can be quoted in AI answers.
   - FAQ answers are 40 to 80 words, with questions taken from PAA.
4. **Uniqueness:** City descriptions, direct answers and intros must not reuse sentences from sibling pages. Check them against other entries in the same data file. Combo direct answers must differ across the cities for the same service.
5. **Internal links:** Only add links where the field already allows HTML (follow the existing entries). Only link to URLs that appear in `_scan.json`. Use descriptive anchor text, and use at most 2 links per field.
6. **Structure:** Match the config. For example, `processSteps` has exactly 4 entries, a city needs at least 3 `nearby` slugs that exist as areas, and FAQ sections use the site's existing accordion component (`SeoFaq`). Never hand-write FAQ markup.
7. **Images:** Don't generate or invent image paths. If an image is missing, list it in the summary for the user.

After drafting, show a short table with each page, the fields drafted, the target keyword, and any facts marked "Not found". Then:
- With `--apply`, go straight to Stage 4.
- Otherwise, ask with AskUserQuestion: apply all, apply some, or stop so the user can edit the drafts first.

## Stage 4: Apply and verify

1. Apply each draft's fields to the source file with Edit.
   - Insert new keys next to related keys, following the interface order.
   - Keep the file's existing quote style, indentation and comments.
   - Without `--refresh`, never overwrite a field that already has non-empty, non-placeholder content.
   - Blog posts are new `.md` files whose frontmatter matches `src/content.config.ts`.
2. Run `npm run build`. If it fails, fix the data, not the template, and rebuild.
3. Re-run the scanner with `--page` for each seeded page and confirm the gaps are closed.
4. If `<project>/scripts/seo-checks.config.mjs` exists, run the four seo-checks (`check-metadata-lengths`, `check-page-uniqueness`, `check-word-count`, `check-intro-uniqueness`). Fix anything the new content broke.
5. Commit in the project repo with a message like `content: seed {type} pages ({ids})`. Include the data files, the research file updates and the drafts. Don't push.
6. Report a before-and-after scan summary for the seeded pages. Say what was left out and why: missing images, unverifiable facts, and pages remaining in the batch.
