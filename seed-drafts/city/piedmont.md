# Piedmont  (/service-areas/piedmont/)

## Brief
- Target keyword: tree service piedmont sc (10/mo, playbook.md)
- Gaps fixed: sections 1 (want 2+), geography 25 words (want 40+), faqs 2 (want 3+), no research profile
- Corrects: Piedmont is split between Anderson and Greenville counties, not Anderson only. This touches the existing `county` field and the existing county FAQ answer (outside the scan's gap list, but factually wrong).
- We add: verified geography (Saluda River, two counties, 1873 mill), a section on older trees beside older homes, a third FAQ

## Fields

`county` (correct):
```json
"Anderson and Greenville counties"
```

`geography` (replace):
```json
"Piedmont is an unincorporated community on the Saluda River, split between Anderson and Greenville counties, about 11 miles from downtown Greenville. It grew up around the Piedmont Manufacturing Company, which built its first textile mill at the river shoals in 1873. Call us with your address so we can confirm the visit before you book."
```

`faqs[1].a` (correct "Is Piedmont in Greenville County?"):
```json
"Partly. Piedmont sits on the Saluda River, and the community is split between Anderson and Greenville counties. Call us with your address and we will confirm the visit."
```

`sections` (append):
```json
{
  "heading": "Older trees beside *older homes*",
  "paragraphs": ["Trees around older Piedmont houses have had decades to grow. Roots can reach under walkways, and limbs can spread over the roof. We look at both on the site visit and tell you what each tree needs."],
  "subsections": [{
    "heading": "Trimming that keeps the roof clear",
    "paragraphs": ["Limbs that rest on shingles or fill gutters wear a roof down over time. We cut them back to a healthy point on the tree so they stay clear longer."]
  }]
}
```

`faqs` (append):
```json
{ "q": "What should I tell you when I call about a Piedmont tree?", "a": "Give us your address first so we can confirm coverage. Then tell us where the tree is, what it is near, and whether it is leaning, cracked, or dropping limbs. That helps us plan the site visit." }
```

## Sources
See knowledge/research/piedmont.md (Wikipedia, NPS, playbook.md; via WebSearch, retrieved 2026-11-16).
