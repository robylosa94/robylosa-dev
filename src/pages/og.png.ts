import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { site } from '../data/site';

/**
 * Social preview image (1200×630), rendered at build time from an SVG.
 * Fonts come from the build machine (sharp/librsvg can't load web fonts),
 * so the stack falls back to a condensed system face where available.
 */
export const GET: APIRoute = async () => {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const mono = `'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', monospace`;
  const condensed = `'Archivo', 'Arial Narrow', 'Helvetica Neue Condensed', 'DejaVu Sans Condensed', Arial, sans-serif`;
  const [first, last] = site.name.toUpperCase().split(' ');

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f2f3ee"/>
  <circle cx="58" cy="78" r="9" fill="#12894f"/>
  <text x="80" y="86" font-family="${mono}" font-size="22" font-weight="500" fill="#0f1a14">FRONTEND ENGINEER · ${esc(site.location.city.toUpperCase())}, ${esc(site.location.country.toUpperCase())}</text>
  <g font-family="${condensed}" font-weight="900" fill="#0f1a14" font-stretch="condensed">
    <text x="40" y="300" font-size="210" letter-spacing="-4">${esc(first)}</text>
    <text x="150" y="490" font-size="210" letter-spacing="-4">${esc(last)}</text>
  </g>
  <line x1="40" y1="530" x2="1160" y2="530" stroke="#0f1a14" stroke-width="3"/>
  <text x="40" y="580" font-family="${mono}" font-size="24" font-weight="500" fill="#0f1a14">${esc(site.role)} @ ${esc(site.company)}</text>
  <text x="1160" y="580" font-family="${mono}" font-size="24" fill="#12894f" text-anchor="end">robylosa.dev</text>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
