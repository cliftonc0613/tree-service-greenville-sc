---
description: Generate the service-area county map (SVG + countyPaths.ts) for an Astro site, building the config from the site's own service-area data
argument-hint: "[--project <path>] [--regenerate] [--no-component]"
---

# /county-map

Build the interactive service-area county map for a site. The generator (`generate-county-map.mjs`) turns US Census county outlines and a list of city coordinates into an SVG and a `countyPaths.ts` data file. The coordinates are already in the site's service-area data, so this command builds the config from that data instead of asking for it.

Arguments: `$ARGUMENTS`

- `--project <path>`: the site root. Defaults to the current directory.
- `--regenerate`: re-run the generator with the existing config, without rebuilding the config from site data. Use this after you edit the config by hand.
- `--no-component`: only generate the data and the SVG. Don't create or edit an Astro component.

## Stage 0: Find the project and the generator

1. Confirm `package.json` and `src/data/` exist under the project root.
2. Find the generator: `<project>/scripts/generate-county-map.mjs`. If it's missing, run `install.sh <project> --county-map-only` from `/Users/cliftoncanady/web-apps/Yanir-websites/shared-scripts`.
3. Check for `<project>/scripts/county-map.config.json`.
   - With `--regenerate` and an existing config, go to Stage 3.
   - If the config exists but was copied from the example (it still lists Oconee or Pickens and the project isn't in that area), treat it as a starter and rebuild it in Stage 1. Never keep another site's counties.

## Stage 1: Read the site's service areas

1. Read `src/data/serviceAreas.ts` (or the site's equivalent) and `src/data/business.ts`. Use the project's esbuild to load them, the way `seed/core.mjs` `loadTs()` does, because the data files use extensionless imports.
2. For each area (skip highways, which have `population: 0` and no real town), collect `name`, `county`, `lat` and `lng`.
3. Work out the state and the counties:
   - State: take `business.address.stateCode` and map it to the 2-digit FIPS code (SC = `45`, NC = `37`, GA = `13`, TN = `47`, VA = `51`, AL = `01`, FL = `12`, TX = `48`).
   - Counties: split the `county` field on "and" and commas, and drop the word "County". For example, "Greenville and Spartanburg Counties" becomes Greenville and Spartanburg. Include every county that holds a service area.
4. Add the neighboring counties that sit between or around the service area, if the map would look like a disconnected island without them. Ask the user before adding any.

## Stage 2: Write the config

Write `scripts/county-map.config.json` using the shape in `county-map.config.example.json`.

- `state`, `counties` and `order`: from Stage 1.
- `cities`: group the areas by county. The keys are lowercase county names. Each entry is `{ "name", "lat", "lng" }`. Use the coordinates from the data file as they are. Never estimate one. If an area has no coordinates, leave it out and report it.
- Colors (`fills`, `stroke`, `labelColor`): read the site's CSS variables in `src/styles/global.css` and use the brand colors. Per the user's standing rule, colors come from variables, so if the generator can only take hex values, use the values of the brand variables and say which variables they came from.
- `ariaLabel` and `title`: "Interactive service area map — {region}" and "Service Area: {region}", where the region is the business city's county or the metro name used on the site.
- `outSvg`: `public/images/service-area-map.svg`. `outTs`: `src/data/countyPaths.ts`. Use the site's real folders, not the example's `site/` prefix.
- `labelOverrides`: leave empty at first. Add overrides in Stage 4 only if a label looks wrong.

Show the user the counties, the number of cities per county, and the paths. Ask for confirmation before running the generator, because it downloads the Census GeoJSON.

## Stage 3: Run the generator

```bash
node scripts/generate-county-map.mjs --config scripts/county-map.config.json
```

It needs network access for the GeoJSON. If the download fails, retry once. If it fails again, say so and stop. Don't hand-write SVG paths.

Confirm the output:
- Both output files exist and are not empty.
- Every county in the config has a path in `countyPaths.ts`. If a county name is missing, the name probably doesn't match the GeoJSON `NAME` value, so check the spelling.
- Every city in the config produced a dot. Report any that fell outside the map's bounds.

## Stage 4: Component and placement

The generator only produces data. Skip this stage with `--no-component`.

1. Look for an existing map component in `src/components/` (a file with "map" in its name that imports `countyPaths`). If one exists, leave it alone and check that it still imports `COUNTY_PATHS` and `SVG_VIEWBOX` correctly.
2. If none exists, offer to create `src/components/CountyMap.astro`. It should:
   - import `COUNTY_PATHS` and `SVG_VIEWBOX` from `countyPaths.ts` and render the paths, labels and city dots
   - take its colors from CSS variables, with no hardcoded hex values in the markup
   - give each city dot a link to its `/service-areas/{slug}/` page when the area has one
   - include the `ariaLabel` and `title` as an accessible name
3. Offer to place it on the service-areas hub page (`src/pages/service-areas/index.astro`) and the homepage areas section. Put it only where the user says.
4. Run `npm run build`. If it fails, fix the component, not the generated files.

## Stage 5: Report

Report: the counties included, the number of cities plotted, the files written, whether a component was created or reused, and anything left out (cities without coordinates, labels that may need an override). Commit in the project repo with the message `feat: add service-area county map`. Don't push unless the user asks.

## Rules

- The generated files are marked as generated. Don't hand-edit them. Change the config and regenerate.
- Never invent coordinates, counties or city names.
- Never keep another site's counties from the example config.
