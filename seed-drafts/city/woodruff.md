# Woodruff  (/service-areas/woodruff/)

## Brief
- Target keyword: tree service woodruff sc (10/mo, playbook.md)
- Gaps fixed: sections 1 (want 2+), geography 32 words (want 40+), faqs 2 (want 3+), no research profile
- We add: verified geography (southwestern Spartanburg County, US 221 / SC 101 / SC 146 as Main Street, SC 146 = Woodruff Road), a section on mature trees on larger lots, a third FAQ

## Fields

`geography` (replace):
```json
"Woodruff is in the southwestern part of Spartanburg County, about 22 miles from downtown Greenville. US 221, SC 101, and SC 146 come together in town and run through downtown as Main Street. SC 146 is the same road Greenville drivers know as Woodruff Road. Call before you book so we can confirm the crew can reach your address."
```

`sections` (append):
```json
{
  "heading": "Mature trees on *larger lots*",
  "paragraphs": ["Bigger yards often mean bigger trees, set farther from the house but sometimes close to a shed, fence, or driveway. We look at each one on the visit and explain whether it needs a trim, a removal, or no work at all for now."],
  "subsections": [{
    "heading": "Planning one trip for several trees",
    "paragraphs": ["Because Woodruff is at the edge of our area, it often makes sense to handle several trees in one visit. List everything you want looked at when you call, and we will put it all on one written quote."]
  }]
}
```

`faqs` (append):
```json
{ "q": "Do you grind stumps in Woodruff?", "a": "Yes. Stump grinding can go on the same written quote as a removal, or be quoted on its own after we confirm we can reach your address." }
```

## Sources
See knowledge/research/woodruff.md (Wikipedia, AARoads wiki, CorcoHighways, playbook.md; via WebSearch, retrieved 2026-11-16).
