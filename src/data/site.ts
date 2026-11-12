// Single source of truth for business identity, contact details, and navigation.
//
// PLACEHOLDERS: the research files do not contain a real phone number, domain,
// email, or credentials. Every value marked PLACEHOLDER below must be replaced
// before launch. See LAUNCH_CHECKLIST.md.

export const SITE_URL = import.meta.env.SITE ?? 'https://greenvilletreeandstump.com';

export const business = {
  name: 'Greenville Tree & Stump',
  shortName: 'Greenville Tree & Stump',
  city: 'Greenville',
  state: 'South Carolina',
  stateCode: 'SC',
  region: 'the Upstate',

  // PLACEHOLDER: 555-01xx is a reserved fictional range. Swap in the GoHighLevel
  // local 864 tracking number (playbook: "live on launch day").
  phoneDisplay: '(864) 555-0100',
  phoneHref: 'tel:+18645550100',

  // PLACEHOLDER: no email in the project files.
  email: 'hello@greenvilletreeandstump.com',

  // Lead form endpoint (GoHighLevel / LeadConnector webhook). Set PUBLIC_LEAD_WEBHOOK_URL.
  // The form refuses to claim success when this is empty.
  leadWebhookUrl: import.meta.env.PUBLIC_LEAD_WEBHOOK_URL ?? '',

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
  // Only published towns are listed (site-architecture.md section 4).
  areas: [
    { label: 'Simpsonville', href: '/service-areas/simpsonville' },
    { label: 'Taylors', href: '/service-areas/taylors' },
    { label: 'Easley', href: '/service-areas/easley' },
    { label: 'Greer', href: '/service-areas/greer' },
  ],
  areasAll: { label: 'All service areas', href: '/service-areas' },
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
