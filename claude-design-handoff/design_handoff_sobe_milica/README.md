# Handoff: Sobe Milica — Guesthouse Website

## Overview
Single-page marketing/booking site for Sobe Milica, a family-run guesthouse in Palić, Vojvodina, Serbia. Serbian-first with a full English translation toggle. Sections: hero, about, two rooms (Swan/Rose) with photo galleries + lightbox, garden (emotional centerpiece), Discover Palić, amenities, guest reviews, location/map, contact/booking.

## About the Design Files
The files in this bundle (`Sobe Milica.dc.html`, `Hero ideas.dc.html`) are **design references built in HTML** — working prototypes showing intended look, content and interaction, not production code to copy verbatim. The task is to **recreate this design in your target environment** (plain static HTML/CSS/JS, or a framework like Next.js/Astro if the site will grow) using that environment's own conventions. If no project exists yet, a static HTML/CSS/JS site (or a lightweight framework) is the right fit — this is a single page with no backend beyond a contact form/booking links.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy (Serbian + English), and interactions are final. Recreate pixel-close using the values below.

## Screens / Views
Single scrolling page, sections in order:

1. **Nav** — fixed top bar. Transparent over the hero, fades to `rgba(251,247,238,.9)` with a hairline shadow once `scrollY > 40`. Logo "Sobe Milica" (Cormorant Garamond 24px) + "Palić · Vojvodina" kicker (9px, letter-spacing .42em). Links: O nama/Sobe/Bašta/Palić/Kontakt. SR/EN toggle pill button. "Rezervišite" CTA (sage `#7E876B` bg). Below 920px: links collapse into a right-side drawer (slide-in, 340px max, hamburger toggle).

2. **Hero** — dark sage-green background (`#2A2E25`), NOT full-bleed photography. A thin merlon-crenellation strip (Palić folk motif, see Design Tokens) sits just under the nav. Centered content: kicker with triangle ornaments either side, giant serif "Sobe Milica" (clamp 56–128px), subtitle, two CTAs + a Booking.com 9.4 rating badge (navy square, rounded one corner). Below that, a **3-photo triptych** (1fr / 1.25fr / 1fr columns, ~340px tall) of garden/terrace shots with a slow "Ken Burns" zoom (22s ease-in-out alternate, scale 1.02→1.11).

3. **About** — 2-col grid (text | image). Text: eyebrow rule + label, H2, two paragraphs, feature chip row (pill, `#FBF7EE` bg, sage on hover). Image: single tall photo, rounded 20px, with a floating stat card (bottom-left, offset outside the image) showing "2" (room count) in large serif.

4. **Rooms** — centered intro (label, H2, subtext). Two alternating rows (image-left/text-right, then mirrored) for Swan Room and Rose Room: large lead photo (lift-on-hover shadow) + 4-thumbnail strip grid, both open a shared lightbox gallery on click. Text: name + tag, description, 4 bullet features (dot + label), "View gallery" ghost button.

5. **Garden ("Dvorište")** — largest section (emotional centerpiece). Note: the Serbian term is **"dvorište"** (yard/garden grounds), not "bašta" (which implies a vegetable garden) — use "dvorište" everywhere in copy and nav. Split header (label+H2 | lead paragraph). 3-column CSS **masonry** gallery (9 photos, `column-count`, `break-inside:avoid`), each opens the lightbox. Below: 6 "moment" cards (icon + short phrase: "Coffee in the shade", "Barbecue & gazebo", etc.) in a responsive grid.

6. **Discover Palić** — dark section (`#2E332A`), white text. Small vertical triangle-column ornament above the centered intro. 8-card grid (numbered 01–08, title, description) — Lake Palić, cycling, wineries, zoo, restaurants, wellness, Secession architecture, Subotica.

7. **Amenities** — 11-item icon grid (WiFi, AC, parking, garden, BBQ, seating, TV, bathroom, kitchenette, family-friendly, quiet area). Each: 52px rounded icon tile (`#EFE9DB` bg) + label, centered.

8. **Reviews** — label/H2 + a Booking.com 9.4 score card, then 3 testimonial cards (5 stars, italic serif quote, initial avatar + name/origin).

9. **Location** — 2-col: address card + "Open in maps" CTA (left), embedded OpenStreetMap iframe (right), both rounded/bordered.

10. **Contact** — full-width photo background (dark overlay), centered: label, H2, subtext, 4 CTA pills — Booking.com (navy), WhatsApp (green), phone `tel:`, email `mailto:`.

11. **Footer** — dark (`#242820`), merlon-strip divider, brand + address, nav link row, copyright line.

12. **Lightbox** (overlay, all galleries share it) — dark scrim, close/prev/next circular buttons, image with alt caption + "n / total" counter, keyboard arrows + Escape supported.

Between About→Rooms, Palić→Amenities, and Reviews→Location there is a thin **decorative divider band** (merlon-crenellation pattern, ~245px wide, centered, flanked by fading hairlines).

## Interactions & Behavior
- **Scroll reveal**: every major block has `.reveal` (opacity 0 + translateY(26px) → 1/0 over 1s, cubic-bezier(.22,.61,.36,1)), triggered by IntersectionObserver at 12% visibility, with a 2.6s failsafe timeout that force-reveals everything (in case observer misses).
- **Nav scroll state**: background/ink colors swap once `window.scrollY > 40`.
- **Mobile nav drawer**: hamburger toggles a `data-nav="open"` attribute; drawer slides in from the right (500ms cubic-bezier(.7,0,.2,1)).
- **SR/EN toggle**: swaps all copy via a translation dictionary keyed by `lang` state (`sr`/`en`), default `sr`.
- **Lightbox**: click any gallery thumbnail to open; state holds `{open, set, i}` where `set` is `swan`/`rose`/`garden`; Next/Prev cycle within that set; Escape/click-scrim closes; arrow keys navigate.
- **Hover states**: thumbnails zoom their image 1.07x (0.5–0.7s ease); buttons lift `translateY(-2px)`; cards with `.lift` rise 6px with a stronger shadow; nav links get an underline that wipes in from the left.
- **Hero photo treatment toggle** (prop, not user-facing UI): `photoTreatment` = `authentic` | `warm` applies a subtle sepia/saturation filter to all `.ph`-classed images.

## State Management
- `lang`: `'sr' | 'en'` — drives all text via a `_L()` dictionary lookup.
- `nav`: `'open' | 'closed'` — mobile drawer.
- `scrolled`: boolean — nav appearance.
- `lb`: `{ open: boolean, set: 'swan'|'rose'|'garden'|null, i: number }` — lightbox.
- No external data fetching; all content (rooms, amenities, reviews, attractions) is static, defined inline per language.

## Design Tokens

**Colors**
- Background (cream): `#F4EEE1`, card cream: `#FBF7EE`, secondary section bg: `#EDE6D6`
- Ink (primary text): `#33352B`, body copy: `#5E6152` / `#4b4e40`
- Sage (primary accent): `#7E876B`, sage-dark ink on green sections: `#2A2E25` / `#2E332A` / `#242820`
- Clay/terracotta (secondary accent): `#B98A72`
- Gold (dark-section accent): `#C9B78C` / `#D8C69C` / `#B9A57E`
- Booking navy badge: `#1a3a6b`
- WhatsApp green: `#25a35a`
- Borders: `#EBE3D2` / `#E4DCCB` / `#E1D8C6`

**Typography**
- Display/headings: **Cormorant Garamond** (Google Fonts), weight 600, tight line-height (1.02–1.04)
- Body/UI: **Mulish**, weights 300/400/500/600/700
- Section eyebrow labels: 11–12px, letter-spacing .3em–.34em, uppercase, bold

**Palić folk motif (this project's ornament system)** — do NOT invent new symbols; reuse exactly these two, derived from the reference planter/terrace photos:
1. **Merlon crenellation with a punched heart per tower** — used as thin (24–26px tall) horizontal divider bands between sections, a crown strip under the hero nav, and a footer band. Rendered as a repeating inline SVG background (`background-size: 64px 48px` tile), color sage `#7E876B` (or cream `#E9E1CF` on dark hero bg).
2. **Downward-pointing triangle column** — a single vertical repeating column (20×24px tile) of solid clay triangles, used sparingly (e.g. one short stack above the Discover Palić heading). Also used as tiny ▼ flanking marks either side of section eyebrow labels (CSS-only, no image).
Keep both motifs restrained: divider strips only, never a tiled background/watermark behind content.

**Radius / shadow**
- Cards/images: 12–20px radius
- Buttons: fully pill (100px)
- Shadows: soft, colored toward the sage/ink palette, e.g. `0 26px 60px rgba(60,60,40,.2)` for lifted photos, `0 8px 24px rgba(95,102,80,.28)` for the primary CTA

**Layout**
- Max content width: 1240px, generous section padding (`clamp(70px,11vh,140px)` vertical)
- Grids: CSS Grid `repeat(auto-fit,minmax(...))` throughout; masonry via `column-count`

## Assets
All photography is user-supplied, in `uploads/`: `hero.jpg`, `hero-2.JPG` (unused by current hero — kept for reference/alt crop), `swan-1..7`, `rose-1..10`, `yard-1..7`. Icons are hand-drawn inline SVGs (stroke-based, `#5F6650`/`#7E876B`), no icon library. Map is a live OpenStreetMap iframe embed (no API key needed) — swap the bbox/marker params if the actual coordinates differ.

## Files
- `Sobe Milica.dc.html` — the full site (primary deliverable)
- `Hero ideas.dc.html` — exploratory hero-section alternatives (reference only, not final)
- `uploads/` — source photography
