# Piedmont  (/service-areas/piedmont/)

## Brief
- Target keyword: tree service piedmont sc (10/mo, playbook.md)
- Gaps: none required. Thin on tree content (566 words in main).
- We add: Saluda River trees (Piedmont Riverfront Park, wet ground), which county's rules apply, two FAQs
- Not used: Anderson County residential tree rules (not found), Helene debris (ended), any canopy figure

## Fields

`sections` (append two):
```json
[
  {
    "heading": "Trees along the *Saluda River*",
    "paragraphs": [
      "Piedmont sits on the Saluda River. Anderson County’s Piedmont Riverfront Park, a 21-acre park off River Road, has a kayak launch, a half-mile nature trail, and a picnic shelter. The county describes the site as river bluffs and protected wetlands where the Saluda meets Big Brushy Creek.",
      "Land near water means wet ground, and wet ground is hard on trees. When soil is saturated, water acts like a lubricant, so roots can slip when wind pushes on a heavy tree."
    ],
    "subsections": [
      { "heading": "What we check near the water", "paragraphs": ["On a lot near the river or a creek, we look at the slope, how wet the ground is, and how heavy the crown is. A big tree on soft ground gets a closer look than the same tree on dry, level ground."] }
    ]
  },
  {
    "heading": "Which *county’s rules* apply",
    "paragraphs": [
      "Piedmont is split between Anderson and Greenville counties, so the rules depend on which side of the line your lot is on. Greenville County’s tree preservation rules, as drafted, are aimed at new development that needs a grading permit.",
      "Check with the Anderson County or Greenville County planning office before removing a tree, and check your HOA rules if you have an HOA. Tell us what you find and we will plan around it."
    ]
  }
]
```

`faqs` (append two):
```json
[
  { "q": "Which county's rules apply to a tree on my Piedmont lot?", "a": "Piedmont is split between Anderson and Greenville counties, so it depends on which side of the line your lot is on. Greenville County's tree preservation rules, as drafted, are aimed at new development that needs a grading permit. Check with your county planning office before work starts." },
  { "q": "Do trees near the Saluda River need special care?", "a": "Wet ground and sloped banks make roots less secure. In saturated soil, water acts like a lubricant, so a heavy tree can slip when wind pushes on it. We look at the slope, the soil, and the crown before we plan the work." }
]
```

## Sources
See knowledge/research/piedmont.md, "Trees, rules, and the river" (Anderson County park announcement via WebFetch; Greenville County draft via WebSearch; Clemson and SC Public Radio for the soil fact). The FAQ answers use ASCII apostrophes in the draft and curly ones in the data file.
