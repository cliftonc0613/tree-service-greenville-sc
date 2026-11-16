# Wade Hampton  (/service-areas/wade-hampton/)

## Brief
- Target keyword: tree service wade hampton sc (volume not in playbook table)
- Gaps fixed: sections 1 (want 2+), geography 24 words (want 40+), faqs 2 (want 3+), no research profile
- Corrects: drops "We serve it from the same crews that work across Greenville" (a crew claim, not geography)
- We add: verified geography (central Greenville County, named for Wade Hampton, Greenville to the southwest, Taylors to the northeast, US 29), a section on when trimming is enough, a third FAQ

## Fields

`geography` (replace):
```json
"Wade Hampton is an unincorporated community in central Greenville County, named for the Civil War general and South Carolina governor. The city of Greenville borders it to the southwest and Taylors lies to the northeast, with Wade Hampton Boulevard (US 29) running through both. Older streets near the boulevard often have mature shade trees close to the house."
```

`sections` (append):
```json
{
  "heading": "When trimming is *enough*",
  "paragraphs": ["Not every big tree needs to come down. Thinning the canopy, lifting low limbs, and cutting out dead wood can make a healthy tree safer to live with. We tell you plainly when that is the better choice."],
  "subsections": [{
    "heading": "Signs a tree may need more than a trim",
    "paragraphs": ["These are worth a closer look on the site visit:"],
    "bullets": ["Large dead limbs or bare sections of canopy", "Cracks in the trunk or a split at the main fork", "Mushrooms or soft wood at the base", "A new lean after a storm"]
  }]
}
```

`faqs` (append):
```json
{ "q": "Do you grind stumps in Wade Hampton?", "a": "Yes. We can grind a stump in the same visit as a removal or as a separate job. Ask for it on your request and it will show as its own line on the written quote." }
```

## Sources
See knowledge/research/wade-hampton.md and taylors.md (Wikipedia, AARoads; via WebSearch, retrieved 2026-11-16).
