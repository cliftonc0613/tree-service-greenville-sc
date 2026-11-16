#!/usr/bin/env node
// Generates a service-area county SVG map + Astro data file from US Census county
// GeoJSON. Fully driven by a JSON config so it can be reused across projects
// without editing this file.
//
// Usage:
//   node generate-county-map.mjs --config county-map.config.json
//   node generate-county-map.mjs --config county-map.config.json --out-svg public/map.svg --out-ts src/data/countyPaths.ts
//
// Config JSON shape (all fields optional except `state` and `counties`):
// {
//   "state": "45",                          // 2-digit state FIPS code
//   "counties": ["Pickens", "Anderson"],    // county NAME values from the source GeoJSON
//   "order": ["Anderson", "Pickens"],       // paint/z-order, defaults to `counties` order
//   "fills": { "Pickens": "#9ABC74" },      // per-county fill; auto-generated if omitted
//   "stroke": "#445C24",
//   "labelColor": "#1A234F",
//   "viewboxWidth": 600,
//   "viewboxHeight": 500,
//   "padding": 32,
//   "labelOverrides": { "Greenville": { "x": 370, "y": 200 } },
//   "cities": {
//     "pickens": [{ "name": "Clemson", "lat": 34.6834, "lng": -82.8374 }]
//   },
//   "source": "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json",
//   "ariaLabel": "Interactive service area map — Upstate South Carolina",
//   "title": "Service Area: Upstate South Carolina",
//   "outSvg": "site/public/images/service-area-map.svg",
//   "outTs": "site/src/data/countyPaths.ts"
// }
//
// State FIPS codes: https://www.census.gov/library/reference/code-lists/ansi/ansi-codes-for-states.html

import { writeFileSync, readFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';

const cwd = process.cwd();

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      args[key] = true;
    } else {
      args[key] = next;
      i++;
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

if (args.help) {
  console.log(`Usage: node generate-county-map.mjs --config <path> [options]

Options:
  --config <path>        Path to JSON config (required)
  --out-svg <path>       Override outSvg from config
  --out-ts <path>        Override outTs from config
  --state <fips>         Override state FIPS code
  --counties <a,b,c>     Override counties (comma-separated)
  --stroke <color>       Override stroke color
  --label-color <color>  Override label color
`);
  process.exit(0);
}

if (!args.config) {
  console.error('Error: --config <path> is required. Run with --help for usage.');
  process.exit(1);
}

const configPath = resolve(cwd, args.config);
const config = JSON.parse(readFileSync(configPath, 'utf-8'));

const STATE_FIPS = args.state || config.state;
const TARGET_COUNTIES = args.counties ? args.counties.split(',').map(s => s.trim()) : config.counties;
if (!STATE_FIPS || !TARGET_COUNTIES?.length) {
  console.error('Error: config must include `state` (FIPS code) and `counties` (array).');
  process.exit(1);
}

const ORDER = config.order?.length ? config.order : TARGET_COUNTIES;
const STROKE = args['stroke'] || config.stroke || '#445C24';
const LABEL_COLOR = args['label-color'] || config.labelColor || '#1A234F';
const VIEWBOX_W = config.viewboxWidth || 600;
const VIEWBOX_H = config.viewboxHeight || 500;
const PADDING = config.padding ?? 32;
const LABEL_OVERRIDES = config.labelOverrides || {};
const COUNTY_CITIES = config.cities || {};
const SRC = config.source || 'https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json';

// Auto-generate a fill palette (light-to-dark green ramp) if none provided
function autoFills(names) {
  const ramp = ['#D9E8C8', '#BBD2A2', '#9ABC74', '#7AA540', '#5C8A2E'];
  const fills = {};
  names.forEach((name, i) => { fills[name] = ramp[i % ramp.length]; });
  return fills;
}
const FILLS = config.fills && Object.keys(config.fills).length ? config.fills : autoFills(ORDER);

const outSvg = args['out-svg'] || config.outSvg;
const outTs = args['out-ts'] || config.outTs;
if (!outSvg || !outTs) {
  console.error('Error: config must include `outSvg` and `outTs` (or pass --out-svg/--out-ts).');
  process.exit(1);
}
const outSvgPath = resolve(cwd, outSvg);
const outTsPath = resolve(cwd, outTs);

console.log(`Fetching county GeoJSON from ${SRC}...`);
const res = await fetch(SRC);
if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
const geojson = await res.json();

const features = geojson.features.filter(f =>
  f.properties.STATE === STATE_FIPS && TARGET_COUNTIES.includes(f.properties.NAME)
);
const foundNames = features.map(f => f.properties.NAME);
console.log(`Found: ${foundNames.join(', ')}`);
const missing = TARGET_COUNTIES.filter(name => !foundNames.includes(name));
if (missing.length) {
  console.warn(`Warning: no match found for county name(s): ${missing.join(', ')} (check spelling/state FIPS)`);
}

// Bounding box of all county coordinates
const allCoords = [];
for (const f of features) {
  const geom = f.geometry;
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  for (const rings of polys) for (const ring of rings) for (const pt of ring) allCoords.push(pt);
}

const minLng = Math.min(...allCoords.map(c => c[0]));
const maxLng = Math.max(...allCoords.map(c => c[0]));
const minLat = Math.min(...allCoords.map(c => c[1]));
const maxLat = Math.max(...allCoords.map(c => c[1]));

const drawW = VIEWBOX_W - PADDING * 2;
const drawH = VIEWBOX_H - PADDING * 2;

function project([lng, lat]) {
  const x = PADDING + ((lng - minLng) / (maxLng - minLng)) * drawW;
  const y = PADDING + ((maxLat - lat) / (maxLat - minLat)) * drawH;
  return [x, y];
}

function ringToD(ring) {
  return ring.map((pt, i) => {
    const [x, y] = project(pt);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join('') + 'Z';
}

function bboxCentroid(ring) {
  const lngs = ring.map(c => c[0]);
  const lats = ring.map(c => c[1]);
  return project([
    (Math.min(...lngs) + Math.max(...lngs)) / 2,
    (Math.min(...lats) + Math.max(...lats)) / 2,
  ]);
}

features.sort((a, b) => ORDER.indexOf(a.properties.NAME) - ORDER.indexOf(b.properties.NAME));

const groups = [];
const pathData = [];

for (const f of features) {
  const name = f.properties.NAME;
  const countyKey = name.toLowerCase();
  const fill = FILLS[name] || '#9ABC74';
  const geom = f.geometry;
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;

  let d = '';
  let exteriorRing = null;
  for (const rings of polys) {
    d += ringToD(rings[0]);
    if (!exteriorRing || rings[0].length > exteriorRing.length) exteriorRing = rings[0];
  }

  // County path
  const pathEl = `  <path d="${d}" fill="${fill}" stroke="${STROKE}" stroke-width="2.5" stroke-linejoin="round" style="transition: fill 200ms ease;"/>`;

  // County label — supports manual overrides for crowded/odd-shaped counties
  let [lx, ly] = bboxCentroid(exteriorRing);
  if (LABEL_OVERRIDES[name]) {
    lx = LABEL_OVERRIDES[name].x;
    ly = LABEL_OVERRIDES[name].y;
  }

  const labelEl = `  <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-family="Oswald, sans-serif" font-size="12" font-weight="700" fill="${LABEL_COLOR}" paint-order="stroke" stroke="rgba(255,255,255,0.6)" stroke-width="3" stroke-linejoin="round" style="pointer-events:none;">${name}</text>`;

  // City dots
  const cities = COUNTY_CITIES[countyKey] || [];
  const projectedCities = cities.map(city => {
    const [cx, cy] = project([city.lng, city.lat]);
    return { name: city.name, cx: parseFloat(cx.toFixed(1)), cy: parseFloat(cy.toFixed(1)) };
  });
  const dotEls = projectedCities.map(city =>
    `  <circle class="city-dot" data-city="${city.name}" cx="${city.cx}" cy="${city.cy}" r="4" fill="${STROKE}" stroke="#fff" stroke-width="1.5" style="transition: fill 200ms ease, r 200ms ease; cursor: pointer;"/>`
  );

  groups.push(
    `<g class="county-group" data-county="${countyKey}" style="cursor:pointer;">`,
    pathEl,
    ...dotEls,
    labelEl,
    `</g>`,
  );

  pathData.push({
    key: countyKey,
    name,
    d,
    labelX: parseFloat(lx.toFixed(1)),
    labelY: parseFloat(ly.toFixed(1)),
    cities: projectedCities,
  });
}

const svg = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEWBOX_W} ${VIEWBOX_H}" role="img" aria-label="${config.ariaLabel || 'Interactive service area map'}">`,
  `  <title>${config.title || 'Service Area Map'}</title>`,
  ...groups,
  `</svg>`,
].join('\n');

mkdirSync(dirname(outSvgPath), { recursive: true });
writeFileSync(outSvgPath, svg);
console.log(`✓ Written to ${outSvgPath}`);

// Write TypeScript data file for the county-map Astro component
const tsContent = `// GENERATED by generate-county-map.mjs — do not edit manually.
// Regenerate: node generate-county-map.mjs --config ${args.config}

export interface CityPoint { name: string; cx: number; cy: number; }
export interface CountyPathData {
  key: string;
  name: string;
  d: string;
  labelX: number;
  labelY: number;
  cities: CityPoint[];
}

export const SVG_VIEWBOX = '0 0 ${VIEWBOX_W} ${VIEWBOX_H}';
export const COUNTY_PATHS: CountyPathData[] = ${JSON.stringify(pathData, null, 2)};
`;
mkdirSync(dirname(outTsPath), { recursive: true });
writeFileSync(outTsPath, tsContent);
console.log(`✓ Written to ${outTsPath}`);
