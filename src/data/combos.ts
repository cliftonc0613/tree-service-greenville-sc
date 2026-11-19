import { business } from '@/data/site';
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
    title: `Removal Simpsonville | ${business.name}`,
    metaDescription: 'Tree removal in Simpsonville, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Simpsonville, SC',
    lead: 'A tree close to a Simpsonville house takes planning. We check how near it sits to the roof, a fence, or a driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Simpsonville homes', paragraphs: [
      'Many Simpsonville lots have a large tree close to the house, a garage, or a shared fence. A method that works in an open yard can be wrong for those spots, so we plan the cuts around what is nearby.',
      'If the tree stands on a lot off Fairview Road or near I-385, tell us where the traffic, the walks, and the lines are. We look at the tree, the target area, and the access on the site visit, then put the method and scope in writing.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Simpsonville?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the site visit and say honestly what it will take.' },
      { q: 'Do you cut a tree down in sections near a house in Simpsonville?', a: 'Sometimes. On tight lots we may take a tree down in pieces so it does not hit the roof, fence, or driveway. The site visit tells us which method fits.' },
      { q: 'What is included in a Simpsonville removal quote?', a: 'The written quote says whether the wood, brush, and stump are included. Ask us to go through that line before you agree to the work.' },
    ],
  },
  {
    area: 'simpsonville', service: 'tree-trimming',
    title: `Trimming Simpsonville | ${business.name}`,
    metaDescription: 'Tree trimming in Simpsonville, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and we clean up before we leave.',
    h1: 'Tree Trimming in Simpsonville, SC',
    lead: 'Limbs over a Simpsonville roof, rubbing a gutter, or hanging across a driveway are common trimming calls. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Simpsonville yards', paragraphs: [
      'Simpsonville has mature shade trees in older neighborhoods and younger trees in newer subdivisions. Both need trimming at different points, and the cuts should match the tree.',
      'Trees along SC 14 can grow toward traffic, and trees near Heritage Park can spread over walks. Tell us which side needs the most clearance. We cut to the right point on each limb rather than topping the tree.',
    ], bullets: ['Branches over the roof, gutters, or siding', 'Limbs rubbing a fence, power line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Simpsonville tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the site visit.' },
      { q: 'Is trimming the same as topping a tree?', a: 'No. Trimming removes branches back to a proper branch collar or a healthy side branch. Topping cuts off the top of the tree and weakens the regrowth. We do not top trees.' },
      { q: 'What time of year is best to trim a Simpsonville tree?', a: 'It depends on the species and the work. We tell you at the site visit whether now is a good time to cut.' },
    ],
  },
  {
    area: 'simpsonville', service: 'stump-grinding',
    title: `Stump Grind Simpsonville | ${business.name}`,
    metaDescription: 'Stump grinding in Simpsonville, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Simpsonville, SC',
    lead: 'A stump in a Simpsonville yard can stay in the way for years after a removal. We grind it below the surface so the spot can be planted, paved, or mowed.',
    sections: [{ heading: 'Grinding stumps in Simpsonville', paragraphs: [
      'A stump near a driveway, walkway, or fence is a trip hazard and a place for pests and fungus. Grinding clears the spot for a garden, patio, or new lawn.',
      'If the stump sits on a lot off Fairview Road or near Heritage Park, tell us how close it is to the road, the walks, and any buried lines, since those change the method. We check the stump and the ground on the site visit. You can add the grinding to a removal for one visit and one bill.',
    ], bullets: ['Stumps near a driveway, walkway, or fence', 'Stumps left after a removal in a Simpsonville yard', 'Old stumps in the way of a garden or new lawn'] }],
    faqs: [
      { q: 'Can you grind a stump near a fence or patio in Simpsonville?', a: 'Often, yes. We check the space and what is underground before we promise a method.' },
      { q: 'Can you grind a stump on a lot off Fairview Road?', a: 'Yes. Tell us the address and where the stump sits. We check access and the ground on the visit before we quote.' },
      { q: 'How deep does the stump get ground?', a: 'We grind below the surface so the spot can be planted or built on. The depth depends on the stump and your plans for the ground, so we confirm it on the visit.' },
      { q: 'Can you grind a stump that another company left behind?', a: 'Yes. Tell us what was left and where it sits. We check the stump and the ground before we quote.' },
    ],
  },
  {
    area: 'simpsonville', service: 'arborist',
    title: `Arborist Simpsonville | ${business.name}`,
    metaDescription: 'Tree assessments in Simpsonville, SC for health and hazards, with a plain recommendation on whether to keep, trim, or remove the tree.',
    h1: 'Arborist Assessments in Simpsonville, SC',
    lead: 'Before you decide to remove or trim a Simpsonville tree, get a plain assessment of its health and of any hazard it poses to your home, driveway, or yard.',
    sections: [{ heading: 'Assessing a Simpsonville tree', paragraphs: [
      'We check the trunk, root flare, main limbs, and canopy, and we look at what the tree could hit if it fails. That includes the house, the driveway, and anywhere people walk or park.',
      'You get a written summary of what we found and what we recommend, in order of priority. If a tree near a public space such as Heritage Park has a problem, we say so and explain what it means for visitors.',
    ], bullets: ['Signs of decay, cracks, or weak branch unions', 'Hazards to the house, driveway, or yard', 'A recommended order of work'] }],
    faqs: [
      { q: 'What do I get after a Simpsonville assessment?', a: 'A written summary of the findings, the risks, and the recommended work. You can keep it for your records.' },
      { q: 'Will an assessment always tell me to remove a tree?', a: 'No. Often the answer is pruning or monitoring. We say which one fits and why, and we say so plainly if a tree cannot be made safe.' },
    ],
  },
  {
    area: 'simpsonville', service: 'emergency-tree-removal',
    title: `Storm Removal Simpsonville | ${business.name}`,
    metaDescription: 'Emergency tree removal in Simpsonville, SC after storm damage. A tree down or leaning on a home or driveway. Call us, then we confirm the plan.',
    h1: 'Emergency Tree Removal in Simpsonville, SC',
    lead: 'A tree down or leaning on a Simpsonville home or driveway needs a call now. If a line is involved, call the power company or 911 first and stay clear.',
    sections: [{ heading: 'After a storm in Simpsonville', paragraphs: [
      'Storm calls in Simpsonville often involve a tree on a roof, a fence, or a parked car. Keep people and pets away from the tree and any loose limbs, and do not climb onto a roof to look.',
      'When you call, tell us where the tree is, what it touches, and whether anyone is hurt. If the tree is near I-385 or SC 14, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof, garage, or fence', 'A tree leaning over a driveway or walkway', 'Photos for your insurance claim, taken from a safe spot'] }],
    faqs: [
      { q: 'How fast can you respond in Simpsonville after a storm?', a: 'Call and we tell you the earliest visit we can offer. We do not promise a time we cannot keep.' },
      { q: 'Should I cut a fallen tree off my car or roof myself?', a: 'No. Stay clear of the tree and any lines. If a power line is touched, call the power company or 911 first. Call us once the area is safe to approach.' },
      { q: 'Will homeowners insurance cover emergency removal?', a: 'That depends on your policy. Take photos from a safe spot, keep your receipts, and check with your insurer. We can give you a written quote for your records.' },
    ],
  },
  {
    area: 'simpsonville', service: 'tree-removal-cost',
    title: `Removal Cost Simpsonville | ${business.name}`,
    metaDescription: 'What tree removal costs in Simpsonville, SC, and what changes the price. Compare written quotes with the same scope. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Simpsonville, SC',
    lead: 'A tree removal in Simpsonville is priced by the tree, where it stands on the lot, and how the crew can get to it. Here is what moves the number and how to compare written quotes.',
    sections: [{ heading: 'What moves the price in Simpsonville', paragraphs: [
      'Height, trunk width, and how close the tree sits to a house, fence, or power line matter most. Crane work, slopes, and tight side yards add time and care.',
      'Compare written quotes line by line. Check the method, the cleanup, what happens to the wood and brush, and whether stump work is included. Our general ranges are on the Tree Removal Cost page. For your tree, the written quote is the number that counts.',
    ], bullets: ['Height and trunk width', 'Distance to a house, fence, or power line', 'Access through a side yard or a tight lot'] }],
    faqs: [
      { q: 'Why do Simpsonville removal quotes differ?', a: 'Scope, access, method, and cleanup all change the price. Compare the written scope line by line.' },
      { q: 'Is the estimate free?', a: 'Yes. The site visit and written quote cost nothing.' },
      { q: 'Why does a removal cost more when the tree is close to the house?', a: 'Close trees need more careful cuts, rigging, and crew time, so the job takes longer. The written quote explains how that affects the scope.' },
      { q: 'Does work near Heritage Park or a public trail cost more?', a: 'Work near public land can need extra planning, such as a closer look at the method or a permit check. The written quote lists any extra steps.' },
      { q: 'What happens if the work changes after the quote?', a: 'We explain the change in writing before it happens, along with how it affects the price.' },
    ],
  },
  {
    area: 'simpsonville', service: 'land-clearing',
    title: `Clearing Simpsonville | ${business.name}`,
    metaDescription: 'Land and lot clearing in Simpsonville, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call today.',
    h1: 'Land Clearing in Simpsonville, SC',
    lead: 'Clearing a lot in Simpsonville before a build, a garden, or a new yard. We walk the land with you, mark what stays, and quote the work in writing.',
    sections: [{ heading: 'Clearing a Simpsonville lot', paragraphs: [
      'Walk the property with us before you call if you can, and mark the trees you want to keep. Tell us where the entrance is and how equipment would get in, since a lot off SC 14 or Fairview Road can have a different access route than a lot in a subdivision.',
      'Clearing for a new house or a development often has county or HOA rules attached. Tell us about them, and check with the county before work starts. Lots near public land such as Heritage Park may have added steps, so ask us about them early.',
    ], bullets: ['Trees and brush cleared before a new build', 'A lot prepared for a garden or pasture', 'Clearing around trees you choose to keep'] }],
    faqs: [
      { q: 'Do I need a permit to clear a Simpsonville lot?', a: 'It depends on the county and the plan. Check with the county before clearing. We can tell you what we have seen on similar jobs.' },
      { q: 'Can you keep certain trees?', a: 'Yes. Mark them on the walk-through and we will quote around them.' },
      { q: 'How long does clearing a Simpsonville lot take?', a: 'It depends on the size of the lot, how many trees come out, and the access. We give a time estimate with the written quote.' },
      { q: 'What happens to the cleared brush and logs?', a: 'The written quote says what is included, such as hauling, chipping, or leaving wood on site. Ask us to list it before you agree to the work.' },
      { q: 'Can equipment reach a lot off Fairview Road?', a: 'It depends on the entrance and the slope. Send us the address and we will check access on the visit.' },
    ],
  },

  // ---------- Taylors ----------
  {
    area: 'taylors', service: 'tree-removal',
    title: `Tree Removal Taylors, SC | ${business.name}`,
    metaDescription: 'Tree removal in Taylors, SC for dead, leaning, or storm-damaged trees near homes along Wade Hampton Blvd. Free written estimate.',
    h1: 'Tree Removal in Taylors, SC',
    lead: 'Taylors yards often have large hardwoods and pines near the house. When one is dead, leaning, or storm-damaged, we explain the removal plan before any work starts.',
    sections: [{ heading: 'Removal in Taylors yards', paragraphs: [
      'Older Taylors lots near Wade Hampton Boulevard often have tall trees that were planted before the houses. Removal near those homes needs careful rigging and a clear plan for what falls where.',
      'On a lot near the Enoree River or on the slopes around Taylors Mill, the ground can be soft or steep. We look at the footing and the access on the site visit, then write out the method, the scope, and the cleanup.',
    ], bullets: ['A dead pine or hardwood near a home', 'A leaning tree over a driveway or fence', 'A storm-damaged tree with a split trunk'] }],
    faqs: [
      { q: 'Can you remove a large pine in Taylors?', a: 'Yes. Tell us the height and what is nearby, and we say what the removal involves.' },
      { q: 'How soon can you come out in Taylors?', a: 'Call us and we tell you the earliest visit we can offer.' },
      { q: 'Does a tree by the Enoree River cost more to remove?', a: 'It can, if soft or steep ground limits where equipment sets up. The written quote explains how access affects the scope.' },
    ],
  },
  {
    area: 'taylors', service: 'tree-trimming',
    title: `Tree Trimming Taylors, SC | ${business.name}`,
    metaDescription: 'Tree trimming in Taylors, SC to clear branches from roofs, power lines, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Taylors, SC',
    lead: 'Pines and hardwoods in Taylors drop limbs after heavy weather. Routine trimming keeps branches off the roof and away from the lines.',
    sections: [{ heading: 'Trimming Taylors trees', paragraphs: [
      'Pines and hardwoods grow differently, so each needs its own kind of cut. Pines are often trimmed for clearance and hazard limbs, while hardwoods need cuts that keep their shape.',
      'Trees along Wade Hampton Blvd can grow toward traffic and power lines, so we plan the clearance before we cut. Ask us about a seasonal plan if you want one company to look at the trees each year.',
    ], bullets: ['Limbs over a roof or gutter', 'Branches near a power line or service drop', 'Dead limbs that could fall in a storm'] }],
    faqs: [
      { q: 'Do you trim pines in Taylors?', a: 'Yes. We trim pines and hardwoods, and we tell you what cuts the tree needs.' },
      { q: 'Is the trimming quote written?', a: 'Yes. Every quote is in writing, with the scope and the cleanup.' },
    ],
  },
  {
    area: 'taylors', service: 'stump-grinding',
    title: `Stump Grinding Taylors, SC | ${business.name}`,
    metaDescription: 'Stump grinding in Taylors, SC for stumps left after a removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Taylors, SC',
    lead: 'A stump in a Taylors yard can take up space you want for a garden or lawn. We grind it down and clean up the grindings.',
    sections: [{ heading: 'Grinding stumps in Taylors', paragraphs: [
      'Taylors yards often have old stumps from trees removed decades ago, as well as newer ones. Old roots can run further than the stump shows, so we check the ground on the site visit.',
      'On a lot along Wade Hampton Blvd or near the Enoree River, tell us whether the stump sits by a walkway, a fence, a slope, or the house. That tells us how close the grinder can work and how the grindings come out.',
    ], bullets: ['Old stumps from earlier removals', 'Stumps near a walkway, fence, or the house', 'Stumps on sloped ground'] }],
    faqs: [
      { q: 'How deep does the stump grinding go?', a: 'The depth and method are in the written quote after the site visit.' },
      { q: 'Can you grind a stump with the tree removal?', a: 'Yes. One visit and one written quote usually works best.' },
      { q: 'Can you grind an old stump near the Enoree River?', a: 'If the equipment can reach it safely, usually yes. Slopes and wet ground change the method, so we look at it on the visit.' },
    ],
  },
  {
    area: 'taylors', service: 'arborist',
    title: `Arborist Taylors | ${business.name}`,
    metaDescription: 'Tree assessments in Taylors, SC for health and hazards, with a plain recommendation on keeping, trimming, or removing the tree.',
    h1: 'Arborist Assessments in Taylors, SC',
    lead: 'Before you decide what to do about a Taylors tree, get a plain look at its health and the hazards it poses.',
    sections: [{ heading: 'Assessing a Taylors tree', paragraphs: [
      'We check the trunk, the root flare, the main limbs, and the canopy. We also look at the targets: the house, the driveway, and the spots people use in the yard.',
      'Trees on wet ground near the Enoree River can have less stable roots, so we check the soil as well. You receive a written summary of the findings and the recommended order of work, and we say if the tree can be saved.',
    ], bullets: ['Decay, cracks, or weak limb attachments', 'Lean and root stability, including wet soil', 'Hazards to people and property'] }],
    faqs: [
      { q: 'What does an assessment in Taylors cost?', a: 'Our site visit and written quote are free. Ask during the call what the assessment includes.' },
      { q: 'Will you tell me if a tree can be saved?', a: 'Yes. We say so plainly, whether the answer is to keep, trim, or remove.' },
    ],
  },
  {
    area: 'taylors', service: 'emergency-tree-removal',
    title: `Emergency Removal Taylors | ${business.name}`,
    metaDescription: 'Emergency tree removal in Taylors, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us now.',
    h1: 'Emergency Tree Removal in Taylors, SC',
    lead: 'A tree down or leaning on a Taylors home or driveway needs a call. If a power line is involved, call the power company or 911 first and stay clear.',
    sections: [{ heading: 'After a storm in Taylors', paragraphs: [
      'Keep people and pets clear of the tree and the area under any loose limbs. If the tree is on the house and the house is unsafe, leave it.',
      'Call us with the location, what the tree touches, and whether anyone is hurt. If the tree sits near the Enoree River or down a slope, tell us, because the footing changes how we set up.',
    ], bullets: ['A tree on a home or garage', 'A tree across a driveway', 'Photos from a safe spot for your claim'] }],
    faqs: [
      { q: 'What if a tree fell on a car in Taylors?', a: 'Keep clear of the car and the tree. Call your insurance company and us. We work with the scope and the photos you took from a safe spot.' },
      { q: 'How quickly can you come out in Taylors?', a: 'Call and we tell you the earliest visit we can offer. We do not promise a time we cannot keep.' },
    ],
  },
  {
    area: 'taylors', service: 'tree-removal-cost',
    title: `Removal Cost Taylors | ${business.name}`,
    metaDescription: 'What tree removal costs in Taylors, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Taylors, SC',
    lead: 'Tree removal in Taylors costs more or less depending on the tree, the lot, and the access. Here is how to read a quote.',
    sections: [{ heading: 'Reading a Taylors removal quote', paragraphs: [
      'Ask what each line covers. A low number with no scope is harder to trust than a fair number with the method and cleanup written out.',
      'If the tree stands close to an older home, such as on a lot near Wade Hampton Blvd, it may need more rigging, and the scope will show that. The general ranges are on the Tree Removal Cost page, and your written quote is the price for your tree.',
    ], bullets: ['Tree height and trunk width', 'How close the tree is to the house or a line', 'Rigging, cleanup, and stump work in the scope'] }],
    faqs: [
      { q: 'Do you charge for the Taylors estimate?', a: 'No. The site visit and written quote are free.' },
      { q: 'Are quotes firm?', a: 'The written quote states the scope and price for the work described. Ask about any change before it happens.' },
      { q: 'Why would a removal near the Enoree River cost more?', a: 'Slopes and soft ground near water can limit where equipment sets up, which can add time. The written quote says what the access involves.' },
    ],
  },
  {
    area: 'taylors', service: 'land-clearing',
    title: `Land Clearing Taylors, SC | ${business.name}`,
    metaDescription: 'Land and lot clearing in Taylors, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call today.',
    h1: 'Land Clearing in Taylors, SC',
    lead: 'Lots in Taylors often need clearing before a build or a garden. We walk the land with you and quote the work in writing.',
    sections: [{ heading: 'Clearing a Taylors lot', paragraphs: [
      'Mark the trees and areas you want to keep before the site visit, and we plan the clearing around them.',
      'Clearing near the Enoree River or on slopes changes the access and the method, and we will say what it takes on the visit. Taylors is in Greenville County, so check with the county about any rules before work starts.',
    ], bullets: ['Brush and small trees cleared from a lot', 'Sloped ground cleared with a plan for access', 'Trees you mark left standing'] }],
    faqs: [
      { q: 'Can you clear a sloped Taylors lot?', a: 'Often, yes. Slope changes the method and the price. We will look at it on the visit.' },
      { q: 'Do you haul the brush away?', a: 'Ask during the estimate. The written quote says what the cleanup includes.' },
      { q: 'Can you clear a lot off Wade Hampton Blvd?', a: 'Tell us where the entrance is and how equipment would get in. A main road frontage can change the plan, so we check it on the visit.' },
    ],
  },

  // ---------- Easley ----------
  {
    area: 'easley', service: 'tree-removal',
    title: `Tree Removal in Easley, SC | ${business.name}`,
    metaDescription: 'Tree removal in Easley, SC for dead, leaning, or storm-damaged trees on wooded lots and near homes. Free written estimate.',
    h1: 'Tree Removal in Easley, SC',
    lead: 'Easley lots often border woods, so a removal can involve both the yard tree and trees at the edge of the lot. We plan the work around both.',
    sections: [{ heading: 'Removal on Easley lots', paragraphs: [
      'On a wooded lot, the tree you want removed may lean toward other trees or a slope. We check how the tree will fall and what is around it before any cutting starts.',
      'Lots near US 123 or SC 153 may have a long drive or a steep bank that limits equipment, and lots near the Saluda River can be wet. Tell us which applies when you call. You receive the method, scope, and cleanup in writing.',
    ], bullets: ['A dead tree on the edge of a wooded lot', 'A leaning tree near the house', 'A storm-damaged tree with a split trunk'] }],
    faqs: [
      { q: 'Can you remove a tree on a sloped lot in Easley?', a: 'Often, yes. Slope changes the method, and we explain it on the visit.' },
      { q: 'Do you serve Easley?', a: 'Yes. Call to confirm the visit for your address.' },
      { q: 'Do you remove trees that lean into the woods behind a lot?', a: 'We check how the tree will fall before we cut. Tell us what lies behind the tree, and we plan the drop around it.' },
    ],
  },
  {
    area: 'easley', service: 'tree-trimming',
    title: `Tree Trimming Easley, SC | ${business.name}`,
    metaDescription: 'Tree trimming in Easley, SC for overgrown branches, roof clearance, and hazard limbs. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Easley, SC',
    lead: 'Overgrown branches in Easley can reach the roof, the driveway, or the lines. We trim to keep the tree healthy and the space clear.',
    sections: [{ heading: 'Trimming Easley trees', paragraphs: [
      'Wooded properties grow trees close together, which means some limbs compete for light and drop weight in storms. The right cuts reduce that risk without harming the tree.',
      'Along Old Easley Highway (SC 124) or near Nalley Brown Nature Park, tell us which areas matter most, such as the roof, a driveway, or a trail. We cut to the right point on each limb.',
    ], bullets: ['Limbs over the roof or driveway', 'Crowded limbs competing for light', 'Dead limbs that could fall'] }],
    faqs: [
      { q: 'How often should Easley trees be trimmed?', a: 'It depends on the species and the spacing. We tell you at the site visit.' },
      { q: 'Do you clean up after trimming in Easley?', a: 'Yes. We clear the work area before we leave.' },
    ],
  },
  {
    area: 'easley', service: 'stump-grinding',
    title: `Stump Grinding Easley, SC | ${business.name}`,
    metaDescription: 'Stump grinding in Easley, SC for stumps left after a removal on wooded or open lots. Free written estimate, cleanup before we leave.',
    h1: 'Stump Grinding in Easley, SC',
    lead: 'Stumps on Easley lots can sit in the way of a new garden, a driveway, or a clearing. We grind them down and clean up.',
    sections: [{ heading: 'Grinding stumps in Easley', paragraphs: [
      'Stumps left after clearing or a removal often sit among brush and roots. We look at the stump, the roots, and the access before we give you a method.',
      'On a wooded lot off US 123 or SC 153, or on ground that slopes toward the Saluda River, tell us how a machine would reach the stump. Ask for the grinding with a removal if both are needed, so it is one visit and one written quote.',
    ], bullets: ['Stumps left after a clearing', 'Stumps among brush and roots on wooded lots', 'Stumps in the way of a garden or driveway'] }],
    faqs: [
      { q: 'Can you reach a stump in the woods in Easley?', a: 'Often, if we can get the equipment in safely. We check the access on the visit.' },
      { q: 'What happens to the grindings?', a: 'We list it in the written quote, so you know before the work whether the grindings stay on site or are cleaned up.' },
    ],
  },
  {
    area: 'easley', service: 'arborist',
    title: `Arborist Services Easley | ${business.name}`,
    metaDescription: 'Tree assessments in Easley, SC for health and hazards on wooded lots, with a plain recommendation. Free written estimate.',
    h1: 'Arborist Assessments in Easley, SC',
    lead: 'On a wooded Easley lot, the question is often which trees are healthy and which are a hazard. We give you a plain answer in writing.',
    sections: [{ heading: 'Assessing trees on Easley lots', paragraphs: [
      'We check the trees near the house or the targets you care about. In the woods, we also note trees that lean or have dead tops, since they can fail in a storm.',
      'If the lot runs down to the Saluda River or a creek, we also look at the slope and soil around each tree. You get a written summary of the findings and the recommended work, in order of priority.',
    ], bullets: ['Dead tops and hanging limbs', 'Lean and root stability on slopes', 'Trees near the house or driveway'] }],
    faqs: [
      { q: 'Do you assess a whole wooded lot?', a: 'We assess the trees you name and the ones near targets. Tell us the scope on the call.' },
      { q: 'Is the assessment free?', a: 'Our site visit and written quote are free.' },
    ],
  },
  {
    area: 'easley', service: 'emergency-tree-removal',
    title: `Emergency Removal Easley | ${business.name}`,
    metaDescription: 'Emergency tree removal in Easley, SC after storm damage on wooded lots and near homes. Call us, then we confirm the plan.',
    h1: 'Emergency Tree Removal in Easley, SC',
    lead: 'A tree down or leaning on an Easley home, driveway, or fence needs a call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Easley', paragraphs: [
      'Wooded lots can have several trees down after a storm, and some may be hung up in others. Do not walk under hung trees or try to cut them yourself.',
      'Call us with the location, what the trees touch, and whether anyone is hurt. If the damage is on a slope or near the Saluda River, mention it, since the footing changes the setup.',
    ], bullets: ['A tree on a home, shed, or fence', 'Trees hung up in other trees', 'Photos from a safe spot for your claim'] }],
    faqs: [
      { q: 'What if a tree is hung up in another tree?', a: 'Stay clear. Do not cut it loose yourself. Call us and we look at it safely.' },
      { q: 'Do you give a written quote for storm work in Easley?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'easley', service: 'tree-removal-cost',
    title: `Removal Cost Easley | ${business.name}`,
    metaDescription: 'What tree removal costs in Easley, SC, and the factors that change the price on wooded lots. Compare written quotes. Free estimate.',
    h1: 'Tree Removal Cost in Easley, SC',
    lead: 'Wooded Easley lots change the cost of a removal. Here is what moves the price and how to compare written quotes.',
    sections: [{ heading: 'What moves the price in Easley', paragraphs: [
      'Access through woods, slopes, and the distance to the house all add time and care. A removal near other trees can need more rigging.',
      'A tree on a lot off SC 124 or near Nalley Brown Nature Park may be reached differently than one in a neighborhood yard, so tell us how a truck would get to it. The general ranges are on the Tree Removal Cost page. Your written quote after a free visit is the number for your tree.',
    ], bullets: ['Access through woods or on a slope', 'Distance to the house and other trees', 'Rigging, cleanup, and hauling in the scope'] }],
    faqs: [
      { q: 'Why do Easley quotes vary?', a: 'Access, lot shape, and scope change the price. Compare the written scope.' },
      { q: 'Is the estimate free?', a: 'Yes. There is no charge for the visit or the written quote.' },
      { q: 'Do Pickens County rules affect a removal?', a: 'Rules depend on the county and the property. Easley is in Pickens County, so check with the county if you are unsure. We can tell you what we have seen on similar jobs.' },
    ],
  },
  {
    area: 'easley', service: 'land-clearing',
    title: `Land Clearing Easley, SC | ${business.name}`,
    metaDescription: 'Land and lot clearing in Easley, SC for a new house, pasture, or garden on wooded property. Free written estimate. Call today.',
    h1: 'Land Clearing in Easley, SC',
    lead: 'Clearing a wooded Easley property for a house, a pasture, or a garden takes a plan. We walk the land with you and quote the work in writing.',
    sections: [{ heading: 'Clearing wooded Easley land', paragraphs: [
      'Mark the boundary, the trees you want to keep, and any areas to avoid. That helps us quote accurately and keep the clearing where you want it.',
      'Easley is in Pickens County, so check with the county about rules before clearing starts. Land that slopes toward the Saluda River or a creek can limit access, and we will say what that means for the method on the visit.',
    ], bullets: ['Wooded lots cleared for a house or pasture', 'Brush and small trees removed', 'Clearing kept inside the boundary you mark'] }],
    faqs: [
      { q: 'Do you clear around trees I want to keep?', a: 'Yes. Mark them on the walk-through.' },
      { q: 'Is the clearing quote written?', a: 'Yes, with the scope and the cleanup.' },
      { q: 'Can you clear a lot off US 123?', a: 'Tell us where the entrance is. Highway frontage can change how equipment gets in, so we check it on the visit.' },
    ],
  },

  // ---------- Greer ----------
  {
    area: 'greer', service: 'tree-removal',
    title: `Tree Removal in Greer, SC | ${business.name}`,
    metaDescription: 'Tree removal in Greer, SC for dead, leaning, or storm-damaged trees near homes and new construction. Free written estimate.',
    h1: 'Tree Removal in Greer, SC',
    lead: 'Greer has established neighborhoods with mature trees and newer lots where trees sit close to new homes. We plan each removal around what is nearby.',
    sections: [{ heading: 'Removal near Greer homes', paragraphs: [
      'Greer spans Greenville and Spartanburg counties, and its neighborhoods range from older streets to recent builds. Near new homes, the trees may be young but still hazardous if they lean or split.',
      'If the tree stands near Highway 101 South or the Greer Depot on Trade Street, tell us about the traffic and the walks. We look at the target and the access before we quote.',
    ], bullets: ['A leaning tree near a new home', 'A dead tree on a neighboring lot line', 'A storm-split trunk'] }],
    faqs: [
      { q: 'Do you remove trees for new construction in Greer?', a: 'We remove trees for homeowners and property owners. Tell us about the project and we say what we can do.' },
      { q: 'Can you remove a tree on a shared lot line?', a: 'Often, yes. Tell us about the lot line on the call so we can plan for it.' },
      { q: 'Does a tree near the Greer Depot cost more to remove?', a: 'It can, if traffic or walks limit where equipment sets up. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'greer', service: 'tree-trimming',
    title: `Tree Trimming in Greer, SC | ${business.name}`,
    metaDescription: 'Tree trimming in Greer, SC to clear branches from roofs, driveways, and power lines in established neighborhoods. Free written estimate.',
    h1: 'Tree Trimming in Greer, SC',
    lead: 'Trees in established Greer neighborhoods can grow into roofs, driveways, and lines. Routine trimming keeps the branches where they belong.',
    sections: [{ heading: 'Trimming Greer trees', paragraphs: [
      'Greer yards often have a mix of older shade trees and newer plantings. Each needs cuts that match its age and species.',
      'Trees near Greer Depot or along US 29 may grow toward traffic and signs, so tell us which side needs clearance. Ask about a seasonal plan if you want one company to handle trimming each year, with a written quote for each visit.',
    ], bullets: ['Limbs over a roof or gutter', 'Branches near a service line', 'Young trees shaped before they grow large'] }],
    faqs: [
      { q: 'Do you trim trees near power lines in Greer?', a: 'We trim branches near lines to a safe clearance. Call the utility first if a line is involved, and we plan around it.' },
      { q: 'Is the trimming quote written?', a: 'Yes.' },
    ],
  },
  {
    area: 'greer', service: 'stump-grinding',
    title: `Stump Grinding Greer, SC | ${business.name}`,
    metaDescription: 'Stump grinding in Greer, SC for stumps left after a removal or clearing. Free written estimate, and we clean up before we leave.',
    h1: 'Stump Grinding in Greer, SC',
    lead: 'Stumps left after a removal or a clearing in Greer can get in the way of a lawn, a patio, or a new planting. We grind them down.',
    sections: [{ heading: 'Grinding stumps in Greer', paragraphs: [
      'Stumps in newer neighborhoods often sit near new sod or new fences. We check the stump and the ground around it before choosing a method.',
      'If your yard is off SC 101 or US 29, tell us whether the stump sits near the street, a driveway, or a buried line, since that changes how close the grinder can work. Add the grinding to a removal if you want one visit and one bill.',
    ], bullets: ['Stumps near new sod or a new fence', 'Stumps left after a removal or a clearing', 'Stumps in the way of a patio or planting'] }],
    faqs: [
      { q: 'Will grinding damage new sod?', a: 'We plan the method around the surrounding ground and tell you about any risk on the visit.' },
      { q: 'What about the grindings?', a: 'We write down in the quote whether the grindings stay or are cleaned up, so there is no surprise after the work.' },
      { q: 'My Greer lot is in Spartanburg County. Does that matter?', a: 'Greer sits in both Greenville and Spartanburg counties. Tell us the address so we can confirm coverage and plan the visit.' },
    ],
  },
  {
    area: 'greer', service: 'arborist',
    title: `Arborist Services Greer | ${business.name}`,
    metaDescription: 'Tree assessments in Greer, SC for health and hazards, with a plain written recommendation on keeping, trimming, or removing the tree.',
    h1: 'Arborist Assessments in Greer, SC',
    lead: 'Before you decide what to do about a Greer tree, get a plain look at its health and any hazards it poses.',
    sections: [{ heading: 'Assessing a Greer tree', paragraphs: [
      'We check the trunk, root flare, main limbs, and canopy. We also look at what the tree could hit, such as a home, a driveway, or a neighbor’s property line.',
      'Trees in open yards can be more exposed to wind than trees in the woods, so we factor that exposure into the summary. You receive a written summary and a recommended order of work, and we say if the tree can be saved.',
    ], bullets: ['Decay, cracks, or weak attachments', 'Lean and root stability', 'Hazards to property and people'] }],
    faqs: [
      { q: 'Can you assess a tree on a neighbor’s property?', a: 'We look at the tree from your side. Any work on a neighbor’s tree needs the neighbor’s permission.' },
      { q: 'Is the assessment free?', a: 'Our site visit and written quote are free.' },
    ],
  },
  {
    area: 'greer', service: 'emergency-tree-removal',
    title: `Emergency Removal Greer | ${business.name}`,
    metaDescription: 'Emergency tree removal in Greer, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us, then we confirm the plan.',
    h1: 'Emergency Tree Removal in Greer, SC',
    lead: 'A tree down or leaning on a Greer home, car, or driveway needs a call now. If a line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Greer', paragraphs: [
      'Keep people and pets clear of the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near a main road such as US 29 or SC 101, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos from a safe spot for your claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Greer?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Greer?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'greer', service: 'tree-removal-cost',
    title: `Removal Cost Greer | ${business.name}`,
    metaDescription: 'What tree removal costs in Greer, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Greer, SC',
    lead: 'What a tree removal costs in Greer depends on the tree, the lot, and the access. Here is how to read a written quote.',
    sections: [{ heading: 'Reading a Greer removal quote', paragraphs: [
      'A good quote says where the work starts and stops. Look for the method, the cleanup, and whether the stump is included, then compare quotes on the same terms.',
      'Access matters as much as size. A tree in a tight back yard takes longer to bring down than one in an open front yard, because the crew has to lower it in pieces. The general ranges are on the Tree Removal Cost page, and your written quote after a free visit is the price for your tree.',
    ], bullets: ['Tree size and the space around it', 'Rigging in a tight back yard', 'Cleanup and stump work in the scope'] }],
    faqs: [
      { q: 'Is the Greer estimate free?', a: 'Yes. We visit and write the quote at no charge.' },
      { q: 'Can the price change after the quote?', a: 'Only if the work changes. If it does, we explain the change and the new price before we do it.' },
      { q: 'Do you work on both the Greenville and Spartanburg County sides of Greer?', a: 'Tell us the address and we will confirm coverage before the visit.' },
    ],
  },
  {
    area: 'greer', service: 'land-clearing',
    title: `Land Clearing in Greer, SC | ${business.name}`,
    metaDescription: 'Land and lot clearing in Greer, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call today.',
    h1: 'Land Clearing in Greer, SC',
    lead: 'A Greer lot cleared for a new home, a garden, or a yard starts with a walk-through. We mark what stays with you and put the work in a written quote.',
    sections: [{ heading: 'Clearing a Greer lot', paragraphs: [
      'Before the visit, mark the boundary and any trees you want to keep, and we plan around them.',
      'Greer sits in both Greenville and Spartanburg counties, so check with the county your lot is in about permits before clearing for construction. If a builder is involved, tell us the schedule when you call.',
    ], bullets: ['Lots cleared for a new home', 'Brush and small trees cleared for a yard or garden', 'Marked trees left standing'] }],
    faqs: [
      { q: 'Do you work with builders in Greer?', a: 'Yes, we can quote for a builder or the property owner. Send the site plan or schedule if you have one.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It lists the area, the trees that stay, and the cleanup.' },
      { q: 'Which county handles permits for my Greer lot?', a: 'It depends on whether your lot is on the Greenville County or Spartanburg County side. Check with that county before clearing.' },
    ],
  },
  // ---------- Mauldin ----------
  {
    area: 'mauldin', service: 'tree-removal',
    title: `Tree Removal Mauldin, SC | ${business.name}`,
    metaDescription: 'Tree removal in Mauldin, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Mauldin, SC',
    lead: 'Removing a tree near a Mauldin house takes planning. We check how close it sits to the roof, a fence, or a driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Mauldin homes', paragraphs: [
      'Many Mauldin lots have a tree close to the house, a garage, or a shared fence. The method that works in an open yard may not work there, so we plan the cuts around what is nearby.',
      'If the tree is near Butler Road or US 276 Main Street, tell us about the traffic, the walks, and any lines. We look at the tree, the drop zone, and the access on the site visit, then put the method and scope in writing.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Mauldin?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the site visit and say what it will take.' },
      { q: 'Does a tree on a busy road like Butler Road cost more?', a: 'It can, if traffic or lines limit the work area. The written quote lists any extra steps.' },
      { q: 'What is included in a Mauldin removal quote?', a: 'The written quote says whether the wood, brush, and stump are included. Ask us to go through that line before you agree to the work.' },
    ],
  },
  {
    area: 'mauldin', service: 'tree-trimming',
    title: `Tree Trimming Mauldin, SC | ${business.name}`,
    metaDescription: 'Tree trimming in Mauldin, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Mauldin, SC',
    lead: 'Limbs over a Mauldin roof, rubbing a gutter, or hanging across a driveway are common trimming calls. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Mauldin yards', paragraphs: [
      'Newer Mauldin subdivisions have young trees that grow into fences and roof lines. Older lots have larger shade trees that need regular cuts to stay balanced.',
      'Trees along Butler Road, near the W. Jack Greer Branch library, can grow toward traffic, so we plan the clearance first. We cut each limb back to a proper point rather than topping the tree.',
    ], bullets: ['Branches over the roof, gutters, or siding', 'Limbs rubbing a fence, power line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Mauldin tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the site visit.' },
      { q: 'Do you clean up the brush after trimming in Mauldin?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
    ],
  },
  {
    area: 'mauldin', service: 'stump-grinding',
    title: `Stump Grinding Mauldin, SC | ${business.name}`,
    metaDescription: 'Stump grinding in Mauldin, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Mauldin, SC',
    lead: 'A stump left in a Mauldin yard after a removal takes up space. We grind it down so the spot can be planted, paved, or mowed.',
    sections: [{ heading: 'Grinding stumps in Mauldin', paragraphs: [
      'A stump can become a trip hazard and a home for pests and rot. Once it is ground below the surface, the spot is ready for a garden bed, patio, or new lawn.',
      'In a yard off Butler Road or near US 276, tell us whether the stump is near a fence, a driveway, or a buried line. We check the roots and the clearance on the visit before we choose the method.',
    ], bullets: ['Stumps near a fence or driveway', 'Stumps left from an earlier removal', 'Stumps in the way of a new lawn or patio'] }],
    faqs: [
      { q: 'Can you grind a stump next to a Mauldin fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. It names each stump, how we grind it, and what happens to the grindings.' },
      { q: 'Can you grind the stump the same day as the removal?', a: 'Ask for both in one quote and we will plan the visit around them.' },
    ],
  },
  {
    area: 'mauldin', service: 'arborist',
    title: `Arborist Mauldin | ${business.name}`,
    metaDescription: 'Tree assessments in Mauldin, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Mauldin, SC',
    lead: 'Not sure whether a Mauldin tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Mauldin tree', paragraphs: [
      'An assessment looks at the trunk, the root flare, the branch unions, and the crown. It also looks at the target area, such as a house, a driveway, or a play area.',
      'You get the findings and the options in writing. Some trees need removal, some need trimming, and some just need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Mauldin before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting. Ask about it when you call.' },
      { q: 'Will I get a written report for a Mauldin tree?', a: 'You get written findings and options after the visit. Ask us what the written summary includes.' },
    ],
  },
  {
    area: 'mauldin', service: 'emergency-tree-removal',
    title: `Emergency Removal Mauldin | ${business.name}`,
    metaDescription: 'Emergency tree removal in Mauldin, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us and we confirm the plan.',
    h1: 'Emergency Tree Removal in Mauldin, SC',
    lead: 'A tree down or leaning on a Mauldin home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Mauldin', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near Butler Road or US 276, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Mauldin?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Mauldin?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'mauldin', service: 'tree-removal-cost',
    title: `Removal Cost Mauldin | ${business.name}`,
    metaDescription: 'What tree removal costs in Mauldin, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Mauldin, SC',
    lead: 'A Mauldin tree removal is priced by the size of the tree, the lot, and the access. These are the questions to ask so two quotes can be compared fairly.',
    sections: [{ heading: 'Comparing Mauldin removal quotes', paragraphs: [
      'Ask each company what its price includes. Does it cover the method, the cleanup, the wood, and the stump? A quote that answers all of those is easier to compare than a single number.',
      'If the tree stands close to a house, fence, or line, it takes more rigging and time, and the quote should say so. The general ranges are on the Tree Removal Cost page. The written quote after a free visit is the price for your tree.',
    ], bullets: ['What the price includes', 'Rigging near a house, fence, or line', 'Wood, brush, and stump work'] }],
    faqs: [
      { q: 'Is the Mauldin estimate free?', a: 'Yes. The visit and the written quote cost you nothing.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. Ask us about any change before it happens.' },
      { q: 'Does a tree along Butler Road or US 276 cost more to remove?', a: 'It can, if the crew has to work around traffic, lines, or a sidewalk. The written quote lists what the job needs.' },
    ],
  },
  {
    area: 'mauldin', service: 'land-clearing',
    title: `Land Clearing Mauldin, SC | ${business.name}`,
    metaDescription: 'Land and lot clearing in Mauldin, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Mauldin, SC',
    lead: 'Clearing a Mauldin lot for a new home, a garden, or a yard is a plan you can see before it starts. We walk the land and quote in writing.',
    sections: [{ heading: 'Clearing a Mauldin lot', paragraphs: [
      'Mark the boundary and the trees you want to keep, and walk the lot with us on the visit. We quote around what stays.',
      'Mauldin is in Greenville County. Clearing for construction may need permits or a builder schedule, so check with the city or county and tell us the timing when you call. A lot off Butler Road or US 276 has a road frontage, so tell us where equipment would enter.',
    ], bullets: ['Lots cleared for a new home', 'Brush and saplings cleared for a yard or garden', 'Trees you mark left standing'] }],
    faqs: [
      { q: 'Do you work with builders in Mauldin?', a: 'Yes. We can quote clearing for a builder or the property owner. Share the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It lists what is cleared, what stays, and how the brush is handled.' },
      { q: 'Can you clear a lot off Butler Road?', a: 'Usually the question is where equipment enters and how the lot slopes. We check both on the visit.' },
    ],
  },

  // ---------- Fountain Inn ----------
  {
    area: 'fountain-inn', service: 'tree-removal',
    title: `Removal Fountain Inn | ${business.name}`,
    metaDescription: 'Tree removal in Fountain Inn, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Fountain Inn, SC',
    lead: 'Removing a tree near a Fountain Inn house takes planning. We check how close it sits to the roof, a fence, or a driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Fountain Inn homes', paragraphs: [
      'Many Fountain Inn yards have a tree close to the house, a shed, or a shared fence line. Those spots need a plan that accounts for the space around the tree.',
      'If the tree stands on a lot off SC 14 or SC 418, or near I-385, tell us where the traffic and walks are. We look at the tree and the access on the site visit, then put the method and scope in writing.',
    ], bullets: ['A leaning tree over a roof or shed', 'A dead tree with little new growth', 'A storm-split trunk or cracked main limb'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Fountain Inn?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the visit.' },
      { q: 'How do I get a removal quote in Fountain Inn?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
      { q: 'Does a tree near the Ellison Flour Mill or the Fountain Inn Museum cost more?', a: 'The location alone does not set the price. Access, the tree, and the work area do. The written quote lists any extra steps for traffic or walks.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'tree-trimming',
    title: `Trimming Fountain Inn | ${business.name}`,
    metaDescription: 'Tree trimming in Fountain Inn, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Fountain Inn, SC',
    lead: 'Branches over a Fountain Inn roof, scraping a gutter, or crossing a driveway are common trimming calls. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Fountain Inn yards', paragraphs: [
      'Older Fountain Inn yards often have large shade trees that need regular cuts. Newer lots have young trees that need shaping as they grow.',
      'Trees near Cedar Falls Park or the Commerce Park edge can grow toward paths and lots, so tell us which side needs clearance. We cut each limb back to a proper point rather than topping the tree.',
    ], bullets: ['Branches over roofs, gutters, or siding', 'Limbs rubbing a fence, line, or shed', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Fountain Inn tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the visit.' },
      { q: 'Do you clean up the brush in Fountain Inn?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
      { q: 'Is trimming the same as topping a tree?', a: 'No. Trimming cuts back to a proper branch collar or healthy side branch. Topping removes the top of the tree and weakens the regrowth. We do not top trees.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'stump-grinding',
    title: `Stump Grind Fountain Inn | ${business.name}`,
    metaDescription: 'Stump grinding in Fountain Inn, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Fountain Inn, SC',
    lead: 'A stump left behind in Fountain Inn can block a garden bed or a mowing line for years. We grind it down so the space is usable again.',
    sections: [{ heading: 'Grinding stumps in Fountain Inn', paragraphs: [
      'A stump can draw pests and rot where it stands. Grinding it below grade clears the spot for a planting bed, a patio, or fresh grass.',
      'Whether your yard is off SC 14 or SC 418, tell us what sits near the stump, such as a fence, a sidewalk, or a utility line, so we can plan the right method. Pair it with a removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps blocking a mowing line', 'Stumps near a fence or sidewalk', 'Stumps where a planting bed is planned'] }],
    faqs: [
      { q: 'Can you grind a stump near a Fountain Inn fence?', a: 'Often, yes. We measure the clearance on the visit and tell you how close the grinder can get.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. You get the stump count, the method, and the cleanup on paper before we start.' },
      { q: 'Does it matter if my lot is on the Laurens County side?', a: 'Tell us the address when you call. We confirm coverage first, then plan the visit.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'arborist',
    title: `Assessment Fountain Inn | ${business.name}`,
    metaDescription: 'Tree assessments in Fountain Inn, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Fountain Inn, SC',
    lead: 'Not sure whether a Fountain Inn tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Fountain Inn tree', paragraphs: [
      'An assessment looks at the trunk, the roots near the base, the branch attachments, and the crown. It also looks at what the tree could hit if it fails, such as a house, a shed, or a sidewalk.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof, shed, or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Fountain Inn before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting. Ask when you call.' },
      { q: 'Will I get written findings for a Fountain Inn tree?', a: 'You get written findings and options after the visit. Ask us what the summary includes.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'emergency-tree-removal',
    title: `Storm Removal Fountain Inn | ${business.name}`,
    metaDescription: 'Emergency tree removal in Fountain Inn, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm the plan.',
    h1: 'Emergency Tree Removal in Fountain Inn, SC',
    lead: 'A tree down or leaning on a Fountain Inn home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Fountain Inn', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near SC 14, SC 418, or I-385, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or shed', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Fountain Inn?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Fountain Inn?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'tree-removal-cost',
    title: `Removal Cost Fountain Inn | ${business.name}`,
    metaDescription: 'What tree removal costs in Fountain Inn, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Fountain Inn, SC',
    lead: 'A Fountain Inn tree removal is priced on the tree, the yard, and how the crew gets in. Use these points to read and compare written quotes.',
    sections: [{ heading: 'Pricing a Fountain Inn removal', paragraphs: [
      'Find the line that says what the price covers. The method, the cleanup, the wood, and any stump grinding should each be named, so two quotes can be lined up side by side.',
      'A tree that leans over a roof or stands near a line takes more rigging than one in an open yard. Typical ranges are on our Tree Removal Cost page, but the written quote after a free visit is what your tree will cost.',
    ], bullets: ['What the quote covers, line by line', 'Rigging over a roof or near a line', 'Wood, brush, and stump work'] }],
    faqs: [
      { q: 'Is the Fountain Inn estimate free?', a: 'Yes. The visit and the written quote are free.' },
      { q: 'Can the price change after the quote?', a: 'The scope in the written quote sets the price. If something needs to change, we tell you before the work does.' },
      { q: 'Do removals near I-385 or SC 14 cost more?', a: 'A tree by a busy road can need extra care for traffic and lines, which adds time. The written quote names any of that.' },
    ],
  },
  {
    area: 'fountain-inn', service: 'land-clearing',
    title: `Clearing Fountain Inn | ${business.name}`,
    metaDescription: 'Land and lot clearing in Fountain Inn, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Fountain Inn, SC',
    lead: 'Before a Fountain Inn lot is cleared for a home, a garden, or a yard, we walk it with you. You see the plan and the written quote before any tree comes down.',
    sections: [{ heading: 'Clearing a Fountain Inn lot', paragraphs: [
      'Flag the trees you want to keep and the edges of the area to clear. We quote the work around those marks.',
      'Fountain Inn sits in both Greenville and Laurens counties, so the county that handles permits depends on where your lot is. Check with that county before clearing for construction, and tell us any builder timing when you call.',
    ], bullets: ['Lots cleared ahead of a new home', 'Brush and young trees cleared for a yard', 'Flagged trees kept in place'] }],
    faqs: [
      { q: 'Do you work with builders in Fountain Inn?', a: 'Yes. We quote for builders and owners alike. Send the timing and any county rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It shows the area to clear, what stays, and how the brush is handled.' },
      { q: 'Which county do I check with in Fountain Inn?', a: 'The one your lot sits in. Fountain Inn spans Greenville and Laurens counties, so check the address first.' },
    ],
  },
  // ---------- Travelers Rest ----------
  {
    area: 'travelers-rest', service: 'tree-removal',
    title: `Removal Travelers Rest | ${business.name}`,
    metaDescription: 'Tree removal in Travelers Rest, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Travelers Rest, SC',
    lead: 'Removing a tree near a Travelers Rest house takes planning. On wooded or sloped lots we check the drop zone and access, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal on Travelers Rest lots', paragraphs: [
      'Many Travelers Rest lots are wooded, and a tree near the house may have a slope, a fence, or a driveway between it and a safe drop zone. The plan changes with each of those.',
      'If the lot is near US 25 or Main Street (US 276), or close to the Swamp Rabbit Trail, tell us about the traffic and the trail users. We look at the tree and the access on the site visit and put the method and scope in writing.',
    ], bullets: ['A leaning tree over a roofline or outbuilding', 'A dead tree with little new leaf growth', 'A storm-split trunk on a sloped lot'] }],
    faqs: [
      { q: 'Can you remove a tree on a sloped Travelers Rest lot?', a: 'Often, yes. The slope and access shape the method, so we check both on the visit and say what the job needs.' },
      { q: 'How do I get a removal quote in Travelers Rest?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
      { q: 'Does a tree near the Swamp Rabbit Trail cost more to remove?', a: 'It can, if trail users or lines limit the work area. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'tree-trimming',
    title: `Trimming Travelers Rest | ${business.name}`,
    metaDescription: 'Tree trimming in Travelers Rest, SC to clear limbs from roofs, driveways, and power lines. Free written estimate and cleanup before we leave.',
    h1: 'Tree Trimming in Travelers Rest, SC',
    lead: 'Limbs over a Travelers Rest roof, a driveway, or a line are common trimming calls. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Travelers Rest trees', paragraphs: [
      'Tall hardwoods and pines in Travelers Rest can drop limbs after heavy weather. Regular trimming keeps them balanced and away from the structures below.',
      'Because Travelers Rest is the northernmost city in Greenville County, many lots are wooded and mixed with open yards. We cut each limb back to a proper point and leave the tree in good shape.',
    ], bullets: ['Limbs over the roof, gutters, or driveway', 'Branches near a power line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim pines in Travelers Rest?', a: 'Yes. We look at the species and the growth on the visit and tell you what the tree needs.' },
      { q: 'Do you clean up the brush in Travelers Rest?', a: 'We clear the work area before we leave. The written quote says what is included.' },
      { q: 'Can you trim a tree near the History Museum of Travelers Rest?', a: 'If the tree is on your property, we can look at it. Tell us where it sits and what is around it.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'stump-grinding',
    title: `Stump Grind Travelers Rest | ${business.name}`,
    metaDescription: 'Stump grinding in Travelers Rest, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Travelers Rest, SC',
    lead: 'A stump in a Travelers Rest yard, wooded or open, can sit for years after a removal. We grind it down so the spot is usable again.',
    sections: [{ heading: 'Grinding stumps in Travelers Rest', paragraphs: [
      'In a wooded or sloped yard, roots can spread well past the trunk. Grinding clears the space for a garden bed, a patio, or new grass.',
      'If your yard is off US 25 or near Main Street (US 276), tell us how a grinder would get to the stump and whether it sits on a slope. We look at the footing and the roots on the visit. Pair it with a removal for one visit and one bill.',
    ], bullets: ['Stumps on sloped ground', 'Stumps among roots in wooded yards', 'Stumps where you want grass or a bed'] }],
    faqs: [
      { q: 'Can you grind a stump on a sloped Travelers Rest yard?', a: 'Often, yes. We check the footing on the visit and tell you what the grinding involves.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. It spells out the stump, the method, and the cleanup.' },
      { q: 'Can you grind a stump near the Swamp Rabbit Trail?', a: 'If the stump is on your property, tell us how close it is to the trail. We check access and any rules for work near it on the visit.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'arborist',
    title: `Assessment Travelers Rest | ${business.name}`,
    metaDescription: 'Tree assessments in Travelers Rest, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Travelers Rest, SC',
    lead: 'Not sure whether a Travelers Rest tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Travelers Rest tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. On a slope it also looks at how the soil is holding the root plate.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof, shed, or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Travelers Rest before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Travelers Rest tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'emergency-tree-removal',
    title: `Storm Work Travelers Rest | ${business.name}`,
    metaDescription: 'Emergency tree removal in Travelers Rest, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm the plan.',
    h1: 'Emergency Tree Removal in Travelers Rest, SC',
    lead: 'A tree down or leaning on a Travelers Rest home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Travelers Rest', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. Wooded lots can hide a second tree that is also damaged, so look before you walk in.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near US 25 or Main Street, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Travelers Rest?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Travelers Rest?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'tree-removal-cost',
    title: `Tree Cost Travelers Rest | ${business.name}`,
    metaDescription: 'What tree removal costs in Travelers Rest, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Travelers Rest, SC',
    lead: 'Removal cost in Travelers Rest turns on the tree, the lot, and how the crew can reach it. Here is what to look for in a written quote.',
    sections: [{ heading: 'Pricing a Travelers Rest removal', paragraphs: [
      'On wooded or sloped lots, access often matters more than the size of the tree. Ask the quote to show how the crew will reach the tree and where the wood will go.',
      'Travelers Rest is the northernmost city in Greenville County. Whether the tree is in town or on a lot farther out along US 25, the written quote after a free visit is the price for your tree. Typical ranges are on our Tree Removal Cost page.',
    ], bullets: ['Access on wooded or sloped lots', 'Where the wood and brush go', 'Stump work, if you want it'] }],
    faqs: [
      { q: 'Is the Travelers Rest estimate free?', a: 'Yes. We do the visit and the written quote at no cost.' },
      { q: 'Can the price change after the quote?', a: 'Not unless the work changes. We put any change in writing first.' },
      { q: 'Why does a sloped lot cost more?', a: 'Slopes slow the crew and can limit where equipment sets up. The quote says how we plan to reach the tree.' },
    ],
  },
  {
    area: 'travelers-rest', service: 'land-clearing',
    title: `Clearing Travelers Rest | ${business.name}`,
    metaDescription: 'Land and lot clearing in Travelers Rest, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Travelers Rest, SC',
    lead: 'A wooded Travelers Rest lot can be cleared for a home, a garden, or a yard once there is a plan. We walk the land with you and put the work in writing.',
    sections: [{ heading: 'Clearing a Travelers Rest lot', paragraphs: [
      'Mark the boundary and the trees you want to keep before the visit. On a slope we plan the clearing so the soil stays put.',
      'Travelers Rest is in Greenville County, so check with the county about permits before clearing for construction. If the lot is near Trailblazer Park or the Swamp Rabbit Trail, mention it, since work next to public land can need extra care.',
    ], bullets: ['Wooded lots cleared for a home', 'Sloped ground cleared with the soil in mind', 'Trees you mark left standing'] }],
    faqs: [
      { q: 'Do you clear sloped lots in Travelers Rest?', a: 'Yes. We look at the slope on the visit and explain how the clearing will be done.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It names the area, the trees that stay, and the brush cleanup.' },
      { q: 'Can you clear a lot off US 25?', a: 'Send the address. We look at how equipment gets in from the road on the visit.' },
    ],
  },

  // ---------- Five Forks ----------
  {
    area: 'five-forks', service: 'tree-removal',
    title: `Removal Five Forks | ${business.name}`,
    metaDescription: 'Tree removal in Five Forks, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Five Forks, SC',
    lead: 'Removing a tree near a Five Forks house takes planning. We check how close it sits to the roof, a fence, or a driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Five Forks homes', paragraphs: [
      'Five Forks has older wooded lots and newer homes where trees sit close to the house. Each spot needs a method that fits the space around the tree.',
      'If the tree stands on a lot off Woodruff Road or SC 14, tell us where the traffic and the lines are. We look at the tree and the access on the site visit, then put the method and scope in writing.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Five Forks?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the visit.' },
      { q: 'How do I get a removal quote in Five Forks?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
      { q: 'Does a tree near Five Forks Place on Woodruff Road cost more?', a: 'It can, if traffic or lot access limits the work area. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'five-forks', service: 'tree-trimming',
    title: `Trimming Five Forks | ${business.name}`,
    metaDescription: 'Tree trimming in Five Forks, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Five Forks, SC',
    lead: 'Branches over a Five Forks roof, rubbing a gutter, or hanging across a driveway are common trimming calls. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Five Forks yards', paragraphs: [
      'Five Forks has a mix of older shade trees and younger trees in newer yards. Each needs trimming at a different point in its growth.',
      'Trees near the Five Forks Library or along Woodruff Road can grow toward walks and lines, so tell us which side needs clearance. We cut each limb back to a proper point rather than topping the tree.',
    ], bullets: ['Branches over roofs, gutters, or siding', 'Limbs rubbing a fence, line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Five Forks tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the visit.' },
      { q: 'Do you clean up the brush in Five Forks?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
    ],
  },
  {
    area: 'five-forks', service: 'stump-grinding',
    title: `Stump Grinding Five Forks | ${business.name}`,
    metaDescription: 'Stump grinding in Five Forks, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Five Forks, SC',
    lead: 'A leftover stump in a Five Forks yard is easy to trip over and hard to mow around. We grind it down so the spot can be planted, paved, or mowed.',
    sections: [{ heading: 'Grinding stumps in Five Forks', paragraphs: [
      'Grinding takes the stump below the surface, so pests and rot have less to live in and the spot can go back to lawn, a bed, or a patio.',
      'If your yard is in a neighborhood off Woodruff Road or SC 14, tell us whether the stump sits near a fence, irrigation, or a driveway. We check the roots and clearance on the visit and can pair the grinding with a removal.',
    ], bullets: ['Stumps near fences or irrigation', 'Leftover stumps from an earlier removal', 'Stumps in the way of a lawn or patio'] }],
    faqs: [
      { q: 'Can you grind a stump near a Five Forks fence?', a: 'Often, yes. We look at the clearance on the visit and tell you how close we can work.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The quote covers the stump, the method, and the cleanup, so you can compare it with others.' },
      { q: 'Will grinding hit my irrigation lines?', a: 'Tell us where the lines run before the visit, and we plan the grinding around them.' },
    ],
  },
  {
    area: 'five-forks', service: 'arborist',
    title: `Tree Assessment Five Forks | ${business.name}`,
    metaDescription: 'Tree assessments in Five Forks, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Five Forks, SC',
    lead: 'Not sure whether a Five Forks tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Five Forks tree', paragraphs: [
      'An assessment looks at the trunk, the root flare, the branch unions, and the crown. It also looks at the target area, such as a house, a driveway, or a play area.',
      'You get the findings and the options in writing. Some trees need removal, some need trimming, and some just need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Five Forks before removal?', a: 'Yes. An assessment helps you decide between removal, trimming, or waiting. Ask about it when you call.' },
      { q: 'Will I get a written report for a Five Forks tree?', a: 'You get written findings and options after the visit. Ask us what the summary includes.' },
    ],
  },
  {
    area: 'five-forks', service: 'emergency-tree-removal',
    title: `Storm Removal Five Forks | ${business.name}`,
    metaDescription: 'Emergency tree removal in Five Forks, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us and we confirm the plan.',
    h1: 'Emergency Tree Removal in Five Forks, SC',
    lead: 'A tree down or leaning on a Five Forks home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Five Forks', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. If the house is unsafe, leave it and call us from a safe place.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near Woodruff Road or SC 14, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Five Forks?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Five Forks?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'five-forks', service: 'tree-removal-cost',
    title: `Removal Cost Five Forks | ${business.name}`,
    metaDescription: 'What tree removal costs in Five Forks, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Five Forks, SC',
    lead: 'Tree removal cost in Five Forks comes down to the tree, the yard, and the access. Here is how to read a written quote before you choose.',
    sections: [{ heading: 'Reading a Five Forks removal quote', paragraphs: [
      'Check that each quote names the same work: the method, the cleanup, the wood, and the stump. Two prices only compare fairly when the scope matches.',
      'If the tree is in a fenced back yard with a narrow gate, the crew may need to carry pieces out by hand, which adds time. Typical ranges are on our Tree Removal Cost page, and the written quote after a free visit is the price for your tree.',
    ], bullets: ['Matching scope between quotes', 'Narrow gates and fenced yards', 'Wood, brush, and stump work'] }],
    faqs: [
      { q: 'Is the Five Forks estimate free?', a: 'Yes. There is no cost for the visit or the quote.' },
      { q: 'Can the price change after the quote?', a: 'Only if the scope changes, and we tell you in writing before it does.' },
      { q: 'Does a tree near Woodruff Road cost more?', a: 'It can, if traffic or lines near the road slow the work. The quote shows what the job involves.' },
    ],
  },
  {
    area: 'five-forks', service: 'land-clearing',
    title: `Clearing Five Forks | ${business.name}`,
    metaDescription: 'Land and lot clearing in Five Forks, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Five Forks, SC',
    lead: 'Clearing land in Five Forks for a new home, a yard, or a garden starts with a walk of the lot. You see the plan and the written quote before work begins.',
    sections: [{ heading: 'Clearing a Five Forks lot', paragraphs: [
      'Mark the trees that stay and the edge of the area to clear. We plan and price the work from those marks.',
      'Five Forks is in Greenville County, so check with the county about permits before clearing for construction. If a builder is on the job, tell us the schedule, and tell us how equipment would reach the lot from Woodruff Road or SC 14.',
    ], bullets: ['Lots cleared for a new home', 'Underbrush and small trees removed', 'Marked trees protected'] }],
    faqs: [
      { q: 'Do you work with builders in Five Forks?', a: 'Yes. We can quote for a builder or an owner. Share the schedule and any county rules.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It shows what is cleared, what stays, and how brush and logs are handled.' },
      { q: 'How long does clearing take?', a: 'It depends on the size of the lot and how much comes out. The written quote includes a time estimate.' },
    ],
  },
  // ---------- Powdersville ----------
  {
    area: 'powdersville', service: 'tree-removal',
    title: `Removal Powdersville | ${business.name}`,
    metaDescription: 'Tree removal in Powdersville, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Powdersville, SC',
    lead: 'Removing a tree near a Powdersville house takes planning. We check how close it sits to the roof, a fence, or a driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Powdersville homes', paragraphs: [
      'The space around a tree decides the method. A tree with room to fall is a different job from one beside a garage or a fence.',
      'If the tree stands on a lot off SC 153, tell us where the road, the entrance, and the lines are. We look at the tree and the access on the site visit, then put the method and scope in writing.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Do you remove trees in Powdersville, which is in Anderson County?', a: 'Call us with your address. We confirm coverage for the visit before you book.' },
      { q: 'How do I get a removal quote in Powdersville?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
      { q: 'Does a tree near a lot line or a garage cost more to remove?', a: 'The space around the tree can add rigging and crew time. The written quote explains how it affects the scope.' },
    ],
  },
  {
    area: 'powdersville', service: 'tree-trimming',
    title: `Trimming Powdersville | ${business.name}`,
    metaDescription: 'Tree trimming in Powdersville, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Powdersville, SC',
    lead: 'Limbs over a Powdersville roof, rubbing a gutter, or hanging across a driveway are common trimming calls. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Powdersville yards', paragraphs: [
      'Trees near Powdersville homes often grow toward the roof and lines as they get taller. Trimming on a regular schedule keeps the growth in check.',
      'Trees by SC 153 or near Dolly Cooper Park can spread over a road, a walk, or a fence line, so tell us which side needs clearance. We cut each limb back to a proper point rather than topping the tree.',
    ], bullets: ['Branches over roofs, gutters, or siding', 'Limbs rubbing a fence, line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Powdersville tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the visit.' },
      { q: 'Do you clean up the brush in Powdersville?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
      { q: 'Is trimming the same as topping a tree?', a: 'No. Trimming cuts back to a proper branch collar or healthy side branch. Topping removes the top of the tree and weakens the regrowth. We do not top trees.' },
    ],
  },
  {
    area: 'powdersville', service: 'stump-grinding',
    title: `Stump Grind Powdersville | ${business.name}`,
    metaDescription: 'Stump grinding in Powdersville, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Powdersville, SC',
    lead: 'A stump left in a Powdersville yard can sit in the way for years. We grind it below the surface so the space is usable again.',
    sections: [{ heading: 'Grinding stumps in Powdersville', paragraphs: [
      'Stumps left by a storm or an old removal can draw pests and rot. Grinding clears the spot for a planting bed, a patio, or new grass.',
      'If your lot sits along SC 153 or near Dolly Cooper Park on the Saluda River, tell us how close the stump is to the road, a walk, or the water. Those details shape the method, so we check them on the site visit. Pair the grinding with a removal for one visit and one bill.',
    ], bullets: ['Stumps left by a storm or an old removal', 'Stumps near a walk, fence, or the road', 'Stumps in the way of a planting bed'] }],
    faqs: [
      { q: 'Can you grind a stump near a Powdersville fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Can you grind a stump near Dolly Cooper Park?', a: 'Yes, if the stump is on your property. Tell us where it sits and we check access and the ground on the visit.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. It names the stump, the method, and the cleanup before any work starts.' },
    ],
  },
  {
    area: 'powdersville', service: 'arborist',
    title: `Assessment Powdersville | ${business.name}`,
    metaDescription: 'Tree assessments in Powdersville, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Powdersville, SC',
    lead: 'Not sure whether a Powdersville tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Powdersville tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at what the tree could reach if it fails, such as a house, a driveway, or a fence.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof, shed, or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Powdersville before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Powdersville tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'powdersville', service: 'emergency-tree-removal',
    title: `Storm Removal Powdersville | ${business.name}`,
    metaDescription: 'Emergency tree removal in Powdersville, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm the plan.',
    h1: 'Emergency Tree Removal in Powdersville, SC',
    lead: 'A tree down or leaning on a Powdersville home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Powdersville', paragraphs: [
      'Storm damage in Powdersville often means a limb through a roof, a fence down, or a tree across the drive. Stay out from under anything hanging, and do not climb up to check the damage.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is on SC 153 or near Dolly Cooper Park, say so, since traffic and the park edge change how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Powdersville?', a: 'Stay out of the cleared area, photograph the damage from the yard edge, and call your insurer. On the call we walk you through what we need to start.' },
      { q: 'Do you give a written quote for storm work in Powdersville?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'powdersville', service: 'tree-removal-cost',
    title: `Removal Cost Powdersville | ${business.name}`,
    metaDescription: 'What tree removal costs in Powdersville, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Powdersville, SC',
    lead: 'A tree removal in Powdersville is priced on the tree, where it stands, and how the crew can reach it. Here is what a fair written quote shows.',
    sections: [{ heading: 'What moves the price in Powdersville', paragraphs: [
      'Tree height, trunk width, and the space around the tree decide most of the work. The method and rigging change with how close the tree stands to a house, a fence, or a line.',
      'Compare written quotes on the same scope. Each should name the method, the cleanup, the wood and brush, and any stump work. Typical ranges are on our Tree Removal Cost page, but the written quote after a free visit is the number for your tree.',
    ], bullets: ['Tree height and trunk width', 'Space around the tree and nearby structures', 'Wood, brush, and stump work'] }],
    faqs: [
      { q: 'Is the Powdersville estimate free?', a: 'Yes. The visit and the written quote cost nothing.' },
      { q: 'Does a long driveway change the price?', a: 'It can, if the crew has to carry wood or set up equipment far from the tree. The written quote shows how access affects the scope.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. We explain any change in writing before it happens.' },
    ],
  },
  {
    area: 'powdersville', service: 'land-clearing',
    title: `Clearing Powdersville | ${business.name}`,
    metaDescription: 'Land and lot clearing in Powdersville, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Powdersville, SC',
    lead: 'Clearing a Powdersville lot before a build, a garden, or a yard starts with a walk. We mark what stays with you and quote the work in writing.',
    sections: [{ heading: 'Clearing a Powdersville lot', paragraphs: [
      'Flag the boundary and any trees to keep before the visit. Tell us where the entrance is, since a lot off SC 153 can have a different access route than one deeper in the neighborhood.',
      'Powdersville sits in Anderson County, so check with the county about permits before clearing for construction. If a builder is involved, send the schedule when you call.',
    ], bullets: ['Lots cleared ahead of a new build', 'Brush and young trees removed', 'Flagged trees left in place'] }],
    faqs: [
      { q: 'Do you work with builders in Powdersville?', a: 'Yes. We quote for builders and owners. Send the schedule and any county rules that apply.' },
      { q: 'Which county handles permits here?', a: 'Anderson County. Check with the county before clearing, and tell us what it requires.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It shows the area to clear, the trees that stay, and the brush cleanup.' },
    ],
  },

  // ---------- Berea ----------
  {
    area: 'berea', service: 'tree-removal',
    title: `Tree Removal in Berea, SC | ${business.name}`,
    metaDescription: 'Tree removal in Berea, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Berea, SC',
    lead: 'Removing a tree near a Berea house takes planning. On wooded lots we check the drop zone and access, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal on Berea lots', paragraphs: [
      'Berea has wooded parcels and established yards with trees that have grown close to the house over many years. The method depends on the space between the tree and the structure.',
      'If the lot fronts White Horse Road or the US 25 Bypass, tell us about the traffic and the entrance. Near the Swamp Rabbit Trail, tell us about trail users too. We look at the tree and the access on the site visit.',
    ], bullets: ['A leaning tree over a roofline or outbuilding', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a large tree on a Berea lot?', a: 'Often, yes. Tell us the size, the access, and what the tree is near. We explain the method on the visit.' },
      { q: 'How do I get a removal quote in Berea?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
      { q: 'Does a removal near the Old Berea School site cost more?', a: 'The site alone does not set the price. Access, the tree, and the work area do. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'berea', service: 'tree-trimming',
    title: `Tree Trimming in Berea, SC | ${business.name}`,
    metaDescription: 'Tree trimming in Berea, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Berea, SC',
    lead: 'Limbs over a Berea roof, rubbing a gutter, or hanging across a driveway are common trimming calls. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Berea trees', paragraphs: [
      'Mature hardwoods and pines in Berea can drop limbs after heavy weather. Regular trimming keeps them balanced and away from the roofline.',
      'Trees along the US 25 Bypass or White Horse Road can grow toward traffic and lines, so we plan the clearance first. We cut each limb back to a proper point.',
    ], bullets: ['Limbs over the roof, gutters, or driveway', 'Branches near a power line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim pines in Berea?', a: 'Yes. We look at the species and the growth on the visit and tell you what the tree needs.' },
      { q: 'Do you clean up the brush in Berea?', a: 'We clear the work area before we leave. The written quote says what is included.' },
    ],
  },
  {
    area: 'berea', service: 'stump-grinding',
    title: `Stump Grinding Berea, SC | ${business.name}`,
    metaDescription: 'Stump grinding in Berea, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Berea, SC',
    lead: 'A Berea stump left from an old removal can take over a corner of the yard. We grind it down so the spot can be used again.',
    sections: [{ heading: 'Grinding stumps in Berea', paragraphs: [
      'Stumps in wooded yards can hold roots that spread well past the trunk. Grinding clears the space for a garden bed, a patio, or new grass.',
      'For a yard off White Horse Road or the US 25 Bypass, tell us where the stump sits and whether a machine can reach it through a gate or a side yard. We check the ground on the visit, and you can add the grinding to a removal.',
    ], bullets: ['Stumps in wooded yards', 'Stumps reached through a gate or side yard', 'Stumps where you want a bed or grass'] }],
    faqs: [
      { q: 'Can you grind a stump on a wooded Berea lot?', a: 'Often, yes. We check the access on the visit and tell you what the grinding involves.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. You see the stump, the method, and the cleanup in writing first.' },
      { q: 'How soon can the spot be replanted?', a: 'Once the grindings are raked out and soil is added, the spot can usually be seeded or planted. We talk through it on the visit.' },
    ],
  },
  {
    area: 'berea', service: 'arborist',
    title: `Arborist Services Berea | ${business.name}`,
    metaDescription: 'Tree assessments in Berea, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Berea, SC',
    lead: 'Not sure whether a Berea tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Berea tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at the target area, such as a house, a driveway, or a play area.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Berea before removal?', a: 'Yes. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Berea tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'berea', service: 'emergency-tree-removal',
    title: `Emergency Removal Berea | ${business.name}`,
    metaDescription: 'Emergency tree removal in Berea, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm the plan.',
    h1: 'Emergency Tree Removal in Berea, SC',
    lead: 'A tree down or leaning on a Berea home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Berea', paragraphs: [
      'Keep people and pets away from the tree and any loose limbs. Wooded lots can hide a second damaged tree, so look before you walk in.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near White Horse Road or the US 25 Bypass, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Berea?', a: 'Keep clear, take photos from a safe spot, and call your insurance company. We tell you what else to do when we speak.' },
      { q: 'Do you give a written quote for storm work in Berea?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'berea', service: 'tree-removal-cost',
    title: `Removal Cost Berea | ${business.name}`,
    metaDescription: 'What tree removal costs in Berea, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Berea, SC',
    lead: 'A Berea tree removal is priced by the tree, the lot, and how the crew can reach it. Here is what a fair written quote shows.',
    sections: [{ heading: 'Pricing a Berea removal', paragraphs: [
      'On wooded lots, access often matters more than the size of the tree. A fair quote says how the crew will reach the tree and how the wood comes out.',
      'Berea is in Greenville County, along White Horse Road and the US 25 Bypass. A tree near a busy road or a power line takes more care than one at the back of a lot. You can see typical ranges on our Tree Removal Cost page, but the written quote after a free visit is the number for your tree.',
    ], bullets: ['How the crew reaches the tree', 'Work near a road or power line', 'Cleanup and stump work'] }],
    faqs: [
      { q: 'Is the Berea estimate free?', a: 'Yes. We come out and write the quote for free.' },
      { q: 'Can the price change after the quote?', a: 'The written quote fixes the scope. If the job changes, we explain the new price before doing the work.' },
      { q: 'Does a wooded lot cost more?', a: 'It can, if trees around it limit where equipment sets up. The quote explains how we plan to reach it.' },
    ],
  },
  {
    area: 'berea', service: 'land-clearing',
    title: `Land Clearing in Berea, SC | ${business.name}`,
    metaDescription: 'Land and lot clearing in Berea, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Berea, SC',
    lead: 'Wooded Berea lots can be cleared for a home, a garden, or a yard. We walk the land with you first, then quote the clearing in writing.',
    sections: [{ heading: 'Clearing a wooded Berea lot', paragraphs: [
      'Flag the boundary and any trees worth keeping before the visit, and we price the clearing around them.',
      'Berea is in Greenville County, so check with the county about permits before clearing for construction. If the lot fronts White Horse Road or sits near the Swamp Rabbit Trail, let us know, since the road or the trail can shape how and where we work.',
    ], bullets: ['Wooded lots cleared for a home or yard', 'Underbrush and saplings removed', 'Flagged trees left standing'] }],
    faqs: [
      { q: 'Do you work with builders in Berea?', a: 'Yes. We quote for builders and owners. Send the schedule and any rules that apply.' },
      { q: 'Is the clearing quote written?', a: 'Yes. You get the clearing area, the keepers, and the cleanup in writing.' },
      { q: 'What happens to the logs and brush?', a: 'The quote says whether they are chipped, hauled, or left on site, so you can choose before work starts.' },
    ],
  },
  // ---------- Wade Hampton ----------
  {
    area: 'wade-hampton', service: 'tree-removal',
    title: `Removal Wade Hampton | ${business.name}`,
    metaDescription: 'Tree removal in Wade Hampton, SC for leaning, dead, or storm-damaged trees near homes. Free written estimate and cleanup before we leave.',
    h1: 'Tree Removal in Wade Hampton, SC',
    lead: 'Removing a tree near a Wade Hampton house takes planning. We check how close it sits to the roof, a fence, or a driveway, then explain the method before any cutting starts.',
    sections: [{ heading: 'Removal near Wade Hampton homes', paragraphs: [
      'Many Wade Hampton yards have large trees close to the house, a garage, or a shared fence. The method that works in an open yard may not work there.',
      'If the lot is near Wade Hampton Blvd or US 29, tell us about the traffic, the walks, and any lines. We look at the tree and the access on the site visit, then put the method and scope in writing.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new leaf growth', 'A storm-split trunk or large crack in the main limbs'] }],
    faqs: [
      { q: 'Can you remove a tree close to a house in Wade Hampton?', a: 'Often, yes, with the right method. We tell you how close the tree sits to the structure at the visit.' },
      { q: 'How do I get a removal quote in Wade Hampton?', a: 'Call us or send a request. We set up a free site visit and send a written quote.' },
      { q: 'Does a tree near Wade Hampton High School cost more to remove?', a: 'It can, if traffic, walks, or lines limit where equipment sets up. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'tree-trimming',
    title: `Trimming Wade Hampton | ${business.name}`,
    metaDescription: 'Tree trimming in Wade Hampton, SC to clear branches from roofs, gutters, and driveways. Free written estimate, and cleanup before we leave.',
    h1: 'Tree Trimming in Wade Hampton, SC',
    lead: 'Limbs over a Wade Hampton roof, rubbing a gutter, or hanging across a driveway are common trimming calls. We trim to keep the tree healthy and the branches clear.',
    sections: [{ heading: 'Trimming for Wade Hampton yards', paragraphs: [
      'Older Wade Hampton yards often have large shade trees that need regular cuts. Younger trees need shaping while they are still small.',
      'Trees along Wade Hampton Blvd can grow toward traffic and power lines, so we plan the clearance first. We cut each limb back to a proper point rather than topping the tree.',
    ], bullets: ['Branches over roofs, gutters, or siding', 'Limbs rubbing a fence, line, or garage', 'Crowded canopies that block light to the yard'] }],
    faqs: [
      { q: 'How often should a Wade Hampton tree be trimmed?', a: 'It depends on the species and how close it grows to the house. We tell you what your tree needs at the visit.' },
      { q: 'Do you clean up the brush in Wade Hampton?', a: 'We clear the work area before we leave. The written quote says what is included with the brush.' },
      { q: 'Is trimming the same as topping a tree?', a: 'No. Trimming cuts back to a proper branch collar or healthy side branch. Topping removes the top of the tree and weakens the regrowth. We do not top trees.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'stump-grinding',
    title: `Stump Grind Wade Hampton | ${business.name}`,
    metaDescription: 'Stump grinding in Wade Hampton, SC for stumps left after removal. Free written estimate, and we clean up the grindings before we leave.',
    h1: 'Stump Grinding in Wade Hampton, SC',
    lead: 'A stump on a Wade Hampton lot can stay in the way for years after a removal. We grind it below the surface so the spot can be planted, paved, or mowed.',
    sections: [{ heading: 'Grinding stumps in Wade Hampton', paragraphs: [
      'A stump near a driveway or walkway is a trip hazard and a home for pests and rot. Grinding clears the spot for a garden bed, a patio, or new lawn.',
      'If your lot is on Wade Hampton Blvd or US 29, tell us how close the stump sits to the road and the sidewalk, since traffic and walks affect where the grinder can work. Pair the grinding with a removal to keep it to one visit and one bill.',
    ], bullets: ['Stumps near a driveway or walkway', 'Stumps close to a road or sidewalk', 'Stumps in the way of a new bed or lawn'] }],
    faqs: [
      { q: 'Can you grind a stump near a Wade Hampton fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Can you grind a stump close to Wade Hampton Blvd?', a: 'Yes. Tell us how far the stump is from the road. We plan the setup on the visit so the work stays safe.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The quote names the stump, the method, and what happens to the grindings.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'arborist',
    title: `Assessment Wade Hampton | ${business.name}`,
    metaDescription: 'Tree assessments in Wade Hampton, SC for health, structure, and risk. Written findings and options from a free site visit. Call to schedule.',
    h1: 'Arborist Assessments in Wade Hampton, SC',
    lead: 'Not sure whether a Wade Hampton tree is safe, sick, or just overgrown? We assess the tree on site and tell you what we see, in plain language.',
    sections: [{ heading: 'Assessing a Wade Hampton tree', paragraphs: [
      'An assessment looks at the trunk, the root flare, the branch unions, and the crown. It also looks at the target area, such as a house, a driveway, or a play area.',
      'You get the findings and the options in writing. Some trees need removal, some need trimming, and some just need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or play area'] }],
    faqs: [
      { q: 'Do you assess trees in Wade Hampton before removal?', a: 'Yes. An assessment helps you decide between removal, trimming, or waiting. Ask about it when you call.' },
      { q: 'Will I get a written report for a Wade Hampton tree?', a: 'You get written findings and options after the visit. Ask us what the summary includes.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'emergency-tree-removal',
    title: `Storm Removal Wade Hampton | ${business.name}`,
    metaDescription: 'Emergency tree removal in Wade Hampton, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us and we confirm the plan.',
    h1: 'Emergency Tree Removal in Wade Hampton, SC',
    lead: 'A tree down or leaning on a Wade Hampton home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first.',
    sections: [{ heading: 'After a storm in Wade Hampton', paragraphs: [
      'After a storm, a tree or limb can shift without warning. Move people and pets well back, and keep out from under any loose wood.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near Wade Hampton Blvd or US 29, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Wade Hampton?', a: 'Photograph the damage from a safe spot, note the time, and call your insurer. We tell you what to do until we arrive.' },
      { q: 'Do you give a written quote for storm work in Wade Hampton?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'tree-removal-cost',
    title: `Removal Cost Wade Hampton | ${business.name}`,
    metaDescription: 'What tree removal costs in Wade Hampton, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Wade Hampton, SC',
    lead: 'What a tree removal costs in Wade Hampton comes down to the tree, the lot, and the access. Here is how to read a written quote before you compare.',
    sections: [{ heading: 'Reading a Wade Hampton removal quote', paragraphs: [
      'A tree on an older lot has often grown for decades, so its trunk and crown take careful rigging. Ask the quote to show the method and how the crew will reach the tree.',
      'Typical ranges are on our Tree Removal Cost page. For your tree, the written quote after a free visit is the number that counts. Ask what each line covers and where the work stops.',
    ], bullets: ['Rigging a large trunk and crown', 'Access from the road or a side yard', 'Cleanup, wood, and stump work'] }],
    faqs: [
      { q: 'Is the Wade Hampton estimate free?', a: 'Yes. We visit and write the quote at no charge.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. We explain any change in writing before it happens.' },
      { q: 'Does a tree near Wade Hampton High School cost more?', a: 'It can, if traffic, lines, or a sidewalk limit where equipment sets up. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'wade-hampton', service: 'land-clearing',
    title: `Clearing Wade Hampton | ${business.name}`,
    metaDescription: 'Land and lot clearing in Wade Hampton, SC for a new house, garden, or yard. Free written estimate and cleanup before we leave. Call us.',
    h1: 'Land Clearing in Wade Hampton, SC',
    lead: 'Clearing a Wade Hampton lot for a new home, a garden, or a yard starts with a walk-through. We mark what stays and quote the work in writing.',
    sections: [{ heading: 'Clearing a Wade Hampton lot', paragraphs: [
      'Walk the lot with us and mark the trees you want to keep. Tell us where the entrance is off Wade Hampton Blvd or a side street, because that decides how equipment gets in.',
      'Wade Hampton is in Greenville County, so check with the county about permits before clearing for construction. Send the builder schedule when you call so the work fits it.',
    ], bullets: ['Lots cleared ahead of a new home', 'Brush and small trees removed', 'Marked trees left standing'] }],
    faqs: [
      { q: 'Do you work with builders in Wade Hampton?', a: 'Yes. We quote for builders and owners. Send the schedule and any county rules that apply.' },
      { q: 'Can you keep certain trees?', a: 'Yes. Mark them on the walk-through and we quote around them.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It shows the area, the trees that stay, and how the brush is handled.' },
    ],
  },

  // ---------- Piedmont ----------
  {
    area: 'piedmont', service: 'tree-removal',
    title: `Tree Removal Piedmont, SC | ${business.name}`,
    metaDescription: 'Tree removal in Piedmont, SC for leaning, dead, or storm-damaged trees near homes. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Removal in Piedmont, SC',
    lead: 'Removing a tree near a Piedmont house takes planning. Piedmont is at the edge of our service area, so call first and we confirm the visit before we plan the cuts.',
    sections: [{ heading: 'Removal near Piedmont homes', paragraphs: [
      'A tree close to a house, garage, or fence needs a method that fits the space around it. Piedmont lots vary a lot, so we plan the cuts on the site visit.',
      'If the tree is near I-85 Exit 35, SC 86, or SC 20, or on a lot close to the river, tell us about the access and any slope. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new growth', 'A storm-split trunk or large cracked limb'] }],
    faqs: [
      { q: 'Do you remove trees in Piedmont, SC?', a: 'Call us with your address. We confirm coverage and the earliest visit before you book.' },
      { q: 'Is the removal quote written?', a: 'Yes. We send a written quote after the free visit.' },
      { q: 'Does a tree on a steep lot by the river cost more?', a: 'It can, if the slope or soft ground limits where equipment sets up. The written quote explains how access affects the scope.' },
    ],
  },
  {
    area: 'piedmont', service: 'tree-trimming',
    title: `Tree Trimming Piedmont, SC | ${business.name}`,
    metaDescription: 'Tree trimming in Piedmont, SC to clear branches from roofs, gutters, and driveways. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Trimming in Piedmont, SC',
    lead: 'Limbs over a Piedmont roof, rubbing a gutter, or hanging across a driveway are common trimming calls. Call us first to confirm we can reach your address.',
    sections: [{ heading: 'Trimming for Piedmont trees', paragraphs: [
      'Trees near Piedmont homes often grow toward roofs and lines over time. Regular trimming keeps the growth balanced and away from the structures below.',
      'Trees near Piedmont Riverfront Park or along SC 20 can grow toward paths and traffic, so tell us which side needs clearance. We cut each limb back to a proper point and leave the tree healthy.',
    ], bullets: ['Branches over roofs or gutters', 'Limbs rubbing a fence or line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim trees in Piedmont?', a: 'Call us first so we can confirm coverage. We then set up a free visit and send a written quote.' },
      { q: 'Do you clean up the brush in Piedmont?', a: 'We clear the work area before we leave. The written quote says what is included.' },
      { q: 'Is trimming the same as topping a tree?', a: 'No. Trimming cuts back to a proper branch collar or healthy side branch. Topping removes the top of the tree and weakens the regrowth. We do not top trees.' },
    ],
  },
  {
    area: 'piedmont', service: 'stump-grinding',
    title: `Stump Grinding Piedmont | ${business.name}`,
    metaDescription: 'Stump grinding in Piedmont, SC for stumps left after removal. Call first to confirm coverage. Free written estimate and cleanup.',
    h1: 'Stump Grinding in Piedmont, SC',
    lead: 'A stump left in a Piedmont yard after a removal can stay for years. Call us to confirm coverage, and we grind it below the surface so the spot is usable again.',
    sections: [{ heading: 'Grinding stumps in Piedmont', paragraphs: [
      'Stumps can draw pests and rot where they sit. Grinding clears the spot for a planting bed, a patio, or new grass.',
      'Piedmont sits on the Saluda River, and the county describes river bluffs and protected wetlands at Piedmont Riverfront Park. A stump on a slope or in wet soil needs a closer look, so tell us where it is when you call.',
    ], bullets: ['Stumps on a slope or near the river', 'Stumps near a walk, fence, or drive', 'Stumps in the way of a new lawn'] }],
    faqs: [
      { q: 'Can you grind a stump in Piedmont?', a: 'Call us with your address. We confirm the visit and then check the stump on site.' },
      { q: 'Does a stump near the river need a different method?', a: 'It can. Slope and wet soil change the setup, so we check the ground before we pick a method.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The quote names the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'piedmont', service: 'arborist',
    title: `Arborist Piedmont | ${business.name}`,
    metaDescription: 'Tree assessments in Piedmont, SC for health, structure, and risk. Written findings and options from a free visit. Call first to confirm.',
    h1: 'Arborist Assessments in Piedmont, SC',
    lead: 'Not sure whether a Piedmont tree is safe, sick, or just overgrown? Call us to confirm the visit. We then assess the tree on site and explain what we see.',
    sections: [{ heading: 'Assessing a Piedmont tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at what the tree could reach if it fails, such as a house, a driveway, or the riverbank.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Piedmont before removal?', a: 'Yes, once we confirm coverage for your address. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Piedmont tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'piedmont', service: 'emergency-tree-removal',
    title: `Emergency Removal Piedmont | ${business.name}`,
    metaDescription: 'Emergency tree removal in Piedmont, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm coverage.',
    h1: 'Emergency Tree Removal in Piedmont, SC',
    lead: 'A tree down or leaning on a Piedmont home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first, then call us.',
    sections: [{ heading: 'After a storm in Piedmont', paragraphs: [
      'Wet ground after a storm can let a leaning tree move. Keep people and pets out of its fall zone, and do not walk under it.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near I-85, SC 86, or SC 20, or on a slope by the Saluda River, say so, since traffic and the footing change how we set up.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Piedmont?', a: 'Take photos from the road or the yard edge, then call your insurer and us. If the house is unsafe, leave it first.' },
      { q: 'Do you give a written quote for storm work in Piedmont?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'piedmont', service: 'tree-removal-cost',
    title: `Removal Cost Piedmont | ${business.name}`,
    metaDescription: 'What tree removal costs in Piedmont, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Piedmont, SC',
    lead: 'Tree removal in Piedmont costs more or less depending on the tree, the lot, and the access. Here is how to read a quote before you compare them.',
    sections: [{ heading: 'Reading a Piedmont removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Lots near the Saluda River can have steep banks or wet soil, which add time and care. Our typical ranges are on the Tree Removal Cost page, and the written quote after a free visit is the price for your tree.',
    ], bullets: ['Steep banks or wet soil by the river', 'Tree height and trunk width', 'Wood, brush, and stump work'] }],
    faqs: [
      { q: 'Is the Piedmont estimate free?', a: 'Yes, once we confirm coverage and set up the visit.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. We explain any change in writing before it happens.' },
      { q: 'Does a tree by the river cost more?', a: 'It can, if steep banks or wet soil limit the setup. The written quote shows how access affects the scope.' },
    ],
  },
  {
    area: 'piedmont', service: 'land-clearing',
    title: `Land Clearing Piedmont, SC | ${business.name}`,
    metaDescription: 'Land and lot clearing in Piedmont, SC for a new house, garden, or yard. Call first to confirm coverage. Free written estimate.',
    h1: 'Land Clearing in Piedmont, SC',
    lead: 'Clearing a Piedmont lot for a new home, a garden, or a yard starts with a site walk. Call us to confirm coverage, and we quote the work in writing.',
    sections: [{ heading: 'Clearing a Piedmont lot', paragraphs: [
      'Flag the boundary and the trees you want to keep before the visit. Tell us where the entrance is, since the road and the lot slope decide how equipment gets in.',
      'Piedmont is split between Anderson and Greenville counties, so check with the county your lot is in about permits before clearing for construction. Send the schedule when you call if a builder is involved.',
    ], bullets: ['Lots cleared ahead of a new home', 'Brush and small trees removed', 'Flagged trees left standing'] }],
    faqs: [
      { q: 'Do you work with builders in Piedmont?', a: 'Yes. We quote for builders and owners. Send the schedule and any county rules that apply.' },
      { q: 'Which county handles permits for my Piedmont lot?', a: 'It depends on which side of the county line the lot sits. Check with that county before clearing.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It shows the area, the trees that stay, and the brush cleanup.' },
    ],
  },
  // ---------- Pickens ----------
  {
    area: 'pickens', service: 'tree-removal',
    title: `Tree Removal Pickens, SC | ${business.name}`,
    metaDescription: 'Tree removal in Pickens, SC for leaning, dead, or storm-damaged trees near homes. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Removal in Pickens, SC',
    lead: 'Removing a tree near a Pickens house takes planning. Pickens is outside the core of our service area, so call first and we confirm the visit.',
    sections: [{ heading: 'Removal near Pickens homes', paragraphs: [
      'A tree close to a house, garage, or fence needs a method that fits the space around it. We plan the cuts on the site visit.',
      'If the tree is along US 178, tell us about the traffic, the entrance, and any lines. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new growth', 'A storm-split trunk or large cracked limb'] }],
    faqs: [
      { q: 'Do you remove trees in Pickens, SC?', a: 'Call us with your address. We confirm coverage and the earliest visit before you book.' },
      { q: 'Is the removal quote written?', a: 'Yes. We send a written quote after the free visit.' },
      { q: 'Does a tree along US 178 cost more to remove?', a: 'It can, if traffic or lines limit where the crew can work. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'pickens', service: 'tree-trimming',
    title: `Tree Trimming Pickens, SC | ${business.name}`,
    metaDescription: 'Tree trimming in Pickens, SC to clear branches from roofs, gutters, and driveways. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Trimming in Pickens, SC',
    lead: 'Limbs over a Pickens roof, rubbing a gutter, or hanging across a driveway are common trimming calls. Call us first to confirm we can reach your address.',
    sections: [{ heading: 'Trimming for Pickens trees', paragraphs: [
      'Trees near Pickens homes often grow toward roofs and lines over time. Regular trimming keeps the growth balanced.',
      'Trees along US 178 can grow toward traffic and lines, so tell us which side needs clearance. We cut each limb back to a proper point and leave the tree healthy.',
    ], bullets: ['Branches over roofs or gutters', 'Limbs rubbing a fence or line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim trees in Pickens?', a: 'Call us first so we can confirm coverage. We then set up a free visit and send a written quote.' },
      { q: 'Do you clean up the brush in Pickens?', a: 'We clear the work area before we leave. The written quote says what is included.' },
      { q: 'Is trimming the same as topping a tree?', a: 'No. Trimming cuts back to a proper branch collar or healthy side branch. Topping removes the top of the tree and weakens the regrowth. We do not top trees.' },
    ],
  },
  {
    area: 'pickens', service: 'stump-grinding',
    title: `Stump Grinding Pickens, SC | ${business.name}`,
    metaDescription: 'Stump grinding in Pickens, SC for stumps left after removal. Call first to confirm coverage. Free written estimate and cleanup.',
    h1: 'Stump Grinding in Pickens, SC',
    lead: 'A stump left after a removal in Pickens can sit in the yard for years. Call us to confirm the visit, and we grind it below the surface so the spot is usable again.',
    sections: [{ heading: 'Grinding stumps in Pickens', paragraphs: [
      'Stumps can draw pests and rot where they stand. Grinding clears the spot for a planting bed, a patio, or new grass.',
      'If your lot is along US 178, tell us how close the stump is to the road and to any drive or walk. That sets the method, and we confirm it on the site visit before we start.',
    ], bullets: ['Stumps near a drive or walk', 'Stumps close to the road', 'Stumps in the way of a planting bed'] }],
    faqs: [
      { q: 'Can you grind a stump in Pickens?', a: 'Call us with your address. We confirm the visit and then check the stump on site.' },
      { q: 'Can you grind a stump close to US 178?', a: 'Yes. Tell us how far it is from the road. We plan the setup on the visit so the work stays safe.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. The quote names the stump, the method, and the cleanup.' },
    ],
  },
  {
    area: 'pickens', service: 'arborist',
    title: `Arborist Pickens | ${business.name}`,
    metaDescription: 'Tree assessments in Pickens, SC for health, structure, and risk. Written findings and options from a free visit. Call first to confirm.',
    h1: 'Arborist Assessments in Pickens, SC',
    lead: 'Not sure whether a Pickens tree is safe, sick, or just overgrown? Call us to confirm the visit. We then assess the tree on site and explain what we see.',
    sections: [{ heading: 'Assessing a Pickens tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at what the tree could reach if it fails, such as a house, a driveway, or the road.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Pickens before removal?', a: 'Yes, once we confirm coverage for your address. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Pickens tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'pickens', service: 'emergency-tree-removal',
    title: `Emergency Removal Pickens | ${business.name}`,
    metaDescription: 'Emergency tree removal in Pickens, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm coverage.',
    h1: 'Emergency Tree Removal in Pickens, SC',
    lead: 'A tree down or leaning on a Pickens home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first, then call us.',
    sections: [{ heading: 'After a storm in Pickens', paragraphs: [
      'A storm can leave limbs hanging in the crown long after the wind stops. Keep everyone well clear of the fall zone and stay out from under loose wood.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is along US 178, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Pickens?', a: 'Photograph the damage from a safe distance, and call your insurer. We walk you through the steps to take until our crew arrives.' },
      { q: 'Do you give a written quote for storm work in Pickens?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'pickens', service: 'tree-removal-cost',
    title: `Removal Cost Pickens | ${business.name}`,
    metaDescription: 'What tree removal costs in Pickens, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Pickens, SC',
    lead: 'What a tree removal costs in Pickens depends on the tree, the lot, and the access. Here is how to read a written quote so you can compare.',
    sections: [{ heading: 'Reading a Pickens removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Typical ranges are on our Tree Removal Cost page. For your tree, the written quote after a free visit is the number that counts.',
    ], bullets: ['Tree height and trunk width', 'Access from the road or a drive', 'Wood, brush, and stump work'] }],
    faqs: [
      { q: 'Is the Pickens estimate free?', a: 'Yes, once we confirm coverage and set up the visit.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. We explain any change in writing before it happens.' },
      { q: 'Does a tree near the road cost more?', a: 'It can, if traffic or lines limit where the crew can work. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'pickens', service: 'land-clearing',
    title: `Land Clearing Pickens, SC | ${business.name}`,
    metaDescription: 'Land and lot clearing in Pickens, SC for a new house, garden, or yard. Call first to confirm coverage. Free written estimate.',
    h1: 'Land Clearing in Pickens, SC',
    lead: 'Clearing a Pickens lot for a new home, a garden, or a yard starts with a site walk. Call us to confirm coverage, and we quote the work in writing.',
    sections: [{ heading: 'Clearing a Pickens lot', paragraphs: [
      'Flag the boundary and the trees to keep before the visit. Tell us where the entrance is so we can plan how equipment gets in.',
      'Pickens is in Pickens County, so check with the county about permits before clearing for construction. If a builder is on the job, send the schedule when you call.',
    ], bullets: ['Lots cleared ahead of a new home', 'Brush and small trees removed', 'Flagged trees left standing'] }],
    faqs: [
      { q: 'Do you work with builders in Pickens?', a: 'Yes. We quote for builders and owners. Send the schedule and any county rules that apply.' },
      { q: 'Which county handles permits here?', a: 'Pickens County. Check with the county before clearing, and tell us what it requires.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It shows the area, the trees that stay, and the cleanup.' },
    ],
  },

  // ---------- Woodruff ----------
  {
    area: 'woodruff', service: 'tree-removal',
    title: `Tree Removal Woodruff, SC | ${business.name}`,
    metaDescription: 'Tree removal in Woodruff, SC for leaning, dead, or storm-damaged trees near homes. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Removal in Woodruff, SC',
    lead: 'Removing a tree near a Woodruff house takes planning. Woodruff is at the edge of our service area, so call first and we confirm we can reach you.',
    sections: [{ heading: 'Removal near Woodruff homes', paragraphs: [
      'A tree close to a house, garage, or fence needs a method that fits the space around it. We plan the cuts on the site visit.',
      'If the tree is near Main Street (SC 146), US 221, or SC 101, tell us about the traffic, the sidewalks, and any lines. You get the method and scope in writing, with the cleanup included or priced separately.',
    ], bullets: ['A leaning tree over a roofline or garage', 'A dead tree with little new growth', 'A storm-split trunk or large cracked limb'] }],
    faqs: [
      { q: 'Do you remove trees in Woodruff, SC?', a: 'Call us with your address. We confirm coverage and the earliest visit before you book.' },
      { q: 'Is the removal quote written?', a: 'Yes. We send a written quote after the free visit.' },
      { q: 'Does a tree near McKinney Park or downtown cost more?', a: 'It can, if traffic, sidewalks, or lines limit the work area. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'woodruff', service: 'tree-trimming',
    title: `Tree Trimming Woodruff, SC | ${business.name}`,
    metaDescription: 'Tree trimming in Woodruff, SC to clear branches from roofs, gutters, and driveways. Call first to confirm coverage. Free written estimate.',
    h1: 'Tree Trimming in Woodruff, SC',
    lead: 'Limbs over a Woodruff roof, rubbing a gutter, or hanging across a driveway are common trimming calls. Call us first to confirm we can reach your address.',
    sections: [{ heading: 'Trimming for Woodruff trees', paragraphs: [
      'Woodruff homes often sit on larger lots with mature trees. Regular trimming keeps the growth balanced and away from the roof.',
      'Trees along Main Street or near Woodruff City Hall can grow toward sidewalks and lines, so tell us which side needs clearance. We cut each limb back to a proper point and leave the tree healthy.',
    ], bullets: ['Branches over roofs or driveways', 'Limbs rubbing a fence or line', 'Dead wood cleared from the crown'] }],
    faqs: [
      { q: 'Do you trim trees in Woodruff?', a: 'Call us first so we can confirm coverage. We then set up a free visit and send a written quote.' },
      { q: 'Do you clean up the brush in Woodruff?', a: 'We clear the work area before we leave. The written quote says what is included.' },
      { q: 'Is trimming the same as topping a tree?', a: 'No. Trimming cuts back to a proper branch collar or healthy side branch. Topping removes the top of the tree and weakens the regrowth. We do not top trees.' },
    ],
  },
  {
    area: 'woodruff', service: 'stump-grinding',
    title: `Stump Grinding Woodruff | ${business.name}`,
    metaDescription: 'Stump grinding in Woodruff, SC for stumps left after removal. Call first to confirm coverage. Free written estimate and cleanup.',
    h1: 'Stump Grinding in Woodruff, SC',
    lead: 'A stump in a Woodruff yard can stay in the way long after a removal. We grind it below the surface so the spot can be planted, paved, or mowed.',
    sections: [{ heading: 'Grinding stumps in Woodruff', paragraphs: [
      'A stump near a walk, a fence, or a drive can trip someone and draw pests and rot. Grinding clears the spot for a bed, a patio, or new grass.',
      'If your lot is near Main Street (SC 146) or along US 221 or SC 101, tell us how close the stump sits to the road and the sidewalk. We check the ground on the site visit, and you can pair the grinding with a removal.',
    ], bullets: ['Stumps near a walk or drive', 'Stumps close to Main Street or a busy road', 'Stumps in the way of a planting bed'] }],
    faqs: [
      { q: 'Can you grind a stump near a Woodruff fence?', a: 'Often, yes. We check the clearance on the visit and tell you how close the grinder can work.' },
      { q: 'Can you grind a stump near McKinney Park?', a: 'If the stump is on your property, yes. Tell us where it sits and we check access on the visit.' },
      { q: 'Is the stump grinding quote written?', a: 'Yes. It names the stump, the method, and the cleanup before work starts.' },
    ],
  },
  {
    area: 'woodruff', service: 'arborist',
    title: `Arborist Woodruff | ${business.name}`,
    metaDescription: 'Tree assessments in Woodruff, SC for health, structure, and risk. Written findings and options from a free visit. Call first to confirm.',
    h1: 'Arborist Assessments in Woodruff, SC',
    lead: 'Not sure whether a Woodruff tree is safe, sick, or just overgrown? Call us to confirm the visit. We then assess the tree on site and explain what we see.',
    sections: [{ heading: 'Assessing a Woodruff tree', paragraphs: [
      'An assessment looks at the trunk, the root area, the branch attachments, and the crown. It also looks at what the tree could reach if it fails, such as a house, a driveway, or a sidewalk.',
      'You get the findings and options in writing. Some trees need removal, some need trimming, and some only need watching. We say which, and why.',
    ], bullets: ['Cracks, cavities, or leaning trunks', 'Dead or thinning crowns', 'Heavy limbs over a roof or driveway'] }],
    faqs: [
      { q: 'Do you assess trees in Woodruff before removal?', a: 'Yes, once we confirm coverage for your address. An assessment helps you choose between removal, trimming, or waiting.' },
      { q: 'Will I get written findings for a Woodruff tree?', a: 'Yes. You get findings and options in writing after the visit.' },
    ],
  },
  {
    area: 'woodruff', service: 'emergency-tree-removal',
    title: `Emergency Removal Woodruff | ${business.name}`,
    metaDescription: 'Emergency tree removal in Woodruff, SC after storm damage. A tree down or leaning on a home, car, or driveway. Call us to confirm coverage.',
    h1: 'Emergency Tree Removal in Woodruff, SC',
    lead: 'A tree down or leaning on a Woodruff home, car, or driveway is a safety call. If a power line is involved, call the power company or 911 first, then call us.',
    sections: [{ heading: 'After a storm in Woodruff', paragraphs: [
      'Downed limbs on a sidewalk or drive are a hazard for passersby as well as your household. Block the area off and keep everyone back from the wood.',
      'Tell us the location, what the tree touches, and whether anyone is hurt. If the tree is near Main Street, US 221, or SC 101, say so, since traffic changes how we set up the work.',
    ], bullets: ['A tree on a roof or garage', 'A tree across a driveway or car', 'Photos taken from a safe spot for your insurance claim'] }],
    faqs: [
      { q: 'What should I do before you arrive in Woodruff?', a: 'Photograph the damage from the street side, keep a record of the time, and call your insurer. We tell you what to do while you wait.' },
      { q: 'Do you give a written quote for storm work in Woodruff?', a: 'Yes, before the main work begins.' },
    ],
  },
  {
    area: 'woodruff', service: 'tree-removal-cost',
    title: `Removal Cost Woodruff | ${business.name}`,
    metaDescription: 'What tree removal costs in Woodruff, SC, and the factors that change the price. Compare written quotes. Free estimate for your tree.',
    h1: 'Tree Removal Cost in Woodruff, SC',
    lead: 'A Woodruff tree removal is priced on the tree, where it stands, and how the crew gets to it. Here is what to look for in a written quote.',
    sections: [{ heading: 'Reading a Woodruff removal quote', paragraphs: [
      'Ask what each line covers and where the work stops. A quote that names the method, the cleanup, and any stump work is easier to compare.',
      'Woodruff is in Spartanburg County. Typical ranges are on our Tree Removal Cost page, and the written quote after a free visit is the number for your tree.',
    ], bullets: ['Tree height and trunk width', 'Access from Main Street or a side street', 'Wood, brush, and stump work'] }],
    faqs: [
      { q: 'Is the Woodruff estimate free?', a: 'Yes, once we confirm coverage and set up the visit.' },
      { q: 'Can the price change after the quote?', a: 'The written quote states the scope. We explain any change in writing before it happens.' },
      { q: 'Does a tree downtown cost more to remove?', a: 'It can, if traffic or nearby structures limit the setup. The written quote lists any extra steps.' },
    ],
  },
  {
    area: 'woodruff', service: 'land-clearing',
    title: `Land Clearing Woodruff, SC | ${business.name}`,
    metaDescription: 'Land and lot clearing in Woodruff, SC for a new house, garden, or yard. Call first to confirm coverage. Free written estimate.',
    h1: 'Land Clearing in Woodruff, SC',
    lead: 'Clearing a Woodruff lot for a new home, a garden, or a yard starts with a site walk. We mark what stays with you and quote the work in writing.',
    sections: [{ heading: 'Clearing a Woodruff lot', paragraphs: [
      'Walk the lot with us and mark the trees to keep. Tell us where the entrance is off US 221, SC 101, or a side street, since that decides how equipment gets in.',
      'Woodruff is in Spartanburg County, so check with that county about permits before clearing for construction. Send the builder schedule when you call.',
    ], bullets: ['Lots cleared ahead of a new build', 'Brush and small trees removed', 'Marked trees left standing'] }],
    faqs: [
      { q: 'Do you work with builders in Woodruff?', a: 'Yes. We quote for builders and owners. Send the schedule and any county rules that apply.' },
      { q: 'Which county handles permits for a Woodruff lot?', a: 'Spartanburg County. Check with the county before clearing.' },
      { q: 'Is the clearing quote written?', a: 'Yes. It shows the area, the trees that stay, and the brush cleanup.' },
    ],
  },
];

export function combosFor(areaSlug: string) {
  return combos.filter((c) => c.area === areaSlug);
}

export function comboBySlugs(area: string, service: string) {
  return combos.find((c) => c.area === area && c.service === service);
}
