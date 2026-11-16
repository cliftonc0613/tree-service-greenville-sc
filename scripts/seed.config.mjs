// Project seed config for tree-service-greenville-sc.
// This site stores content in src/data/areas.ts, services.ts and combos.ts, and
// the templates render only the fields listed below. Checking any other field
// would report gaps that no page displays.

const DATA = 'src/data';

export default {
  dist: 'dist',
  imageRoots: ['src/assets', 'public'],
  researchFiles: ['knowledge/research'],
  contextFiles: [
    'context/core/business-profile.json',
    'context/core/voice-dna.json',
    'context/core/voice-style-guide.md',
    'context/core/icp.json',
  ],
  placeholderPatterns: [/__[A-Z0-9_]+__/, /\bTODO\b/, /lorem ipsum/i, /\[insert/i],

  pageTypes: [
    {
      key: 'city',
      label: 'City / service-area page',
      routes: ['src/pages/service-areas/[slug].astro', 'src/pages/service-areas/index.astro'],
      source: `${DATA}/areas.ts → areas[] (matched by slug). Rendered fields: title, metaDescription, h1, lead, summary, sections, geography, faqs, nearby, image.`,
      research:
        'Census facts (population, year, source), ZIP codes, county, drive distance from the Greenville base, the main roads and exits through town, and the "tree service {city} sc" SERP and local pack. Every fact goes into the research file with its source before it is used in copy. Only the fields the template renders are seeded.',
      minPageWords: 800,
      async items(ctx) {
        const { areas } = await ctx.load(`${DATA}/areas.ts`);
        return areas.map((a) => ({
          id: a.slug,
          url: `/service-areas/${a.slug}/`,
          label: `${a.name} (tier ${a.tier})`,
          data: a,
          checks: [
            {
              field: 'research',
              ok: ctx.researchHas(a.name, { heading: true }),
              level: 'recommended',
              note: `no "## ${a.name}" profile in the research files`,
            },
          ],
        }));
      },
      fields: [
        { path: 'title', kind: 'text', minChars: 45, maxChars: 60 },
        { path: 'metaDescription', kind: 'text', minChars: 70, maxChars: 160 },
        { path: 'h1', kind: 'text' },
        { path: 'lead', kind: 'text', minWords: 20 },
        { path: 'summary', kind: 'text', minWords: 8 },
        { path: 'sections', kind: 'list', minItems: 2 },
        { path: 'geography', kind: 'text', minWords: 40 },
        { path: 'faqs', kind: 'list', minItems: 3 },
        { path: 'nearby', kind: 'list', minItems: 2 },
        { path: 'image.src', kind: 'image', level: 'recommended' },
      ],
    },

    {
      key: 'service',
      label: 'Service page',
      routes: ['src/pages/services/[slug].astro', 'src/pages/services/index.astro'],
      source: `${DATA}/services.ts → services[] (matched by slug). Rendered fields: title, metaDescription, h1, lead, summary, sections, steps, faqs, related, ctaText.`,
      research:
        'Keywords "{service} near me" and "{service} greenville sc". Keyword metrics, top 10 results, People Also Ask, and the H2 outline of the top 3 pages. Note subtopics we do not cover. FAQs come from PAA. Never post prices unless business-profile.json allows it.',
      minPageWords: 900,
      async items(ctx) {
        const { services } = await ctx.load(`${DATA}/services.ts`);
        return services.map((s) => ({
          id: s.slug,
          url: `/services/${s.slug}/`,
          label: s.name,
          data: s,
        }));
      },
      fields: [
        { path: 'title', kind: 'text', minChars: 45, maxChars: 60 },
        { path: 'metaDescription', kind: 'text', minChars: 70, maxChars: 160 },
        { path: 'h1', kind: 'text' },
        { path: 'lead', kind: 'text', minWords: 20 },
        { path: 'summary', kind: 'text', minWords: 12 },
        { path: 'sections', kind: 'list', minItems: 2 },
        { path: 'faqs', kind: 'list', minItems: 4 },
        { path: 'ctaText', kind: 'text', minWords: 8 },
      ],
    },

    {
      key: 'combo',
      label: 'Service × city combo page',
      routes: ['src/pages/services/[area]/[slug].astro'],
      source: `${DATA}/combos.ts → combos[] (matched by area + service). Rendered fields: title, metaDescription, h1, lead, sections, faqs.`,
      research:
        'Reuse the city research. Add only what is specific to this service in this town (for example the road where these calls happen). The goal is a unique lead paragraph so combo pages are not near-duplicates.',
      minPageWords: 700,
      async items(ctx) {
        const { combos } = await ctx.load(`${DATA}/combos.ts`);
        return combos.map((c) => ({
          id: `${c.area}/${c.service}`,
          url: `/services/${c.area}/${c.service}/`,
          label: `${c.service} in ${c.area}`,
          data: c,
        }));
      },
      fields: [
        { path: 'title', kind: 'text', minChars: 45, maxChars: 60 },
        { path: 'metaDescription', kind: 'text', minChars: 70, maxChars: 160 },
        { path: 'lead', kind: 'text', minWords: 25 },
        { path: 'sections', kind: 'list', minItems: 1 },
        { path: 'faqs', kind: 'list', minItems: 3 },
      ],
    },
  ],

  // Not mapped for this site yet. Listed so the scanner knows they were skipped on purpose.
  skip: [
    { route: 'src/pages/index.astro', reason: 'homepage not mapped yet' },
    { route: 'src/pages/about.astro', reason: 'static, not mapped yet' },
    { route: 'src/pages/contact.astro', reason: 'form page' },
    { route: 'src/pages/404.astro', reason: 'utility' },
    { route: 'src/pages/privacy-policy.astro', reason: 'legal template' },
  ],
};
