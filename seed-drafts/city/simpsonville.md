# Simpsonville  (/service-areas/simpsonville/)

## Brief
- Target keyword: tree removal simpsonville sc (210/mo, from playbook.md, Nov 11 2026)
- Secondary: tree service simpsonville sc (50/mo), tree trimming simpsonville (10/mo)
- Intent: homeowner with a specific tree near a house wants a quote
- Competitors cover: Facebook pages, Reddit threads, Yelp, Econo Tree Man, Tony Bridges. Mostly generic pages with no local roads or landmarks.
- We add: real local geography (I-385, Fairview Road, Heritage Park), verified in research/simpsonville.md
- PAA used: not pulled live (Firecrawl out of credits, OpenSEO not run)

## Fields

Only one field changes. The rest of the page already matches the target and is left as it is.

```json
{
  "geography": "Simpsonville sits in southeastern Greenville County, with Mauldin to the northwest and Fountain Inn to the southeast. Interstate 385 links the town north to Greenville and has an interchange with Fairview Road, which runs south from SC 14. Heritage Park, a roughly 90-acre park in southern Simpsonville, has athletic fields, playgrounds, and an amphitheater. Many older lots near the center of town have mature trees that need a closer look before work starts."
}
```

Replaces the current `geography`, which says Fairview Road is "(SC 14)" and places Five Forks on Simpsonville's north side. Neither claim holds up.

## Not changed (already rendered and reasonable)
- title, metaDescription, h1, lead, summary, sections, faqs, nearby

## Not seeded
- population, zipCodes, responseTime, directAnswer: not rendered by the city template (scanner field list was remapped for this reason)
- Image: `/images/pages/simpsonville.jpg` exists in public/ and is OK

## Sources
- I-385 interchange with Fairview Road: AARoads I-385 North, https://www.aaroads.com/guides/i-385-north-greenville-sc (via WebSearch; guide dated, verify with SCDOT)
- Fairview Road runs south from SC 14: AARoads SC 14, https://www.aaroads.com/guides/sc-014 (via WebSearch)
- Heritage Park, roughly 90 acres in southern Simpsonville: Wikipedia mirror summaries (via WebSearch), https://www.wikipedia.com/wiki/Simpsonville,_South_Carolina
- Location relative to Mauldin and Fountain Inn: Wikipedia, https://en.wikipedia.org/wiki/Simpsonville,_South_Carolina (via WebSearch)

## Open items
- Heritage Park and I-385 details come from WebSearch summaries, not full page reads. Check each against the city or SCDOT before launch (LAUNCH_CHECKLIST.md).
- Combo pages in Simpsonville (7) are out of scope for this run and have thin FAQs (2 each).
