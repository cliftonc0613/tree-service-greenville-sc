# Taylors  (/service-areas/taylors/)

## Brief
- Target keyword: tree service taylors sc (210/mo, playbook.md, Nov 11 2026)
- Intent: homeowner wants trimming or removal and a written quote
- Gaps fixed: geography 39 words (want 40+), no research profile
- We add: verified geography (US 29, Enoree River, Taylors Mill) and detail on seasonal trimming and cleanup
- PAA: not pulled (OpenSEO not run; Firecrawl out of credits)

## Fields

`geography` (replace):
```json
"Taylors sits along Wade Hampton Boulevard (US 29) northeast of Greenville, with the Enoree River nearby. Taylors Mill, the former Southern Bleachery that opened in the 1920s, still stands near the center of town. Lots near the river and along the older roads often have large hardwoods and pines that need a regular look."
```

`sections[1].subsections` (add to "Planning ahead for routine trimming"):
```json
[{
  "heading": "What a seasonal visit looks for",
  "paragraphs": ["A regular look catches small problems before they turn into a removal. On each visit we walk the tree and note anything that has changed since the last time."],
  "bullets": ["Dead wood high in the canopy", "Limbs growing toward the roof or a power line", "Damage after heavy wind or ice", "Pines dropping limbs onto the yard or driveway"]
}]
```

`sections[2].subsections` (add to "Clean up before we leave"):
```json
[{
  "heading": "Brush, wood, and the work area",
  "paragraphs": ["Ask us during the estimate what you want done with the wood. Some homeowners keep logs for firewood, and others want everything hauled away. The written quote spells out which one you are getting."]
}]
```

## Sources
- US 29 = Wade Hampton Blvd through Taylors: Wikipedia and AARoads, retrieved 2026-11-16 (via WebSearch). See knowledge/research/taylors.md.
- Enoree River crossing on US 29: SCDOT project portal (via WebSearch).
- Taylors Mill = former Southern Bleachery, 1920s, National Register: SC Dept. of Archives and History (via WebSearch).
