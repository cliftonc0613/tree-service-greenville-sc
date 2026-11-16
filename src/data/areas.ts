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
      'Simpsonville sits in southeastern Greenville County, with Mauldin to the northwest and Fountain Inn to the southeast. Interstate 385 links the town north to Greenville and has an interchange with Fairview Road, which runs south from SC 14. Heritage Park, on SE Main Street in Simpsonville, has ball fields, playgrounds, paved trails, and the CCNB Amphitheatre. Many older lots near the center of town have mature trees that need a closer look before work starts.',
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
    landmarks: ['Heritage Park', 'CCNB Amphitheatre at Heritage Park', 'Heritage Park\'s replica miniature steam train'],
    mainRoads: ['I-385', 'SC 14', 'Fairview Road', 'SC 417'],
    responseArea: 'Simpsonville and nearby Taylors and Greer.',
    landmarkImage: { src: '/images/pages/landmarks/simpsonville-heritage-park-train.jpg', alt: 'A black replica steam locomotive named Smokey, with red wheels and window trim, on a rail track in a shaded park, pulling a flatcar with cut logs and the lettering Heritage Park Simpsonville Railway', credit: { text: 'Heritage Park, Google Maps', url: 'https://www.google.com/maps/place/Heritage+Park/@34.7147459,-82.2375272,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDJ5AOY4ns4mAJV049fjK-c!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9S65Z1_yCy8oAM4bCylitT64c9yOlj7M5wmSHGw-Y_0WBXmHmmTRur_Hx9rO55maLPu44y__LkQdwhdzFRZfvKOrO9WsxlbwLmyaPW8pLURes3_eSzhExZ9r-Q72jDcged34p04gzoKFq4%3Dw203-h152-k-no!7i4000!8i3000!4m13!1m2!2m1!1sHeritage+Park!3m9!1s0x885827416c1126d5:0x5a0728d5da9eba5f!8m2!3d34.7147459!4d-82.2375272!10e5!14m1!1BCgIgAQ!15sCg1IZXJpdGFnZSBQYXJrWg8iDWhlcml0YWdlIHBhcmuSAQRwYXJrmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIwMWEyTllTWGxPYkVwdVlWaENibGRFV2toaFJHczFZMnR3VW1GRlJSQULgAQD6AQQIExA_!16s%2Fg%2F12hkggh0p?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D' } },
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
        subsections: [
          {
            heading: 'What a seasonal visit looks for',
            paragraphs: [
              'A regular look catches small problems before they turn into a removal. On each visit we walk the tree and note anything that has changed since the last time.',
            ],
            bullets: [
              'Dead wood high in the canopy',
              'Limbs growing toward the roof or a power line',
              'Damage after heavy wind or ice',
              'Pines dropping limbs onto the yard or driveway',
            ],
          },
        ],
      },
      {
        heading: 'Clean up before *we leave*',
        paragraphs: [
          'We clean the work area before we leave. Ask about the brush and wood during the estimate, so the written quote is clear.',
        ],
        subsections: [
          {
            heading: 'Brush, wood, and the work area',
            paragraphs: [
              'Ask us during the estimate what you want done with the wood. Some homeowners keep logs for firewood, and others want everything hauled away. The written quote spells out which one you are getting.',
            ],
          },
        ],
      },
    ],
    geography:
      'Taylors sits along Wade Hampton Boulevard (US 29) northeast of Greenville, with the Enoree River nearby. Taylors Mill, the former Southern Bleachery that opened in the 1920s, still stands near the center of town. Lots near the river and along the older roads often have large hardwoods and pines that need a regular look.',
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
    landmarks: ['Taylors Mill, the former Southern Bleachery (National Register)', 'Enoree River'],
    mainRoads: ['US 29 (Wade Hampton Blvd)'],
    responseArea: 'Taylors and nearby Simpsonville and Greer.',
    landmarkImage: { src: '/images/pages/landmarks/taylors-river-from-bridge.jpg', alt: 'A wide brown river under a blue sky with clouds, seen from a wooden bridge, with green trees along both banks', credit:{ text: 'Enoree River, Google Maps', url:'https://www.google.com/maps/place/Enoree+River/@34.6586796,-81.9710254,3a,75y/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIC2jZqn9wE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9T9jRMTGI8JTcTkxv83CjzTj3EAljUV1LLOjhsMEhr_PKltVSu_GSg6jz7o4cKwghV8r6PIOIIoNlun5RxK7ws49BYvGnXtZOHOeGARVm1B11Zd0xOQRBFk92iixzCkAyo7e73dEA%3Dw203-h152-k-no!7i4000!8i3000!4m7!3m6!1s0x8857bf01ce8a99cf:0xf388fb5847cad07e!8m2!3d34.6586796!4d-81.9710254!10e5!16zL20vMGN5cnB4?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D' } },
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
        subsections: [
          {
            heading: 'Working on wooded lots',
            paragraphs: [
              'A tree at the edge of the woods can lean toward the yard as it reaches for light. Those trees are often harder to reach than a yard tree, with brush, slopes, or other trunks in the way. We walk the access on the site visit and plan the cuts around what the crew can safely get to.',
            ],
          },
        ],
      },
      {
        heading: 'Quotes that are *easy to compare*',
        paragraphs: [
          'Every quote is written. It names the scope, the method, the cleanup, and any stump or crane work, so you can compare it with other companies on the same terms.',
        ],
        subsections: [
          {
            heading: 'What to check on any tree quote',
            paragraphs: [
              'When you line up two quotes side by side, look for these items. If one quote leaves something out, ask before you choose.',
            ],
            bullets: [
              'Which trees are included and what is done to each',
              'How the tree comes down',
              'Whether brush, wood, and cleanup are included',
              'Stump grinding, if you want it',
              'Any crane work',
            ],
          },
        ],
      },
    ],
    geography:
      'Easley sits in Pickens County, west of the Saluda River, which marks the Greenville County line along US 123. Many properties here have a wooded backdrop, so tree work often involves both yard trees and trees near the edge of the lot. On those lots, the way a crew reaches the tree can shape the whole plan.',
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
    landmarks: ['Nalley Brown Nature Park, 38 acres on Adger Road', 'Saluda River'],
    mainRoads: ['US 123', 'SC 153', 'SC 124 (Old Easley Hwy)'],
    responseArea: 'Easley and nearby Greer and Simpsonville.',
    landmarkImage: { src: '/images/pages/landmarks/easley-saluda-river-dam.jpg', alt: 'Aerial view of the Saluda River with a low concrete dam and falling water, surrounded by trees in autumn color', credit: { text: 'Saluda River, Google Maps', url: 'https://maps.app.goo.gl/hDEX3hGWmF7dncMZA' } },
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
        subsections: [
          {
            heading: 'Crane removal when there is no room to work',
            paragraphs: [
              'Some large trees stand where there is no safe place to drop even small pieces, such as between a house and a garage. A crane lets the crew lift sections up and over instead. Crane work is listed as its own line on the written quote so you can see what it adds.',
            ],
          },
        ],
      },
    ],
    geography:
      'Greer is split between Greenville and Spartanburg counties, about 12 miles northeast of Greenville along US 29. Downtown Greer grew up around the railroad. The Greer Depot on Trade Street was built in 1913 by the Piedmont & Northern Railroad, and the Greer Heritage Museum sits in the former 1935 post office. Neighborhoods range from older streets near downtown to newer subdivisions where young trees are still filling in.',
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
    landmarks: ['Greenville-Spartanburg International Airport (GSP)', 'BMW plant on Highway 101 South', 'Greer Depot, 311 Trade Street', 'Greer Heritage Museum'],
    mainRoads: ['US 29', 'SC 101'],
    responseArea: 'Greer and nearby Taylors and Easley.',
    landmarkImage: { src: '/images/pages/landmarks/greer-depot.jpg', alt: 'The Greer Depot, a two-story brick railroad station with an orange tile roof and a GREER sign, beside a freight train with a CSX locomotive on the tracks', credit: { text: 'Greer Depot, Google Maps', url: 'https://maps.app.goo.gl/JCpM4CLsw76nhHXc7' } },
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
        subsections: [
          {
            heading: 'Shaping young trees in newer neighborhoods',
            paragraphs: [
              'Young trees planted close to a house grow toward the roof and gutters. A light trim while the tree is small sets its shape and takes less off than heavy cuts would later on.',
            ],
          },
        ],
      },
      {
        heading: 'One written quote for *the whole job*',
        paragraphs: [
          'If a removal leaves a stump, we can quote the grinding in the same visit. Ask about the cleanup during the estimate so the written quote lists it.',
        ],
        subsections: [
          {
            heading: 'Removal and stump grinding together',
            paragraphs: [
              'When a tree comes down, the stump is usually the next question. Grinding it in the same visit means one crew and one trip, and both jobs sit on one written quote.',
            ],
          },
        ],
      },
    ],
    geography:
      'Mauldin lies between Greenville and Simpsonville along Interstate 385. Butler Road runs from the city center on Main Street (US 276) out to the Exit 34 interchange. Lots range from newer subdivisions to larger wooded parcels on the edges of town, and the plan for each tree usually depends on how close it sits to the house.',
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
    landmarks: ['Mauldin Cultural Center (built by WPA crews, 1935 to 1937)', 'W. Jack Greer Branch library, 800 W Butler Road', 'Gosnell Cabin historical marker'],
    mainRoads: ['I-385', 'US 276 (Main Street)', 'Butler Road'],
    responseArea: 'Mauldin and nearby Simpsonville and Fountain Inn.',
    landmarkImage: { src: '/images/pages/landmarks/mauldin-cultural-center.jpg', alt: 'The Mauldin Cultural Center brick entrance sign with a stone base, in front of a brick building under a blue sky, with a flagpole beside it', credit: { text: 'Mauldin Cultural Center, Google Maps', url: 'https://maps.app.goo.gl/X7hke1QM5FFYLG328' } },
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
      {
        heading: 'A written quote *before any cutting*',
        paragraphs: [
          'Every job starts with a free site visit. We look at the tree, what sits near it, and how a crew can reach it. Then we put the method, the cleanup, and the price in writing so you can decide without pressure.',
        ],
        subsections: [
          {
            heading: 'What the quote lists',
            paragraphs: [
              'A Fountain Inn quote covers the whole job, not only the cutting:',
            ],
            bullets: [
              'Each tree and the work planned for it',
              'How the tree will be trimmed or taken down',
              'What happens to the brush, wood, and any grindings',
              'Stump grinding, if you ask for it',
            ],
          },
        ],
      },
    ],
    geography:
      'Fountain Inn is split between Greenville and Laurens counties, southeast of Simpsonville. Its downtown centers on the restored Ellison Flour Mill, and the Fountain Inn Museum sits on Depot Street. Work here ranges from yard trees beside the house to wooded lots at the edge of town.',
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
    landmarks: ['Ellison Flour Mill, built 1940 to 1941, on the National Register, restored as a brewery and food hall', 'Fountain Inn Museum, 102 Depot Street, with rotating exhibits on the town’s history', 'Commerce Park and farmers market', 'Cedar Falls Park'],
    mainRoads: ['I-385', 'SC 14', 'SC 418'],
    responseArea: 'Fountain Inn and nearby Simpsonville and Mauldin.',
    landmarkImage: { src: '/images/pages/landmarks/fountain-inn-museum.jpg', alt: 'The Fountain Inn Museum visitor center, a brick tower with a red roof and glass doors, beside a brick plaza and an antique steam engine', credit: { text: 'Fountain Inn Museum, Google Maps', url: 'https://maps.app.goo.gl/pNJdM6o3QwYvTMPm6' } },
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
      {
        heading: 'Sloped and *wooded lots*',
        paragraphs: [
          'A tree on a slope does not always fall the way it leans, and a crew needs safe footing to work. On the site visit we check the grade, the ground, and the route in for equipment before we settle on a method.',
        ],
        subsections: [
          {
            heading: 'When a tree sits above the house',
            paragraphs: [
              'Trees on the uphill side of a home get a closer look, because a limb or trunk that drops can roll or slide toward the house. We plan those cuts in smaller pieces and explain the method on the written quote.',
            ],
          },
        ],
      },
      {
        heading: 'Common *trees* in Travelers Rest yards',
        paragraphs: [
          'Yards in this part of the Upstate often have loblolly pines, oaks, tulip poplars, and sweetgums. Each one fails in its own way, so it helps to know what you have.',
        ],
        subsections: [
          {
            heading: 'Pines',
            paragraphs: [
              'Loblolly pine is one of the most common pines in South Carolina. Beetles tend to attack pines that are already stressed by drought, flooding, crowding, or storm damage. Pitch tubes on the trunk, needles turning reddish-brown, and small exit holes are signs to take seriously.',
            ],
          },
          {
            heading: 'Oaks',
            paragraphs: [
              'Oaks are common here, and Clemson lists water oak among the yard trees that often fail in storms. A look at the structure of a big oak is worth the time before storm season.',
            ],
          },
          {
            heading: 'Tulip poplars',
            paragraphs: [
              'Tulip poplar has thin bark that is easily injured and wood that rots quickly. Wounds and dead limbs on one are worth checking.',
            ],
          },
        ],
      },
      {
        heading: 'After heavy *rain and wind*',
        paragraphs: [
          'Wet ground is a big part of why trees fall. Water in saturated soil acts like a lubricant, so roots slip more easily when wind pushes on the tree. In much of the Piedmont there is also rock not far below the surface that roots cannot get through, so tall trees often do not have deep roots to hold them.',
          'Clemson says healthy trees can fail in a storm when the soil is saturated, the crown is heavy, or a limb is already weak. Properly pruned trees hold up better than unpruned or badly pruned ones.',
        ],
        subsections: [
          {
            heading: 'Thinning a heavy crown',
            paragraphs: [
              'A dense crown catches the wind. Thinning it, and removing weak or dead limbs, lowers the load on the tree. We do not top trees, because that leaves weak regrowth.',
            ],
          },
        ],
      },
      {
        heading: 'Tree rules in *Travelers Rest*',
        paragraphs: [
          'Travelers Rest has a chapter of its city code on trees, and most of it covers trees on public property, such as street and park trees. It makes topping those public trees unlawful, apart from exceptions the public works director can allow. In 2021 the city announced it had been named a Tree City USA, a national program for towns with a community forestry program.',
        ],
        subsections: [
          {
            heading: 'When a private tree becomes the city’s concern',
            paragraphs: [
              'The code lets the public works director order the removal of a tree on private property that is a public nuisance. That includes a tree that is dead or dying, diseased or infested, blocking street lights, signs, sidewalks, or the road, or a threat to safety. Owners get 15 days after notice, and if the work is not done, the city can do it and place the cost as a lien on the property.',
              'This chapter does not set a permit requirement for removing a healthy tree on your own lot. Other rules can still apply, so check with the city before work near the street.',
            ],
          },
        ],
      },
    ],
    geography:
      'Travelers Rest took its name from its days as a stopover for travelers and cattle drovers coming from Kentucky, North Carolina, and Tennessee on the road through the Upstate. The town was spelled Travellers Rest until the mid-1940s, when the postmaster officially changed the spelling.',
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
      {
        q: 'Why do trees fall after heavy rain in Travelers Rest?',
        a: 'Saturated soil loses its grip on roots, and in much of the Piedmont there is rock not far below the surface that roots cannot get through. Heavy crowns and weak limbs add to the load. Pruning before storm season can lower the risk.',
      },
      {
        q: 'How can I tell if a pine in my yard is in trouble?',
        a: 'Look for pitch tubes on the trunk, needles turning reddish-brown, and small exit holes. Beetles tend to attack pines already stressed by drought, flooding, crowding, or storm damage. If you see these signs, call us for a look.',
      },
      {
        q: 'Which trees are most likely to fail in a storm?',
        a: 'Clemson lists water oak, pecan, Bradford pear, maple, and pine among the yard trees that often fail in storms, while live oak, southern magnolia, and bald cypress hold up better. Structure and pruning matter as much as the species.',
      },
      {
        q: 'Do I need a permit to remove a tree in Travelers Rest?',
        a: 'The city’s tree chapter does not list a permit for removing a healthy tree on your own lot. It covers public trees and private trees that become a nuisance. Other rules, such as zoning or HOA covenants, can still apply, so check with the city before work starts.',
      },
      {
        q: 'Can the city make me remove a dead tree?',
        a: 'In some cases, yes. The city code lets the public works director order removal of a private tree that is dead or dying, diseased, blocking a sidewalk, street light, or the road, or a threat to safety. Owners get 15 days after notice to deal with it.',
      },
    ],
    nearby: [
      { slug: 'greer', name: 'Greer' },
      { slug: 'taylors', name: 'Taylors' },
    ],
    landmarks: ['History Museum of Travelers Rest, 3 Edwards Street, in a building from 1926 that began as a grocery store', 'Swamp Rabbit Trail, running north from Greenville to the northern end of town', 'Northernmost city in Greenville County, about 10 miles north of Greenville', 'Trailblazer Park'],
    mainRoads: ['US 25', 'US 276 (Main Street)'],
    responseArea: 'Travelers Rest and nearby Greer and Taylors.',
    landmarkImage: { src: '/images/pages/landmarks/travelers-rest-history-museum.jpg', alt: 'The History Museum of Travelers Rest, a small brick building with a lettered brick front and a wooden side, behind a metal railing and ramp, surrounded by tall trees', credit: { text: 'History Museum of Travelers Rest, Google Maps', url: 'https://maps.app.goo.gl/8qNHCHmYNn2i8KhH6' } },
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
        subsections: [
          {
            heading: 'Older trees on wooded lots',
            paragraphs: [
              'Older lots in Five Forks often have tall trees that were there long before the house. We check for dead limbs, decay at the base, and lean toward the roof, then tell you whether a trim will do or the tree needs to come down.',
            ],
          },
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
      'Five Forks is an unincorporated community in eastern Greenville County, north of Simpsonville and northeast of Mauldin. The name comes from five roads that meet there, and Woodruff Road is its main shopping corridor. Homes here sit on a mix of older wooded lots and newer subdivisions.',
    faqs: [
      {
        q: 'Is Five Forks inside the city of Greenville?',
        a: 'No. Five Forks is an unincorporated area of Greenville County, north of Simpsonville. We serve it from our Greenville base.',
      },
      {
        q: 'Do you remove trees on wooded lots in Five Forks?',
        a: 'Yes. Wooded lots can change the method and access, so we look at the site before we quote.',
      },
      {
        q: 'Can you grind a stump in Five Forks after a removal?',
        a: 'Yes. We can grind the stump in the same visit as the removal or come back for it on its own. The written quote lists the stump work so you can see it separately.',
      },
    ],
    nearby: [
      { slug: 'simpsonville', name: 'Simpsonville' },
      { slug: 'mauldin', name: 'Mauldin' },
    ],
    landmarks: ['Five Forks Library, Greenville County Library System', 'Five Forks Place shopping center on Woodruff Road'],
    mainRoads: ['Woodruff Road', 'SC 14'],
    responseArea: 'Five Forks and nearby Simpsonville and Mauldin.',
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
      {
        heading: 'How a *Powdersville* visit works',
        paragraphs: [
          'Call or send a request with your address first, so we can confirm we cover it. Then we set up a free site visit, look at each tree and what is near it, and send a written quote.',
        ],
        subsections: [
          {
            heading: 'What we look at on the visit',
            paragraphs: ['On the visit we check:'],
            bullets: [
              'How close the tree sits to the house, a fence, or lines',
              'Signs of decay, cracks, or dead wood',
              'Access for the crew and equipment',
              'Whether you want the stump ground',
            ],
          },
        ],
      },
    ],
    geography:
      'Powdersville is an unincorporated community in the northern corner of Anderson County. The Saluda River runs along its northeast edge and forms the Greenville County line, and the Pickens County line borders it to the northwest. Because it sits outside Greenville County, call us with your address so we can confirm the visit before you book.',
    faqs: [
      {
        q: 'Do you serve Powdersville, SC?',
        a: 'We serve Powdersville from our Greenville base. Call us with your address and we will confirm coverage and the earliest visit we can offer.',
      },
      {
        q: 'Is Powdersville in Greenville County?',
        a: 'No. Powdersville is in Anderson County. Call us to confirm the visit for your address.',
      },
      {
        q: 'Can you grind a stump in Powdersville?',
        a: 'Yes. Once we confirm your address is in our coverage, we can quote stump grinding with a removal or as its own job.',
      },
    ],
    nearby: [
      { slug: 'five-forks', name: 'Five Forks' },
      { slug: 'simpsonville', name: 'Simpsonville' },
    ],
    landmarks: ['Dolly Cooper Park on the Saluda River', 'Bethesda Church, founded 1833'],
    mainRoads: ['SC 153'],
    responseArea: 'Powdersville and nearby Five Forks and Simpsonville. Call us with your address first, since Powdersville is in Anderson County.',
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
      {
        heading: 'Trees that have grown *close to the house*',
        paragraphs: [
          'A tree planted decades ago can end up with limbs over the roof and roots near the foundation. We look at how close it sits and what it could hit, then explain whether trimming buys time or removal is the safer call.',
        ],
        subsections: [
          {
            heading: 'Clearing part of a wooded parcel',
            paragraphs: [
              'If you want part of a wooded lot opened up for a yard or a project, walk it with us and point out the trees you want to keep. We quote around them and list how the brush and wood will be handled.',
            ],
          },
        ],
      },
    ],
    geography:
      'Berea is an unincorporated community in Greenville County, northwest of downtown Greenville. It takes in neighborhoods such as Westcliffe and White Horse Heights. Its wooded parcels and established yards mean the right plan for each tree often depends on the lot, the access, and how close the tree has grown to the house.',
    faqs: [
      {
        q: 'Is Berea inside Greenville city limits?',
        a: 'No. Berea is an unincorporated part of Greenville County. We serve it from our Greenville base.',
      },
      {
        q: 'Can you remove a large tree on a Berea lot?',
        a: 'Often, yes. Tell us the tree size, the access, and what it is near. We will explain the method on the visit.',
      },
      {
        q: 'How do I request an estimate in Berea?',
        a: 'Call us or use the contact page and tell us where the tree is and what it is near. We set up a free site visit and send the quote in writing.',
      },
    ],
    nearby: [
      { slug: 'greer', name: 'Greer' },
      { slug: 'taylors', name: 'Taylors' },
    ],
    landmarks: ['Sarah Dobey Jones Berea Branch library, N Highway 25 Bypass', 'Old Berea School site on White Horse Road'],
    mainRoads: ['US 25 Bypass', 'White Horse Road'],
    responseArea: 'Berea and nearby Greer and Taylors.',
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
      {
        heading: 'When trimming is *enough*',
        paragraphs: [
          'Not every big tree needs to come down. Thinning the canopy, lifting low limbs, and cutting out dead wood can make a healthy tree safer to live with. We tell you plainly when that is the better choice.',
        ],
        subsections: [
          {
            heading: 'Signs a tree may need more than a trim',
            paragraphs: ['These are worth a closer look on the site visit:'],
            bullets: [
              'Large dead limbs or bare sections of canopy',
              'Cracks in the trunk or a split at the main fork',
              'Mushrooms or soft wood at the base',
              'A new lean after a storm',
            ],
          },
        ],
      },
    ],
    geography:
      'Wade Hampton is an unincorporated community in central Greenville County, named for the Civil War general and South Carolina governor. The city of Greenville borders it to the southwest and Taylors lies to the northeast, with Wade Hampton Boulevard (US 29) running through both. Older streets near the boulevard often have mature shade trees close to the house.',
    faqs: [
      {
        q: 'Is Wade Hampton part of the city of Greenville?',
        a: 'No. Wade Hampton is an unincorporated community in Greenville County. We serve it from our Greenville base.',
      },
      {
        q: 'How do I get an estimate in Wade Hampton?',
        a: 'Call us or send a request on our contact page. The visit is free and the quote is in writing.',
      },
      {
        q: 'Do you grind stumps in Wade Hampton?',
        a: 'Yes. We can grind a stump in the same visit as a removal or as a separate job. Ask for it on your request and it will show as its own line on the written quote.',
      },
    ],
    nearby: [
      { slug: 'taylors', name: 'Taylors' },
      { slug: 'berea', name: 'Berea' },
    ],
    mainRoads: ['US 29 (Wade Hampton Blvd)'],
    responseArea: 'Wade Hampton and nearby Taylors and Berea.',
  },

  {
    slug: 'piedmont',
    image: { src: '/images/pages/tree-removal-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with brick homes and mature trees' },
    name: 'Piedmont',
    county: 'Anderson and Greenville counties',
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
      {
        heading: 'Older trees beside *older homes*',
        paragraphs: [
          'Trees around older Piedmont houses have had decades to grow. Roots can reach under walkways, and limbs can spread over the roof. We look at both on the site visit and tell you what each tree needs.',
        ],
        subsections: [
          {
            heading: 'Trimming that keeps the roof clear',
            paragraphs: [
              'Limbs that rest on shingles or fill gutters wear a roof down over time. We cut them back to a healthy point on the tree so they stay clear longer.',
            ],
          },
        ],
      },
      {
        heading: 'Trees along the *Saluda River*',
        paragraphs: [
          'Piedmont sits on the Saluda River. Anderson County’s Piedmont Riverfront Park, a 21-acre park off River Road, has a kayak launch, a half-mile nature trail, and a picnic shelter. The county describes the site as river bluffs and protected wetlands where the Saluda meets Big Brushy Creek.',
          'Land near water means wet ground, and wet ground is hard on trees. When soil is saturated, water acts like a lubricant, so roots can slip when wind pushes on a heavy tree.',
        ],
        subsections: [
          {
            heading: 'What we check near the water',
            paragraphs: [
              'On a lot near the river or a creek, we look at the slope, how wet the ground is, and how heavy the crown is. A big tree on soft ground gets a closer look than the same tree on dry, level ground.',
            ],
          },
        ],
      },
      {
        heading: 'Which *county’s rules* apply',
        paragraphs: [
          'Piedmont is split between Anderson and Greenville counties, so the rules depend on which side of the line your lot is on. Greenville County’s tree preservation rules, as drafted, are aimed at new development that needs a grading permit.',
          'Check with the Anderson County or Greenville County planning office before removing a tree, and check your HOA rules if you have an HOA. Tell us what you find and we will plan around it.',
        ],
      },
    ],
    geography:
      'Piedmont is an unincorporated community on the Saluda River, split between Anderson and Greenville counties, about 11 miles from downtown Greenville. It grew up around the Piedmont Manufacturing Company, which built its first textile mill at the river shoals in 1873. Call us with your address so we can confirm the visit before you book.',
    faqs: [
      {
        q: 'Do you serve Piedmont, SC?',
        a: 'Piedmont is at the edge of our service area. Call us with your address and we will confirm coverage and the earliest visit.',
      },
      {
        q: 'Is Piedmont in Greenville County?',
        a: 'Partly. Piedmont sits on the Saluda River, and the community is split between Anderson and Greenville counties. Call us with your address and we will confirm the visit.',
      },
      {
        q: 'What should I tell you when I call about a Piedmont tree?',
        a: 'Give us your address first so we can confirm coverage. Then tell us where the tree is, what it is near, and whether it is leaning, cracked, or dropping limbs. That helps us plan the site visit.',
      },
      {
        q: 'Which county’s rules apply to a tree on my Piedmont lot?',
        a: 'Piedmont is split between Anderson and Greenville counties, so it depends on which side of the line your lot is on. Greenville County’s tree preservation rules, as drafted, are aimed at new development that needs a grading permit. Check with your county planning office before work starts.',
      },
      {
        q: 'Do trees near the Saluda River need special care?',
        a: 'Wet ground and sloped banks make roots less secure. In saturated soil, water acts like a lubricant, so a heavy tree can slip when wind pushes on it. We look at the slope, the soil, and the crown before we plan the work.',
      },
    ],
    nearby: [
      { slug: 'powdersville', name: 'Powdersville' },
      { slug: 'berea', name: 'Berea' },
    ],
    landmarks: ['Piedmont Number One mill site (National Historic Landmark, 1978)', 'Saluda River dam through the center of town'],
    responseArea: 'Piedmont and nearby Powdersville and Berea. Call us with your address first.',
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
      {
        heading: 'Trees at the *edge of the yard*',
        paragraphs: [
          'On a wooded lot, the trees most likely to cause trouble are often the ones at the tree line, leaning toward the open yard or the house. We check those first and tell you which ones need attention now and which can wait.',
        ],
        subsections: [
          {
            heading: 'Chips and wood on larger lots',
            paragraphs: [
              'On a bigger property there may be room to leave chips along the tree line or stack wood for later. Tell us what you want, and the written quote will say what stays and what we haul off.',
            ],
          },
        ],
      },
    ],
    geography:
      'Pickens is the county seat of Pickens County, about 18 miles from downtown Greenville. Hagood Mill, a gristmill built in 1845, stands about 3 miles north of town on US 178. Give us your address when you call, and we will confirm the visit before you book.',
    faqs: [
      {
        q: 'Do you serve Pickens, SC?',
        a: 'Pickens is outside the core of our service area. Call us with your address and we will confirm coverage and the earliest visit.',
      },
      {
        q: 'Is Pickens in Greenville County?',
        a: 'No. Pickens is the county seat of Pickens County.',
      },
      {
        q: 'Can you remove a dead tree on a wooded lot in Pickens?',
        a: 'Often, yes. Dead trees can drop limbs without warning, so we look at what the tree could hit and how a crew can reach it. Call with your address first so we can confirm coverage.',
      },
    ],
    nearby: [
      { slug: 'easley', name: 'Easley' },
      { slug: 'piedmont', name: 'Piedmont' },
    ],
    landmarks: ['Hagood Mill on US 178 (National Register, 1972)'],
    mainRoads: ['US 178'],
    responseArea: 'Pickens and nearby Easley and Piedmont. Call us with your address first.',
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
      {
        heading: 'Mature trees on *larger lots*',
        paragraphs: [
          'Bigger yards often mean bigger trees, set farther from the house but sometimes close to a shed, fence, or driveway. We look at each one on the visit and explain whether it needs a trim, a removal, or no work at all for now.',
        ],
        subsections: [
          {
            heading: 'Planning one trip for several trees',
            paragraphs: [
              'Because Woodruff is at the edge of our area, it often makes sense to handle several trees in one visit. List everything you want looked at when you call, and we will put it all on one written quote.',
            ],
          },
        ],
      },
    ],
    geography:
      'Woodruff is in the southwestern part of Spartanburg County, about 22 miles from downtown Greenville. US 221, SC 101, and SC 146 come together in town and run through downtown as Main Street. SC 146 is the same road Greenville drivers know as Woodruff Road. Call before you book so we can confirm the crew can reach your address.',
    faqs: [
      {
        q: 'Do you serve Woodruff, SC?',
        a: 'Woodruff is at the edge of our service area. Call with your address and we will confirm coverage and the earliest visit.',
      },
      {
        q: 'Is Woodruff in Greenville County?',
        a: 'No. Woodruff is in Spartanburg County.',
      },
      {
        q: 'Do you grind stumps in Woodruff?',
        a: 'Yes. Stump grinding can go on the same written quote as a removal, or be quoted on its own after we confirm we can reach your address.',
      },
    ],
    nearby: [
      { slug: 'greer', name: 'Greer' },
      { slug: 'fountain-inn', name: 'Fountain Inn' },
    ],
    landmarks: ['McKinney Park, downtown', 'Woodruff City Hall'],
    mainRoads: ['US 221', 'SC 101', 'SC 146 (Main Street)'],
    responseArea: 'Woodruff and nearby Greer and Fountain Inn. Call us with your address first.',
  },
];

export function areaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
