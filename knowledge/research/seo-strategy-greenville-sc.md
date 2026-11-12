# Local SEO strategy: tree removal and trimming, Greenville, SC

**Source:** `context/playbook.md` (researched November 11, 2026)
**Scope:** Pre-build strategy for a rank-and-rent site. There is no live site yet, so this covers architecture, targeting, on-page rules, and measurement, not an audit.
**Verdict carried over from the playbook:** Caution. Demand is real, but two heavyweights own the map pack, so this site can only compete in organic results.

---

## 1. Goal and success test

- **Primary goal:** top three organic results for "tree service greenville sc" or "tree removal greenville sc" within 90 days, and 20+ tracked calls in a month.
- **If it stalls on page two at day 90:** fold the content into a Greenville County area site, or move the template to Anderson (210 searches, smaller field).
- **What this site cannot do:** win the map pack. Greenville Tree Co (459 reviews) and Integrity Tree Co (353) hold it, so every ranking goal here is organic.

---

## 2. Keyword targets and page mapping

Each head term gets one page. Two pages targeting the same phrase would compete with each other.

| Keyword cluster | Monthly searches (US, 12-mo) | CPC | Target page |
| --- | --- | --- | --- |
| tree service greenville sc (+ tree company) | 880 | $3.52 | Home |
| tree removal greenville sc | 480 | $12.82 | /services/tree-removal |
| stump grinding greenville sc | 260 | $3.83 | /services/stump-grinding |
| arborist greenville sc | 260 | $10.83 | /services/arborist |
| tree trimming and tree pruning greenville sc | 210 | n/a | /services/tree-trimming |
| tree removal simpsonville sc | 210 | n/a | /service-areas/simpsonville |
| tree service taylors sc | 210 | $22.33 | /service-areas/taylors |
| tree service easley sc | 70 | $23.95 | /service-areas/easley |
| land clearing greenville sc | 40 | $7.10 | /services/land-clearing |

**Demand math:** about 2,000 searches a month inside Greenville, and about 2,900 once suburbs within 25 miles are counted. A page-four or page-five organic spot might earn 5 to 8% of clicks, roughly 30 to 60 calls a month. Plan on the low end.

**Emergency and cost pages** have no measured volume, but they are included because storm calls are high-value and the cost page is a cheap page-one win (see section 6).

---

## 3. Site architecture

Services live under `/services/[service-type]` and towns under `/service-areas/[city]`, each with a hub page. See `knowledge/research/site-architecture.md` for the full hierarchy, navigation, and internal linking plan.

### Launch (about 16 pages)

Core pages (12):

1. `/` home: tree service in Greenville, SC (2,200 words)
2. `/services`: hub page that introduces and links every service (400 words)
3. `/services/tree-removal` (1,500 words)
4. `/services/tree-trimming` (1,300 words)
5. `/services/stump-grinding` (1,200 words)
6. `/services/arborist` (1,200 words)
7. `/services/emergency-tree-removal` (1,000 words)
8. `/services/tree-removal-cost` (1,200 words)
9. `/services/land-clearing` (800 words)
10. `/service-areas`: hub page, lists the four launch towns at first and grows as town pages go live
11. `/about` (400 words)
12. `/contact` (200 words)

Tier 1 location pages (4, full length, 1,000 to 1,200 words):

1. `/service-areas/simpsonville`, lead with removal
2. `/service-areas/taylors`, lead with service
3. `/service-areas/easley`, split service and removal
4. `/service-areas/greer`

### Month two: tier 2 location pages (700 to 900 words)

`/service-areas/mauldin`, `/service-areas/fountain-inn`, `/service-areas/travelers-rest`, `/service-areas/five-forks`, `/service-areas/powdersville`, `/service-areas/berea`, `/service-areas/wade-hampton`

### Month three: tier 3 pages and full hub

- `/service-areas/piedmont`, `/service-areas/pickens`, `/service-areas/woodruff` (500 words each)
- Fill out the `/service-areas` hub with a line for every other town (Parker, Gantt, Sans Souci, Welcome, Judson, Dunean, City View, Golden Grove, Lyman, Duncan, Wellford, Liberty, Central, Williamston, Pelzer, Slater-Marietta, Tigerville, Landrum, Gray Court)

Finished site: about 26 pages.

---

## 4. On-page rules (apply to every page)

- **Title tag:** primary keyword near the front, under 60 characters. Example pattern: `Tree Removal in Greenville, SC | [Brand]`. The brand is still open (see section 9).
- **Meta description:** 150 to 160 characters, keyword included, ends with a reason to call.
- **H1:** one per page, contains the service and "Greenville, SC" (or the town name on location pages).
- **First sentence of each service page:** state the service and location plainly, for example "Tree removal service in Greenville, South Carolina." Copy is for readers and crawlers alike.
- **Long-tail terms to work in naturally:** free estimate, same-day, storm damage, water oak, loblolly pine, Bradford pear, sweetgum, crane removal.
- **Credential terms need proof first:** "licensed and insured" and "ISA certified arborist" appear only if the business the site is rented to actually holds those credentials.
- **Location pages:** each closes with a paragraph of real local geography. The playbook lists starting points (I-385 and Fairview Road for Simpsonville, US 29 and the Enoree River for Taylors, and so on). Verify each fact against a real source before publishing.
- **Images:** descriptive alt text that includes the page topic. Playbook image direction: crew, equipment, and backdrops that look like Greenville.
- **Avoid:** keyword repetition that reads as stuffing, and duplicate paragraphs across location pages. Each town page needs its own local detail.

---

## 5. Schema and business identity

- Add `LocalBusiness` (or a more specific tree-service type) plus `Service` markup to each page, and `FAQPage` on pages with real FAQs.
- **Schema must describe the business that actually does the work.** The name, address, phone, service area, and any credentials must match that business's Google Business Profile and citations. If the site's identity and the operator's identity differ, that gap needs a decision before launch (see section 9).
- Don't mark up reviews, ratings, or credentials that the business doesn't have.

---

## 6. Content plan

| Asset | Why | Notes |
| --- | --- | --- |
| `/services/tree-removal-cost` | Cost aggregators and a Reddit thread hold page one for "tree removal prices," per the playbook | Price ranges must be sourced. The playbook's $500 to $3,000+ figure is a market estimate, not a quote. |
| FAQ section on service pages | People Also Ask shows real questions | Two confirmed questions: South Carolina rules when a neighbor's tree falls, and when county Public Works trims versus the homeowner. Verify the legal answers from primary sources before publishing. |
| Emergency and storm page | Storm calls are the highest-value leads, even without measured volume | Keep it accurate about response times and service area. |
| Listicle: "5 best tree service companies in Greenville, SC" | The playbook suggests it for AI-surfacing | **Hold this.** Ranking the site's own business in a list of real companies is only honest if the criteria are stated and the companies are real and verifiable. Decide the criteria before drafting. |

**FAQ prompt from the playbook:** "What questions do Greenville, SC homeowners ask about tree removal, stump grinding and storm damage, including on Reddit r/greenville, Yelp and local Facebook groups?" Run this before writing FAQs.

---

## 7. Links and citations

- **Directories to submit to (from the playbook's backlink plan):** yellowpages.com, landscaping-companies.com, bestimprovers.com, contractorsup.com, businessesup.com, storeboard.com, comparetreeservices.com, localtreeservice.net, limbtrimmer.com, homeservicelookup.com, locationsnear.me, reputablelandscapers.com, reputablebusinesses.com, excellentcontractor.com, greenvillepros.com, clearmylanddirectory.com (for the land-clearing page).
- **Also:** Bing Places, Apple Business Connect, Yelp, Foursquare, and data aggregators.
- **Skip:** casino, pharma, and "SEO agency" domains that appear in the competitor profiles.
- **Do not buy links.** The playbook puts citations at 5 to 10% of the outcome, so effort goes to content and calls first.
- **Use the same name, address, and phone everywhere.** Inconsistent citations undermine the schema.

---

## 8. Measurement

| What | Cadence | Tool | Decision it drives |
| --- | --- | --- | --- |
| Ranking for the 10 head terms | Weekly during the first 90 days only | Any standard rank tracker | Confirms whether the site is moving toward top three |
| Calls and call recordings | Monthly | GoHighLevel call tracking (local 864 number) | The real success metric. Calls matter more than rankings. |
| Organic clicks to location pages | Monthly | Search Console | Which tier 2 and tier 3 pages to build next |
| Day-90 checkpoint | Once | All of the above | Keep, fold into an area site, or move the template to Anderson |

Playbook guidance: after rental, watch call volume rather than rankings. Investigate only if calls drop off hard.

---

## 9. Open decisions and risks

**Decisions needed before build:**

1. **Domain:** the two obvious exact matches are taken. The playbook suggests trying GreenvilleTreeRemoval.com, GreenvilleSCTreeRemoval.com, or GreenvilleTreePros.com in that order. Availability was not checked, so confirm at the registrar.
2. **Business identity for schema and NAP:** which business the site is rented to, and whether the site uses that name. Schema and citations depend on this.
3. **Credentials:** confirm which claims ("licensed," "insured," "ISA certified") are true for that business before they appear anywhere.
4. **Listicle:** approve or drop, and if approved, set the selection criteria first.
5. **Brand name:** the title-tag pattern uses a placeholder until this is chosen.

**Risks from the playbook:**

- Map pack is locked by two heavyweights, so organic is the only path.
- At least one local operator, McClaran's Tree Care, appears to already rent a lead-gen site, so some owners know the model.
- One competing lead-gen site already holds organic #1 for the head term.
- Review counts for competitors outside the pack come from the November 9 research and company sites, not a fresh pull.
- Distances between towns are straight-line estimates, accurate to about a mile.

---

## 10. Next steps

1. Confirm the domain and brand (decisions 1, 2, and 5).
2. Build the 12 core pages (including the `/services` and `/service-areas` hubs) and the four tier 1 location pages in Astro, using the on-page rules in section 4.
3. Set up Search Console and submit the sitemap on launch day.
4. Submit the directory and citation list in section 7 once NAP is final.
5. Start weekly ranking checks on the 10 head terms and monthly call reviews.
6. Add tier 2 pages in month two and tier 3 pages plus the full hub in month three.
7. Day-90 checkpoint against the success test in section 1.
