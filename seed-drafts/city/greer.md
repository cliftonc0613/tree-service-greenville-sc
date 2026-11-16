# Greer  (/service-areas/greer/)

## Brief
- Target keyword: tree service greer sc (50/mo, playbook.md)
- Intent: homeowner wants one company for trims, removals, and stumps
- Gaps fixed: no research profile (geography already 40+ words, but contains an unsupported "former farmland" claim)
- We add: verified geography (two counties, 12 miles via US 29, GSP, BMW on Highway 101) and detail on crane removal

## Fields

`geography` (replace):
```json
"Greer is split between Greenville and Spartanburg counties, about 12 miles northeast of Greenville along US 29. Greenville-Spartanburg International Airport sits next to the city, and the BMW plant is on Highway 101 South. Neighborhoods range from older streets near downtown to newer subdivisions where young trees are still filling in."
```

`sections[1].subsections` (add to "One company for the whole yard"):
```json
[{
  "heading": "Crane removal when there is no room to work",
  "paragraphs": ["Some large trees stand where there is no safe place to drop even small pieces, such as between a house and a garage. A crane lets the crew lift sections up and over instead. Crane work is listed as its own line on the written quote so you can see what it adds."]
}]
```

## Sources
- Greenville and Spartanburg counties; 12 miles NE of Greenville via US 29: Wikipedia Greer, SC, retrieved 2026-11-16 (via WebSearch).
- GSP next to the city: City of Greer, Doing Business Here (via WebSearch).
- BMW plant at 1400 Highway 101 S: BMW Group Plant Spartanburg (via WebSearch).
- See knowledge/research/greer.md. "Former farmland" dropped: no source.
