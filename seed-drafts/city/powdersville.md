# Powdersville  (/service-areas/powdersville/)

## Brief
- Target keyword: tree service powdersville sc (volume not in playbook table)
- Gaps fixed: sections 1 (want 2+), geography 36 words (want 40+), faqs 2 (want 3+), no research profile
- Corrects: drops the unverified "near Interstate 85" claim
- We add: verified geography (northern corner of Anderson County, Saluda River and Pickens County lines), a section on how a visit works, a third FAQ

## Fields

`geography` (replace):
```json
"Powdersville is an unincorporated community in the northern corner of Anderson County. The Saluda River runs along its northeast edge and forms the Greenville County line, and the Pickens County line borders it to the northwest. Because it sits outside Greenville County, call us with your address so we can confirm the visit before you book."
```

`sections` (append):
```json
{
  "heading": "How a *Powdersville* visit works",
  "paragraphs": ["Call or send a request with your address first, so we can confirm we cover it. Then we set up a free site visit, look at each tree and what is near it, and send a written quote."],
  "subsections": [{
    "heading": "What we look at on the visit",
    "bullets": ["How close the tree sits to the house, a fence, or lines", "Signs of decay, cracks, or dead wood", "Access for the crew and equipment", "Whether you want the stump ground"],
    "paragraphs": ["On the visit we check:"]
  }]
}
```

`faqs` (append):
```json
{ "q": "Can you grind a stump in Powdersville?", "a": "Yes. Once we confirm your address is in our coverage, we can quote stump grinding with a removal or as its own job." }
```

## Sources
See knowledge/research/powdersville.md (Wikipedia, citypopulation.de; via WebSearch, retrieved 2026-11-16).
