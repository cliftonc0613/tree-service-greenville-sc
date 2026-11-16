// Seed config for sites built from the astro-business-builder template
// (src/data/{business,storybrand,serviceTypes,serviceAreas,seoContent}.ts +
// src/content/blog/*.md). Most local-service sites in this portfolio use it, so
// this file works unchanged for them.
//
// A site with a different structure: copy this file to
// <project>/scripts/seed.config.mjs and edit it there. seed-scan.mjs uses a
// project copy automatically when one exists.
//
// ---------------------------------------------------------------------------
// How a page type is described
// ---------------------------------------------------------------------------
//   key            short id used on the CLI (--type city)
//   label          human name
//   routes         src/pages files this type renders (for the unmapped-route check)
//   source         where the content lives, shown to /seed-page so it knows what to edit
//   research       what /seed-page should research for this type (plain-language recipe)
//   minPageWords   optional floor for words inside <main> in the built page (needs dist/)
//   items(ctx)     returns one entry per page: { id, url, label, data, checks? }
//   fields         what each page needs, checked against item.data
//
// Field spec:
//   { path, kind, level, ...limits }
//   kind:  'text'   -> minWords, minChars, maxChars
//          'list'   -> minItems, maxItems
//          'number' -> min
//          'image'  -> path must resolve to a real file under imageRoots
//   level: 'required' (default) | 'recommended' | 'optional'
//   limitLevel: optional softer level for length/size failures (field must
//               exist at `level`, but being too long/short is only a warning)
//
// item.checks: extra results computed in items(), e.g. "research exists".
//   { field, ok, level, note }
//
// ctx API: load(relTs), readFile(rel), exists(rel), markdown(relDir),
//          researchHas(term, { heading }), project (abs path)
// ---------------------------------------------------------------------------

const DATA = 'src/data';
const AREA_SEO_FIELDS = [
  // Optional: the area template builds a default title/meta/H1 when these are absent.
  { path: 'seo.title', kind: 'text', minChars: 45, maxChars: 60, level: 'optional' },
  { path: 'seo.description', kind: 'text', minChars: 70, maxChars: 160, level: 'optional' },
  { path: 'seo.h1', kind: 'text', level: 'optional' },
  { path: 'seo.subtitle', kind: 'text', minWords: 8, level: 'optional' },
];

export default {
  dist: 'dist',
  // Data files store images as "/images/..."; the template resolves them from
  // src/assets (src/lib/media.ts). public/ covers sites that serve them raw.
  imageRoots: ['src/assets', 'public'],
  researchFiles: ['knowledge/research'],
  contextFiles: [
    'context/core/business-profile.json',
    'context/core/voice-dna.json',
    'context/core/voice-style-guide.md',
    'context/core/storybrand-brandscript.json',
    'context/core/icp.json',
  ],
  placeholderPatterns: [/__[A-Z0-9_]+__/, /\bTODO\b/, /lorem ipsum/i, /\[insert/i],

  pageTypes: [
    // -----------------------------------------------------------------------
    {
      key: 'home',
      label: 'Homepage',
      routes: ['src/pages/index.astro'],
      source: `${DATA}/storybrand.ts (sections), ${DATA}/business.ts (description, tagline), title const in src/pages/index.astro`,
      research:
        'Primary keyword = "{service category} {home city} {state}" (e.g. "towing greer sc"). Pull keyword metrics + related keywords, the top 10 organic results and local pack, People Also Ask, and the H2 outline of the top 3 ranking pages. Build a brief: search intent, subtopics competitors cover that we do not, entities to mention, title/meta angle.',
      minPageWords: 1200,
      async items(ctx) {
        const { storybrand } = await ctx.load(`${DATA}/storybrand.ts`);
        const { business } = await ctx.load(`${DATA}/business.ts`);
        const indexSrc = ctx.readFile('src/pages/index.astro') ?? '';
        const title = indexSrc.match(/const title\s*=\s*["'`](.+?)["'`]/)?.[1];
        return [
          {
            id: 'home',
            url: '/',
            label: 'Homepage',
            data: { ...storybrand, business, pageTitle: title },
          },
        ];
      },
      fields: [
        { path: 'pageTitle', kind: 'text', minChars: 45, maxChars: 60 },
        { path: 'business.description', kind: 'text', minChars: 70, maxChars: 160 },
        { path: 'business.tagline', kind: 'text', level: 'recommended' },
        { path: 'character.who', kind: 'text', minWords: 10 },
        { path: 'character.wants', kind: 'text', minWords: 10 },
        { path: 'problem.external', kind: 'text', minWords: 15 },
        { path: 'problem.internal', kind: 'text', minWords: 15 },
        { path: 'problem.philosophical', kind: 'text', minWords: 15 },
        { path: 'guide.empathy', kind: 'text', minWords: 20 },
        { path: 'guide.authority', kind: 'text', minWords: 20 },
        { path: 'plan', kind: 'list', minItems: 3, maxItems: 4 },
        { path: 'success', kind: 'list', minItems: 3 },
        { path: 'successIntro', kind: 'list', minItems: 2, level: 'recommended' },
        { path: 'stakes', kind: 'list', minItems: 3 },
        { path: 'warranty.headline', kind: 'text' },
        { path: 'warranty.details', kind: 'text', minWords: 20 },
        { path: 'finalCta.headline', kind: 'text' },
        { path: 'finalCta.subhead', kind: 'text', minWords: 8 },
      ],
    },

    // -----------------------------------------------------------------------
    {
      key: 'service',
      label: 'Service page',
      routes: ['src/pages/services/[slug].astro', 'src/pages/services/index.astro'],
      source: `${DATA}/serviceTypes.ts (one object per service, matched by slug)`,
      research:
        'Keywords "{service} near me" and "{service} {home city} {state}". Pull keyword metrics, top 10 results, People Also Ask, and the H2 outline of the top 3 pages. Note subtopics they cover that we do not (equipment, process, edge cases, cost factors). FAQs come from PAA. Never post prices unless business-profile.json allows it.',
      minPageWords: 900,
      async items(ctx) {
        const { serviceTypes } = await ctx.load(`${DATA}/serviceTypes.ts`);
        return serviceTypes.map((s) => ({
          id: s.slug,
          url: `/services/${s.slug}/`,
          label: s.name,
          data: s,
        }));
      },
      fields: [
        { path: 'shortDescription', kind: 'text', minWords: 12, maxChars: 200 },
        { path: 'description', kind: 'text', minWords: 60 },
        { path: 'directAnswer', kind: 'text', minWords: 25, level: 'recommended' },
        { path: 'depthParagraphs', kind: 'list', minItems: 3, level: 'recommended' },
        { path: 'processSteps', kind: 'list', minItems: 4, maxItems: 4 },
        { path: 'benefits', kind: 'list', minItems: 4 },
        { path: 'faqs', kind: 'list', minItems: 4 },
        { path: 'spotlight.body', kind: 'text', minWords: 30, level: 'optional' },
        { path: 'image', kind: 'image', level: 'recommended' },
      ],
    },

    // -----------------------------------------------------------------------
    {
      key: 'city',
      label: 'City / service-area page',
      routes: ['src/pages/service-areas/[slug].astro', 'src/pages/service-areas/index.astro'],
      source: `${DATA}/serviceAreas.ts → serviceAreas[] (matched by slug)`,
      research:
        'Census (population, ZIP codes, county), straight-line + drive distance from the business base, major roads/exits through town, neighborhoods, a real landmark with sourced history, and the "{service category} {city} {state}" SERP + local pack. Every fact must be written into the research file with its source before it is used in copy.',
      minPageWords: 800,
      async items(ctx) {
        const { serviceAreas } = await ctx.load(`${DATA}/serviceAreas.ts`);
        return serviceAreas.map((a) => ({
          id: a.slug,
          url: `/service-areas/${a.slug}/`,
          label: `${a.name}${a.hubOnly ? ' (hub only)' : ''}`,
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
        { path: 'description', kind: 'text', minWords: 50 },
        { path: 'county', kind: 'text' },
        { path: 'population', kind: 'number', min: 1 },
        { path: 'zipCodes', kind: 'list', minItems: 1 },
        { path: 'nearby', kind: 'list', minItems: 3 },
        { path: 'responseTime', kind: 'text' },
        { path: 'directAnswer', kind: 'text', minWords: 25, level: 'recommended' },
        { path: 'landmark.history', kind: 'text', minWords: 40, level: 'recommended' },
        { path: 'heroImage', kind: 'image', level: 'recommended' },
        ...AREA_SEO_FIELDS,
      ],
    },

    // -----------------------------------------------------------------------
    {
      key: 'highway',
      label: 'Highway landing page',
      routes: [],
      source: `${DATA}/serviceAreas.ts → highways[] (matched by slug; uses the area template)`,
      research:
        'Exits and mile markers inside the service radius, towns at each exit, AADT/crash data for the corridor, state law on disabled vehicles and shoulder stops, and "{service category} {highway}" SERP.',
      minPageWords: 800,
      async items(ctx) {
        const { highways = [] } = await ctx.load(`${DATA}/serviceAreas.ts`);
        return highways.map((h) => ({
          id: h.slug,
          url: `/service-areas/${h.slug}/`,
          label: h.name,
          data: h,
          checks: [
            {
              field: 'research',
              ok: ctx.researchHas(h.name),
              level: 'recommended',
              note: `"${h.name}" is not mentioned in the research files`,
            },
          ],
        }));
      },
      fields: [
        { path: 'description', kind: 'text', minWords: 40 },
        { path: 'nearby', kind: 'list', minItems: 2 },
        { path: 'highway.aboutMore', kind: 'list', minItems: 2 },
        { path: 'highway.around', kind: 'text', minWords: 30 },
        { path: 'highway.exits', kind: 'list', minItems: 3 },
        { path: 'highway.faqs', kind: 'list', minItems: 3 },
        { path: 'heroImage', kind: 'image', level: 'recommended' },
        ...AREA_SEO_FIELDS,
      ],
    },

    // -----------------------------------------------------------------------
    {
      key: 'combo',
      label: 'Service × city combo page',
      routes: ['src/pages/services/[area]/[slug].astro'],
      source: `${DATA}/serviceTypes.ts → service.directAnswers["{area-slug}"] (the rest of the page is generated from the city + service data)`,
      research:
        'Reuse the city research. Add only what is specific to this service in this town (e.g. the highway or road where these calls happen, distance to the nearest impound or shop). The goal is a unique direct answer so combo pages are not near-duplicates.',
      minPageWords: 700,
      async items(ctx) {
        const { serviceAreas } = await ctx.load(`${DATA}/serviceAreas.ts`);
        const { serviceTypes } = await ctx.load(`${DATA}/serviceTypes.ts`);
        const items = [];
        for (const a of serviceAreas.filter((x) => !x.hubOnly)) {
          for (const s of serviceTypes.filter((x) => x.comboPages !== false)) {
            items.push({
              id: `${a.slug}/${s.slug}`,
              url: `/services/${a.slug}/${s.slug}/`,
              label: `${s.name} in ${a.name}`,
              data: { directAnswer: s.directAnswers?.[a.slug] },
            });
          }
        }
        return items;
      },
      fields: [{ path: 'directAnswer', kind: 'text', minWords: 25, level: 'recommended' }],
    },

    // -----------------------------------------------------------------------
    {
      key: 'blog',
      label: 'Blog post',
      routes: [
        'src/pages/blog/[slug].astro',
        'src/pages/blog/[...page].astro',
        'src/pages/blog/category/[slug].astro',
        'src/pages/blog/tag/[slug].astro',
      ],
      source: 'src/content/blog/{slug}.md (frontmatter schema in src/content.config.ts)',
      research:
        'Pick topics from keyword gaps and People Also Ask that no existing post or service page already targets (check for cannibalization first). Use sourced, current statistics. Local angle: a real road, town or situation from the research file.',
      minPageWords: 800,
      async items(ctx) {
        return ctx.markdown('src/content/blog').map((p) => ({
          id: p.slug,
          url: `/blog/${p.slug}/`,
          label: p.data.title ?? p.slug,
          data: { ...p.data, body: p.body },
        }));
      },
      fields: [
        // The template appends " | {business}" to the <title>, so keep the base title short.
        { path: 'title', kind: 'text', minChars: 30, maxChars: 70, limitLevel: 'recommended' },
        { path: 'description', kind: 'text', minChars: 70, maxChars: 160, limitLevel: 'recommended' },
        { path: 'body', kind: 'text', minWords: 700 },
        { path: 'tags', kind: 'list', minItems: 2, level: 'recommended' },
        { path: 'heroImage', kind: 'image', level: 'recommended' },
        { path: 'heroImageAlt', kind: 'text', minWords: 6, level: 'recommended' },
      ],
    },

    // -----------------------------------------------------------------------
    {
      key: 'static',
      label: 'About / FAQ',
      routes: ['src/pages/about.astro', 'src/pages/faq.astro'],
      source: 'Copy is inline in src/pages/about.astro; general FAQs are in src/data/seoContent.ts generateFaqs()',
      research:
        'About: what the business profile and voice files say about the team, service area and promise. FAQ: People Also Ask for the main keywords, de-duplicated against service FAQs.',
      minPageWords: 500,
      async items() {
        return [
          { id: 'about', url: '/about/', label: 'About', data: {} },
          { id: 'faq', url: '/faq/', label: 'FAQ', data: {} },
        ];
      },
      fields: [],
    },
  ],

  // Routes that are templates or utilities. Listed so the scanner knows they
  // were skipped on purpose rather than forgotten.
  skip: [
    { route: 'src/pages/contact.astro', reason: 'form page' },
    { route: 'src/pages/get-quote.astro', reason: 'form page' },
    { route: 'src/pages/thank-you.astro', reason: 'utility' },
    { route: 'src/pages/404.astro', reason: 'utility' },
    { route: 'src/pages/privacy-policy.astro', reason: 'legal template' },
    { route: 'src/pages/terms-of-service.astro', reason: 'legal template' },
  ],
};
