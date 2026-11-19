// Service page content. Launch set: the 7 services in knowledge/research/site-architecture.md section 1.
// First-draft copy written from context/core/*.json. The owner edits before launch (playbook: "Clifton edits before it ships").
// Rules: plain periods, no em dashes, no "guaranteed", no "cheap", no urgency pressure, no unsourced prices, no credentials.
import type { Service } from '@/data/types';

export const services: Service[] = [
  {
    slug: 'tree-removal',
    image: { src: '/images/pages/tree-removal-street.jpg', alt: 'Illustration of a quiet tree-lined residential street with brick homes and a freshly cut stump on the lawn after a large oak was removed' },
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
        imageSide: 'left',
        image: { src: '/images/pages/bucket-truck-tree.webp', alt: 'A white Greenville Tree & Stump Removal bucket truck parked on gravel beside a brick two-story home, with a crew member in the bucket working high in a large oak' },
      },
      {
        heading: 'What happens to the *stump* and the yard',
        paragraphs: [
          'A removed tree leaves a stump. If you want the stump gone too, we can grind it down. See our stump grinding page for how that works. Ask us for both on one quote if you want one visit and one bill.',
          'We clean up the work area before we leave. Ask during your estimate what is included with the wood and brush, so the written quote is clear about it.',
        ],
      },
      {
        heading: 'Warning signs worth a *closer look*',
        paragraphs: [
          'Not every sign means the tree has to come down. Many problems can be fixed by pruning out the damaged part, and a lean that has been there for years is different from a sudden one. Tree-care groups tell homeowners to take these signs seriously:',
        ],
        bullets: [
          'A sudden lean, or soil cracking or lifting at the base of a leaning tree',
          'A crack that splits the main trunk',
          'Mushrooms or other fungus at the base, which can point to rotten roots',
          'Large hollows or decayed, peeling areas on the trunk',
          'Dead or rotten branches over the house, driveway, or yard',
          'A trunk that forks into two stems of similar size, which can split',
        ],
      },
      {
        heading: 'How a tree *comes down*',
        paragraphs: [
          'The method depends on the space around the tree. With open ground, a tree may be cut and dropped in sections, or felled whole if there is room. Where a house, fence, or wires are close, the crew cuts it in pieces and lowers each piece on ropes. For the largest trees, a crane lifts the pieces out.',
          'If branches or the trunk are within 10 feet of a power line, call your utility first. Duke Energy says only line-clearance-qualified crews should work that close.',
        ],
      },
      {
        heading: 'Rules that *may apply*',
        paragraphs: [
          'Tree rules differ by city and county, and they change. In unincorporated Greenville County, the tree preservation rules as drafted are aimed at new development that needs a grading permit. Trees in the road right-of-way are handled by the county Public Works Division, so do not cut one yourself.',
          'Check with your city or county before work starts, and check your HOA rules if you have an HOA. Tell us what you find and we will plan around it.',
        ],
        subsections: [
          {
            heading: 'Replacing a Bradford pear',
            paragraphs: [
              'Clemson has run a Bradford Pear Bounty that swaps up to five Bradford pears for free native trees. The property owner registers in person with a photo of the cut-down tree. Check Clemson Extension for current event dates.',
            ],
          },
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
      {
        q: 'How do I know if a tree needs to come down or just needs trimming?',
        a: 'Look for a crack in the main trunk, fungus at the base, large hollows, or a sudden lean. Dead or damaged limbs can often be pruned out without removing the tree. A site visit lets us tell you plainly which one your tree needs.',
      },
      {
        q: 'Can you remove a tree near a power line?',
        a: 'Call your utility first. Duke Energy says only line-clearance-qualified crews should work within 10 feet of overhead lines. Once the line is handled, we can plan the removal and put the method in writing.',
      },
      {
        q: 'Who removes a tree in the road right-of-way?',
        a: 'In unincorporated Greenville County, the county Public Works Division handles trees within its right-of-way, so do not cut one yourself. If you are not sure whether a tree is on your lot or the right-of-way, ask the county before you call us.',
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
    summary: 'Clear overgrown branches and keep healthy trees safe, with a free written estimate.',
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
        imageSide: 'left',
        image: { src: '/images/pages/tree-trimming-ladder.jpg', alt: 'AI-generated image of an arborist in a helmet and harness on a ladder, trimming limbs away from a brick house roofline with a pole saw' },
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
      {
        heading: 'Pruning *done right*',
        paragraphs: [
          'Good pruning follows a few simple rules from tree-care standards. Cuts go just outside the branch collar, the swollen ring where a branch meets the trunk, and the collar stays intact. Flush cuts leave dead spots in the trunk. To reduce a tree’s height or spread, a limb is cut back to a side branch that can take over as the new tip.',
          'A common guideline is to remove no more than about a quarter of a tree’s crown at one time, and less for mature trees. It is a ceiling, not a target.',
        ],
        subsections: [
          {
            heading: 'Why we do not top trees',
            paragraphs: [
              'Topping cuts main limbs back to stubs. The International Society of Arboriculture calls it one of the most harmful pruning practices. It can strip half or more of the leafy crown, expose the rest of the tree to sun, and leave a tree that needs pruning again within a few years. We cut back to a side branch instead.',
            ],
          },
        ],
      },
      {
        heading: 'Crape myrtles and *Bradford pears*',
        paragraphs: [
          'Two trees show up in a lot of Upstate yards, and both are often pruned the wrong way.',
        ],
        subsections: [
          {
            heading: 'Crape myrtles',
            paragraphs: [
              'Crape myrtles are often cut back hard every year. Clemson’s Home and Garden Information Center calls topping crape myrtles unnecessary and says it leads to unattractive, unhealthy plants. The only pruning Clemson says they need is structural pruning, and only when necessary. If a crape myrtle needs work, late winter or early spring is the time.',
            ],
          },
          {
            heading: 'Bradford pears',
            paragraphs: [
              'South Carolina approved ending new nursery sales of Bradford pears starting October 1, 2024. Owning one is still legal. Bradford pears can split as they age, so an older one is worth a look. We can tell you whether yours needs trimming or removal.',
            ],
          },
        ],
      },
      {
        heading: 'Trimming *near power lines*',
        paragraphs: [
          'Branches near power lines are a different job. Duke Energy says trees should not be trimmed or removed within 10 feet of overhead lines unless the crew is line-clearance qualified, and it asks people to call before pruning near lines.',
          'The line from the pole to your house is your responsibility to keep clear, but Duke asks you to call it first so the line can be handled safely. If branches touch or crowd a line, call your utility before you call us.',
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
      {
        q: 'What is the best time of year to trim a tree?',
        a: 'It depends on the tree and why you are cutting. Dead wood and hazards can come out any time. For crape myrtles that need structural pruning, Clemson says late winter or early spring. We will tell you what fits your tree.',
      },
      {
        q: 'Do you top trees?',
        a: 'No. Topping cuts main limbs back to stubs, and the International Society of Arboriculture calls it one of the most harmful pruning practices. We cut back to a side branch instead, so the tree keeps its shape and needs less rework.',
      },
      {
        q: 'Can I trim branches near a power line myself?',
        a: 'No. Duke Energy says only line-clearance-qualified crews should work within 10 feet of overhead lines, and it asks you to call before pruning near them. Call your utility first. Once the line is handled, call us.',
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
    image: { src: '/images/pages/stump-grinding-street.jpg', alt: 'AI-generated illustration of a stump grinder working on a stump in a front lawn, with wood chips flying and a brick home behind' },
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
      {
        heading: 'How *deep* a stump gets ground',
        paragraphs: [
          'The right depth depends on what goes there next. Many sources suggest about four to six inches below the surface for new grass, and eight to twelve inches or more to replant a tree. A patio or building site may need deeper work. Tell us your plan during the quote so the depth is written down.',
        ],
        subsections: [
          {
            heading: 'What happens to the roots',
            paragraphs: [
              'Grinding takes the stump and nearby surface roots, not the whole root system. The remaining roots break down over years, so the ground can settle a little where they ran.',
            ],
          },
          {
            heading: 'What happens to the chips',
            paragraphs: [
              'Chips usually fill the hole. You can keep them as mulch, mix them into the soil, or have them hauled away. Fresh chips can pull nitrogen from the soil as they break down, so they are not ideal as planting soil. The spot may settle over the first weeks and need topping up.',
            ],
          },
        ],
      },
      {
        heading: 'Buried lines and *before the grinder starts*',
        paragraphs: [
          'A stump grinder cuts below the surface, and it cannot see what is buried. South Carolina law requires anyone digging, even on a small home project, to notify SC811 first so buried utilities can be marked. SC811 can tell you whether stump grinding counts and how long the notice takes. Standard notice is three full business days.',
        ],
        bullets: [
          'Any buried lines or cables you know of near the stump',
          'Irrigation lines or invisible fence wire',
          'What you plan for the spot afterward',
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
      {
        q: 'How deep do you grind a stump?',
        a: 'It depends on what you plan for the spot. Grass usually needs a few inches below the surface, and replanting a tree needs more. Tell us your plan and the depth goes on the written quote.',
      },
      {
        q: 'Will the roots be gone after grinding?',
        a: 'No. Grinding removes the stump and the roots near the surface. The rest decay over years, and the ground can settle a bit where they ran.',
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
    image: { src: '/images/pages/arborist-street.jpg', alt: 'Illustration of a large mature oak with a wide root flare beside the sidewalk on a quiet street of brick homes' },
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
'Bring photos of the tree and note when you first saw a change, such as a new crack, a lean, or thinning leaves. That history shows how fast the problem is moving. We will walk the tree with you so you see what we see.',
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
      {
        heading: 'What *credentials* mean',
        paragraphs: [
          'Anyone can call themselves an arborist. One common credential to ask about is ISA Certified Arborist, given by the International Society of Arboriculture. A person earns it by passing a written exam and showing documented field experience, and keeps it current with continuing education.',
          'Ask any company which credentials the person doing your assessment holds, and ask to see proof.',
        ],
      },
      {
        heading: 'How tree risk is *rated*',
        paragraphs: [
          'Arborists often follow a three-level framework from the International Society of Arboriculture. The levels run from a quick look to a detailed study. If a tree needs more than a basic look, we will say so instead of guessing.',
        ],
        subsectionLayout: 'columns',
        subsections: [
          {
            heading: 'Level 1: a quick look',
            paragraphs: [
              'A rapid check from one spot for obvious problems. It is often used to decide which trees need a closer inspection.',
            ],
          },
          {
            heading: 'Level 2: a ground-based look',
            paragraphs: [
              'A walk around the whole tree and its site, checking the trunk, roots, limbs, and what sits under the tree. Most arborists use this level for homeowners.',
            ],
          },
          {
            heading: 'Level 3: advanced tests',
            paragraphs: [
              'A more detailed study of one problem, sometimes with special equipment. It is used when the basic look finds something that needs more checking, and it needs your approval first.',
            ],
          },
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
      {
        q: 'What are the levels of a tree risk assessment?',
        a: 'The International Society of Arboriculture describes three: a quick limited look, a basic ground-based inspection, and an advanced study with special tools. Most homeowner assessments use the basic level. We will tell you if your tree needs more.',
      },
      {
        q: 'What does ISA Certified Arborist mean?',
        a: 'It is a credential from the International Society of Arboriculture. A person earns it by passing a written exam and showing field experience, then keeps it current with continuing education. Ask any company which credentials the person doing your work holds.',
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
    sectionImage: { src: '/images/pages/emergency-removal-street.jpg', alt: 'AI-generated image of a quiet tree-lined residential street after a storm, with a fallen limb across the road, wet pavement, and brick homes on both sides' },
    image: { src: '/images/pages/emergency-tree-removal-street.jpg', alt: 'AI-generated image of a large tree limb fallen across a driveway and lawn beside a brick home, with a car parked in the driveway' },
    name: 'Emergency Tree Removal',
    icon: 'storm',
    title: 'Emergency Tree Removal Greenville | Greenville Tree & Stump',
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
      {
        heading: 'Staying *clear* of power lines',
        paragraphs: [
          'Treat every downed line as live, even if it is not sparking or humming. Duke Energy tells people to stay at least 30 feet back and to report the line to the utility or emergency services. If a line is on your car, stay inside and call 911 unless there is immediate danger such as fire.',
          'Your electric utility is the one on your bill. Report the hazard to them, then call us once the utility says the area is safe.',
        ],
      },
      {
        heading: 'What *insurance* usually covers',
        paragraphs: [
          'Coverage depends on your policy. A tree that falls on a covered structure, such as your house, garage, or fence, is the usual case where coverage applies. Insurers often cap what they pay for hauling away the tree, so ask about your limits. A tree that does not hit a covered structure may not be covered, and vehicles are usually handled by auto insurance.',
        ],
        subsections: [
          {
            heading: 'Notes for your claim',
            paragraphs: ['Keep these together for your insurer:'],
            bullets: [
              'Photos of the tree and the damage, taken from a safe spot',
              'The date and time the tree fell',
              'Your written quote from us',
              'Receipts for any temporary repairs',
            ],
          },
        ],
      },
      {
        heading: 'After the tree is *cleared*',
        paragraphs: [
          'Storm work often leaves a stump, a damaged fence, or other trees that look weak. We will say which of those need attention now and which can wait for a regular visit, so you are not rushed into more work than you need.',
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
      {
        q: 'Who do I call if a power line is down?',
        a: 'Call 911 and your electric utility first. Duke Energy says to stay at least 30 feet back and treat every downed line as live. Call us once the utility confirms the area is safe.',
      },
      {
        q: 'Should I try to move a fallen tree myself?',
        a: 'No. Keep people and pets away from the tree, stay off the roof, and never touch a tree near a power line. Call us once the area is safe, and we will look at it first.',
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
    image: { src: '/images/pages/removal-cost-street.jpg', alt: 'Illustration of a very tall mature oak towering over a brick home at the end of a quiet tree-lined street' },
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
          'Ask every company whether they carry proof of insurance and whether the quote covers the crew on site.',
'Ask how long the crew expects the job to take. A quote that states the expected schedule is easier to plan around, and it gives you a written point to hold the company to.',
        ],
      },
      {
        heading: 'What a *written quote* should list',
        paragraphs: ['A fair quote names what you are paying for. Look for these items, and ask about any that are missing:'],
        bullets: [
          'Each tree and the work planned for it',
          'How the tree comes down: climbing, rigging, or a crane',
          'Cleanup: wood, brush, and raking',
          'Stump grinding, if you want it',
          'Payment terms',
        ],
      },
      {
        heading: 'Does *insurance* pay for removal?',
        paragraphs: [
          'Sometimes. A homeowners policy usually covers removal when a covered event, such as wind, brings a tree down onto a covered structure like your house, garage, or fence. Even then, debris removal is often capped, with limits per tree and per incident that vary by policy.',
          'Removing a healthy tree because you are worried about it is generally not covered, and a car damaged by a tree is usually a matter for your auto policy. Read your policy or ask your agent before work starts. We put the scope and price in writing so you have what an insurer asks for.',
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
      {
        q: 'Does homeowners insurance pay for tree removal?',
        a: 'It can, when a covered event such as wind drops a tree on a covered structure. Debris removal is often capped per tree and per incident. Removing a healthy tree is generally not covered. Check your policy or ask your agent before the work starts.',
      },
      {
        q: 'What happens if the work changes after the quote?',
        a: 'If the work changes, for example a second tree is added or the access turns out harder, we explain the change in writing before it happens and say how it affects the price.',
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
    image: { src: '/images/pages/land-clearing-street.jpg', alt: 'Illustration of a cleared lot beside a residential street with tall pines and wooded hills behind and brick homes nearby' },
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
      {
        heading: 'Permits and *rules* to check first',
        paragraphs: [
          'Clearing land can come with permit and stormwater rules. They depend on how much ground is disturbed, where the lot is, and what you plan to build. We cannot tell you what applies to your lot, so check with the county or town before work starts.',
        ],
        subsections: [
          {
            heading: 'Greenville County stormwater rules',
            paragraphs: [
              'In unincorporated Greenville County, stormwater and erosion rules depend on how much ground is disturbed. Disturbing one acre or more on a house lot generally calls for a Land Disturbance (Grading) Permit, and smaller sites may need a simplified erosion and sediment plan. Simpsonville, Mauldin, Travelers Rest, and Fountain Inn take part in the county program. Confirm the current limits with the county Land Development Division.',
            ],
          },
          {
            heading: 'Outside Greenville County',
            paragraphs: [
              'Easley, Pickens, Powdersville, Woodruff, and part of Greer sit in other counties with their own rules. Tell us your address and we will share what we know, but your county or town makes the final call.',
            ],
          },
          {
            heading: 'Burning brush',
            paragraphs: [
              'South Carolina requires notice to the Forestry Commission before many land-clearing burns, and cities and counties can set stricter limits. Ask us early how the brush will be handled, so the written quote says what is planned.',
            ],
          },
        ],
      },
      {
        heading: 'Mulching or *traditional clearing*',
        paragraphs: [
          'Two methods are common. Forestry mulching uses one machine to grind brush and small trees into mulch that stays on the ground. Traditional clearing uses heavy equipment to push, pile, and haul trees, brush, and stumps.',
        ],
        subsections: [
          {
            heading: 'When mulching fits',
            paragraphs: [
              'Mulching disturbs the soil less and leaves a layer of mulch behind, with no hauling. It suits brush and small trees on land you want to replant or leave open.',
            ],
          },
          {
            heading: 'When traditional clearing fits',
            paragraphs: [
              'Mulching generally leaves stumps and roots in the ground. If a house, slab, or driveway will go on the spot, stumps can rot and settle later, so removing them first matters. We will tell you on the visit which method fits your plans.',
            ],
          },
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
      {
        q: 'Does forestry mulching remove the stumps?',
        a: 'Generally no. Mulching grinds brush and small trees above ground, and the stumps and roots usually stay. If you plan to build on the spot, we will talk through removing them first.',
      },
      {
        q: 'Can you burn the brush after clearing?',
        a: 'It depends on your lot and the rules where you live. South Carolina requires notice to the Forestry Commission before many land-clearing burns, and local rules can be stricter. Ask us before the work starts, and the written quote will say how the brush is handled.',
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
