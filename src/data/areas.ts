// Launch town pages: the four Tier 1 towns from site-architecture.md section 1.
// Tier 2 and Tier 3 towns are added in months two and three. Do not link to them until their pages exist.
// Geography paragraphs use starting points from knowledge/research/playbook.md. Every landmark fact must be checked against a real source before launch (see LAUNCH_CHECKLIST.md).
import type { Area } from '@/data/types';

export const areas: Area[] = [
  {
    slug: 'simpsonville',
    name: 'Simpsonville',
    county: 'Greenville County',
    tier: 1,
    leadService: 'tree-removal',
    title: 'Tree Removal in Simpsonville, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree removal in Simpsonville, SC for dangerous, dead, or unwanted trees. Free written estimate and cleanup before we leave. Call us to set up a visit.',
    h1: 'Tree Removal in Simpsonville, SC',
    lead:
      'If a tree in Simpsonville is leaning toward the house, dead, or damaged by a storm, call us. We come out for a free site visit and give you a written quote before any work starts.',
    summary: 'Dangerous, dead, or unwanted tree removal for Simpsonville homeowners.',
    sections: [
      {
        heading: 'Tree removal for Simpsonville homes',
        paragraphs: [
          'Simpsonville has a mix of older lots with big hardwoods and newer subdivisions with young trees that are starting to crowd fences, decks, and roofs. Removal is the most common call we expect here, especially when a tree has cracked, leaned, or dropped limbs after a storm.',
          'We look at the tree, the target, and the access on the site visit. Then we explain the method in plain language and put the scope in writing.',
        ],
        bullets: [
          'Leaning trees near the house, a garage, or a fence',
          'Dead trees with little new growth',
          'Storm damage and split trunks',
          'Trees rooted into a driveway, patio, or foundation',
        ],
      },
      {
        heading: 'Trimming and stump work nearby',
        paragraphs: [
          'Many Simpsonville homeowners want a tree removed and the stump ground in one visit. We can quote both together. If the tree only needs pruning, we will tell you that too.',
        ],
      },
      {
        heading: 'Clean yards before we leave',
        paragraphs: [
          'We leave the yard cleaner than we found it. The written quote explains what is included in the cleanup so there are no surprises.',
        ],
      },
    ],
    geography:
      'Simpsonville sits along Interstate 385 and Fairview Road (SC 14), with Heritage Park and the Five Forks area on its north side. Many of the older lots near the center of town have mature trees that need a closer look before work starts.',
    faqs: [
      {
        q: 'Do you serve Simpsonville, SC?',
        a: 'Yes. Simpsonville is one of the towns we serve from our Greenville base. Call us to confirm the earliest visit we can offer for your address.',
      },
      {
        q: 'How do I get a quote for a Simpsonville tree?',
        a: 'Call us or send a request on our contact page. We will set up a free site visit and give you a written quote.',
      },
      {
        q: 'Can you remove a tree near a Simpsonville house without damage?',
        a: 'Often, yes, with the right method. Tell us how close the tree is to the house on the call. We will say honestly whether it can be done safely and what it will take.',
      },
    ],
    nearby: [
      { slug: 'taylors', name: 'Taylors' },
      { slug: 'greer', name: 'Greer' },
    ],
  },

  {
    slug: 'taylors',
    name: 'Taylors',
    county: 'Greenville County',
    tier: 1,
    leadService: 'tree-service',
    title: 'Tree Service in Taylors, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Taylors, SC: trimming, removal, and stump grinding with a free written estimate. Clean yards before we leave. Call us today.',
    h1: 'Tree Service in Taylors, SC',
    lead:
      'Tree service in Taylors, South Carolina, for trimming, removal, and stump grinding. We come out for a free site visit, explain what your tree needs, and give you a written quote.',
    summary: 'Trimming, removal, and stump grinding for Taylors homeowners.',
    sections: [
      {
        heading: 'Tree trimming and removal in Taylors',
        paragraphs: [
          'Taylors yards often have large shade trees close to homes, and pines that drop limbs after heavy weather. Routine trimming keeps branches off the roof and away from power lines. When a tree is dead or unsafe, removal is the honest answer.',
          'We will tell you which one your tree needs. If pruning is enough, we will say so.',
        ],
        bullets: [
          'Trimming branches off the roof, gutters, and driveways',
          'Removing dead or hazardous trees',
          'Grinding stumps left behind',
          'Assessing a tree before you decide',
        ],
      },
      {
        heading: 'Planning ahead for routine trimming',
        paragraphs: [
          'If you want one company to call for trims every season, we can set up a plan. You get a written quote for each visit and the same crew who knows your yard.',
        ],
      },
      {
        heading: 'Clean up before we leave',
        paragraphs: [
          'We clean the work area before we leave. Ask about the brush and wood during the estimate, so the written quote is clear.',
        ],
      },
    ],
    geography:
      'Taylors runs along Wade Hampton Boulevard (US 29), with the Enoree River and the old Taylors Mill area nearby. Lots near the river and along the older roads often have large hardwoods and pines that need a regular look.',
    faqs: [
      {
        q: 'Do you trim trees in Taylors, SC?',
        a: 'Yes. Trimming and pruning are part of our regular work in Taylors. Call us for a free written estimate.',
      },
      {
        q: 'Can you come out to Taylors on short notice?',
        a: 'We cannot promise a date we cannot keep. Call and we will tell you the earliest visit we can offer.',
      },
      {
        q: 'Do you grind stumps in Taylors?',
        a: 'Yes. Stump grinding is one of our services for Taylors homes. We can quote it with a removal or on its own.',
      },
    ],
    nearby: [
      { slug: 'simpsonville', name: 'Simpsonville' },
      { slug: 'greer', name: 'Greer' },
    ],
  },

  {
    slug: 'easley',
    name: 'Easley',
    county: 'Pickens County',
    tier: 1,
    leadService: 'balanced',
    title: 'Tree Service in Easley, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service and removal in Easley, SC. Trimming, dangerous tree removal, and stump grinding with a free written estimate. Call us to set up a visit.',
    h1: 'Tree Service and Removal in Easley, SC',
    lead:
      'Tree service and removal in Easley, South Carolina. We trim, remove, and grind stumps, with a free site visit and a written quote before any work starts.',
    summary: 'Trimming, removal, and stump grinding for Easley homeowners.',
    sections: [
      {
        heading: 'Trimming and removal in Easley',
        paragraphs: [
          'Easley homes often sit on wooded lots, so the work includes both routine trimming and the occasional tree that needs to come down. We look at the whole tree before deciding, and we explain the options in plain language.',
        ],
        bullets: [
          'Trimming overgrown limbs and clearing the roofline',
          'Removing leaning, dead, or storm-damaged trees',
          'Grinding stumps and clearing the space',
          'Lot clearing for a new yard, garden, or building site',
        ],
      },
      {
        heading: 'Quotes that are easy to compare',
        paragraphs: [
          'Every quote is written. It names the scope, the method, the cleanup, and any stump or crane work, so you can compare it with other companies on the same terms.',
        ],
      },
    ],
    geography:
      'Easley sits in Pickens County, across the Saluda River from Greenville County, along US 123. Many properties here have a wooded backdrop, so tree work often involves both yard trees and trees near the edge of the lot.',
    faqs: [
      {
        q: 'Is Easley in Greenville County?',
        a: 'Easley is in Pickens County, across the Saluda River from Greenville County. We serve Easley from our Greenville base. Call to confirm the visit for your address.',
      },
      {
        q: 'Can you remove a tree on a wooded lot in Easley?',
        a: 'Often, yes. Wooded lots can change the method and the access. We will look at it on the site visit.',
      },
      {
        q: 'How do I request an estimate in Easley?',
        a: 'Call us or send a request on our contact page. The estimate is free and comes as a written quote.',
      },
    ],
    nearby: [
      { slug: 'greer', name: 'Greer' },
      { slug: 'simpsonville', name: 'Simpsonville' },
    ],
  },

  {
    slug: 'greer',
    name: 'Greer',
    county: 'Greenville and Spartanburg counties',
    tier: 1,
    leadService: 'tree-service',
    title: 'Tree Service in Greer, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Greer, SC for trimming, removal, and stump grinding. Free written estimate, and we clean up before we leave. Call us today.',
    h1: 'Tree Service in Greer, SC',
    lead:
      'Tree service in Greer, South Carolina, for trimming, removal, and stump grinding. We come out for a free site visit and give you a written quote before we start.',
    summary: 'Trimming, removal, and stump grinding for Greer homeowners.',
    sections: [
      {
        heading: 'Tree service for Greer homes',
        paragraphs: [
          'Greer has established neighborhoods with mature trees and newer subdivisions where young trees are growing into their spaces. Trimming keeps them in shape. Removal is the right call when a tree is dead, leaning, or storm-damaged.',
        ],
        bullets: [
          'Trimming near roofs, power lines, and driveways',
          'Removing dead or hazardous trees',
          'Stump grinding for a cleared yard',
          'Crane removal for large trees with little room to work',
        ],
      },
      {
        heading: 'One company for the whole yard',
        paragraphs: [
          'Many Greer homeowners want one company to call for trims, removals, and stumps. We quote each job in writing so you can plan the year and the budget.',
        ],
      },
    ],
    geography:
      'Greer is split between Greenville and Spartanburg counties, next to GSP Airport and the BMW plant. Some of the newer neighborhoods here are on former farmland, where a lot of the work is clearing and removing trees near new homes.',
    faqs: [
      {
        q: 'Is Greer in Greenville or Spartanburg County?',
        a: 'Greer is split between both counties. We serve Greer from our Greenville base, so call to confirm your address.',
      },
      {
        q: 'Do you handle crane removal in Greer?',
        a: 'Yes, for large trees or trees with little room to work. Crane work is quoted separately so the price is clear.',
      },
      {
        q: 'How do I book a visit in Greer?',
        a: 'Call us or send a request on our contact page. We will set up a free site visit.',
      },
    ],
    nearby: [
      { slug: 'taylors', name: 'Taylors' },
      { slug: 'easley', name: 'Easley' },
    ],
  },
];

export function areaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
