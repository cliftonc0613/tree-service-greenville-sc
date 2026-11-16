---
description: Run the SEO build checks (metadata lengths, page uniqueness, word counts, combo intro uniqueness) on an Astro site and report failures with fixes
argument-hint: "[--project <path>] [--no-build] [--only lengths|unique|words|intros]"
---

# /seo-check

Run the four SEO validators from `shared-scripts/seo-checks/` against an Astro site, then explain each failure and fix it. The checks only read. The fixes go into the site's data files or templates, and only after the user agrees to them.

Arguments: `$ARGUMENTS`

- `--project <path>`: the site root. Defaults to the current directory.
- `--no-build`: skip `npm run build`. The two `dist/` checks then run against the existing build, and the report says so.
- `--only <name>`: run one check: `lengths`, `unique`, `words` or `intros`.

## Stage 0: Find the project

1. Confirm `package.json` and `src/pages/` exist under the project root. If not, stop and ask for the right path.
2. Find the config at `<project>/scripts/seo-checks.config.mjs`.
   - If it exists, go to Stage 1.
   - If it doesn't, go to Stage 0b.
3. Find the checks at `<project>/scripts/seo-checks/`. If they're missing, run `install.sh <project> --seo-checks-only` from `/Users/cliftoncanady/web-apps/Yanir-websites/shared-scripts` first.

### Stage 0b: Create the config

The example config (`seo-checks/seo-checks.config.example.mjs`) was written for another site. It imports `neighborhoods.ts`, which most sites don't have, and it hardcodes Palmetto's title logic. Don't copy it as-is. Write a new config that matches this site:

1. Read the project's `src/data/*.ts`, the page templates that build `<title>` and `<meta description>` (look for the `title` and `description` constants in `src/pages/**/*.astro`), and the `routes` in `scripts/seed/seed.config.mjs` if it exists.
2. Write `scripts/seo-checks.config.mjs` with:
   - `pageGroups()` that returns one entry per generated page, built with the same string logic the templates use. Include every page type the site generates.
   - `distDir`, `minWords` and `expectedCount` for `check-word-count`. Set `expectedCount` to the number of pages in the build.
   - `combos()`, `introPattern` and `validLink` only if the site has combo pages with intro paragraphs. Otherwise leave them out.
3. Load the `.ts` data files the way `seed/core.mjs` does, with `loadTs()` through the project's esbuild. Plain `import` of these files fails because the Astro data files use extensionless imports.
4. Tell the user what the config covers and what you couldn't map. Ask them to confirm the title and description templates before you run the checks. A wrong template makes every result wrong.

## Stage 1: Build (unless `--no-build`)

Run `npm run build` in the project. If it fails, stop. The `dist/` checks can't run on a broken build. Report the build error and don't continue to the other checks.

## Stage 2: Run the checks

Run each check with `--config` pointing at the project's config. Run them from the project root, and use the paths shown below.

```bash
node scripts/seo-checks/check-metadata-lengths.mjs --config scripts/seo-checks.config.mjs
node scripts/seo-checks/check-page-uniqueness.mjs   --config scripts/seo-checks.config.mjs
node scripts/seo-checks/check-word-count.mjs        --config scripts/seo-checks.config.mjs
node scripts/seo-checks/check-intro-uniqueness.mjs  --config scripts/seo-checks.config.mjs
```

- `lengths`: titles must be 50 to 60 characters and descriptions 70 to 160.
- `unique`: no two pages may share a title or description.
- `words`: every page in `distDir` must reach `minWords` in `<main>`.
- `intros`: combo-page intros must be unique and link to a sibling page.

Run them all, even if one fails, so the report is complete. With `--only`, run just that one. Save the output of each run.

If a check reports `expectedCount` mismatch or finds zero pages, treat it as a config problem, not a pass. The config is probably pointing at the wrong data or the build is missing pages.

## Stage 3: Report

Show one section per check:

```
lengths   FAIL  3 of 124 pages
  ✗ service-areas/una-sc  title 47 chars (want 50-60)
  ✗ ...
unique    PASS  124 titles, 124 descriptions
words     FAIL  2 pages under 900 words
  ✗ /services/motorcycle-towing/  470 words
intros    PASS
```

Then, for each failure, give a specific fix:

- **Title or description length:** where the length comes from. Say whether the fix belongs in the template (affects every page) or in the page's data (affects one page). Prefer the template when the same problem repeats across pages.
- **Duplicate titles or descriptions:** the pages that share the text, and a suggestion for a variable that makes them unique, such as the area name or a distinct service detail.
- **Thin pages:** which sections are short. Point to the fields that `/seed-page` would fill. Suggest running `/seed-page --type <type>`.
- **Duplicate combo intros:** the sentences that match across pages. Suggest a rewrite of the data that produces the sentence.

Don't change any file in this stage. End with a count of total failures and ask which fixes to apply.

## Stage 4: Apply (only if the user asks)

1. Make the agreed changes with Edit. Don't touch files outside those fixes.
2. Re-run the failing checks. Run `npm run build` first if a `dist/` check failed.
3. Report the before and after counts for each check.
4. Don't commit unless the user asks.

## Rules

- A check that can't run is a failure, not a pass.
- Don't change the check thresholds to make a failure go away. If a threshold seems wrong for this site, say so and ask.
- Don't invent page titles or descriptions to fill a gap. Use the templates the site already has.
