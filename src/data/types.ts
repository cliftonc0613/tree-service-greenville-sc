// Content types shared by every service and town page.
// Content files live in src/data/services/*.ts and src/data/areas/*.ts.
// Copy rules (context/core/voice-dna.json): plain periods, short sentences,
// NO em dashes, no "guaranteed", no "cheap", no "act now", no jargon without a plain explanation.
// Never claim licensed, insured, or ISA certified. Never invent reviews, years in business, or prices without a cited source.

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  /** H2 */
  heading: string;
  /** Plain paragraphs. */
  paragraphs: string[];
  /** Optional short bullet list rendered after the paragraphs. */
  bullets?: string[];
  /** Optional H3 sub-blocks. */
  subsections?: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}

export type IconName =
  | 'tree'
  | 'saw'
  | 'stump'
  | 'clipboard'
  | 'storm'
  | 'dollar'
  | 'land'
  | 'crane'
  | 'shield'
  | 'broom'
  | 'phone'
  | 'check';

export interface Service {
  slug: string;
  /** Short name for nav and cards, e.g. "Tree Removal". */
  name: string;
  icon: IconName;
  /** <title>, under 60 characters. Brand is appended by the layout only if it fits. */
  title: string;
  /** 150 to 160 characters. */
  metaDescription: string;
  /** H1. Contains the service and "Greenville, SC". */
  h1: string;
  /** First sentence states the service and location plainly. */
  lead: string;
  /** One or two sentences for cards on the hub and home page. */
  summary: string;
  sections: Section[];
  /** Optional "how it works" steps, each with a short title and one sentence. */
  steps?: { title: string; text: string }[];
  faqs: Faq[];
  /** Slugs of related service pages (internal linking plan). */
  related: { slug: string; anchor: string }[];
  /** Extra anchor links, e.g. to /contact or a town. */
  extraLinks?: { href: string; anchor: string }[];
  ctaHeading: string;
  ctaText: string;
}

export interface Area {
  slug: string;
  name: string;
  /** e.g. "Greenville County" */
  county: string;
  tier: 1 | 2 | 3;
  title: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** One or two sentences for cards on the hub page. */
  summary: string;
  sections: Section[];
  /** Closing paragraph of real local geography. Verify every fact before publishing. */
  geography: string;
  faqs: Faq[];
  /** Two nearby town slugs that have published pages. */
  nearby: { slug: string; name: string }[];
  /** Which service to lead the page with (informational only; copy is written to match). */
  leadService: 'tree-removal' | 'tree-service' | 'balanced';
}
