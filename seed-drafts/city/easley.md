# Easley  (/service-areas/easley/)

## Brief
- Target keyword: tree service easley sc / tree removal easley sc (70/mo each, playbook.md)
- Intent: homeowner on a wooded lot wants removal or trimming
- Gaps fixed: geography 38 words (want 40+), no research profile
- We add: verified geography (Pickens County, Saluda River line on US 123) and detail on wooded lots and comparing quotes

## Fields

`geography` (replace):
```json
"Easley sits in Pickens County, west of the Saluda River, which marks the Greenville County line along US 123. Many properties here have a wooded backdrop, so tree work often involves both yard trees and trees near the edge of the lot. On those lots, the way a crew reaches the tree can shape the whole plan."
```

`sections[0].subsections` (add to "Trimming and removal in Easley"):
```json
[{
  "heading": "Working on wooded lots",
  "paragraphs": ["A tree at the edge of the woods can lean toward the yard as it reaches for light. Those trees are often harder to reach than a yard tree, with brush, slopes, or other trunks in the way. We walk the access on the site visit and plan the cuts around what the crew can safely get to."]
}]
```

`sections[1].subsections` (add to "Quotes that are easy to compare"):
```json
[{
  "heading": "What to check on any tree quote",
  "paragraphs": ["When you line up two quotes side by side, look for these items. If one quote leaves something out, ask before you choose."],
  "bullets": ["Which trees are included and what is done to each", "How the tree comes down", "Whether brush, wood, and cleanup are included", "Stump grinding, if you want it", "Any crane work"]
}]
```

## Sources
- Pickens County; US 123 enters Greenville County at the Saluda River: AARoads US 123 North and Wikipedia US 123, retrieved 2026-11-16 (via WebSearch). See knowledge/research/easley.md.
