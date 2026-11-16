# Five Forks  (/service-areas/five-forks/)

## Brief
- Target keyword: tree service five forks sc (volume not in playbook table)
- Gaps fixed: geography 28 words (want 40+), faqs 2 (want 3+), no research profile
- We add: verified geography (eastern Greenville County, north of Simpsonville, name origin, Woodruff Road), a sub-section on older trees, a third FAQ

## Fields

`geography` (replace):
```json
"Five Forks is an unincorporated community in eastern Greenville County, north of Simpsonville and northeast of Mauldin. The name comes from five roads that meet there, and Woodruff Road is its main shopping corridor. Homes here sit on a mix of older wooded lots and newer subdivisions."
```

`sections[0].subsections` (add):
```json
[{
  "heading": "Older trees on wooded lots",
  "paragraphs": ["Older lots in Five Forks often have tall trees that were there long before the house. We check for dead limbs, decay at the base, and lean toward the roof, then tell you whether a trim will do or the tree needs to come down."]
}]
```

`faqs` (append):
```json
{ "q": "Can you grind a stump in Five Forks after a removal?", "a": "Yes. We can grind the stump in the same visit as the removal or come back for it on its own. The written quote lists the stump work so you can see it separately." }
```

## Sources
See knowledge/research/five-forks.md (Wikipedia, Roadside Thoughts, Greenville County Five Forks Area Plan; all via WebSearch, retrieved 2026-11-16).
