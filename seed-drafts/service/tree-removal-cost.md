# Tree Removal Cost  (/services/tree-removal-cost/)

## Brief
- Target keyword: tree removal cost greenville sc
- Gaps fixed: faqs 3 (want 4+). Thin by words (420 in main, floor 900).
- We add: what a written quote should list, how homeowners insurance treats removal, two FAQs. **No prices added.**
- PAA: not pulled. OpenSEO not run; Firecrawl out of credits.

## Fields

`sections` (append two):
```json
[
  {
    "heading": "What a *written quote* should list",
    "paragraphs": ["A fair quote names what you are paying for. Look for these items, and ask about any that are missing:"],
    "bullets": ["Each tree and the work planned for it", "How the tree comes down: climbing, rigging, or a crane", "Cleanup: wood, brush, and raking", "Stump grinding, if you want it", "Payment terms"]
  },
  {
    "heading": "Does *insurance* pay for removal?",
    "paragraphs": [
      "Sometimes. A homeowners policy usually covers removal when a covered event, such as wind, brings a tree down onto a covered structure like your house, garage, or fence. Even then, debris removal is often capped, with limits per tree and per incident that vary by policy.",
      "Removing a healthy tree because you are worried about it is generally not covered, and a car damaged by a tree is usually a matter for your auto policy. Read your policy or ask your agent before work starts. We put the scope and price in writing so you have what an insurer asks for."
    ]
  }
]
```

`faqs` (append two):
```json
[
  { "q": "Does homeowners insurance pay for tree removal?", "a": "It can, when a covered event such as wind drops a tree on a covered structure. Debris removal is often capped per tree and per incident. Removing a healthy tree is generally not covered. Check your policy or ask your agent before the work starts." },
  { "q": "What happens if the work changes after the quote?", "a": "If the work changes, for example a second tree is added or the access turns out harder, we explain the change in writing before it happens and say how it affects the price." }
]
```

## Sources
See knowledge/research/service-tree-removal-cost.md (GEICO, Policygenius, PropertyCasualty360; via WebSearch, retrieved 2026-11-16).

## Open items (not changed in this run)
- The existing dollar ranges are unsourced (icp.json says "source not specified"). LAUNCH_CHECKLIST says cite or remove.
- Existing copy says "We will show you [proof of insurance] on request". Types.ts says never claim insured status without confirmation.
