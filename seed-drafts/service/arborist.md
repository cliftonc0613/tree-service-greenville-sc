# Arborist Services  (/services/arborist/)

## Brief
- Target keyword: arborist greenville sc (260/mo, playbook.md)
- Gaps fixed: faqs 3 (want 4+). Thin by words (376 in main, floor 900).
- We add: what an ISA Certified Arborist credential means (no claim about this business), the three tree-risk assessment levels, two FAQs
- PAA: not pulled. OpenSEO not run; Firecrawl out of credits.

## Fields

`sections` (append two):
```json
[
  {
    "heading": "What *credentials* mean",
    "paragraphs": [
      "Anyone can call themselves an arborist. One common credential to ask about is ISA Certified Arborist, given by the International Society of Arboriculture. A person earns it by passing a written exam and showing documented field experience, and keeps it current with continuing education.",
      "Ask any company which credentials the person doing your assessment holds, and ask to see proof."
    ]
  },
  {
    "heading": "How tree risk is *rated*",
    "paragraphs": ["Arborists often follow a three-level framework from the International Society of Arboriculture. The levels run from a quick look to a detailed study."],
    "subsections": [
      { "heading": "Level 1: a quick look", "paragraphs": ["A rapid check from one spot for obvious problems. It is often used to decide which trees need a closer inspection."] },
      { "heading": "Level 2: a ground-based look", "paragraphs": ["A walk around the whole tree and its site, checking the trunk, roots, limbs, and what sits under the tree. Most arborists use this level for homeowners."] },
      { "heading": "Level 3: advanced tests", "paragraphs": ["A more detailed study of one problem, sometimes with special equipment. It is used when the basic look finds something that needs more checking, and it needs your approval first.", "If a tree needs more than a basic look, we will say so instead of guessing."] }
    ]
  }
]
```

`faqs` (append two):
```json
[
  { "q": "What are the levels of a tree risk assessment?", "a": "The International Society of Arboriculture describes three: a quick limited look, a basic ground-based inspection, and an advanced study with special tools. Most homeowner assessments use the basic level. We will tell you if your tree needs more." },
  { "q": "What does ISA Certified Arborist mean?", "a": "It is a credential from the International Society of Arboriculture. A person earns it by passing a written exam and showing field experience, then keeps it current with continuing education. Ask any company which credentials the person doing your work holds." }
]
```

## Sources
See knowledge/research/service-arborist.md (ISA, UF/IFAS EDIS, Classic City Arborists; via WebSearch, retrieved 2026-11-16). No credential claim is made for this business.
