# Pickens  (/service-areas/pickens/)

## Brief
- Target keyword: tree service pickens sc (10/mo, playbook.md)
- Gaps fixed: sections 1 (want 2+), geography 28 words (want 40+), faqs 2 (want 3+), no research profile
- We add: verified geography (county seat, Hagood Mill on US 178), a section on trees at the edge of the yard, a third FAQ

## Fields

`geography` (replace):
```json
"Pickens is the county seat of Pickens County, about 18 miles from downtown Greenville. Hagood Mill, a gristmill built in 1845, stands about 3 miles north of town on US 178. Give us your address when you call, and we will confirm the visit before you book."
```

`sections` (append):
```json
{
  "heading": "Trees at the *edge of the yard*",
  "paragraphs": ["On a wooded lot, the trees most likely to cause trouble are often the ones at the tree line, leaning toward the open yard or the house. We check those first and tell you which ones need attention now and which can wait."],
  "subsections": [{
    "heading": "Chips and wood on larger lots",
    "paragraphs": ["On a bigger property there may be room to leave chips along the tree line or stack wood for later. Tell us what you want, and the written quote will say what stays and what we haul off."]
  }]
}
```

`faqs` (append):
```json
{ "q": "Can you remove a dead tree on a wooded lot in Pickens?", "a": "Often, yes. Dead trees can drop limbs without warning, so we look at what the tree could hit and how a crew can reach it. Call with your address first so we can confirm coverage." }
```

## Sources
See knowledge/research/pickens.md (Wikipedia, SC Dept. of Archives and History, playbook.md; via WebSearch, retrieved 2026-11-16).
