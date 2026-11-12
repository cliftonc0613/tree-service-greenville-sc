// City + service combo pages: /services/[area]/[service]/ (28 pages: 4 launch towns x 7 services).
// Each entry has its own copy. Do not reuse paragraphs across entries (playbook: avoid duplicate location copy).
// Rules: plain periods, no em dashes, no unsourced prices, no credentials, no guaranteed dates.
// Geography only from the verified-pending list in LAUNCH_CHECKLIST.md.
import type { Faq, Section } from '@/data/types';

export interface Combo {
  area: string;
  service: string;
  title: string;
  metaDescription: string;
  h1: string;
  lead: string;
  sections: Section[];
  faqs: Faq[];
}

export const combos: Combo[] = [
  // ---------- Simpsonville ----------
  {
    area: 'simpsonville', service: 'tree-removal',
    title: 'Tree Removal Simpsonville, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Simpsonville, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Simpsonville, SC',
    lead: 'Removing a tree near a house in Simpsonville takes planning. We look at how close it sits to the roof, fence, or driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Simpsonville homes', paragraphs: [
      'Many Simpsonville lots have a large tree close to the house, a garage, or a shared fence. The method that works in an open yard can be wrong for those spots, so we plan the cuts around what is nearby.',
      'We look at the tree, the target area, and the access on the site visit. You get the method and the scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Simpsonville?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the site visit and say honestly what it will take.' },
      { q: 'How do I get a removal quote in Simpsonville?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
    ],
  },
  {
    area: 'simpsonville', service: 'tree-trimming',
    title: 'Tree Trimming Simpsonville, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Simpsonville, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and we clean up before we leave.',
    h1: 'Tree Trimming in Simpsonville, SC',
    lead: 'Limbs over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Simpsonville. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Simpsonville yards', paragraphs: [
      'Simpsonville has a lot of mature shade trees in older neighborhoods and younger trees in newer subdivisions. Both need trimming at different points, and the cuts should match the tree.',
      'We cut to the right point on each limb rather than topping the tree. Ask us about a seasonal plan if you want the same crew to look at the tree each year.',
    ], bullets: ['Branches over the roof, gutters, or siding', 'Limbs rubbing a fence, power line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Simpsonville tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We will tell you what your tree needs at the site visit.' },
      { q: 'Do you clean up the brush after trimming?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
    ],
  },
  {
    area: 'simpsonville', service: 'stump-grinding',
    title: 'Stump Grinding Simpsonville, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Simpsonville, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Simpsonville, SC',
    lead: 'A stump left after a removal in Simpsonville can sit in the yard for years. We grind it down so the space can be used again.',
    sections: [{ heading: 'Grinding stumps in Simpsonville', paragraphs: [
      'Stumps are a trip hazard and a place for pests and fungus. Grinding clears the spot for a garden, patio, or new lawn.',
      'Roots and nearby structures change the method, so we check the stump and the ground around it on the site visit. Ask for stump grinding with the removal if you want one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway, fence, or patio', 'Old stumps that block a new planting area'] }],
    faqs: [
      { q: 'Can you grind a stump near a fence or patio in Simpsonville?', a: 'Often, yes. We check the space and what is underground before we promise a method.' },
      { q: 'What happens to the grindings?', a: 'The written quote says what is included with the grindings and the cleanup.' },
    ],
  },
  {
    area: 'simpsonville', service: 'arborist',
    title: 'Arborist in Simpsonville, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Simpsonville, SC for health and hazards, with a plain recommendation on whether to keep, trim, or remove the tree.',
    h1: 'Arborist Assessments in Simpsonville, SC',
    lead: 'Before you decide to remove or trim a Simpsonville tree, get a plain assessment of its health and any hazards it poses.',
    sections: [{ heading: 'Assessing a Simpsonville tree', paragraphs: [
      'We check the trunk, root flare, main limbs, and canopy, and we look at what the tree could hit if it fails. That includes the house, the driveway, and anywhere people walk or park.',
      'You get a written summary of what we found and what we recommend, in order of priority. We will say if a tree can be saved and if it cannot.',
    ], bullets: ['Signs of decay, cracks, or weak branch unions', 'Hazards to the house, driveway, or yard', 'A recommended order of work'] }],
    faqs: [
      { q: 'What do I get after a Simpsonville assessment?', a: 'A written summary of the findings, the risks, and the recommended work. You can keep it for your records.' },
      { q: 'Is the assessment free?', a: 'Our site visit and written quote are free. Ask during the call what the assessment includes.' },
    ],
  },
  {
    area: 'simpsonville', service: 'emergency-tree-removal',
    title: 'Emergency Removal Simpsonville, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Simpsonville, SC after storm damage. A tree down or leaning on a home or driveway. Call us, then we confirm the plan.',
    h1: 'Emergency Tree Removal in Simpsonville, SC',
    lead: 'A tree down or leaning on a Simpsonville home or driveway needs a call now. If a line is involved, call the power company or 911 first and stay clear.',
    sections: [{ heading: 'After a storm in Simpsonville', paragraphs: [
      'Storm calls in Simpsonville often involve a tree on a roof, a fence, or a parked car. Keep people and pets away from the tree and any loose limbs, and do not climb onto a roof to look.',
      'When you call, tell us where the tree is, what it touches, and whether anyone is hurt. We will tell you the earliest visit we can offer and what to do until we arrive.',
    ], bullets: ['A tree on a roof, garage, or fence', 'A tree leaning over a driveway or walkway', 'Photos for your insurance claim, taken from a safe spot'] }],
    faqs: [
      { q: 'How fast can you respond in Simpsonville after a storm?', a: 'Call and we will tell you the earliest visit we can offer. We do not promise a time we cannot keep.' },
      { q: 'Do you give a written quote for storm work?', a: 'Yes. You get a written quote before the main work begins.' },
    ],
  },
  {
    area: 'simpsonville', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Simpsonville, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Simpsonville, SC, and what changes the price. Compare written quotes with the same scope. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Simpsonville, SC',
    lead: 'The price of a Simpsonville tree removal depends on the tree, its location, and the access. Here is what moves the number and how to compare quotes fairly.',
    sections: [{ heading: 'What moves the price in Simpsonville', paragraphs: [
      'Height, trunk width, and how close the tree sits to a structure matter most. Tight lots, slopes, and crane work all add time and care.',
      'Compare written quotes with the same scope. Check the method, the cleanup, the wood and brush, and any stump work. Our full ranges are on the Tree Removal Cost page, and your written quote is the number that counts.',
    ], bullets: ['Height and trunk width', 'Distance to a house, fence, or power line', 'Access, crane work, and cleanup'] }],
    faqs: [
      { q: 'Why do Simpsonville removal quotes differ?', a: 'Scope, access, method, and cleanup all change the price. Compare the written scope line by line.' },
      { q: 'Is the estimate free?', a: 'Yes. The site visit and written quote cost nothing.' },
    ],
  },
  {
    area: 'simpsonville', service: 'land-clearing',
    title: 'Land Clearing Simpsonville, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Simpsonville, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call today.',
    h1: 'Land Clearing in Simpsonville, SC',
    lead: 'Clearing a lot in Simpsonville before a build, a garden, or a new yard. We walk the land with you, mark what stays, and quote the work in writing.',
    sections: [{ heading: 'Clearing a Simpsonville lot', paragraphs: [
      'Walk the property with us before you call if you can, and mark the trees you want to keep. That makes the quote and the work more accurate.',
      'Clearing for a new house or a development often has county or HOA rules attached. Tell us about them, and check with the county before work starts.',
    ], bullets: ['Trees and brush cleared before a new build', 'A lot prepared for a garden or pasture', 'Clearing that keeps the trees you choose'] }],
    faqs: [
      { q: 'Do I need a permit to clear a Simpsonville lot?', a: 'It depends on the county and the plan. Check with the county before clearing. We can tell you what we have seen on similar jobs.' },
      { q: 'Can you keep certain trees?', a: 'Yes. Mark them on the walk-through and we will quote around them.' },
    ],
  },

  // ---------- Taylors ----------
  {
    area: 'taylors', service: 'tree-removal',
    title: 'Tree Removal Taylors, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Taylors, SC for dead, leaning, or storm-damaged trees near homes along Wade Hampton Blvd. Free written estimate.',
    h1: 'Tree Removal in Taylors, SC',
    lead: 'Taylors yards often have large hardwoods and pines near the house. When one is dead, leaning, or storm-damaged, we explain the removal plan before any work starts.',
    sections: [{ heading: 'Removal in Taylors yards', paragraphs: [
      'Older Taylors lots near Wade Hampton Boulevard often have tall trees that were planted before the houses. Removal near those homes needs careful rigging and a clear plan for what falls where.',
      'We look at the tree, the access, and the target area, then write out the method, the scope, and the cleanup.',
    ], bullets: ['A dead pine or hardwood near a home', 'A leaning tree over a driveway or fence', 'A storm-damaged tree with a split trunk'] }],
    faqs: [
      { q: 'Can you remove a large pine in Taylors?', a: 'Yes. Tell us about the height and what is nearby, and we will say what the removal involves.' },
      { q: 'How soon can you come out in Taylors?', a: 'Call us and we will tell you the earliest visit we can offer.' },
    ],
  },
  {
    area: 'taylors', service: 'tree-trimming',
    title: 'Tree Trimming Taylors, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Taylors, SC to clear branches from roofs, power lines, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Taylors, SC',
    lead: 'Pines and hardwoods in Taylors drop limbs after heavy weather. Routine trimming keeps branches off the roof and away from the lines.',
    sections: [{ heading: 'Trimming Taylors trees', paragraphs: [
      'Pines and hardwoods grow differently, so each needs its own kind of cut. Pines are often trimmed for clearance and hazard limbs, while hardwoods need the cuts that keep their shape.',
      'Ask us about a seasonal plan if you want one company to look at the trees each year, with a written quote for each visit.',
    ], bullets: ['Limbs over a roof or gutter', 'Branches near a power line or service drop', 'Dead limbs that could fall in a storm'] }],
    faqs: [
      { q: 'Do you trim pines in Taylors?', a: 'Yes. We trim pines and hardwoods, and we will tell you what cuts the tree needs.' },
      { q: 'Is the trimming quote written?', a: 'Yes. Every quote is in writing, with the scope and the cleanup.' },
    ],
  },
  {
    area: 'taylors', service: 'stump-grinding',
    title: 'Stump Grinding Taylors, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Taylors, SC for stumps left after a removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Taylors, SC',
    lead: 'A stump in a Taylors yard can take up space you want for a garden or lawn. We grind it down and clean up the grindings.',
    sections: [{ heading: 'Stumps in Taylors yards', paragraphs: [
      'Taylors yards often have old stumps from trees removed decades ago, as well as newer ones. Old roots can run further than the stump shows, so we check the ground on the site visit.',
      'Tell us the location of the stump and whether it sits near a walkway, fence, or the house. That helps us plan the method.',
    ], bullets: ['Old stumps from earlier removals', 'Stumps close to a walkway or patio', 'Stumps in the way of a planned garden'] }],
    faqs: [
      { q: 'How deep does the stump grinding go?', a: 'The depth and method are in the written quote after the site visit.' },
      { q: 'Can you grind a stump with the tree removal?', a: 'Yes. One visit and one written quote usually works best.' },
    ],
  },
  {
    area: 'taylors', service: 'arborist',
    title: 'Arborist in Taylors, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Taylors, SC for health and hazards, with a plain recommendation on keeping, trimming, or removing the tree.',
    h1: 'Arborist Assessments in Taylors, SC',
    lead: 'Before you decide what to do about a Taylors tree, get a plain look at its health and the hazards it poses.',
    sections: [{ heading: 'Assessing a Taylors tree', paragraphs: [
      'We check the trunk, the root flare, the main limbs, and the canopy. We also look at the targets: the house, the driveway, and the spots people use in the yard.',
      'You receive a written summary of the findings and the recommended order of work. We will say if the tree can be saved.',
    ], bullets: ['Decay, cracks, or weak limb attachments', 'Lean and root stability', 'Hazards to people and property'] }],
    faqs: [
      { q: 'What does an assessment in Taylors cost?', a: 'Our site visit and written quote are free. Ask during the call what the assessment includes.' },
      { q: 'Will you tell me if a tree can be saved?', a: 'Yes. We say so plainly, whether the answer is to keep, trim, or remove.' },
    ],
  },
  {
    area: 'taylors', service: 'emergency-tree-removal',
    title: 'Emergency Tree Removal Taylors, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Taylors, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us now.',
    h1: 'Emergency Tree Removal in Taylors, SC',
    lead: 'A tree down or leaning on a Taylors home or driveway needs a call. If a power line is involved, call the power company or 911 first and stay clear.',
    sections: [{ heading: 'After a storm in Taylors', paragraphs: [
      'Keep people and pets clear of the tree and the area under any loose limbs. If the tree is on the house and the house is unsafe, leave it.',
      'Call us with the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer and what to do until then.',
    ], bullets: ['A tree on a home or garage', 'A tree across a driveway', 'Photos from a safe spot for your claim'] }],
    faqs: [
      { q: 'What if a tree fell on a car in Taylors?', a: 'Keep clear of the car and the tree. Call your insurance company and us. We will work with the scope and photos.' },
      { q: 'How quickly can you come out in Taylors?', a: 'Call and we will tell you the earliest visit we can offer. We do not promise a time we cannot keep.' },
    ],
  },
  {
    area: 'taylors', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Taylors, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Taylors, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Taylors, SC',
    lead: 'Tree removal in Taylors costs more or less depending on the tree, the lot, and the access. Here is how to read a quote.',
    sections: [{ heading: 'Reading a Taylors removal quote', paragraphs: [
      'Ask what each line covers. A low number with no scope is harder to trust than a fair number with the method and cleanup written out.',
      'Our ranges are on the Tree Removal Cost page. Your written quote, after a free visit, is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush removal', 'Stump work and any crane time'] }],
    faqs: [
      { q: 'Do you charge for the Taylors estimate?', a: 'No. The site visit and written quote are free.' },
      { q: 'Are quotes firm?', a: 'The written quote states the scope and price for the work described. Ask about any change before it happens.' },
    ],
  },
  {
    area: 'taylors', service: 'land-clearing',
    title: 'Land Clearing Taylors, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Taylors, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call today.',
    h1: 'Land Clearing in Taylors, SC',
    lead: 'Lots in Taylors often need clearing before a build or a garden. We walk the land with you and quote the work in writing.',
    sections: [{ heading: 'Clearing a Taylors lot', paragraphs: [
      'Mark the trees and areas you want to keep before the site visit. We quote around them and tell you what the clearing involves.',
      'Clearing near the river or on slopes changes the access and the method. We will say what it takes on the visit.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a house or garden', 'Clearing around trees you keep'] }],
    faqs: [
      { q: 'Can you clear a sloped Taylors lot?', a: 'Often, yes. Slope changes the method and the price. We will look at it on the visit.' },
      { q: 'Do you haul the brush away?', a: 'Ask during the estimate. The written quote says what the cleanup includes.' },
    ],
  },

  // ---------- Easley ----------
  {
    area: 'easley', service: 'tree-removal',
    title: 'Tree Removal Easley, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Easley, SC for dead, leaning, or storm-damaged trees on wooded lots and near homes. Free written estimate.',
    h1: 'Tree Removal in Easley, SC',
    lead: 'Easley lots often border woods, so removal can involve both the yard tree and the trees at the edge of the lot. We plan the work around both.',
    sections: [{ heading: 'Removal on Easley lots', paragraphs: [
      'On a wooded lot, the tree you want removed may lean toward other trees or a slope. We check how the tree falls and what is around it before any cutting starts.',
      'You receive the method, the scope, and the cleanup in writing. We will tell you if a tree on the edge of the lot needs its own plan.',
    ], bullets: ['A dead tree on the edge of a wooded lot', 'A leaning tree near the house', 'A storm-damaged tree with a split trunk'] }],
    faqs: [
      { q: 'Can you remove a tree on a sloped lot in Easley?', a: 'Often, yes. Slope changes the method, and we will explain it on the visit.' },
      { q: 'Do you serve Easley?', a: 'Yes. Call to confirm the visit for your address.' },
    ],
  },
  {
    area: 'easley', service: 'tree-trimming',
    title: 'Tree Trimming Easley, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Easley, SC for overgrown branches, roof clearance, and hazard limbs. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Easley, SC',
    lead: 'Overgrown branches in Easley can reach the roof, the driveway, or the lines. We trim to keep the tree healthy and the space clear.',
    sections: [{ heading: 'Trimming Easley trees', paragraphs: [
      'Wooded properties grow trees close together, which means some limbs compete for light and drop weight in storms. The right cuts reduce that risk without harming the tree.',
      'We cut to the right point on each limb. Tell us which areas matter most, such as the roof or a play area.',
    ], bullets: ['Limbs over the roof or driveway', 'Crowded limbs competing for light', 'Dead limbs that could fall'] }],
    faqs: [
      { q: 'How often should Easley trees be trimmed?', a: 'It depends on the species and the spacing. We will tell you at the site visit.' },
      { q: 'Do you clean up after trimming?', a: 'Yes. We clear the work area before we leave.' },
    ],
  },
  {
    area: 'easley', service: 'stump-grinding',
    title: 'Stump Grinding Easley, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Easley, SC for stumps left after a removal on wooded or open lots. Free written estimate, cleanup before we leave.',
    h1: 'Stump Grinding in Easley, SC',
    lead: 'Stumps on Easley lots can sit in the way of a new garden, a driveway, or a clearing. We grind them down and clean up.',
    sections: [{ heading: 'Stumps on Easley properties', paragraphs: [
      'Stumps left after clearing or a removal often sit among brush and roots. We look at the stump, the roots, and the access before we give you a method.',
      'Ask for the grinding with the removal if both are needed. One visit and one written quote is usually simplest.',
    ], bullets: ['Stumps left after clearing', 'Stumps near a driveway or garden', 'Stumps among roots and brush'] }],
    faqs: [
      { q: 'Can you reach a stump in the woods in Easley?', a: 'Often, if we can get the equipment in safely. We check the access on the visit.' },
      { q: 'What happens to the grindings?', a: 'The written quote states what the cleanup includes.' },
    ],
  },
  {
    area: 'easley', service: 'arborist',
    title: 'Arborist in Easley, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Easley, SC for health and hazards on wooded lots, with a plain recommendation. Free written estimate.',
    h1: 'Arborist Assessments in Easley, SC',
    lead: 'On a wooded Easley lot, the question is often which trees are healthy and which are a hazard. We give you a plain answer in writing.',
    sections: [{ heading: 'Assessing trees on Easley lots', paragraphs: [
      'We check the trees that are near the house or the targets you care about. In woods, we also note trees that lean or have dead tops, since they can fail in a storm.',
      'You get a written summary of the findings and the recommended work, in order of priority.',
    ], bullets: ['Dead tops and hanging limbs', 'Lean and root stability', 'Trees near the house or driveway'] }],
    faqs: [
      { q: 'Do you assess a whole wooded lot?', a: 'We can assess the trees you name and the ones near targets. Tell us the scope on the call.' },
      { q: 'Is the assessment free?', a: 'Our site visit and written quote are free.' },
    ],
  },
  {
    area: 'easley', service: 'emergency-tree-removal',
    title: 'Emergency Tree Removal Easley, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Easley, SC after storm damage on wooded lots and near homes. Call us, then we confirm the plan.',
    h1: 'Emergency Tree Removal in Easley, SC',
    lead: 'A tree down or leaning on an Easley home, driveway, or fence needs a call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Easley', paragraphs: [
      'Wooded lots can have several trees down after a storm, and some may be hung up in others. Do not walk under hung trees or try to cut them yourself.',
      'Call us with the location, what the trees touch, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a home, shed, or fence', 'Trees hung up in other trees', 'Photos from a safe spot for your claim'] }],
    faqs: [
      { q: 'What if a tree is hung up in another tree?', a: 'Stay clear. Do not cut it loose yourself. Call us and we will look at it safely.' },
      { q: 'Do you give a written quote for storm work?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'easley', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Easley, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Easley, SC, and the factors that change the price on wooded lots. Compare written quotes. Free estimate.',
    h1: 'Tree Removal Cost in Easley, SC',
    lead: 'Wooded Easley lots change the cost of a removal. Here is what moves the price and how to compare written quotes.',
    sections: [{ heading: 'What moves the price in Easley', paragraphs: [
      'Access through woods, slopes, and the distance to the house all add time and care. A removal near other trees can need more rigging.',
      'Our ranges are on the Tree Removal Cost page. Your written quote after a free visit is the price for your tree.',
    ], bullets: ['Access through woods or over a slope', 'Rigging around other trees', 'Cleanup and stump work'] }],
    faqs: [
      { q: 'Why do Easley quotes vary?', a: 'Access, lot shape, and scope change the price. Compare the written scope.' },
      { q: 'Is the estimate free?', a: 'Yes.' },
    ],
  },
  {
    area: 'easley', service: 'land-clearing',
    title: 'Land Clearing Easley, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Easley, SC for a new house, pasture, or garden on wooded property. Free written estimate. Call today.',
    h1: 'Land Clearing in Easley, SC',
    lead: 'Clearing a wooded Easley property for a house, a pasture, or a garden takes a plan. We walk the land with you and quote the work in writing.',
    sections: [{ heading: 'Clearing wooded Easley property', paragraphs: [
      'Mark the boundary, the trees you want to keep, and any areas to avoid. That helps us quote accurately and keep the clearing where you want it.',
      'Clearing on wooded property can involve county rules and access limits. Check with the county before work starts, and tell us what applies.',
    ], bullets: ['Brush and small trees cleared', 'Clearing for a house, pasture, or garden', 'Trees kept along the boundary'] }],
    faqs: [
      { q: 'Do you clear around trees I want to keep?', a: 'Yes. Mark them on the walk-through.' },
      { q: 'Is the clearing quote written?', a: 'Yes, with the scope and the cleanup.' },
    ],
  },

  // ---------- Greer ----------
  {
    area: 'greer', service: 'tree-removal',
    title: 'Tree Removal Greer, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Greer, SC for dead, leaning, or storm-damaged trees near homes and new construction. Free written estimate.',
    h1: 'Tree Removal in Greer, SC',
    lead: 'Greer has established neighborhoods with mature trees and newer lots where trees sit close to new homes. We plan each removal around what is nearby.',
    sections: [{ heading: 'Removal near Greer homes', paragraphs: [
      'Greer spans Greenville and Spartanburg counties, and its neighborhoods range from older streets to recent builds. Near new homes, the trees may be young but still hazardous if they lean or split.',
      'We look at the tree and the target before quoting. You get the method, scope, and cleanup in writing.',
    ], bullets: ['A leaning tree near a new home', 'A dead tree on a neighboring lot line', 'A storm-split trunk'] }],
    faqs: [
      { q: 'Do you remove trees for new construction in Greer?', a: 'We remove trees for homeowners and property owners. Tell us about the project and we will say what we can do.' },
      { q: 'Can you remove a tree on a shared lot line?', a: 'Often, yes. Tell us about the lot line on the call so we can plan for it.' },
    ],
  },
  {
    area: 'greer', service: 'tree-trimming',
    title: 'Tree Trimming Greer, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Greer, SC to clear branches from roofs, driveways, and power lines in established neighborhoods. Free written estimate.',
    h1: 'Tree Trimming in Greer, SC',
    lead: 'Trees in established Greer neighborhoods can grow into roofs, driveways, and lines. Routine trimming keeps the branches where they belong.',
    sections: [{ heading: 'Trimming Greer trees', paragraphs: [
      'Greer yards often have a mix of older shade trees and newer plantings. Each needs cuts that match its age and species.',
      'Ask about a seasonal plan if you want one company to handle trimming each year, with a written quote for each visit.',
    ], bullets: ['Limbs over a roof or gutter', 'Branches near a service line', 'Young trees shaped before they grow large'] }],
    faqs: [
      { q: 'Do you trim trees near power lines in Greer?', a: 'We can trim branches near lines in safe clearance. Call the utility first if a line is involved, and we will plan around it.' },
      { q: 'Is the trimming quote written?', a: 'Yes.' },
    ],
  },
  {
    area: 'greer', service: 'stump-grinding',
    title: 'Stump Grinding Greer, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Greer, SC for stumps left after a removal or clearing. Free written estimate, and we clean up before we leave.',
    h1: 'Stump Grinding in Greer, SC',
    lead: 'Stumps left after a removal or a clearing in Greer can get in the way of a lawn, a patio, or a new planting. We grind them down.',
    sections: [{ heading: 'Stumps in Greer yards', paragraphs: [
      'Stumps in newer neighborhoods often sit near new sod or new fences. We check the stump and the ground around it before choosing a method.',
      'Ask for stump grinding with a removal if you want one visit and one bill.',
    ], bullets: ['Stumps left after clearing', 'Stumps near new sod or fences', 'Stumps in the way of a planned patio'] }],
    faqs: [
      { q: 'Will grinding damage new sod?', a: 'We plan the method around the surrounding ground and tell you about any risk on the visit.' },
      { q: 'What about the grindings?', a: 'The written quote states what the cleanup includes.' },
    ],
  },
  {
    area: 'greer', service: 'arborist',
    title: 'Arborist in Greer, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Greer, SC for health and hazards, with a plain written recommendation on keeping, trimming, or removing the tree.',
    h1: 'Arborist Assessments in Greer, SC',
    lead: 'Before you decide what to do about a Greer tree, get a plain look at its health and any hazards it poses.',
    sections: [{ heading: 'Assessing a Greer tree', paragraphs: [
      'We check the trunk, root flare, main limbs, and canopy. We also look at what the tree could hit, such as a home, driveway, or neighbor’s property line.',
      'You receive a written summary and a recommended order of work. We will say if the tree can be saved.',
    ], bullets: ['Decay, cracks, or weak attachments', 'Lean and root stability', 'Hazards to property and people'] }],
    faqs: [
      { q: 'Can you assess a tree on a neighbor’s property?', a: 'We can look at the tree from your side. Any work on a neighbor’s tree needs the neighbor’s permission.' },
      { q: 'Is the assessment free?', a: 'Our site visit and written quote are free.' },
    ],
  },
  {
    area: 'greer', service: 'emergency-tree-removal',
    title: 'Emergency Tree Removal Greer, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Greer, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us, then we confirm the plan.',
    h1: 'Emergency Tree Removal in Greer, SC',
    lead: 'A tree down or leaning on a Greer home, car, or driveway needs a call now. If a line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Greer', paragraphs: [
      'Keep people and pets clear of the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos from a safe spot for your claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Greer?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'greer', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Greer, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Greer, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Greer, SC',
    lead: 'What a tree removal costs in Greer depends on the tree, the lot, and the access. Here is how to read a written quote.',
    sections: [{ heading: 'Reading a Greer removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and the stump work is easier to compare.',
      'Our ranges are on the Tree Removal Cost page. Your written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Greer estimate free?', a: 'Yes.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'greer', service: 'land-clearing',
    title: 'Land Clearing Greer, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Greer, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call today.',
    h1: 'Land Clearing in Greer, SC',
    lead: 'Clearing a Greer lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Greer lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction often needs county permits or a builder’s schedule. Check with the county and tell us the timing.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Greer?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },
];

export function combosFor(areaSlug: string) {
  return combos.filter((c) => c.area === areaSlug);
}

export function comboBySlugs(area: string, service: string) {
  return combos.find((c) => c.area === area && c.service === service);
}
