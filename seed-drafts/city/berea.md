# Berea  (/service-areas/berea/)

## Brief
- Target keyword: tree service berea sc (volume not in playbook table)
- Gaps fixed: sections 1 (want 2+), geography 30 words (want 40+), faqs 2 (want 3+), no research profile
- We add: verified geography (northwest of downtown Greenville, Westcliffe and White Horse Heights), a section on trees grown close to the house, a third FAQ

## Fields

`geography` (replace):
```json
"Berea is an unincorporated community in Greenville County, northwest of downtown Greenville. It takes in neighborhoods such as Westcliffe and White Horse Heights. Its wooded parcels and established yards mean the right plan for each tree often depends on the lot, the access, and how close the tree has grown to the house."
```

`sections` (append):
```json
{
  "heading": "Trees that have grown *close to the house*",
  "paragraphs": ["A tree planted decades ago can end up with limbs over the roof and roots near the foundation. We look at how close it sits and what it could hit, then explain whether trimming buys time or removal is the safer call."],
  "subsections": [{
    "heading": "Clearing part of a wooded parcel",
    "paragraphs": ["If you want part of a wooded lot opened up for a yard or a project, walk it with us and point out the trees you want to keep. We quote around them and list how the brush and wood will be handled."]
  }]
}
```

`faqs` (append):
```json
{ "q": "How do I request an estimate in Berea?", "a": "Call us or use the contact page and tell us where the tree is and what it is near. We set up a free site visit and send the quote in writing." }
```

## Sources
See knowledge/research/berea.md (Wikipedia, citypopulation.de, Roadside Thoughts, HometownLocator; via WebSearch, retrieved 2026-11-16).
