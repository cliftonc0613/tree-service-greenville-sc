# Fountain Inn  (/service-areas/fountain-inn/)

## Brief
- Target keyword: tree service fountain inn sc (volume not in playbook table)
- Intent: homeowner wants trimming, removal, or stump grinding
- Gaps fixed: sections 1 (want 2+), geography 37 words (want 40+), no research profile
- Corrects: old copy said Fountain Inn is "along US 276". It is not; SC 14 carries the old US 276 route, and I-385 serves the town at Exit 23.

## Fields

`geography` (replace):
```json
"Fountain Inn is split between Greenville and Laurens counties, southeast of Simpsonville. Interstate 385 serves the town at Exit 23, and SC 14 runs through it on the old US 276 route toward Laurens. Work here ranges from yard trees beside the house to wooded lots at the edge of town, so the site visit matters."
```

`sections` (append a second section):
```json
{
  "heading": "A written quote *before any cutting*",
  "paragraphs": ["Every job starts with a free site visit. We look at the tree, what sits near it, and how a crew can reach it. Then we put the method, the cleanup, and the price in writing so you can decide without pressure."],
  "subsections": [{
    "heading": "What the quote lists",
    "paragraphs": ["A Fountain Inn quote covers the whole job, not only the cutting:"],
    "bullets": ["Each tree and the work planned for it", "How the tree will be trimmed or taken down", "What happens to the brush, wood, and any grindings", "Stump grinding, if you ask for it"]
  }]
}
```

## Sources
- Greenville and Laurens counties: Wikipedia Fountain Inn, SC, and Census QuickFacts, retrieved 2026-11-16 (via WebSearch).
- Southeast of Simpsonville: Wikipedia Simpsonville, SC (via WebSearch).
- I-385 Exit 23: Cross Country Roads photo log (via WebSearch). Confirm with SCDOT.
- SC 14 on the old US 276 route: AARoads wiki US 276 (via WebSearch).
- See knowledge/research/fountain-inn.md.
