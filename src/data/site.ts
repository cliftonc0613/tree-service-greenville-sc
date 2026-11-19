// Single source of truth for business identity, contact details, and navigation.
//
// PLACEHOLDERS: the research files do not contain a real phone number, domain,
// email, or credentials. Every value marked PLACEHOLDER below must be replaced
// before launch. See LAUNCH_CHECKLIST.md.

export const SITE_URL = import.meta.env.SITE ?? 'https://greenvilletreeandstumpremoval.com';

export const business = {
  name: 'Greenville Tree & Stump Removal',
  shortName: 'Greenville Tree & Stump Removal',
  city: 'Greenville',
  state: 'South Carolina',
  stateCode: 'SC',
  region: 'the Upstate',

  phoneDisplay: '(864) 432-5331',
  phoneHref: 'tel:+18644325331',

  // PLACEHOLDER: no email in the project files.
  email: 'hello@greenvilletreeandstump.com',

  // Lead form endpoint (GoHighLevel / LeadConnector webhook). Set PUBLIC_LEAD_WEBHOOK_URL.
  // The form refuses to claim success when this is empty.
  leadWebhookUrl: import.meta.env.PUBLIC_LEAD_WEBHOOK_URL ?? '',

  // Google Maps JavaScript API key for the contact-page service-area map. Set PUBLIC_GOOGLE_MAPS_KEY.
  // Restrict the key to the site's domain in Google Cloud. Without it the page shows a plain Greenville map, with no 25-mile circle.
  mapsApiKey: import.meta.env.PUBLIC_GOOGLE_MAPS_KEY ?? '',

  // Service-area business: no public street address is published.
  hours: 'Call or send a request any time. We reply as soon as a crew lead is free.',

  // Credentials are intentionally NOT claimed anywhere on the site.
  // Flip these only after the operator provides proof (site-architecture.md decision 2).
  credentials: {
    licensed: false,
    insured: false,
    isaCertified: false,
  },

  tagline: 'Safe tree removal, trimming, and stump grinding. One call, from free estimate to finished yard.',
  description:
    'Tree removal, trimming, and stump grinding for homeowners and property managers in Greenville, SC and nearby Upstate towns.',
} as const;

export const nav = {
  services: [
    { label: 'Tree Removal', href: '/services/tree-removal' },
    { label: 'Tree Trimming', href: '/services/tree-trimming' },
    { label: 'Stump Grinding', href: '/services/stump-grinding' },
    { label: 'Arborist Services', href: '/services/arborist' },
    { label: 'Emergency Removal', href: '/services/emergency-tree-removal' },
    { label: 'Removal Cost', href: '/services/tree-removal-cost' },
    { label: 'Land Clearing', href: '/services/land-clearing' },
  ],
  servicesAll: { label: 'All services', href: '/services' },
  // Only published towns are listed (site-architecture.md section 4). Alphabetical.
  areas: [
    { label: 'Berea', href: '/service-areas/berea' },
    { label: 'Easley', href: '/service-areas/easley' },
    { label: 'Five Forks', href: '/service-areas/five-forks' },
    { label: 'Fountain Inn', href: '/service-areas/fountain-inn' },
    { label: 'Greer', href: '/service-areas/greer' },
    { label: 'Mauldin', href: '/service-areas/mauldin' },
    { label: 'Pickens', href: '/service-areas/pickens' },
    { label: 'Piedmont', href: '/service-areas/piedmont' },
    { label: 'Powdersville', href: '/service-areas/powdersville' },
    { label: 'Simpsonville', href: '/service-areas/simpsonville' },
    { label: 'Taylors', href: '/service-areas/taylors' },
    { label: 'Travelers Rest', href: '/service-areas/travelers-rest' },
    { label: 'Wade Hampton', href: '/service-areas/wade-hampton' },
    { label: 'Woodruff', href: '/service-areas/woodruff' },
  ],
  areasAll: { label: 'All service areas', href: '/service-areas' },
  // Footer shows only the five most populated towns (2025 Census estimates or 2020 counts,
  // from knowledge/research/playbook.md). Alphabetical. The full list is on /service-areas.
  footerAreas: [
    { label: 'Easley', href: '/service-areas/easley' },
    { label: 'Greer', href: '/service-areas/greer' },
    { label: 'Mauldin', href: '/service-areas/mauldin' },
    { label: 'Simpsonville', href: '/service-areas/simpsonville' },
    { label: 'Taylors', href: '/service-areas/taylors' },
  ],
  about: { label: 'About', href: '/about' },
  contact: { label: 'Contact', href: '/contact' },
  estimate: { label: 'Get a Free Estimate', href: '/contact#estimate' },
  privacy: { label: 'Privacy Policy', href: '/privacy-policy' },
  emergency: { label: 'Storm damage? Call now', href: '/services/emergency-tree-removal' },
} as const;

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, '');
  if (path === '/' || path === '') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
