// Service page content. Launch set: the 7 services in knowledge/research/site-architecture.md section 1.
// First-draft copy written from context/core/*.json. The owner edits before launch (playbook: "Clifton edits before it ships").
// Rules: plain periods, no em dashes, no "guaranteed", no "cheap", no urgency pressure, no unsourced prices, no credentials.
import type { Service } from '@/data/types';

export const services: Service[] = [
  {
    slug: 'tree-removal',
    image: { src: '/images/pages/tree-removal.jpg', alt: 'Illustration of two tree crew members using ropes to lower a cut section of a large oak beside a suburban house' },
    name: 'Tree Removal',
    icon: 'tree',
    title: 'Tree Removal in Greenville, SC | Greenville Tree & Stump',
    metaDescription:
      'Safe tree removal in Greenville, SC for dangerous, dead, or unwanted trees. Free written estimate, and we clean the yard before we leave. Call us today.',
    h1: 'Tree Removal in Greenville, SC',
    lead:
      'Tree removal service in Greenville, South Carolina, for trees that are dangerous, dead, or in the wrong place. We come out for a free site visit, give you a written quote, and clean up before we leave.',
    summary: 'Safe removal of dangerous, dead, or unwanted trees, with a free written estimate first.',
    sections: [
      {
        heading: 'When a tree needs to *come down*',
        paragraphs: [
          'Some trees can be saved with pruning. Others cannot. A tree is never worth the risk of a fall, so when the tree is a hazard, we would rather tell you plainly and handle it.',
          'Common reasons homeowners call us for removal:',
        ],
        bullets: [
          'A tree leaning toward the house, a garage, or a fence',
          'A dead or dying tree, often with little or no new growth',
          'A split trunk or large cracks in the main limbs',
          'Storm damage that left the tree unstable',
          'Roots lifting a driveway, sidewalk, or foundation',
          'A tree crowding a roof, power line, or structure',
        ],
      },
      {
        heading: 'Crane removal for *large* or hard-to-reach trees',
        paragraphs: [
          'Some trees are too large or too close to the house to take down in sections by hand. For those jobs, we can use crane-assisted removal, which lifts sections out so they do not land on what you want to keep.',
          'Crane work costs more than a standard removal. We will explain whether a crane is needed during the site visit, and the written quote will show it as its own line.',
        ],
      },
      {
        heading: 'What happens to the *stump* and the yard',
        paragraphs: [
          'A removed tree leaves a stump. If you want the stump gone too, we can grind it down. See our stump grinding page for how that works. Ask us for both on one quote if you want one visit and one bill.',
          'We clean up the work area before we leave. Ask during your estimate what is included with the wood and brush, so the written quote is clear about it.',
        ],
      },
    ],
    steps: [
      { title: 'Free site visit', text: 'We look at the tree, the target area, and the access. We explain what we see in plain language.' },
      { title: 'Written quote', text: 'You get a written quote with the scope, the method, and the cleanup spelled out before any work starts.' },
      { title: 'Removal and cleanup', text: 'We take the tree down, clear the work area, and leave the yard cleaner than we found it.' },
    ],
    faqs: [
      {
        q: 'How much does tree removal cost in Greenville?',
        a: 'Every job is different. Height, location, access, and whether a crane is needed all change the price. Our estimate is free and comes as a written quote. For general ranges, see our tree removal cost page.',
      },
      {
        q: 'Is the estimate really free?',
        a: 'Yes. The site visit and the written quote cost you nothing, and there is no pressure to decide on the spot.',
      },
      {
        q: 'Will you cut the tree in pieces or drop it whole?',
        a: 'That depends on the tree, the space around it, and what is nearby. We will tell you which method we plan to use and why during the site visit.',
      },
      {
        q: 'Do you need a permit to remove a tree?',
        a: 'It depends on where the property is and the type of tree. Check with your city or county before work starts. Tell us about any local rules you know of, and we will point you toward the right office.',
      },
      {
        q: 'Can you come out quickly if a tree is already down?',
        a: 'If a tree is down or leaning dangerously, call us right away. We will tell you the earliest visit we can offer. We do not promise dates we cannot keep. If the tree is touching a power line, stay clear and call your power company or 911.',
      },
    ],
    related: [
      { slug: 'emergency-tree-removal', anchor: 'emergency tree removal' },
      { slug: 'tree-removal-cost', anchor: 'tree removal cost' },
      { slug: 'stump-grinding', anchor: 'stump grinding' },
      { slug: 'land-clearing', anchor: 'land clearing' },
    ],
    ctaHeading: 'Ready for a free estimate on a tree removal?',
    ctaText: 'Tell us about the tree. We will call you back to set up a free site visit.',
  },

  {
    slug: 'tree-trimming',
    image: { src: '/images/pages/tree-trimming.jpg', alt: 'Illustration of an arborist on a ladder trimming limbs near a roofline with a pole saw' },
    name: 'Tree Trimming and Pruning',
    icon: 'saw',
    title: 'Tree Trimming in Greenville, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree trimming and pruning in Greenville, SC to clear overgrown branches and keep trees healthy and safe. Free written estimate. We clean up before we leave.',
    h1: 'Tree Trimming and Pruning in Greenville, SC',
    lead:
      'Tree trimming and pruning service in Greenville, South Carolina, to clear overgrown branches, lift limbs off the roof, and keep healthy trees safe. We give you a free written estimate before any cutting starts.',
    summary: 'Clear overgrown branches and keep healthy trees safe. Free written estimate.',
    sections: [
      {
        heading: 'Why *pruning* matters',
        paragraphs: [
          'Pruning is cutting branches back so the tree stays healthy and the branches stay away from the house, power lines, and walkways. The right cuts help a tree grow in a balanced shape and make it less likely to drop a heavy limb in a storm.',
          'Good pruning is about the tree, not only the look. We cut to the branch collar where it makes sense, and we avoid cutting more than the tree can handle in one season.',
        ],
      },
      {
        heading: 'Common *trimming* jobs',
        paragraphs: ['Homeowners call us for trimming in a few common situations:'],
        bullets: [
          'Limbs hanging over the roof, gutters, or a driveway',
          'Branches rubbing on the house or a fence',
          'Dead wood that could fall on people or property',
          'Crowded canopies that block light or air',
          'Young trees that need a shape before they get large',
        ],
      },
      {
        heading: 'Trees we see often in the *Upstate*',
        paragraphs: [
          'Greenville yards often have water oaks, loblolly pines, Bradford pears, and sweetgums. Each grows differently and breaks differently. Bradford pears in particular can split at the crotch as they age, which is why a periodic look is worth the time.',
          'Tell us what kind of tree you have at the start. It helps us plan the cuts and the timing.',
        ],
      },
      {
        heading: 'Routine trimming and *planning ahead*',
        paragraphs: [
          'Not every trim is urgent. If you want to plan one season ahead, we can look at the tree, note what it needs, and give you a written quote you can schedule when it suits you. One company to call for later trims is one of the simplest ways to keep a yard in order.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between trimming and pruning?',
        a: 'In everyday use, they mean the same thing: cutting branches to shape a tree, clear space, or remove hazards. Pruning often refers to cuts made for the tree’s health. We will explain which cuts your tree needs.',
      },
      {
        q: 'How often should a tree be trimmed?',
        a: 'It depends on the species, its age, and how close it grows to the house. A tree that rubs the roof or drops limbs needs attention sooner. Ask us during a site visit and we will give you a plain answer.',
      },
      {
        q: 'Will trimming hurt my tree?',
        a: 'Poor cuts can. Heavy or wrong cuts can stress a tree for years. We keep cuts small where we can and avoid taking off too much of the crown at once.',
      },
      {
        q: 'Do you clean up after trimming?',
        a: 'We clean up the work area before we leave. Ask during the estimate what is included with the brush, so the written quote is clear.',
      },
    ],
    related: [
      { slug: 'arborist', anchor: 'arborist services' },
      { slug: 'tree-removal', anchor: 'tree removal' },
    ],
    ctaHeading: 'Need a trim before the next storm?',
    ctaText: 'Send us a few details and we will call you back to set up a free site visit.',
  },

  {
    slug: 'stump-grinding',
    image: { src: '/images/pages/stump-grinding.jpg', alt: 'Illustration of a stump grinder working on a stump in a neat front yard, wood chips flying' },
    name: 'Stump Grinding',
    icon: 'stump',
    title: 'Stump Grinding in Greenville, SC | Greenville Tree & Stump',
    metaDescription:
      'Stump grinding in Greenville, SC to clear old stumps from your yard. Free written estimate, and we clean up the grindings before we leave. Call today.',
    h1: 'Stump Grinding in Greenville, SC',
    lead:
      'Stump grinding service in Greenville, South Carolina, for stumps left after a tree comes down. We grind the stump, clean up the work area, and give you a free written quote before we start.',
    summary: 'Grind old stumps out of the yard so you can use the space again.',
    sections: [
      {
        heading: 'Why *grind* a stump',
        paragraphs: [
          'A stump is a tripping hazard and it attracts pests and fungus. It also takes up space you may want for a garden, a patio, or a lawn. Grinding it down clears the spot so you can plant, build, or seed.',
          'If the tree came down in a storm or was removed by someone else, a stump can stay for years. We can grind it whenever you are ready.',
        ],
      },
      {
        heading: 'How our *stump grinding* works',
        paragraphs: [
          'We look at the stump, its size, how close it is to the house or a fence, and what is buried around it. Roots and nearby structures change the method and the price, so we check them on the site visit.',
          'The written quote lists the stump, the work area, and the cleanup. Ask us about the grindings and the soil before you sign if you want a specific finish.',
        ],
      },
      {
        heading: 'Stumps and *nearby work*',
        paragraphs: [
          'Many homeowners want the tree removed and the stump ground in one visit. That saves a second trip and makes the whole job one bill. Ask for the two together on your estimate request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does stump grinding cost?',
        a: 'Price depends on the size of the stump, its location, and how much root work is involved. Your estimate is free and comes as a written quote.',
      },
      {
        q: 'Can you grind a stump near the house or a fence?',
        a: 'Often, yes, but it depends on the space and what is underground. We will tell you during the site visit whether a safe grind works in that spot.',
      },
      {
        q: 'What do you do with the wood chips?',
        a: 'Ask during your estimate. We will say what is included with the grindings and the cleanup, so there are no surprises on the bill.',
      },
      {
        q: 'Can you remove the tree and grind the stump together?',
        a: 'Yes. Ask for both on one request. One visit and one written quote usually works best.',
      },
    ],
    related: [
      { slug: 'tree-removal', anchor: 'tree removal' },
      { slug: 'land-clearing', anchor: 'land clearing' },
    ],
    ctaHeading: 'Want the stump gone?',
    ctaText: 'Tell us where the stump is. We will call you back to set up a free visit.',
  },

  {
    slug: 'arborist',
    image: { src: '/images/pages/arborist.jpg', alt: 'Illustration of a large tree trunk and root flare with textured bark at its base' },
    name: 'Arborist Services',
    icon: 'clipboard',
    title: 'Arborist in Greenville, SC | Greenville Tree & Stump',
    metaDescription:
      'Tree assessments in Greenville, SC for health and hazards, with a plain recommendation on what your tree needs. Free written estimate. Call today.',
    h1: 'Arborist Services in Greenville, SC',
    lead:
      'Professional tree assessment in Greenville, South Carolina. We check a tree’s health and hazards, then tell you in plain language what it needs: keep it, trim it, or remove it.',
    summary: 'An honest look at a tree’s health and hazards, with a plain recommendation.',
    sections: [
      {
        heading: 'What an *assessment* covers',
        paragraphs: [
          'We look at the trunk, the root flare, the main limbs, the canopy, and the ground around the tree. We check for signs of decay, cracks, dead wood, root damage, and lean. We also look at the targets: the house, the driveway, and anywhere people walk or park.',
        ],
        bullets: [
          'Overall health and vigor',
          'Structural problems such as cracks, cavities, and weak unions',
          'Hazards to people and property',
          'Recommended work with a clear order of priority',
        ],
      },
      {
        heading: 'Why a *second opinion* helps',
        paragraphs: [
          'Many homeowners are told a tree must come down when it can be saved, or that it is fine when it is not. A plain assessment gives you facts to decide with, and you are not pressured to do the work.',
          'If we recommend removal, we will say so. If a tree can be saved with pruning or cabling, we will tell you that too.',
        ],
      },
      {
        heading: 'Commercial and *HOA* properties',
        paragraphs: [
          'We also assess trees on commercial and HOA properties, where liability and tenant safety matter. The assessment is written up so you can share it with an owner, board, or insurer. Each property is quoted separately.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What do you give me after an assessment?',
        a: 'A written summary of what we found, the risks we see, and the work we recommend. You can keep it for your records.',
      },
      {
        q: 'Do you have certifications?',
        a: 'We will tell you about the credentials held by the crew doing your work when you ask. We do not list credentials on this site until they are confirmed.',
      },
      {
        q: 'Is an assessment free?',
        a: 'Our site visit and written quote are free. Ask during the call what is included in the assessment you need.',
      },
    ],
    related: [
      { slug: 'tree-trimming', anchor: 'tree trimming and pruning' },
      { slug: 'tree-removal', anchor: 'tree removal' },
    ],
    ctaHeading: 'Not sure what your tree needs?',
    ctaText: 'Describe the tree and we will call you back to set up a free site visit.',
  },

  {
    slug: 'emergency-tree-removal',
    image: { src: '/images/pages/emergency-tree-removal.jpg', alt: 'Illustration of a fallen oak limb across a suburban driveway after a storm' },
    name: 'Emergency Tree Removal',
    icon: 'storm',
    title: 'Emergency Tree Removal | Greenville Tree & Stump',
    metaDescription:
      'Emergency tree removal in Greenville, SC after storm damage. A tree on the house, in the yard, or leaning dangerously. Call us, then we confirm the plan.',
    h1: 'Emergency and Storm Tree Removal in Greenville, SC',
    lead:
      'Storm damage in Greenville, South Carolina? If a tree is down, leaning dangerously, or on your home, call us. We will tell you the earliest visit we can offer and what to do until we arrive.',
    summary: 'Removal of trees that are down or leaning dangerously after a storm.',
    sections: [
      {
        heading: 'If a tree is on a power line, *call the utility first*',
        paragraphs: [
          'Do not go near a tree that touches a power line. Stay clear, keep others away, and call your power company or 911. Do not try to cut the tree or the line yourself. Once the utility confirms it is safe, call us.',
        ],
      },
      {
        heading: 'What to do *until we arrive*',
        paragraphs: [
          'Keep people and pets away from the tree and the area under any loose limbs. Do not climb onto a roof to look at a tree. If the tree is on the house, leave the house if it is unsafe to be inside. Take photos from a safe spot for your insurance claim.',
          'A one-page storm damage checklist covers these steps in more detail. Ask for it when you call.',
        ],
      },
      {
        heading: 'What we do on an *emergency* call',
        paragraphs: [
          'We come out to look at the tree, the damage, and the access. We will tell you what we can safely do first and what needs more time. We do not promise a date we cannot keep, and we do not pressure you to decide on the spot.',
          'Storm work can change fast. We will give you a written quote for the work, including what is needed to clear the area and how the cleanup will be handled.',
        ],
      },
      {
        heading: 'Insurance and *storm claims*',
        paragraphs: [
          'Your insurance company may need photos, dates, and a written quote before work starts. Tell us if the claim is open. We will put the scope and the price in writing so you have what you need.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How fast can you respond after a storm?',
        a: 'Call us and we will tell you the earliest visit we can offer. Response times change with the number of calls after a storm. We will not promise a time we cannot keep.',
      },
      {
        q: 'What if the tree fell on my house?',
        a: 'Make sure everyone is safe and leave the house if it is unsafe. Call your insurance company and us. We can work with your insurer on the scope and the photos.',
      },
      {
        q: 'Do you give a written quote for emergency work?',
        a: 'Yes. Even for storm work, you get a written quote before we start the main job so you know the scope and the price.',
      },
      {
        q: 'Is emergency removal more expensive?',
        a: 'Emergency work can cost more because of timing, access, and the amount of cleanup. The written quote shows the price before any main work begins.',
      },
    ],
    related: [
      { slug: 'tree-removal', anchor: 'tree removal' },
      { slug: 'stump-grinding', anchor: 'stump grinding' },
    ],
    extraLinks: [{ href: '/contact', anchor: 'contact us' }],
    ctaHeading: 'Tree down or leaning? Call now.',
    ctaText: 'If it is safe to call from where you are, call us. If a line is involved, call the power company first.',
  },

  {
    slug: 'tree-removal-cost',
    image: { src: '/images/pages/removal-cost.jpg', alt: 'Illustration of a homeowner and an estimator looking up at a large oak in a backyard' },
    name: 'Tree Removal Cost',
    icon: 'dollar',
    title: 'Tree Removal Cost, Greenville SC | Greenville Tree & Stump',
    metaDescription:
      'What tree removal and trimming cost in Greenville, SC, with the factors that change the price. Free written estimate for your exact tree. Call us.',
    h1: 'Tree Removal Cost in Greenville, SC',
    lead:
      'What tree removal in Greenville, South Carolina costs, and what changes the price. Every tree is different, so the number that matters is the one on your written quote.',
    summary: 'Typical ranges and the factors that move the price, with a free written quote for your tree.',
    sections: [
      {
        heading: 'Typical *price ranges*',
        paragraphs: [
          'The ranges below are market benchmarks for tree work by size. They are not a quote. Your price depends on the tree, the site, and the work you need.',
        ],
        subsections: [
          {
            heading: 'Trimming, by tree height',
            paragraphs: [],
            bullets: [
              'Under 25 feet: about $75 to $450',
              '25 to 50 feet: about $150 to $600',
              '50 to 75 feet: about $300 to $1,000',
              'Over 75 feet: about $700 to $2,000 or more',
            ],
          },
          {
            heading: 'Removal, by tree height',
            paragraphs: [],
            bullets: [
              'Under 25 feet: about $150 to $500',
              '25 to 50 feet: about $450 to $1,200',
              '50 to 75 feet: about $800 to $1,500',
              'Over 75 feet: about $1,000 to $2,500 or more',
            ],
          },
        ],
      },
      {
        heading: 'What *changes* the price',
        paragraphs: ['Four things move the number more than any other:'],
        bullets: [
          'Height and trunk width',
          'How close the tree is to the house, a fence, a power line, or a driveway',
          'Access: tight yards and slopes take more time and care',
          'Extras such as crane work, stump grinding, hauling, and cleanup',
        ],
      },
      {
        heading: 'How to *compare quotes* fairly',
        paragraphs: [
          'Compare written quotes with the same scope. Check what is included: the method, the cleanup, the wood and brush, and any stump work. A low number with no scope is harder to trust than a fair number with the details written out.',
          'Ask every company whether they carry proof of insurance and whether the quote covers the crew on site. We will show you ours on request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why do two removal quotes for the same tree differ so much?',
        a: 'Scope, access, method, and cleanup change the price. Compare the written scope line by line.',
      },
      {
        q: 'Do you charge for the estimate?',
        a: 'No. The site visit and the written quote are free.',
      },
      {
        q: 'Do you require payment before the work?',
        a: 'Ask us about payment terms during the estimate. We will put them in writing with the quote so there are no surprises.',
      },
    ],
    related: [
      { slug: 'tree-removal', anchor: 'tree removal' },
      { slug: 'tree-trimming', anchor: 'tree trimming' },
      { slug: 'stump-grinding', anchor: 'stump grinding' },
      { slug: 'emergency-tree-removal', anchor: 'emergency tree removal' },
    ],
    ctaHeading: 'Get a price for your tree',
    ctaText: 'The number that counts is the one on your written quote. It is free, and there is no pressure to decide on the spot.',
  },

  {
    slug: 'land-clearing',
    image: { src: '/images/pages/land-clearing.jpg', alt: 'Illustration of a cleared wooded lot with brush piles and standing pines in the Upstate hills' },
    name: 'Land Clearing',
    icon: 'land',
    title: 'Land Clearing in Greenville, SC | Greenville Tree & Stump',
    metaDescription:
      'Land and lot clearing in Greenville, SC. Trees and brush cleared from your property with a free written estimate and cleanup before we leave. Call today.',
    h1: 'Land and Lot Clearing in Greenville, SC',
    lead:
      'Land clearing service in Greenville, South Carolina, for trees and brush on a lot or property. We walk the land with you, give you a free written quote, and clean up before we leave.',
    summary: 'Clear trees and brush from a lot or property, with a free written estimate.',
    sections: [
      {
        heading: 'Clearing a *lot* before you build or plant',
        paragraphs: [
          'Lots often need clearing before a house, a driveway, a garden, or a pasture. We clear the trees and brush you want gone and leave the areas you want kept.',
          'Walk the property with us before you call, if you can. Mark the trees you want to keep and the boundaries. It helps the quote and the work.',
        ],
      },
      {
        heading: 'Forestry *mulching* and other options',
        paragraphs: [
          'Depending on the lot and what you plan to do with it, forestry mulching may be an option for brush and small trees. We will tell you during the site visit whether it fits your land.',
        ],
      },
      {
        heading: 'Commercial and *HOA* lots',
        paragraphs: [
          'Clearing for commercial, HOA, or development work is quoted per property. Tell us about the timeline, the access, and any county or HOA rules that apply.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you need the trees to be removed or cut down first?',
        a: 'No. We clear the whole area as part of the written quote. Tell us what you want kept.',
      },
      {
        q: 'Can you clear a lot with limited access?',
        a: 'Maybe. Access changes the method and the price. We will look at it during the site visit.',
      },
      {
        q: 'Do I need a permit to clear land?',
        a: 'It depends on the county, the size of the lot, and what is planned. Check with the county before clearing. We can tell you what we have seen work on similar jobs.',
      },
    ],
    related: [
      { slug: 'stump-grinding', anchor: 'stump grinding' },
      { slug: 'tree-removal', anchor: 'tree removal' },
    ],
    ctaHeading: 'Planning to clear a lot?',
    ctaText: 'Tell us about the property and what you plan to do with it. We will call you back to set up a free visit.',
  },
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
