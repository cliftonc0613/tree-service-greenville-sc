---
description: Find placeholder contact details and leftover TODO text on an Astro site, then replace them everywhere once the real values are known
argument-hint: "[--project <path>] [--report-only] [--phone <number>] [--legal-name <name>]"
---

# /placeholder-audit

Rank-and-rent sites are built before the real business details exist, so fake values end up copied across the data files, blog posts and metadata. This command finds all of them, lists every location, and replaces them in one pass when the real values arrive.

Arguments: `$ARGUMENTS`

- `--project <path>`: the site root. Defaults to the current directory.
- `--report-only`: list the findings and stop. Don't ask for values or edit anything.
- `--phone`, `--legal-name`: real values given up front, so the command doesn't have to ask.

## Stage 1: Search

Search the project for the items below. Search `src/`, `public/`, `context/`, and the root config files. Skip `node_modules/`, `dist/`, `.astro/`, `_prior/`, `seed-drafts/`, and any `CLAUDE.md`. `knowledge/` is included only for the phone number check, and results there are reported but not edited.

| Item | What to look for |
|---|---|
| Fake phone number | Any number in the reserved fictional range 555-0100 to 555-0199, in every format: `(864) 555-0123`, `864-555-0123`, `864.555.0123`, `8645550123`, `+18645550123`, and `tel:` links. Also any phone that differs from `business.phone` in `src/data/business.ts`. |
| Unconfirmed legal name | A `TODO` or `unconfirmed` comment near `legalName` in the business data, or `legalName` equal to `name` when the profile says it was not confirmed. |
| Template tokens | `__UPPER_CASE__` tokens and `[insert ...]` text. |
| Leftover notes | `TODO`, `FIXME`, `TBD`, `lorem ipsum`. |
| Empty business fields | Empty strings in `business.ts` for `address.street`, `social.*`, and `email` set to an address on a domain the business doesn't own. |
| Placeholder schema data | A `sameAs` list, `aggregateRating` or review data built from values that don't exist yet. |
| Duplicated constants | A phone or business name typed as a literal in a file that should read it from `business.ts`. Example: `seoContent.ts` defines `PHONE` on its own because of a circular import. |

Do not treat these as placeholders:
- `/* __REVIEWS__ */` in the reviews array. That marker is intentional. Reviews must come from the client and are never invented.
- `yearEstablished`. Report it separately as something to confirm, not as a placeholder.

## Stage 2: Report

Group the findings by item. For each one, show the file, the line, and the matched text. Put the counts first.

```
Fake phone (864) 555-0123    31 locations in 20 files
  src/data/business.ts:60         phone, phoneHref
  src/data/seoContent.ts:12       PHONE constant (duplicate of business.phone)
  src/content/blog/...            17 posts
Legal name                   1  src/data/business.ts:59  TODO: confirm legal entity name
Empty fields                 5  social.facebook, instagram, google, yelp; address.street
```

Add a short note on which items block launch (fake phone, template tokens) and which are fine to leave (empty social links with no profile yet, since empty links render nothing and the schema leaves out `sameAs` when there are none).

With `--report-only`, stop here.

## Stage 3: Get the real values

Ask only for the values that have placeholder findings, using AskUserQuestion or plain questions. Collect:

- the real phone number (and confirm it's the number customers should call)
- the legal business name
- the street address, only if the business has a public one (a service-area business may leave it empty)
- social profile URLs, if they exist

Never guess a value, and never accept a fictional number. If the user doesn't have a value yet, skip that item and say it's still open.

## Stage 4: Replace

1. Replace the phone in every format, keeping the format each location already uses. For example, `(864) 555-0123` becomes `(864) 555-0199`, `+18645550123` becomes `+18645550199`, and a `tel:` link keeps its `tel:` prefix.
2. In `business.ts`, set `phone` and `phoneHref`. Where a file defines its own copy of the phone (like `PHONE` in `seoContent.ts`), keep the copy, update it, and mention that it can't import from `business.ts` because of the circular import.
3. Fill `legalName` and remove its TODO comment. Fill the other fields from Stage 3.
4. Don't touch the files in `knowledge/`. If a research file contains the old number, report it and leave it alone.
5. Don't touch `dist/`. It's rebuilt in the next step.

## Stage 5: Verify

1. Search again for the old phone in every format. The only matches left may be in `knowledge/` or other skipped folders. Report each one.
2. Run `npm run build`. If it fails, fix the cause and rebuild.
3. Search `dist/` for the old phone number. Any match means a page still renders it, so find the source and fix it.
4. Check that `public/llms.txt` and the structured data (`telephone` in the JSON-LD) use the new number.
5. Update the "Open items" lists in the project's `CLAUDE.md` and `SITE-STRUCTURE.md` if they mention the placeholder. Remove the item that's now done.
6. Commit in the project repo with a message like `content: replace placeholder phone and legal name`. Don't push unless the user asks.

## Rules

- Never invent a phone number, business name, address, review or social URL.
- Never change `/* __REVIEWS__ */`.
- Replace by exact match only. Don't do a broad regex replace on digits.
- If the real phone number is itself missing from `business.ts` after the change, stop and report it as a failure.
