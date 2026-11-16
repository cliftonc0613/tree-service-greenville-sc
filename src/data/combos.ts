// City + service combo pages: /services/[area]/[service]/ (98 pages: 14 towns x 7 services).
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
      { q: 'Do you cut a tree down in sections near a house?', a: 'Sometimes. On tight lots we may take a tree down in pieces so it does not hit the roof, fence, or driveway. The site visit tells us which method fits.' },
      { q: 'Who handles the wood and brush after a removal?', a: 'The written quote says whether the wood, brush, and stump are included. Ask us to go through that line before you agree to the work.' },
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
      { q: 'Is trimming the same as topping a tree?', a: 'No. Trimming removes branches back to a proper branch collar or a healthy side branch. Topping cuts off the top of the tree and weakens the regrowth. We do not top trees.' },
      { q: 'What time of year is best to trim a Simpsonville tree?', a: 'It depends on the species and the work. We will tell you at the site visit whether now is a good time to cut.' },
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
      { q: 'How deep does the stump get ground?', a: 'We grind below the surface so the spot can be planted or built on. The depth depends on the stump and your plans for the ground, so we confirm it on the visit.' },
      { q: 'Can you grind a stump that another company left behind?', a: 'Yes. Tell us what was left and where it sits. We check the stump and the ground before we quote.' },
    ],
  },
  {
    area: 'simpsonville', service: 'arborist',
    title: 'Arborist in Simpsonville, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Simpsonville, SC for health and hazards, with a plain recommendation on whether to keep, trim, or remove the tree.',
    h1: 'Arborist Assessments in Simpsonville, SC',
    lead: 'Before you decide to remove or trim a Simpsonville tree, get a plain assessment of its health and any hazards it poses to your home, driveway, or yard.',
    sections: [{ heading: 'Assessing a Simpsonville tree', paragraphs: [
      'We check the trunk, root flare, main limbs, and canopy, and we look at what the tree could hit if it fails. That includes the house, the driveway, and anywhere people walk or park.',
      'You get a written summary of what we found and what we recommend, in order of priority. We will say if a tree can be saved and if it cannot.',
    ], bullets: ['Signs of decay, cracks, or weak branch unions', 'Hazards to the house, driveway, or yard', 'A recommended order of work'] }],
    faqs: [
      { q: 'What do I get after a Simpsonville assessment?', a: 'A written summary of the findings, the risks, and the recommended work. You can keep it for your records.' },
      { q: 'Is the assessment free?', a: 'Our site visit and written quote are free. Ask during the call what the assessment includes.' },
      { q: 'When should I ask for a tree assessment?', a: 'Ask for one after storm damage, when a tree is leaning, or when you see dead limbs, cracks, or fungus at the base. A plain check helps you decide before any work is booked.' },
      { q: 'Will an assessment always tell me to remove a tree?', a: 'No. Often the answer is pruning or monitoring. We will say which one fits and why, and we will say so plainly if a tree cannot be made safe.' },
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
      { q: 'Should I cut a fallen tree off my car or roof myself?', a: 'No. Stay clear of the tree and any lines. If a power line is touched, call the power company or 911 first. Call us once the area is safe to approach.' },
      { q: 'Will homeowners insurance cover emergency removal?', a: 'That depends on your policy. Take photos from a safe spot, keep your receipts, and check with your insurer. We can give you a written quote for your records.' },
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
      { q: 'Why does a removal cost more when the tree is close to the house?', a: 'Close trees need more careful cuts, rigging, and crew time, so the job takes longer. The written quote explains how that affects the scope.' },
      { q: 'What happens if the work changes after the quote?', a: 'We explain the change in writing before it happens, along with how it affects the price.' },
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
      { q: 'How long does clearing a Simpsonville lot take?', a: 'It depends on the size of the lot, how many trees come out, and the access. We give a time estimate with the written quote.' },
      { q: 'What happens to the cleared brush and logs?', a: 'The written quote says what is included, such as hauling, chipping, or leaving wood on site. Ask us to list it before you agree to the work.' },
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
    title: 'Arborist Services in Taylors, SC | Greenville Tree & Stump',
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
    title: 'Tree Removal in Easley, SC | Greenville Tree & Stump',
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
    title: 'Arborist Services in Easley, SC | Greenville Tree & Stump',
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
    title: 'Tree Removal in Greer, SC | Greenville Tree & Stump',
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
    title: 'Tree Trimming in Greer, SC | Greenville Tree & Stump',
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
    title: 'Arborist Services in Greer, SC | Greenville Tree & Stump',
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
    title: 'Land Clearing in Greer, SC | Greenville Tree & Stump',
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
  // ---------- Mauldin ----------
  {
    area: 'mauldin', service: 'tree-removal',
    title: 'Tree Removal Mauldin, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Mauldin, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Mauldin, SC',
    lead: 'Removing a tree near a Mauldin house takes planning. We check how close it sits to the roof, fence, or driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Mauldin homes', paragraphs: [
      'Many Mauldin lots have a tree close to the house, a garage, or a shared fence. The method that works in an open yard may not work there, so we plan the cuts around what is nearby.',
      'We look at the tree, the drop zone, and the access on the site visit. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Mauldin?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the site visit and say what it will take.' },
      { q: 'How do I get a removal quote in Mauldin?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
    ],
  },
  {
    area: 'mauldin', service: 'tree-trimming',
    title: 'Tree Trimming Mauldin, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Mauldin, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Mauldin, SC',
    lead: 'Limbs over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Mauldin. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Mauldin yards', paragraphs: [
      'Newer Mauldin subdivisions have young trees that are growing into fences and roof lines. Older lots have larger shade trees that need regular cuts to stay balanced.',
      'We cut each limb back to a proper point rather than topping the tree. Ask about a seasonal plan if you want the same crew to check the tree each year.',
    ], bullets: ['Branches over the roof, gutters, or siding', 'Limbs rubbing a fence, power line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Mauldin tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the site visit.' },
      { q: 'Do you clean up the brush after trimming in Mauldin?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
    ],
  },
  {
    area: 'mauldin', service: 'stump-grinding',
    title: 'Stump Grinding Mauldin, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Mauldin, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Mauldin, SC',
    lead: 'A stump left after a removal in Mauldin can sit in the yard for years. We grind it down so the space can be planted, paved, or mowed.',
    sections: [{ heading: 'Grinding stumps in Mauldin', paragraphs: [
      'Stumps can become a trip hazard and a home for pests and rot. Grinding clears the spot for a garden bed, patio, or new lawn.',
      'Roots and nearby structures change the method, so we check the stump and the ground around it on the visit. Ask for stump grinding with the removal if you want one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway, fence, or patio', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump next to a Mauldin fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'mauldin', service: 'arborist',
    title: 'Arborist Assessments Mauldin, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Mauldin, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Mauldin, SC',
    lead: 'Not sure whether a Mauldin tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Mauldin tree', paragraphs: [
      'An assessment looks at the trunk, the root flare, the branch unions, and the crown. It also looks at the target area, such as a house, a driveway, or a play area.',
      'You get the findings and the options in writing. Some trees need removal, some need trimming, and some just need watching. We will say which.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Mauldin before removal?', a: 'Yes. An assessment helps you decide between removal, trimming, or waiting. Ask about it when you call.' },
      { q: 'Will I get a written report for a Mauldin tree?', a: 'You get written findings and options after the visit. Ask us what the written summary includes.' },
    ],
  },
  {
    area: 'mauldin', service: 'emergency-tree-removal',
    title: 'Emergency Tree Removal Mauldin, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Mauldin, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us and we confirm the plan.',
    h1: 'Emergency Tree Removal in Mauldin, SC',
    lead: 'A tree down or leaning on a Mauldin home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Mauldin', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Mauldin?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Mauldin?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'mauldin', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Mauldin, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Mauldin, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Mauldin, SC',
    lead: 'What a tree removal costs in Mauldin depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Mauldin removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Mauldin estimate free?', a: 'Yes.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'mauldin', service: 'land-clearing',
    title: 'Land Clearing Mauldin, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Mauldin, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Mauldin, SC',
    lead: 'Clearing a Mauldin lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Mauldin lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Mauldin?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },

  // ---------- Fountain Inn ----------
  {
    area: 'fountain-inn', service: 'tree-removal',
    title: 'Tree Removal Fountain Inn, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Fountain Inn, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Fountain Inn, SC',
    lead: 'Removing a tree near a Fountain Inn house takes planning. We check how close it sits to the roof, fence, or driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Fountain Inn homes', paragraphs: [
      'Many Fountain Inn yards have a tree close to the house, a shed, or a shared fence line. Those spots need a plan that accounts for the space around the tree.',
      'We look at the tree and the access on the site visit. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roof or shed', 'A dead tree with little new growth', 'A storm-split trunk or cracked main limb'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Fountain Inn?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the visit.' },
      { q: 'How do I get a removal quote in Fountain Inn?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'tree-trimming',
    title: 'Tree Trimming Fountain Inn, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Fountain Inn, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Fountain Inn, SC',
    lead: 'Branches over a roof, scraping a gutter, or crossing a driveway are common trimming calls in Fountain Inn. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Fountain Inn yards', paragraphs: [
      'Older Fountain Inn yards often have large shade trees that need regular cuts. Newer lots have young trees that will need shaping as they grow.',
      'We cut each limb back to a proper point rather than topping the tree. Ask about a seasonal plan if you want one crew to check the trees each year.',
    ], bullets: ['Branches over roofs, gutters, or siding', 'Limbs rubbing a fence, line, or shed', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Fountain Inn tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the visit.' },
      { q: 'Do you clean up the brush in Fountain Inn?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'stump-grinding',
    title: 'Stump Grinding Fountain Inn, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Fountain Inn, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Fountain Inn, SC',
    lead: 'A stump left behind in Fountain Inn can block a garden bed or a mowing line for years. We grind it down so the space is usable again.',
    sections: [{ heading: 'Grinding stumps in Fountain Inn', paragraphs: [
      'Stumps can attract pests and rot in place. Grinding clears the spot for a planting bed, a patio, or new grass.',
      'Roots and nearby structures change the method, so we check the stump and the ground on the visit. Ask for grinding with the removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway or fence', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump near a Fountain Inn fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'arborist',
    title: 'Tree Assessment Fountain Inn, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Fountain Inn, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Fountain Inn, SC',
    lead: 'Not sure whether a Fountain Inn tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Fountain Inn tree', paragraphs: [
      'An assessment looks at the trunk, the roots near the base, the branch attachments, and the crown. It also looks at what the tree could hit if it fails.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching. We will say which.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof, shed, or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Fountain Inn before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting. Ask when you call.' },
      { q: 'Will I get written findings for a Fountain Inn tree?', a: 'You get written findings and options after the visit. Ask us what the summary includes.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'emergency-tree-removal',
    title: 'Emergency Removal Fountain Inn, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Fountain Inn, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm the plan.',
    h1: 'Emergency Tree Removal in Fountain Inn, SC',
    lead: 'A tree down or leaning on a Fountain Inn home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Fountain Inn', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or shed', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Fountain Inn?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Fountain Inn?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Fountain Inn, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Fountain Inn, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Fountain Inn, SC',
    lead: 'What a tree removal costs in Fountain Inn depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Fountain Inn removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Fountain Inn estimate free?', a: 'Yes.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'land-clearing',
    title: 'Land Clearing Fountain Inn, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Fountain Inn, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Fountain Inn, SC',
    lead: 'Clearing a Fountain Inn lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Fountain Inn lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Fountain Inn?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },
  // ---------- Travelers Rest ----------
  {
    area: 'travelers-rest', service: 'tree-removal',
    title: 'Tree Removal Travelers Rest, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Travelers Rest, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Travelers Rest, SC',
    lead: 'Removing a tree near a Travelers Rest house takes planning. On wooded or sloped lots we check the drop zone and access, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal on Travelers Rest lots', paragraphs: [
      'Many Travelers Rest lots are wooded, and a tree near the house may have a slope, a fence, or a driveway between it and a safe drop zone. The plan changes with each of those.',
      'We look at the tree and the access on the site visit. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or outbuilding', 'A dead tree with little new leaf growth', 'A storm-split trunk on a sloped lot'] }],
    faqs: [
      { q: 'Can you remove a tree on a sloped Travelers Rest lot?', a: 'Often, yes. The slope and access shape the method, so we check both on the visit and say what the job needs.' },
      { q: 'How do I get a removal quote in Travelers Rest?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'tree-trimming',
    title: 'Tree Trimming Travelers Rest, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Travelers Rest, SC to clear limbs from roofs, driveways, and power lines. Free written estimate and cleanup before we leave.',
    h1: 'Tree Trimming in Travelers Rest, SC',
    lead: 'Limbs over a roof, a driveway, or a line are common trimming calls in Travelers Rest. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Travelers Rest trees', paragraphs: [
      'Tall hardwoods and pines in Travelers Rest can drop limbs after heavy weather. Regular trimming keeps them balanced and away from the structures below.',
      'We cut each limb back to a proper point and leave the tree in good shape. Ask about a seasonal plan if you want one crew to check the trees each year.',
    ], bullets: ['Limbs over the roof, gutters, or driveway', 'Branches near a power line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim pines in Travelers Rest?', a: 'Yes. We look at the species and the growth on the visit and tell you what the tree needs.' },
      { q: 'Do you clean up the brush in Travelers Rest?', a: 'We clear the work area before we leave. The written quote says what is included.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'stump-grinding',
    title: 'Stump Grinding Travelers Rest, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Travelers Rest, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Travelers Rest, SC',
    lead: 'A stump left after a removal in Travelers Rest can sit in the yard for years. We grind it down so the spot is usable again.',
    sections: [{ heading: 'Grinding stumps in Travelers Rest', paragraphs: [
      'Stumps in wooded or sloped yards can hold roots that spread well past the trunk. Grinding clears the space for a garden bed, a patio, or new grass.',
      'We check the stump and the ground on the visit. Ask for stump grinding with the removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps on a slope that are hard to mow', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump on a sloped Travelers Rest yard?', a: 'Often, yes. We check the access on the visit and tell you what the grinding involves.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'arborist',
    title: 'Tree Assessment Travelers Rest, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Travelers Rest, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Travelers Rest, SC',
    lead: 'Not sure whether a Travelers Rest tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Travelers Rest tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. On a slope it also looks at how the soil is holding the root plate.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof, shed, or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Travelers Rest before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Travelers Rest tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'emergency-tree-removal',
    title: 'Emergency Trees Travelers Rest, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Travelers Rest, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm the plan.',
    h1: 'Emergency Tree Removal in Travelers Rest, SC',
    lead: 'A tree down or leaning on a Travelers Rest home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Travelers Rest', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. Wooded lots can hide a second tree that is also damaged, so look before you walk in.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Travelers Rest?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Travelers Rest?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Travelers Rest | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Travelers Rest, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Travelers Rest, SC',
    lead: 'What a tree removal costs in Travelers Rest depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Travelers Rest removal quote', paragraphs: [
      'On wooded or sloped lots, access often matters more than the size of the tree. Ask the quote to show how the crew will reach the tree.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Access and drop zone', 'Cleanup and stump work if needed'] }],
    faqs: [
      { q: 'Is the Travelers Rest estimate free?', a: 'Yes.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'land-clearing',
    title: 'Land Clearing Travelers Rest, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Travelers Rest, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Travelers Rest, SC',
    lead: 'Clearing a wooded Travelers Rest lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Travelers Rest lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. On a slope we plan the clearing so the soil stays put.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you clear sloped lots in Travelers Rest?', a: 'Yes. We look at the slope on the visit and explain how the clearing will be done.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },

  // ---------- Five Forks ----------
  {
    area: 'five-forks', service: 'tree-removal',
    title: 'Tree Removal Five Forks, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Five Forks, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Five Forks, SC',
    lead: 'Removing a tree near a Five Forks house takes planning. We check how close it sits to the roof, fence, or driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Five Forks homes', paragraphs: [
      'Five Forks has older wooded lots and newer homes where trees sit close to the house. Each spot needs a method that fits the space around the tree.',
      'We look at the tree and the access on the site visit. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Five Forks?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the visit.' },
      { q: 'How do I get a removal quote in Five Forks?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
    ],
  },
  {
    area: 'five-forks', service: 'tree-trimming',
    title: 'Tree Trimming Five Forks, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Five Forks, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Five Forks, SC',
    lead: 'Branches over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Five Forks. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Five Forks yards', paragraphs: [
      'Five Forks has a mix of older shade trees and younger trees in newer yards. Each needs trimming at a different point in its growth.',
      'We cut each limb back to a proper point rather than topping the tree. Ask about a seasonal plan if you want one crew to check the trees each year.',
    ], bullets: ['Branches over roofs, gutters, or siding', 'Limbs rubbing a fence, line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Five Forks tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the visit.' },
      { q: 'Do you clean up the brush in Five Forks?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
    ],
  },
  {
    area: 'five-forks', service: 'stump-grinding',
    title: 'Stump Grinding Five Forks, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Five Forks, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Five Forks, SC',
    lead: 'A stump left after a removal in Five Forks can sit in the yard for years. We grind it down so the space can be planted, paved, or mowed.',
    sections: [{ heading: 'Grinding stumps in Five Forks', paragraphs: [
      'Stumps can become a trip hazard and a home for pests and rot. Grinding clears the spot for a garden bed, patio, or new lawn.',
      'Roots and nearby structures change the method, so we check the stump and the ground around it on the visit. Ask for stump grinding with the removal if you want one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway, fence, or patio', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump near a Five Forks fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'five-forks', service: 'arborist',
    title: 'Tree Assessment in Five Forks, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Five Forks, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Five Forks, SC',
    lead: 'Not sure whether a Five Forks tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Five Forks tree', paragraphs: [
      'An assessment looks at the trunk, the root flare, the branch unions, and the crown. It also looks at the target area, such as a house, a driveway, or a play area.',
      'You get the findings and the options in writing. Some trees need removal, some need trimming, and some just need watching.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Five Forks before removal?', a: 'Yes. An assessment helps you decide between removal, trimming, or waiting. Ask about it when you call.' },
      { q: 'Will I get a written report for a Five Forks tree?', a: 'You get written findings and options after the visit. Ask us what the summary includes.' },
    ],
  },
  {
    area: 'five-forks', service: 'emergency-tree-removal',
    title: 'Emergency Removal Five Forks, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Five Forks, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us and we confirm the plan.',
    h1: 'Emergency Tree Removal in Five Forks, SC',
    lead: 'A tree down or leaning on a Five Forks home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Five Forks', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Five Forks?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Five Forks?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'five-forks', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Five Forks, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Five Forks, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Five Forks, SC',
    lead: 'What a tree removal costs in Five Forks depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Five Forks removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Five Forks estimate free?', a: 'Yes.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'five-forks', service: 'land-clearing',
    title: 'Land Clearing Five Forks, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Five Forks, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Five Forks, SC',
    lead: 'Clearing a Five Forks lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Five Forks lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Five Forks?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },
  // ---------- Powdersville ----------
  {
    area: 'powdersville', service: 'tree-removal',
    title: 'Tree Removal Powdersville, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Powdersville, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Powdersville, SC',
    lead: 'Removing a tree near a Powdersville house takes planning. We check how close it sits to the roof, fence, or driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Powdersville homes', paragraphs: [
      'The space around a tree decides the method. A tree with room to fall is a different job from one beside a garage or a fence.',
      'We look at the tree and the access on the site visit. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Do you remove trees in Powdersville, which is in Anderson County?', a: 'Call us with your address. We confirm coverage for the visit before you book.' },
      { q: 'How do I get a removal quote in Powdersville?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
    ],
  },
  {
    area: 'powdersville', service: 'tree-trimming',
    title: 'Tree Trimming Powdersville, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Powdersville, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Powdersville, SC',
    lead: 'Limbs over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Powdersville. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Powdersville yards', paragraphs: [
      'Trees near Powdersville homes often grow toward the roof and lines as they get taller. Trimming on a regular schedule keeps the growth in check.',
      'We cut each limb back to a proper point rather than topping the tree. Ask about a seasonal plan if you want one crew to check the trees each year.',
    ], bullets: ['Branches over roofs, gutters, or siding', 'Limbs rubbing a fence, line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Powdersville tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the visit.' },
      { q: 'Do you clean up the brush in Powdersville?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
    ],
  },
  {
    area: 'powdersville', service: 'stump-grinding',
    title: 'Stump Grinding Powdersville, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Powdersville, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Powdersville, SC',
    lead: 'A stump left after a removal in Powdersville can sit in the yard for years. We grind it down so the space is usable again.',
    sections: [{ heading: 'Grinding stumps in Powdersville', paragraphs: [
      'Stumps can attract pests and rot in place. Grinding clears the spot for a planting bed, a patio, or new grass.',
      'Roots and nearby structures change the method, so we check the stump and the ground on the visit. Ask for grinding with the removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway or fence', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump near a Powdersville fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'powdersville', service: 'arborist',
    title: 'Tree Assessment Powdersville, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Powdersville, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Powdersville, SC',
    lead: 'Not sure whether a Powdersville tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Powdersville tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at what the tree could reach if it fails.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof, shed, or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Powdersville before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Powdersville tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'powdersville', service: 'emergency-tree-removal',
    title: 'Emergency Removal Powdersville, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Powdersville, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm the plan.',
    h1: 'Emergency Tree Removal in Powdersville, SC',
    lead: 'A tree down or leaning on a Powdersville home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Powdersville', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Powdersville?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Powdersville?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'powdersville', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Powdersville, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Powdersville, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Powdersville, SC',
    lead: 'What a tree removal costs in Powdersville depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Powdersville removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Powdersville estimate free?', a: 'Yes.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'powdersville', service: 'land-clearing',
    title: 'Land Clearing Powdersville, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Powdersville, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Powdersville, SC',
    lead: 'Clearing a Powdersville lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Powdersville lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Powdersville?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },

  // ---------- Berea ----------
  {
    area: 'berea', service: 'tree-removal',
    title: 'Tree Removal in Berea, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Berea, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Berea, SC',
    lead: 'Removing a tree near a Berea house takes planning. On wooded lots we check the drop zone and access, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal on Berea lots', paragraphs: [
      'Berea has wooded parcels and established yards with trees that have grown close to the house over many years. The method depends on the space between the tree and the structure.',
      'We look at the tree and the access on the site visit. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or outbuilding', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a large tree on a Berea lot?', a: 'Often, yes. Tell us the size, the access, and what the tree is near. We explain the method on the visit.' },
      { q: 'How do I get a removal quote in Berea?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
    ],
  },
  {
    area: 'berea', service: 'tree-trimming',
    title: 'Tree Trimming in Berea, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Berea, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Berea, SC',
    lead: 'Limbs over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Berea. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Berea trees', paragraphs: [
      'Mature hardwoods and pines in Berea can drop limbs after heavy weather. Regular trimming keeps them balanced and away from the roofline.',
      'We cut each limb back to a proper point. Ask about a seasonal plan if you want one crew to check the trees each year.',
    ], bullets: ['Limbs over the roof, gutters, or driveway', 'Branches near a power line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim pines in Berea?', a: 'Yes. We look at the species and the growth on the visit and tell you what the tree needs.' },
      { q: 'Do you clean up the brush in Berea?', a: 'We clear the work area before we leave. The written quote says what is included.' },
    ],
  },
  {
    area: 'berea', service: 'stump-grinding',
    title: 'Stump Grinding Berea, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Berea, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Berea, SC',
    lead: 'A stump left after a removal in Berea can sit in the yard for years. We grind it down so the spot is usable again.',
    sections: [{ heading: 'Grinding stumps in Berea', paragraphs: [
      'Stumps in wooded yards can hold roots that spread well past the trunk. Grinding clears the space for a garden bed, a patio, or new grass.',
      'We check the stump and the ground on the visit. Ask for stump grinding with the removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps in a planned planting area', 'Old stumps near a walkway or fence'] }],
    faqs: [
      { q: 'Can you grind a stump on a wooded Berea lot?', a: 'Often, yes. We check the access on the visit and tell you what the grinding involves.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'berea', service: 'arborist',
    title: 'Arborist Assessments Berea, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Berea, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Berea, SC',
    lead: 'Not sure whether a Berea tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Berea tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at the target area, such as a house, a driveway, or a play area.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Berea before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Berea tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'berea', service: 'emergency-tree-removal',
    title: 'Emergency Tree Removal Berea, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Berea, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm the plan.',
    h1: 'Emergency Tree Removal in Berea, SC',
    lead: 'A tree down or leaning on a Berea home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Berea', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. Wooded lots can hide a second damaged tree, so look before you walk in.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Berea?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Berea?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'berea', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Berea, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Berea, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Berea, SC',
    lead: 'What a tree removal costs in Berea depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Berea removal quote', paragraphs: [
      'On wooded lots, access often matters more than the size of the tree. Ask the quote to show how the crew will reach the tree.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Access and drop zone', 'Cleanup and stump work if needed'] }],
    faqs: [
      { q: 'Is the Berea estimate free?', a: 'Yes.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'berea', service: 'land-clearing',
    title: 'Land Clearing in Berea, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Berea, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Berea, SC',
    lead: 'Clearing a wooded Berea lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Berea lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Berea?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },
  // ---------- Wade Hampton ----------
  {
    area: 'wade-hampton', service: 'tree-removal',
    title: 'Tree Removal Wade Hampton, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Wade Hampton, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Wade Hampton, SC',
    lead: 'Removing a tree near a Wade Hampton house takes planning. We check how close it sits to the roof, fence, or driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Wade Hampton homes', paragraphs: [
      'Many Wade Hampton yards have large trees close to the house, a garage, or a shared fence. The method that works in an open yard may not work there.',
      'We look at the tree and the access on the site visit. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Wade Hampton?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the visit.' },
      { q: 'How do I get a removal quote in Wade Hampton?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'tree-trimming',
    title: 'Tree Trimming Wade Hampton, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Wade Hampton, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Wade Hampton, SC',
    lead: 'Limbs over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Wade Hampton. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Wade Hampton yards', paragraphs: [
      'Older Wade Hampton yards often have large shade trees that need regular cuts. Younger trees need shaping while they are still small.',
      'We cut each limb back to a proper point rather than topping the tree. Ask about a seasonal plan if you want one crew to check the trees each year.',
    ], bullets: ['Branches over roofs, gutters, or siding', 'Limbs rubbing a fence, line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Wade Hampton tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the visit.' },
      { q: 'Do you clean up the brush in Wade Hampton?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'stump-grinding',
    title: 'Stump Grinding Wade Hampton, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Wade Hampton, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Wade Hampton, SC',
    lead: 'A stump left after a removal in Wade Hampton can sit in the yard for years. We grind it down so the space can be planted, paved, or mowed.',
    sections: [{ heading: 'Grinding stumps in Wade Hampton', paragraphs: [
      'Stumps can become a trip hazard and a home for pests and rot. Grinding clears the spot for a garden bed, patio, or new lawn.',
      'Roots and nearby structures change the method, so we check the stump and the ground around it on the visit. Ask for stump grinding with the removal if you want one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway, fence, or patio', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump near a Wade Hampton fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'arborist',
    title: 'Tree Assessment Wade Hampton, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Wade Hampton, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Wade Hampton, SC',
    lead: 'Not sure whether a Wade Hampton tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Wade Hampton tree', paragraphs: [
      'An assessment looks at the trunk, the root flare, the branch unions, and the crown. It also looks at the target area, such as a house, a driveway, or a play area.',
      'You get the findings and the options in writing. Some trees need removal, some need trimming, and some just need watching.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Wade Hampton before removal?', a: 'Yes. An assessment helps you decide between removal, trimming, or waiting. Ask about it when you call.' },
      { q: 'Will I get a written report for a Wade Hampton tree?', a: 'You get written findings and options after the visit. Ask us what the summary includes.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'emergency-tree-removal',
    title: 'Emergency Removal Wade Hampton, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Wade Hampton, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us and we confirm the plan.',
    h1: 'Emergency Tree Removal in Wade Hampton, SC',
    lead: 'A tree down or leaning on a Wade Hampton home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Wade Hampton', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Wade Hampton?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Wade Hampton?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Wade Hampton, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Wade Hampton, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Wade Hampton, SC',
    lead: 'What a tree removal costs in Wade Hampton depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Wade Hampton removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Wade Hampton estimate free?', a: 'Yes.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'land-clearing',
    title: 'Land Clearing Wade Hampton, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Wade Hampton, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Wade Hampton, SC',
    lead: 'Clearing a Wade Hampton lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Wade Hampton lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Wade Hampton?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },

  // ---------- Piedmont ----------
  {
    area: 'piedmont', service: 'tree-removal',
    title: 'Tree Removal Piedmont, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Piedmont, SC for leaning, dead, or storm-damaged trees near homes. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Removal in Piedmont, SC',
    lead: 'Removing a tree near a Piedmont house takes planning. Because Piedmont is at the edge of our service area, call first so we can confirm the visit.',
    sections: [{ heading: 'Removal near Piedmont homes', paragraphs: [
      'A tree close to a house, garage, or fence needs a method that fits the space around it. We plan the cuts on the site visit.',
      'You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new growth', 'A storm-split trunk or large cracked limb'] }],
    faqs: [
      { q: 'Do you remove trees in Piedmont, SC?', a: 'Call us with your address. We confirm coverage and the earliest visit before you book.' },
      { q: 'Is the removal quote written?', a: 'Yes. We send a written quote after the free visit.' },
    ],
  },
  {
    area: 'piedmont', service: 'tree-trimming',
    title: 'Tree Trimming Piedmont, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Piedmont, SC to clear branches from roofs, gutters, and driveways. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Trimming in Piedmont, SC',
    lead: 'Limbs over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Piedmont. Call us first to confirm we can reach your address.',
    sections: [{ heading: 'Trimming for Piedmont trees', paragraphs: [
      'Trees near Piedmont homes often grow toward roofs and lines over time. Regular trimming keeps the growth balanced.',
      'We cut each limb back to a proper point and leave the tree healthy. Ask about a seasonal plan if you want the same crew each year.',
    ], bullets: ['Branches over roofs or gutters', 'Limbs rubbing a fence or line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim trees in Piedmont?', a: 'Call us first so we can confirm coverage. We then set up a free visit and send a written quote.' },
      { q: 'Do you clean up the brush in Piedmont?', a: 'We clear the work area before we leave. The written quote says what is included.' },
    ],
  },
  {
    area: 'piedmont', service: 'stump-grinding',
    title: 'Stump Grinding Piedmont, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Piedmont, SC for stumps left after removal. Call first to confirm coverage. Free written estimate and cleanup.',
    h1: 'Stump Grinding in Piedmont, SC',
    lead: 'A stump left after a removal in Piedmont can sit in the yard for years. Call us first to confirm the visit, and we grind it down so the spot is usable.',
    sections: [{ heading: 'Grinding stumps in Piedmont', paragraphs: [
      'Stumps can attract pests and rot in place. Grinding clears the spot for a planting bed, a patio, or new grass.',
      'We check the stump and the ground on the visit. Ask for grinding with the removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway or fence', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump in Piedmont?', a: 'Call us with your address. We confirm the visit and then check the stump on site.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'piedmont', service: 'arborist',
    title: 'Arborist Assessments Piedmont, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Piedmont, SC for health, structure, and risk. Written findings and options from a free visit. Call first to confirm.',
    h1: 'Arborist Assessments in Piedmont, SC',
    lead: 'Not sure whether a Piedmont tree is safe, sick, or just overgrown? Call us to confirm the visit. We then assess the tree on site and explain what we see.',
    sections: [{ heading: 'Assessing a Piedmont tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at what the tree could reach if it fails.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Piedmont before removal?', a: 'Yes, once we confirm coverage for your address. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Piedmont tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'piedmont', service: 'emergency-tree-removal',
    title: 'Emergency Removal Piedmont, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Piedmont, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm coverage.',
    h1: 'Emergency Tree Removal in Piedmont, SC',
    lead: 'A tree down or leaning on a Piedmont home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first, then call us.',
    sections: [{ heading: 'After a storm in Piedmont', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We confirm coverage and tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Piedmont?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Piedmont?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'piedmont', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Piedmont, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Piedmont, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Piedmont, SC',
    lead: 'What a tree removal costs in Piedmont depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Piedmont removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Piedmont estimate free?', a: 'Yes, once we confirm coverage and set up the visit.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'piedmont', service: 'land-clearing',
    title: 'Land Clearing Piedmont, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Piedmont, SC for a new house, garden, or yard. Call first to confirm coverage. Free written estimate.',
    h1: 'Land Clearing in Piedmont, SC',
    lead: 'Clearing a Piedmont lot for a new home, a garden, or a yard is a plan you can see before it starts. Call us to confirm coverage, then we walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Piedmont lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Piedmont?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },
  // ---------- Pickens ----------
  {
    area: 'pickens', service: 'tree-removal',
    title: 'Tree Removal Pickens, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Pickens, SC for leaning, dead, or storm-damaged trees near homes. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Removal in Pickens, SC',
    lead: 'Removing a tree near a Pickens house takes planning. Pickens is outside the core of our service area, so call first and we will confirm the visit.',
    sections: [{ heading: 'Removal near Pickens homes', paragraphs: [
      'A tree close to a house, garage, or fence needs a method that fits the space around it. We plan the cuts on the site visit.',
      'You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new growth', 'A storm-split trunk or large cracked limb'] }],
    faqs: [
      { q: 'Do you remove trees in Pickens, SC?', a: 'Call us with your address. We confirm coverage and the earliest visit before you book.' },
      { q: 'Is the removal quote written?', a: 'Yes. We send a written quote after the free visit.' },
    ],
  },
  {
    area: 'pickens', service: 'tree-trimming',
    title: 'Tree Trimming Pickens, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Pickens, SC to clear branches from roofs, gutters, and driveways. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Trimming in Pickens, SC',
    lead: 'Limbs over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Pickens. Call us first to confirm we can reach your address.',
    sections: [{ heading: 'Trimming for Pickens trees', paragraphs: [
      'Trees near Pickens homes often grow toward roofs and lines over time. Regular trimming keeps the growth balanced.',
      'We cut each limb back to a proper point and leave the tree healthy. Ask about a seasonal plan if you want the same crew each year.',
    ], bullets: ['Branches over roofs or gutters', 'Limbs rubbing a fence or line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim trees in Pickens?', a: 'Call us first so we can confirm coverage. We then set up a free visit and send a written quote.' },
      { q: 'Do you clean up the brush in Pickens?', a: 'We clear the work area before we leave. The written quote says what is included.' },
    ],
  },
  {
    area: 'pickens', service: 'stump-grinding',
    title: 'Stump Grinding Pickens, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Pickens, SC for stumps left after removal. Call first to confirm coverage. Free written estimate and cleanup.',
    h1: 'Stump Grinding in Pickens, SC',
    lead: 'A stump left after a removal in Pickens can sit in the yard for years. Call us first to confirm the visit, and we grind it down so the spot is usable.',
    sections: [{ heading: 'Grinding stumps in Pickens', paragraphs: [
      'Stumps can attract pests and rot in place. Grinding clears the spot for a planting bed, a patio, or new grass.',
      'We check the stump and the ground on the visit. Ask for grinding with the removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway or fence', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump in Pickens?', a: 'Call us with your address. We confirm the visit and then check the stump on site.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'pickens', service: 'arborist',
    title: 'Arborist Assessments Pickens, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Pickens, SC for health, structure, and risk. Written findings and options from a free visit. Call first to confirm.',
    h1: 'Arborist Assessments in Pickens, SC',
    lead: 'Not sure whether a Pickens tree is safe, sick, or just overgrown? Call us to confirm the visit. We then assess the tree on site and explain what we see.',
    sections: [{ heading: 'Assessing a Pickens tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at what the tree could reach if it fails.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Pickens before removal?', a: 'Yes, once we confirm coverage for your address. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Pickens tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'pickens', service: 'emergency-tree-removal',
    title: 'Emergency Tree Removal Pickens, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Pickens, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm coverage.',
    h1: 'Emergency Tree Removal in Pickens, SC',
    lead: 'A tree down or leaning on a Pickens home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first, then call us.',
    sections: [{ heading: 'After a storm in Pickens', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We confirm coverage and tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Pickens?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Pickens?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'pickens', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Pickens, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Pickens, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Pickens, SC',
    lead: 'What a tree removal costs in Pickens depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Pickens removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Pickens estimate free?', a: 'Yes, once we confirm coverage and set up the visit.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'pickens', service: 'land-clearing',
    title: 'Land Clearing Pickens, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Pickens, SC for a new house, garden, or yard. Call first to confirm coverage. Free written estimate.',
    h1: 'Land Clearing in Pickens, SC',
    lead: 'Clearing a Pickens lot for a new home, a garden, or a yard is a plan you can see before it starts. Call us to confirm coverage, then we walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Pickens lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. We quote around them and tell you what the clearing involves.',
      'Clearing for construction may need county permits or a builder schedule. Check with the county and tell us the timing when you call.',
    ], bullets: ['Brush and small trees cleared', 'Lots prepared for a home or yard', 'Trees kept inside the marked boundary'] }],
    faqs: [
      { q: 'Do you work with builders in Pickens?', a: 'We can quote clearing for a builder or property owner. Tell us the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes.' },
    ],
  },

  // ---------- Woodruff ----------
  {
    area: 'woodruff', service: 'tree-removal',
    title: 'Tree Removal Woodruff, SC | Greenville Tree & Stump',
    metaDescription: 'Tree removal in Woodruff, SC for leaning, dead, or storm-damaged trees near homes. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Removal in Woodruff, SC',
    lead: 'Removing a tree near a Woodruff house takes planning. Woodruff is at the edge of our service area, so call first and we will confirm we can reach you.',
    sections: [{ heading: 'Removal near Woodruff homes', paragraphs: [
      'A tree close to a house, garage, or fence needs a method that fits the space around it. We plan the cuts on the site visit.',
      'You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new growth', 'A storm-split trunk or large cracked limb'] }],
    faqs: [
      { q: 'Do you remove trees in Woodruff, SC?', a: 'Call us with your address. We confirm coverage and the earliest visit before you book.' },
      { q: 'Is the removal quote written?', a: 'Yes. We send a written quote after the free visit.' },
    ],
  },
  {
    area: 'woodruff', service: 'tree-trimming',
    title: 'Tree Trimming Woodruff, SC | Greenville Tree & Stump',
    metaDescription: 'Tree trimming in Woodruff, SC to clear branches from roofs, gutters, and driveways. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Trimming in Woodruff, SC',
    lead: 'Limbs over a roof, rubbing a gutter, or hanging across a driveway are common trimming calls in Woodruff. Call us first to confirm we can reach your address.',
    sections: [{ heading: 'Trimming for Woodruff trees', paragraphs: [
      'Woodruff homes often sit on larger lots with mature trees. Regular trimming keeps the growth balanced and away from the roof.',
      'We cut each limb back to a proper point and leave the tree healthy. Ask about a seasonal plan if you want the same crew each year.',
    ], bullets: ['Branches over roofs or driveways', 'Limbs rubbing a fence or line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim trees in Woodruff?', a: 'Call us first so we can confirm coverage. We then set up a free visit and send a written quote.' },
      { q: 'Do you clean up the brush in Woodruff?', a: 'We clear the work area before we leave. The written quote says what is included.' },
    ],
  },
  {
    area: 'woodruff', service: 'stump-grinding',
    title: 'Stump Grinding Woodruff, SC | Greenville Tree & Stump',
    metaDescription: 'Stump grinding in Woodruff, SC for stumps left after removal. Call first to confirm coverage. Free written estimate and cleanup.',
    h1: 'Stump Grinding in Woodruff, SC',
    lead: 'A stump left after a removal in Woodruff can sit in the yard for years. Call us first to confirm the visit, and we grind it down so the spot is usable.',
    sections: [{ heading: 'Grinding stumps in Woodruff', paragraphs: [
      'Stumps can attract pests and rot in place. Grinding clears the spot for a planting bed, a patio, or new grass.',
      'We check the stump and the ground on the visit. Ask for grinding with the removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps left after a storm or an earlier removal', 'Stumps near a walkway or fence', 'Old stumps in a planned planting area'] }],
    faqs: [
      { q: 'Can you grind a stump in Woodruff?', a: 'Call us with your address. We confirm the visit and then check the stump on site.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The written quote lists the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'woodruff', service: 'arborist',
    title: 'Arborist Assessments Woodruff, SC | Greenville Tree & Stump',
    metaDescription: 'Tree assessments in Woodruff, SC for health, structure, and risk. Written findings and options from a free visit. Call first to confirm.',
    h1: 'Arborist Assessments in Woodruff, SC',
    lead: 'Not sure whether a Woodruff tree is safe, sick, or just overgrown? Call us to confirm the visit. We then assess the tree on site and explain what we see.',
    sections: [{ heading: 'Assessing a Woodruff tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at what the tree could reach if it fails.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Woodruff before removal?', a: 'Yes, once we confirm coverage for your address. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Woodruff tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'woodruff', service: 'emergency-tree-removal',
    title: 'Emergency Removal Woodruff, SC | Greenville Tree & Stump',
    metaDescription: 'Emergency tree removal in Woodruff, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm coverage.',
    h1: 'Emergency Tree Removal in Woodruff, SC',
    lead: 'A tree down or leaning on a Woodruff home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first, then call us.',
    sections: [{ heading: 'After a storm in Woodruff', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. We confirm coverage and tell you the earliest visit we can offer.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Woodruff?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We will tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Woodruff?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'woodruff', service: 'tree-removal-cost',
    title: 'Tree Removal Cost Woodruff, SC | Greenville Tree & Stump',
    metaDescription: 'What tree removal costs in Woodruff, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Woodruff, SC',
    lead: 'What a tree removal costs in Woodruff depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare them.',
    sections: [{ heading: 'Reading a Woodruff removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Our general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['Method and rigging', 'Cleanup and brush', 'Stump work and crane time if needed'] }],
    faqs: [
      { q: 'Is the Woodruff estimate free?', a: 'Yes, once we confirm coverage and set up the visit.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
    ],
  },
  {
    area: 'woodruff', service: 'land-clearing',
    title: 'Land Clearing Woodruff, SC | Greenville Tree & Stump',
    metaDescription: 'Land and lot clearing in Woodruff, SC for a new house, garden, or yard. Call first to confirm coverage. Free written estimate.',
    h1: 'Land Clearing in Woodruff, SC',
    lead: 'Clearing a lot in Woodruff before a build, a garden, or a new yard. We walk the land with you, mark what stays, and quote the work in writing.',
    sections: [{ heading: 'Clearing a Woodruff lot', paragraphs: [
      'Walk the property with us before you call if you can, and mark the trees you want to keep. Tell us where the entrance is, since a lot off US 221 or SC 101 can have a different access route than a lot on a side street near McKinney Park.',
      'Clearing for a new house often has county rules attached, and Woodruff is in Spartanburg County, so check with that county before work starts. Tell us about any rules you know of when you call.',
    ], bullets: ['Trees and brush cleared before a new build', 'A lot prepared for a garden or pasture', 'Clearing around trees you choose to keep'] }],
    faqs: [
      { q: 'Do I need a permit to clear a Woodruff lot?', a: 'It depends on the county and the plan. Woodruff is in Spartanburg County, so check with that county before clearing. We can tell you what we have seen on similar jobs.' },
      { q: 'Can you keep certain trees?', a: 'Yes. Mark them on the walk-through and we will quote around them.' },
      { q: 'How long does clearing a Woodruff lot take?', a: 'It depends on the size of the lot, how many trees come out, and the access. We give a time estimate with the written quote.' },
      { q: 'What happens to the cleared brush and logs?', a: 'The written quote says what is included, such as hauling, chipping, or leaving wood on site. Ask us to list it before you agree to the work.' },
      { q: 'Can equipment reach a lot off SC 146?', a: 'It depends on the entrance and the slope. Send us the address and we will check access on the visit.' },
    ],
  },
];

export function combosFor(areaSlug: string) {
  return combos.filter((c) => c.area === areaSlug);
}

export function comboBySlugs(area: string, service: string) {
  return combos.find((c) => c.area === area && c.service === service);
}
