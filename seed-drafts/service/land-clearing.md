# Land Clearing  (/services/land-clearing/)

## Brief
- Target keyword: land clearing greenville sc (40/mo, playbook.md)
- Gaps fixed: faqs 3 (want 4+). Page is also thin by words (343 in main, floor 900).
- We add: permit and stormwater rules to check, burning rules, mulching vs traditional clearing, two FAQs
- PAA: not pulled. OpenSEO not run (no project for this site); Firecrawl out of credits.

## Fields

`sections` (append two):
```json
[
  {
    "heading": "Permits and *rules* to check first",
    "paragraphs": ["Clearing land can come with permit and stormwater rules. They depend on how much ground is disturbed, where the lot is, and what you plan to build. We cannot tell you what applies to your lot, so check with the county or town before work starts."],
    "subsections": [
      { "heading": "Greenville County stormwater rules", "paragraphs": ["In unincorporated Greenville County, stormwater and erosion rules depend on how much ground is disturbed. Disturbing one acre or more on a house lot generally calls for a Land Disturbance (Grading) Permit, and smaller sites may need a simplified erosion and sediment plan. Simpsonville, Mauldin, Travelers Rest, and Fountain Inn take part in the county program. Confirm the current limits with the county Land Development Division."] },
      { "heading": "Outside Greenville County", "paragraphs": ["Easley, Pickens, Powdersville, Woodruff, and part of Greer sit in other counties with their own rules. Tell us your address and we will share what we know, but your county or town makes the final call."] },
      { "heading": "Burning brush", "paragraphs": ["South Carolina requires notice to the Forestry Commission before many land-clearing burns, and cities and counties can set stricter limits. Ask us early how the brush will be handled, so the written quote says what is planned."] }
    ]
  },
  {
    "heading": "Mulching or *traditional clearing*",
    "paragraphs": ["Two methods are common. Forestry mulching uses one machine to grind brush and small trees into mulch that stays on the ground. Traditional clearing uses heavy equipment to push, pile, and haul trees, brush, and stumps."],
    "subsections": [
      { "heading": "When mulching fits", "paragraphs": ["Mulching disturbs the soil less and leaves a layer of mulch behind, with no hauling. It suits brush and small trees on land you want to replant or leave open."] },
      { "heading": "When traditional clearing fits", "paragraphs": ["Mulching generally leaves stumps and roots in the ground. If a house, slab, or driveway will go on the spot, stumps can rot and settle later, so removing them first matters. We will tell you on the visit which method fits your plans."] }
    ]
  }
]
```

`faqs` (append two):
```json
[
  { "q": "Does forestry mulching remove the stumps?", "a": "Generally no. Mulching grinds brush and small trees above ground, and the stumps and roots usually stay. If you plan to build on the spot, we will talk through removing them first." },
  { "q": "Can you burn the brush after clearing?", "a": "It depends on your lot and the rules where you live. South Carolina requires notice to the Forestry Commission before many land-clearing burns, and local rules can be stricter. Ask us before the work starts, and the written quote will say how the brush is handled." }
]
```

## Sources
See knowledge/research/service-land-clearing.md (Greenville County stormwater manual and erosion standard, SC Regulation 61-62.2, Virginia Tech Extension; all via WebSearch, retrieved 2026-11-16).
