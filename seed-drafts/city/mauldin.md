# Mauldin  (/service-areas/mauldin/)

## Brief
- Target keyword: tree service mauldin sc (volume not in playbook table)
- Intent: homeowner in a newer subdivision wants trimming or removal
- Gaps fixed: no research profile (geography already 40+ words)
- We add: verified road detail (Butler Road, Exit 34) and detail on young trees and stumps

## Fields

`geography` (replace):
```json
"Mauldin lies between Greenville and Simpsonville along Interstate 385. Butler Road runs from the city center on Main Street (US 276) out to the Exit 34 interchange. Lots range from newer subdivisions to larger wooded parcels on the edges of town, and the plan for each tree usually depends on how close it sits to the house."
```

`sections[0].subsections` (add to "Tree service for Mauldin homes"):
```json
[{
  "heading": "Shaping young trees in newer neighborhoods",
  "paragraphs": ["Young trees planted close to a house grow toward the roof and gutters. A light trim while the tree is small sets its shape and takes less off than heavy cuts would later on."]
}]
```

`sections[1].subsections` (add to "One written quote for the whole job"):
```json
[{
  "heading": "Removal and stump grinding together",
  "paragraphs": ["When a tree comes down, the stump is usually the next question. Grinding it in the same visit means one crew and one trip, and both jobs sit on one written quote."]
}]
```

## Sources
- I-385 between Greenville and Simpsonville; Butler Road from US 276 at the city center to Exit 34: AARoads I-385 South and Greenville County Schools directions, retrieved 2026-11-16 (via WebSearch). See knowledge/research/mauldin.md.
