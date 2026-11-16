# Travelers Rest  (/service-areas/travelers-rest/)

## Brief
- Target keyword: tree service travelers rest sc (volume not in playbook table)
- Gaps fixed: sections 1 (want 2+), geography 36 words (want 40+), no research profile
- We add: verified geography (northernmost city, US 25, US 276 as Main Street, Swamp Rabbit Trail) and a section on sloped and wooded lots

## Fields

`geography` (replace):
```json
"Travelers Rest is the northernmost city in Greenville County, about 10 miles north of Greenville. US 25 passes along the east side of town on its way toward the Blue Ridge, US 276 becomes Main Street, and the Swamp Rabbit Trail runs north from Greenville into town. Many lots here are wooded or sloped, and that often shapes the plan for each tree."
```

`sections` (append):
```json
{
  "heading": "Sloped and *wooded lots*",
  "paragraphs": ["A tree on a slope does not always fall the way it leans, and a crew needs safe footing to work. On the site visit we check the grade, the ground, and the route in for equipment before we settle on a method."],
  "subsections": [{
    "heading": "When a tree sits above the house",
    "paragraphs": ["Trees on the uphill side of a home get a closer look, because a limb or trunk that drops can roll or slide toward the house. We plan those cuts in smaller pieces and explain the method on the written quote."]
  }]
}
```

## Sources
See knowledge/research/travelers-rest.md (Wikipedia, AARoads, TrailLink, VisitGreenvilleSC; all via WebSearch, retrieved 2026-11-16).
