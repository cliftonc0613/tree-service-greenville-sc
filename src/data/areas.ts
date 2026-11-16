// Town pages: the four Tier 1 towns (launch) plus Tier 2 and Tier 3 towns from site-architecture.md section 1.
// Geography paragraphs use starting points from knowledge/research/playbook.md. Every landmark fact must be checked against a real source before launch (see LAUNCH_CHECKLIST.md).
import type { Area } from '@/data/types';

export const areas: Area[] = [
  {
    slug: 'simpsonville',
    image: { src: '/images/pages/simpsonville.jpg', alt: 'Illustration of a tree-lined residential street with mature trees and brick homes' },
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
        heading: 'Tree removal for *Simpsonville* homes',
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
        heading: 'Trimming and *stump work* nearby',
        paragraphs: [
          'Many Simpsonville homeowners want a tree removed and the stump ground in one visit. We can quote both together. If the tree only needs pruning, we will tell you that too.',
        ],
        subsections: [
          {
            heading: 'Tree trimming for roofs, gutters, and driveways',
            paragraphs: [
              'Trimming keeps branches off the house and walkways and helps the tree hold its shape. We cut back to the branch collar where it makes sense, and we do not take more of the crown than the tree can handle at one time.',
            ],
            bullets: [
              'Limbs hanging over the roof, gutters, or a driveway',
              'Branches rubbing on the house or a fence',
              'Dead wood that could fall on people or property',
              'Crowded canopies that block light and air',
            ],
          },
          {
            heading: 'Stump grinding after a removal',
            paragraphs: [
              'A stump left in the yard is a tripping hazard and takes up space you could use for a garden, patio, or lawn. Grinding it down clears the spot. This works the same whether we took the tree down or another crew did.',
              'On the site visit we look at the size of the stump, how close it sits to the house or a fence, and what is buried around it. Roots and nearby structures change the method, so we check them before we put a scope in writing.',
            ],
          },
          {
            heading: 'One visit for the whole job',
            paragraphs: [
              'If you need more than one thing done, ask for it on the same request. Removal, trimming, and stump grinding can be quoted together, so you get one visit and one written quote.',
            ],
          },
        ],
      },
      {
        heading: 'Clean *yards* before we leave',
        paragraphs: [
          'We leave the yard cleaner than we found it. The written quote explains what is included in the cleanup so there are no surprises.',
        ],
        subsections: [
          {
            heading: 'What the cleanup covers',
            paragraphs: [
              'Tree work leaves a lot behind. The written quote says what happens to each of these, so you know what is included before you agree to the work:',
            ],
            bullets: [
              'Branches and brush from the cutting',
              'Logs and wood from a removal',
              'Stump grindings, if we grind a stump',
              'Raking and clearing the work area',
            ],
          },
          {
            heading: 'Know the scope before we start',
            paragraphs: [
              'You get the method and the scope in writing before any cutting begins. If something about the cleanup is not clear, ask on the call or at the site visit. We would rather answer it up front than surprise you on the bill.',
            ],
          },
        ],
      },
    ],
    geography:
      'Simpsonville sits in southeastern Greenville County, with Mauldin to the northwest and Fountain Inn to the southeast. Interstate 385 links the town north to Greenville and has an interchange with Fairview Road, which runs south from SC 14. Heritage Park, a roughly 90-acre park in southern Simpsonville, has athletic fields, playgrounds, and an amphitheater. Many older lots near the center of town have mature trees that need a closer look before work starts.',
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
    image: { src: '/images/pages/arborist-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with a large mature oak beside the sidewalk and brick homes' },
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
        heading: 'Tree trimming and removal in *Taylors*',
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
        heading: 'Planning ahead for *routine trimming*',
        paragraphs: [
          'If you want one company to call for trims every season, we can set up a plan. You get a written quote for each visit and the same crew who knows your yard.',
        ],
      },
      {
        heading: 'Clean up before *we leave*',
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
    image: { src: '/images/pages/tree-removal-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with brick homes and mature trees' },
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
        heading: 'Trimming and removal in *Easley*',
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
        heading: 'Quotes that are *easy to compare*',
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
    image: { src: '/images/pages/removal-cost-street.jpg', alt: 'Illustration of a tall mature oak towering over brick homes on a quiet tree-lined street' },
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
        heading: 'Tree service for *Greer* homes',
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
        heading: 'One company for the *whole yard*',
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

  {
    slug: 'mauldin',
    image: { src: '/images/pages/simpsonville.jpg', alt: 'Illustration of a tree-lined residential street with mature trees and brick homes' },
    name: 'Mauldin',
    county: 'Greenville County',
    tier: 2,
    leadService: 'tree-service',
    title: 'Tree Service in Mauldin, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Mauldin, SC for trimming, removal, and stump grinding. Free written estimate, and we clean up before we leave. Call to set up a visit.',
    h1: 'Tree Service in Mauldin, SC',
    lead:
      'Tree service in Mauldin, South Carolina, for trimming, removal, and stump grinding. We come out for a free site visit and give you a written quote before any work starts.',
    summary: 'Trimming, removal, and stump grinding for Mauldin homeowners.',
    sections: [
      {
        heading: 'Tree service for *Mauldin* homes',
        paragraphs: [
          'Mauldin sits between Greenville and Simpsonville. Many of its neighborhoods are newer subdivisions where young trees are growing into fences, roofs, and power lines. Trimming keeps them clear. Removal is the right call when a tree is dead, leaning, or storm-damaged.',
          'We look at the tree and the site on the visit, then explain the options in plain language.',
        ],
        bullets: [
          'Trimming branches off roofs, gutters, and driveways',
          'Removing dead, leaning, or storm-damaged trees',
          'Grinding stumps left after a removal',
          'Clearing a lot for a new yard or project',
        ],
      },
      {
        heading: 'One written quote for *the whole job*',
        paragraphs: [
          'If a removal leaves a stump, we can quote the grinding in the same visit. Ask about the cleanup during the estimate so the written quote lists it.',
        ],
      },
    ],
    geography:
      'Mauldin lies between Greenville and Simpsonville along Interstate 385 and Butler Road. Lots range from newer subdivisions to larger wooded parcels on the edges of town, and the plan for each tree usually depends on how close it sits to the house.',
    faqs: [
      {
        q: 'Do you serve Mauldin, SC?',
        a: 'Yes. Mauldin is one of the towns we serve from our Greenville base. Call us to confirm the earliest visit for your address.',
      },
      {
        q: 'How do I get a tree service quote in Mauldin?',
        a: 'Call us or send a request on our contact page. We set up a free site visit and send a written quote.',
      },
      {
        q: 'Can you trim a tree that is close to a Mauldin house?',
        a: 'Often, yes. Tell us how close the branches are to the roof or siding when you call. We will explain what the trim involves on the visit.',
      },
    ],
    nearby: [
      { slug: 'simpsonville', name: 'Simpsonville' },
      { slug: 'fountain-inn', name: 'Fountain Inn' },
    ],
  },

  {
    slug: 'fountain-inn',
    image: { src: '/images/pages/stump-grinding-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with brick homes and a stump in a neat front lawn' },
    name: 'Fountain Inn',
    county: 'Greenville and Laurens counties',
    tier: 2,
    leadService: 'tree-service',
    title: 'Tree Service in Fountain Inn, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Fountain Inn, SC for trimming, removal, and stump grinding. Free written estimate, and we clean up before we leave. Call us today.',
    h1: 'Tree Service in Fountain Inn, SC',
    lead:
      'Tree service in Fountain Inn, South Carolina, for trimming, removal, and stump grinding. We come out for a free site visit and put the plan and price in writing.',
    summary: 'Trimming, removal, and stump grinding for Fountain Inn homeowners.',
    sections: [
      {
        heading: 'Tree service for *Fountain Inn* yards',
        paragraphs: [
          'Fountain Inn has older yards with large shade trees near the house and newer lots where trees are still filling in. Routine trimming keeps branches off the roof and away from lines. When a tree is dead or unsafe, removal is the honest answer.',
          'We tell you which one your tree needs. If pruning is enough, we say so.',
        ],
        bullets: [
          'Trimming near roofs, lines, and driveways',
          'Removing dead or hazardous trees',
          'Grinding stumps left behind',
          'Assessing a tree before you decide',
        ],
      },
    ],
    geography:
      'Fountain Inn is split between Greenville and Laurens counties, along US 276 and Interstate 385. Work here ranges from yard trees beside the house to wooded lots at the edge of town, so the site visit matters.',
    faqs: [
      {
        q: 'Is Fountain Inn in Greenville County?',
        a: 'Part of Fountain Inn is in Greenville County and part is in Laurens County. Call us with your address and we will confirm the visit.',
      },
      {
        q: 'Do you grind stumps in Fountain Inn?',
        a: 'Yes. We can quote stump grinding with a removal or on its own.',
      },
      {
        q: 'How do I request an estimate in Fountain Inn?',
        a: 'Call us or send a request on our contact page. The visit is free and the quote is in writing.',
      },
    ],
    nearby: [
      { slug: 'simpsonville', name: 'Simpsonville' },
      { slug: 'mauldin', name: 'Mauldin' },
    ],
  },

  {
    slug: 'travelers-rest',
    image: { src: '/images/pages/service-areas-hub.jpg', alt: 'Illustration of a quiet residential street lined with mature trees in autumn' },
    name: 'Travelers Rest',
    county: 'Greenville County',
    tier: 2,
    leadService: 'tree-service',
    title: 'Tree Service in Travelers Rest, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Travelers Rest, SC for trimming, removal, and stump grinding. Free written estimate and cleanup before we leave. Call to set up a visit.',
    h1: 'Tree Service in Travelers Rest, SC',
    lead:
      'Tree service in Travelers Rest, South Carolina, for trimming, removal, and stump grinding. We visit the site for free and give you a written quote before we start.',
    summary: 'Trimming, removal, and stump grinding for Travelers Rest homeowners.',
    sections: [
      {
        heading: 'Tree service for *Travelers Rest* homes',
        paragraphs: [
          'Travelers Rest has a mix of wooded lots and older yards with tall hardwoods. Trimming keeps trees healthy and clear of the roofline. Removal is the answer when a tree is dead, leaning, or split after a storm.',
          'Lot shape and access change the method, so we look at both on the visit before we quote.',
        ],
        bullets: [
          'Trimming limbs over roofs and driveways',
          'Removing dead, leaning, or storm-split trees',
          'Stump grinding for a cleared yard',
          'Clearing wooded lots for a new yard or project',
        ],
      },
    ],
    geography:
      'Travelers Rest sits at the north end of the Swamp Rabbit Trail, on US 25 heading toward the Blue Ridge. Many lots here are wooded or sloped, and that often shapes the plan for each tree.',
    faqs: [
      {
        q: 'Do you serve Travelers Rest, SC?',
        a: 'Yes. Call us to confirm the earliest visit for your address.',
      },
      {
        q: 'Can you work on a sloped lot in Travelers Rest?',
        a: 'Often, yes. We look at the slope and access on the visit and say what the job needs before we quote it.',
      },
      {
        q: 'How do I get a quote in Travelers Rest?',
        a: 'Call us or send a request on our contact page. We send a free written quote after the visit.',
      },
    ],
    nearby: [
      { slug: 'greer', name: 'Greer' },
      { slug: 'taylors', name: 'Taylors' },
    ],
  },

  {
    slug: 'five-forks',
    image: { src: '/images/pages/tree-removal-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with brick homes and mature trees' },
    name: 'Five Forks',
    county: 'Greenville County',
    tier: 2,
    leadService: 'balanced',
    title: 'Tree Service in Five Forks, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Five Forks, SC for trimming, removal, and stump grinding. Free written estimate, and we clean up before we leave. Call us today.',
    h1: 'Tree Service in Five Forks, SC',
    lead:
      'Tree service in the Five Forks area of Greenville County for trimming, removal, and stump grinding. We come out for a free visit and give you a written quote.',
    summary: 'Trimming, removal, and stump grinding for Five Forks homeowners.',
    sections: [
      {
        heading: 'Trimming and removal in *Five Forks*',
        paragraphs: [
          'Five Forks has older wooded lots and newer homes where young trees are still growing into their spaces. We look at each tree before deciding whether it needs trimming, removal, or nothing at all.',
        ],
        bullets: [
          'Trimming near roofs, fences, and power lines',
          'Removing dead, leaning, or storm-damaged trees',
          'Grinding stumps left after a removal',
        ],
      },
      {
        heading: 'Quotes you can *compare*',
        paragraphs: [
          'Every quote is written. It names the scope, the method, the cleanup, and any stump work, so you can compare it with other companies on the same terms.',
        ],
      },
    ],
    geography:
      'Five Forks is an unincorporated part of Greenville County on the north side of Simpsonville. Homes here sit on a mix of older wooded lots and newer subdivisions.',
    faqs: [
      {
        q: 'Is Five Forks inside the city of Greenville?',
        a: 'No. Five Forks is an unincorporated area of Greenville County, north of Simpsonville. We serve it from our Greenville base.',
      },
      {
        q: 'Do you remove trees on wooded lots in Five Forks?',
        a: 'Yes. Wooded lots can change the method and access, so we look at the site before we quote.',
      },
    ],
    nearby: [
      { slug: 'simpsonville', name: 'Simpsonville' },
      { slug: 'mauldin', name: 'Mauldin' },
    ],
  },

  {
    slug: 'powdersville',
    image: { src: '/images/pages/arborist-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with a large mature oak beside the sidewalk and brick homes' },
    name: 'Powdersville',
    county: 'Anderson County',
    tier: 2,
    leadService: 'tree-service',
    title: 'Tree Service in Powdersville, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Powdersville, SC for trimming, removal, and stump grinding. Free written estimate, and we clean up before we leave. Call to set up a visit.',
    h1: 'Tree Service in Powdersville, SC',
    lead:
      'Tree service in Powdersville, South Carolina, for trimming, removal, and stump grinding. We confirm coverage for your address, visit for free, and send a written quote.',
    summary: 'Trimming, removal, and stump grinding for Powdersville homeowners.',
    sections: [
      {
        heading: 'Tree service for *Powdersville* homes',
        paragraphs: [
          'Tree work in Powdersville often depends on the space around each tree. Trimming keeps limbs clear of the roof and lines. Removal is the right call when a tree is dead, leaning, or storm-damaged.',
        ],
        bullets: [
          'Trimming branches off roofs and gutters',
          'Removing dead or leaning trees',
          'Grinding stumps left behind',
        ],
      },
    ],
    geography:
      'Powdersville is in Anderson County near Interstate 85, across the Saluda River from Greenville County. Because the town sits outside Greenville County, call us with your address so we can confirm the visit before you book.',
    faqs: [
      {
        q: 'Do you serve Powdersville, SC?',
        a: 'We serve Powdersville from our Greenville base. Call us with your address and we will confirm coverage and the earliest visit we can offer.',
      },
      {
        q: 'Is Powdersville in Greenville County?',
        a: 'No. Powdersville is in Anderson County. Call us to confirm the visit for your address.',
      },
    ],
    nearby: [
      { slug: 'five-forks', name: 'Five Forks' },
      { slug: 'simpsonville', name: 'Simpsonville' },
    ],
  },

  {
    slug: 'berea',
    image: { src: '/images/pages/removal-cost-street.jpg', alt: 'Illustration of a tall mature oak towering over brick homes on a quiet tree-lined street' },
    name: 'Berea',
    county: 'Greenville County',
    tier: 2,
    leadService: 'tree-service',
    title: 'Tree Service in Berea, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Berea, SC for trimming, removal, and stump grinding. Free written estimate, and we clean up before we leave. Call us to set up a visit.',
    h1: 'Tree Service in Berea, SC',
    lead:
      'Tree service in Berea, South Carolina, for trimming, removal, and stump grinding. We come out for a free site visit and give you a written quote before we start.',
    summary: 'Trimming, removal, and stump grinding for Berea homeowners.',
    sections: [
      {
        heading: 'Tree service for *Berea* homes',
        paragraphs: [
          'Berea is a large unincorporated area of Greenville County, with a mix of wooded parcels and established yards. Many homes here have trees that have grown close to the house over many years.',
          'We look at each tree on the visit and tell you whether it needs trimming, removal, or nothing yet.',
        ],
        bullets: [
          'Trimming limbs near the roofline and power lines',
          'Removing dead, leaning, or storm-damaged trees',
          'Stump grinding for a cleared yard',
          'Clearing a wooded lot for a new yard or project',
        ],
      },
    ],
    geography:
      'Berea is an unincorporated community in Greenville County, northwest of the city. Its wooded parcels and established yards mean the right plan for each tree often depends on the lot.',
    faqs: [
      {
        q: 'Is Berea inside Greenville city limits?',
        a: 'No. Berea is an unincorporated part of Greenville County. We serve it from our Greenville base.',
      },
      {
        q: 'Can you remove a large tree on a Berea lot?',
        a: 'Often, yes. Tell us the tree size, the access, and what it is near. We will explain the method on the visit.',
      },
    ],
    nearby: [
      { slug: 'greer', name: 'Greer' },
      { slug: 'taylors', name: 'Taylors' },
    ],
  },

  {
    slug: 'wade-hampton',
    image: { src: '/images/pages/stump-grinding-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with brick homes and a stump in a neat front lawn' },
    name: 'Wade Hampton',
    county: 'Greenville County',
    tier: 2,
    leadService: 'tree-service',
    title: 'Tree Service in Wade Hampton, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Wade Hampton, SC for trimming, removal, and stump grinding. Free written estimate, and cleanup before we leave. Call us today.',
    h1: 'Tree Service in Wade Hampton, SC',
    lead:
      'Tree service in Wade Hampton, South Carolina, for trimming, removal, and stump grinding. We visit for free and put the plan and price in writing.',
    summary: 'Trimming, removal, and stump grinding for Wade Hampton homeowners.',
    sections: [
      {
        heading: 'Tree service for *Wade Hampton* yards',
        paragraphs: [
          'Wade Hampton is an unincorporated community in Greenville County, next to the city. Yards here range from older lots with large shade trees to newer homes still growing in.',
          'Trimming keeps trees clear of roofs and lines. Removal is the answer when a tree is dead, leaning, or split. We explain the choice before any work starts.',
        ],
        bullets: [
          'Trimming near roofs, fences, and driveways',
          'Removing dead or storm-damaged trees',
          'Stump grinding after a removal',
        ],
      },
    ],
    geography:
      'Wade Hampton is an unincorporated community in Greenville County next to the city. We serve it from the same crews that work across Greenville.',
    faqs: [
      {
        q: 'Is Wade Hampton part of the city of Greenville?',
        a: 'No. Wade Hampton is an unincorporated community in Greenville County. We serve it from our Greenville base.',
      },
      {
        q: 'How do I get an estimate in Wade Hampton?',
        a: 'Call us or send a request on our contact page. The visit is free and the quote is in writing.',
      },
    ],
    nearby: [
      { slug: 'taylors', name: 'Taylors' },
      { slug: 'berea', name: 'Berea' },
    ],
  },

  {
    slug: 'piedmont',
    image: { src: '/images/pages/tree-removal-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with brick homes and mature trees' },
    name: 'Piedmont',
    county: 'Anderson County',
    tier: 3,
    leadService: 'tree-service',
    title: 'Tree Service in Piedmont, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Piedmont, SC for trimming, removal, and stump grinding. Free written estimate, and cleanup before we leave. Call to set up a visit.',
    h1: 'Tree Service in Piedmont, SC',
    lead:
      'Tree service in Piedmont, South Carolina, for trimming, removal, and stump grinding. Call us to confirm coverage, and we give you a free written quote after a site visit.',
    summary: 'Trimming, removal, and stump grinding for Piedmont homeowners.',
    sections: [
      {
        heading: 'Tree service for *Piedmont* homes',
        paragraphs: [
          'Piedmont homes often have large trees that have grown up beside older houses. Trimming keeps limbs clear of the roof. Removal is the right call when a tree is dead or leaning.',
        ],
        bullets: [
          'Trimming branches off roofs and gutters',
          'Removing dead or leaning trees',
          'Grinding stumps left after a removal',
        ],
      },
    ],
    geography:
      'Piedmont is in Anderson County, about 11 miles from downtown Greenville. Call us with your address so we can confirm the visit before you book.',
    faqs: [
      {
        q: 'Do you serve Piedmont, SC?',
        a: 'Piedmont is at the edge of our service area. Call us with your address and we will confirm coverage and the earliest visit.',
      },
      {
        q: 'Is Piedmont in Greenville County?',
        a: 'No. Piedmont is in Anderson County.',
      },
    ],
    nearby: [
      { slug: 'powdersville', name: 'Powdersville' },
      { slug: 'berea', name: 'Berea' },
    ],
  },

  {
    slug: 'pickens',
    image: { src: '/images/pages/service-areas-hub.jpg', alt: 'Illustration of a quiet residential street lined with mature trees in autumn' },
    name: 'Pickens',
    county: 'Pickens County',
    tier: 3,
    leadService: 'tree-service',
    title: 'Tree Service in Pickens, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Pickens, SC for trimming, removal, and stump grinding. Free written estimate and cleanup before we leave. Call us to confirm coverage.',
    h1: 'Tree Service in Pickens, SC',
    lead:
      'Tree service in Pickens, South Carolina, for trimming, removal, and stump grinding. Call us to confirm coverage, and we give you a free written quote after a visit.',
    summary: 'Trimming, removal, and stump grinding for Pickens homeowners.',
    sections: [
      {
        heading: 'Tree service for *Pickens* homes',
        paragraphs: [
          'Pickens has older homes on wooded lots and newer houses on the edge of town. Trimming keeps trees healthy and clear of the roof. Removal is the answer when a tree is dead, leaning, or storm-damaged.',
        ],
        bullets: [
          'Trimming limbs near roofs and power lines',
          'Removing dead or storm-damaged trees',
          'Stump grinding for a cleared yard',
        ],
      },
    ],
    geography:
      'Pickens is the county seat of Pickens County, about 18 miles from downtown Greenville. Call us with your address so we can confirm the visit before you book.',
    faqs: [
      {
        q: 'Do you serve Pickens, SC?',
        a: 'Pickens is outside the core of our service area. Call us with your address and we will confirm coverage and the earliest visit.',
      },
      {
        q: 'Is Pickens in Greenville County?',
        a: 'No. Pickens is the county seat of Pickens County.',
      },
    ],
    nearby: [
      { slug: 'easley', name: 'Easley' },
      { slug: 'piedmont', name: 'Piedmont' },
    ],
  },

  {
    slug: 'woodruff',
    image: { src: '/images/pages/removal-cost-street.jpg', alt: 'Illustration of a tall mature oak towering over brick homes on a quiet tree-lined street' },
    name: 'Woodruff',
    county: 'Spartanburg County',
    tier: 3,
    leadService: 'tree-service',
    title: 'Tree Service in Woodruff, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree service in Woodruff, SC for trimming, removal, and stump grinding. Free written estimate after a visit. Call us to confirm coverage first.',
    h1: 'Tree Service in Woodruff, SC',
    lead:
      'Tree service in Woodruff, South Carolina, for trimming, removal, and stump grinding. Woodruff is at the edge of our service area, so call first to confirm we can reach your address.',
    summary: 'Trimming, removal, and stump grinding for Woodruff homeowners.',
    sections: [
      {
        heading: 'Tree service for *Woodruff* homes',
        paragraphs: [
          'Woodruff homes often sit on larger lots with mature trees. We trim, remove, and grind stumps, and we put each job in a written quote after a free visit.',
        ],
        bullets: [
          'Trimming near roofs and driveways',
          'Removing dead or storm-damaged trees',
          'Stump grinding after a removal',
        ],
      },
    ],
    geography:
      'Woodruff is in Spartanburg County, about 22 miles from downtown Greenville, at the edge of our service area. Call before you book so we can confirm the crew can reach your address.',
    faqs: [
      {
        q: 'Do you serve Woodruff, SC?',
        a: 'Woodruff is at the edge of our service area. Call with your address and we will confirm coverage and the earliest visit.',
      },
      {
        q: 'Is Woodruff in Greenville County?',
        a: 'No. Woodruff is in Spartanburg County.',
      },
    ],
    nearby: [
      { slug: 'greer', name: 'Greer' },
      { slug: 'fountain-inn', name: 'Fountain Inn' },
    ],
  },
];

export function areaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
