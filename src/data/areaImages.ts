// Picture shown beside the first section on each town page.
// These are existing AI illustrations from public/images/pages, reused because only four towns have
// their own. Each one is checked for no readable brand names, plates, or signs. None of them shows
// the real town, and the alt text says so. Replace with a real photo of each town when available.
// A town's picture never matches its own header image, so the same picture is not on one page twice.
import type { PageImage } from '@/data/types';

const street: PageImage = {
  src: '/images/pages/service-areas-hub.jpg',
  alt: 'Illustration of a quiet residential street lined with mature trees in autumn',
};
const brickStreet: PageImage = {
  src: '/images/pages/simpsonville.jpg',
  alt: 'Illustration of a tree-lined residential street with mature trees and brick homes',
};
const river: PageImage = {
  src: '/images/pages/taylors.jpg',
  alt: 'Illustration of a calm river with pine and hardwood banks',
};
const hills: PageImage = {
  src: '/images/pages/easley.jpg',
  alt: 'Illustration of pine-covered hills beyond a fence line in the South Carolina Upstate',
};
const oak: PageImage = {
  src: '/images/pages/greer.jpg',
  alt: 'Illustration of a very large, tall mature oak behind a brick house at the edge of the woods',
};
const yardTree: PageImage = {
  src: '/images/pages/home.jpg',
  alt: 'Illustration of a tree worker cutting at the base of a large tree in the front yard of a brick ranch house',
};
const clearing: PageImage = {
  src: '/images/pages/land-clearing.jpg',
  alt: 'Illustration of a cleared hillside with brush piles and tall pines beyond',
};
const stump: PageImage = {
  src: '/images/pages/stump-grinding.jpg',
  alt: 'Illustration of a stump grinder cutting a large stump in a front yard',
};
const roots: PageImage = {
  src: '/images/pages/arborist.jpg',
  alt: 'Illustration of the base and roots of a large oak in a woodland with fallen leaves',
};

export const areaImages: Record<string, PageImage> = {
  simpsonville: street,
  taylors: roots,
  easley: clearing,
  greer: yardTree,
  mauldin: brickStreet,
  'fountain-inn': stump,
  'travelers-rest': hills,
  'five-forks': street,
  powdersville: roots,
  berea: river,
  'wade-hampton': brickStreet,
  piedmont: yardTree,
  pickens: clearing,
  woodruff: oak,
};
