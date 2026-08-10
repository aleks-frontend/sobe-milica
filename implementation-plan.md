# Implementation Plan

Build order: get a live, presentable site up fast (Phase 1) — this is a birthday present and already behind schedule, so showing real progress beats completeness — then harden SEO structure, then handle the Google Business Profile / Booking.com naming cleanup in parallel once access is available, then growth content and the deferred Booking.com widget.

Stack decision (discussed and settled): **Astro**, static output, deployed to a free static host (Cloudflare Pages/Vercel/Netlify — pick at deploy time). Not plain HTML (need automatic image optimization for ~30 unoptimized JPGs, sitemap/hreflang generation) and not Next.js (no app logic here, React runtime would be pure hydration overhead for a brochure site). Source design reference: `claude-design-handoff/design_handoff_sobe_milica/` (see root `CLAUDE.md`).

Naming decision (discussed and settled): the site uses **"Soba Milica"** (not "Sobe Milica") as the brand name, matching the name already established across Booking.com (103 reviews, 9.4 rating), the stronger of two Google Business Profile listings (4.9★, 33 reviews), and third-party directories. Renaming now would fragment years of citation/review signal for a grammatical nicety ("Soba" is singular, property has two rooms) — the copy can describe "two rooms" in body text without changing the brand name itself. See the note in Phase 4 about a likely **duplicate GBP listing** that needs resolving separately from this naming question.

---

## Phase 1 — Fast Path to a Live Demo

Goal: a real URL to share, as close to the design reference as possible, without blocking on SEO/i18n-routing/GBP work that doesn't affect what the demo looks like.

- [x] Scaffold Astro project (TypeScript, minimal template) — `create-astro` refuses to scaffold into a non-empty directory, so it built into a temp `super-spiral/` folder and the generated files (`package.json`, `astro.config.mjs`, `tsconfig.json`, `src/`, `.vscode/`, `.gitignore`, `AGENTS.md`) were moved up into the repo root; the generated `README.md`/`CLAUDE.md` were discarded in favor of the repo's existing ones (root `CLAUDE.md` updated instead with real commands + Astro doc links)
- [x] Global styles: Cormorant Garamond + Mulish (Google Fonts), color/spacing/radius tokens from the handoff README's "Design Tokens" section — `src/styles/global.css`, ported utility-class-for-utility-class from the prototype (`.reveal`, `.thumb`, `.lift`, `.chip`, `.btn`, `.masonry`, `.mdivider`, `.tri-col`, `.hero-trip`, `.lbl-orn`, `.msteps`/`.msteps-l`, `.icn`/`.icn-lg`, nav responsive rules) rather than reinvented, to minimize visual drift from the reference
- [x] Port page sections from `Sobe Milica.dc.html` into Astro components, in order: `Nav`, `Hero`, `About`, `Rooms` (Swan/Rose), `Garden`, `DiscoverPalic`, `Amenities`, `Reviews`, `LocationSection`, `Contact`, `Footer`, `Lightbox` — one `.astro` file per section under `src/components/`, assembled in `src/pages/index.astro`. Copy/content lives in `src/data/content.ts` (typed `sr`/`en` dictionaries + galleries + real business data), not hardcoded per-component
- [x] Merlon-crenellation and triangle-column ornament dividers — reused the prototype's exact inline-SVG data-URI background images (`.msteps`/`.msteps-l`, `.tri-col`), not reinvented
- [x] Shared lightbox component for swan/rose/garden photo sets — `Lightbox.astro` (static markup, hidden by default) + vanilla-JS state/rendering in `src/scripts/main.ts`; keyboard arrows + Escape, click-scrim close, verified working end-to-end (see below)
- [x] Interactions: scroll-reveal (IntersectionObserver + 2.6s failsafe timeout), nav scroll-state swap at `scrollY > 40`, mobile drawer nav below 920px — all in `src/scripts/main.ts`, no UI framework (matches the Astro-over-Next.js decision: this is DOM manipulation, not component state)
- [x] SR/EN toggle: implemented via `data-i18n`/`data-i18n-group` attributes on server-rendered (Serbian-default) markup, swapped client-side by `applyI18n()` in `main.ts` reading `src/data/content.ts`'s dictionaries — matches the prototype's behavior; proper per-locale URL routing for SEO is still Phase 3, not this phase
- [x] Copied all photos from `claude-design-handoff/design_handoff_sobe_milica/uploads/` into `public/uploads/` as-is (no optimization pipeline yet — Phase 3); did not swap in any of the "unused/reference" shots (`hero-2.JPG` is actually used as the Contact section background, matching the prototype — `hero-2c3592cf.jpg`, `Wiki.Vojvodina...jpg`, `vodotoranj.jpg`, `IMG_3105.jpg`, `IMG_7566.jpg` remain unused, same as in the original design)
- [x] Brand name in copy/nav/footer/location card: "Soba Milica" throughout, per the naming decision above. Also fixed a Serbian grammar knock-on effect the rename caused: `aboutP1`'s verb agreement had to change from plural "Sobe Milica **su**..." to singular "Soba Milica **je**..." — not just a find-and-replace of the brand string
- [x] Minimal meta title/description in `src/pages/index.astro` (Serbian, keyword-aware but not fully tuned — real per-locale SEO tuning is Phase 3)
- [x] Deploy to a free static host — Cloudflare Pages, per the user's choice. Pushed to the existing `origin` GitHub remote (`github.com/aleks-frontend/sobe-milica`) first (had to push with `-c http.version=HTTP/1.1 -c http.postBuffer=524288000` as one-off flags — plain HTTPS push failed with a `RPC failed; HTTP 400` on this machine's git 2.24.3, likely an HTTP/2 chunking issue with older git; not written to persistent git config). Cloudflare project created via `wrangler pages project create soba-milica --production-branch=main`, deployed via `wrangler pages deploy dist --project-name=soba-milica --branch=main`. **Not yet wired to auto-deploy on push** — this was a one-off CLI deploy from the local `dist/` build, not a git-connected Pages project, so future pushes to `main` won't redeploy automatically until that's connected (via the Cloudflare dashboard, which needs interactive GitHub App authorization)
- [x] Share the live URL — **https://soba-milica.pages.dev** (saw intermittent 522s in the first ~20s right after the first-ever deploy, which is normal edge-propagation lag for a brand-new Pages project; stable on repeated checks since)

**Flagged, not resolved**: an SSH host-key mismatch warning appeared when testing `git@github.com` ("REMOTE HOST IDENTIFICATION HAS CHANGED") — did not touch `known_hosts`, pushed over HTTPS instead. Likely GitHub's known 2023 RSA host key rotation showing up against a stale local `known_hosts` entry, but the user should verify GitHub's current key fingerprint themselves before trusting it, rather than this being silently bypassed.

**Verified working** (headless-Chromium/Playwright pass, see below): full page renders all sections correctly once the scroll-reveal failsafe fires; SR/EN toggle swaps visible text live (confirmed hero subtitle text changes); lightbox opens on thumbnail click with correct image/alt/counter, Next advances the counter, Close hides it; mobile drawer (390px viewport) opens/closes correctly via the hamburger, toggling `body[data-nav]`. Zero browser console errors across the whole pass. `npm run build` and `npm run dev` both confirmed working.

No project-specific run skill existed yet for this repo (checked, per the `run` skill's own instructions) — worth generating one (`/run-skill-generator`) once the dev workflow stabilizes, since this session had to install Playwright + write a one-off driver script from scratch to verify the port visually.

- [x] Connect the Cloudflare Pages project to the `aleks-frontend/sobe-milica` GitHub repo for auto-deploy on push to `main` — done by the user directly in the Cloudflare dashboard (GitHub App authorization isn't scriptable). Pushes to `main` now trigger a Cloudflare-side build (`npm run build` → `dist`) automatically; the manual `wrangler pages deploy` step from earlier in this phase is no longer needed going forward.

## Phase 2 — Custom Domain

- [x] Decide/confirm the domain name — `sobamilica.com`, matching the "Soba Milica" brand decision. Also checked `sobamilica.rs` as a defensive registration (see Phase 8-adjacent note below): available per RNIDS whois, but GoDaddy doesn't support `.rs` directly — deferred, not blocking anything
- [x] Register on GoDaddy — done by the user, including GoDaddy's paid "Full Domain Protection" add-on (2FA-gated transfer/deletion protection, £0.67/mo)
- [x] Point DNS at the Phase 1 static host — domain connected to Cloudflare (Websites → Connect a domain, Free plan; nameservers switched at GoDaddy from `ns09/ns10.domaincontrol.com` to `adel.ns.cloudflare.com`/`dean.ns.cloudflare.com`, propagated within minutes). Both `sobamilica.com` and `www.sobamilica.com` added as custom domains on the `soba-milica` Pages project — apex via a `CNAME sobamilica.com → soba-milica.pages.dev` (Cloudflare's CNAME-flattening handles the apex case), `www` via the pre-existing imported `www CNAME → sobamilica.com` record, once explicitly registered as a second custom domain on the Pages project (Pages doesn't route a hostname just because DNS resolves to it — it has to be registered, learned this when `www` 522'd until added). The two leftover GoDaddy parking-page `A` records were deleted since they'd have conflicted with the new apex CNAME
- [x] Confirm HTTPS auto-provisions correctly — confirmed both `https://sobamilica.com` and `https://www.sobamilica.com` serve the real site with valid SSL (`http://` apex 301-redirects to `https://`)
- [ ] Quick manual cross-browser/mobile pass on the real domain

## Phase 3 — SEO Foundation

Not needed for the birthday demo, but the actual point of the project — do this right after Phase 1/2 land, not deferred indefinitely.

- [x] Convert the single client-toggled page into real `/sr/...` (default) and `/en/...` routes via Astro's built-in i18n routing, with `hreflang` tags linking them — `astro.config.mjs` now sets `i18n: { defaultLocale: 'sr', locales: ['sr','en'], routing: { prefixDefaultLocale: true } }`. This forced a real architectural change, not just a config flag: every component went from reading a hardcoded `translations.sr` to accepting a `lang` prop, and the whole page tree is composed once per language in `src/components/Page.astro` (`src/pages/sr/index.astro` renders `<Page lang="sr" />`, `src/pages/en/index.astro` renders `<Page lang="en" />`). This let us delete the entire client-side `applyI18n()`/`data-i18n*` machinery from `main.ts` and the markup — text is now correct at first paint per route instead of being swapped in by JS after load, which is also strictly better for Googlebot (no reliance on JS execution to see the English content). The old JS lang-toggle button is now a real `<a href="/en/">`/`<a href="/sr/">` link. Root `/` is not a real content page — `public/_redirects` (`/  /sr/  302`) gives a true edge-level 302 on Cloudflare Pages, with `src/pages/index.astro` as a meta-refresh fallback for any other static host. `Layout.astro` emits `hreflang="sr"`/`"en"`/`"x-default"` alternates plus a `rel=canonical` per route, and `@astrojs/sitemap`'s `i18n` option adds matching `xhtml:link` alternates inside `sitemap-0.xml` — the sitemap explicitly filters out `/` since it's a redirect stub, not indexable content.
- [x] Switch all photos to Astro's `astro:assets` image pipeline (responsive `srcset`, WebP/AVIF, proper sizing) instead of raw JPGs — `public/uploads/` moved to `src/assets/uploads/` (assets must be ES-module-imported to be optimizable; files served straight from `public/` bypass the pipeline entirely). `src/data/images.ts` globs the folder once (`import.meta.glob`) into a filename → `ImageMetadata` lookup so components can keep referring to photos by filename, same as before. All `<img>` tags were swapped for `astro:assets`'s `<Image>` with per-context `widths`/`sizes` (e.g. room thumbnails vs. the garden masonry vs. the hero triptych each get different breakpoints matching how big they actually render) and `format="webp"`. Real numbers from the build log: `swan-6.jpg` 750KB → 27–440KB across its generated widths; `rose-1.JPG` 571KB → 4–127KB. The one place this got genuinely tricky: the **lightbox** needs full-resolution image URLs client-side, but `astro:assets`' optimizer only runs server-side at build time and can't be called from `main.ts`. Fixed by precomputing a 1600px-wide WebP via `getImage()` for every gallery photo in `Page.astro`, embedding the result as a `<script type="application/json" id="gallery-data">` blob inside `Lightbox.astro`, and having `main.ts` read from that instead of touching `astro:assets` itself.
- [x] Add `LocalBusiness`/`LodgingBusiness` JSON-LD structured data (name, address, phone, geo coordinates, photos, price range) — added to `Layout.astro`, `@type: LodgingBusiness` with name/address/geo/telephone/url/image/priceRange/`sameAs` (linking the Booking.com listing). Deliberately left out `aggregateRating`/`review` — we don't have a real, current Booking.com review count to report truthfully, and Google treats fabricated or unverifiable rating counts in structured data as spam-worthy; better to add that once Phase 4 (GBP/NAP cleanup) gives us a real, citable number. `geo` coordinates reuse the same verified Begejska 1 marker from the Phase 1 map-pin fix (now hoisted into `site.geo` in `content.ts` instead of being buried in the OSM embed URL only).
- [x] Generate `sitemap.xml` and `robots.txt` (Astro's sitemap integration) — `@astrojs/sitemap` added, `site: 'https://sobamilica.com'` set in `astro.config.mjs` so URLs are absolute. `public/robots.txt` allows everything and points at `/sitemap-index.xml`.
- [x] Tune meta titles/descriptions and Open Graph tags per page/locale around the actual target queries ("Palić smeštaj", "Palić sobe", "Palić accommodation", border-crossing-overnight-stay angle for Hungary-crossing travelers) — added `metaTitle`/`metaDescription` fields to the `Dictionary` type in `content.ts` (per-language, sitting next to the rest of the translated copy rather than living separately), written around those target phrases plus the border-crossing angle. `Layout.astro` now also emits full OG (`og:type/site_name/title/description/url/image/locale/locale:alternate`) and Twitter Card tags. Needed a real share image for `og:image`: cropped `hero-2.JPG` (the yellow-house exterior shot used behind the Contact section) to 1200×630 with `sips` and saved it as `public/og-image.jpg` — OG images don't benefit from responsive `srcset` the way in-page photos do, so this one intentionally stays a plain static file rather than going through `astro:assets`.
- [x] Favicon / app icons — real branded set from the design handoff zip (`favicon-set/`: 16/32/48/192/512px PNGs + `apple-touch-icon.png`, the dark-sage merlon+"M" mark) swapped in for the `create-astro` placeholder SVG. No `.ico` was included in the handoff, so one was hand-built (multi-res PNG-in-ICO container, 16/32/48px) since browsers still request `/favicon.ico` as a fallback regardless of `<link>` tags. `Layout.astro` now links all sizes plus `apple-touch-icon`.
- [x] Run Lighthouse once the above lands; fix anything materially hurting Core Web Vitals — ran against the production build (`astro build` + `astro preview`, not `astro dev`, since dev-mode assets aren't representative). First pass: Performance 65 / Accessibility 93 / Best Practices 100 / SEO 100. The Performance hit turned out to be almost entirely one thing: the Google Fonts `<link rel="stylesheet">` is render-blocking by default, and Lighthouse's LCP breakdown showed ~3.6s of "element render delay" against ~10ms time-to-first-byte — i.e. the page was ready long before it was allowed to paint. Fixed with the standard preload-then-swap pattern (`rel="preload" as="style" onload="this.rel='stylesheet'"` + a `<noscript>` fallback) plus `loading="eager" fetchpriority="high"` on the three above-the-fold hero triptych images (Astro's `<Image>` defaults every image to `loading="lazy"`, which was fighting the LCP path). Also added a `<main>` landmark around the section content for the accessibility `landmark-one-main` audit. Result: **Performance 99 / Accessibility 95 / Best Practices 100 / SEO 100**. The remaining accessibility gap is `color-contrast` — several design-token pairings (the `#B98A72`/`#7E876B` eyebrow-label color on cream backgrounds, the muted footer text, the WhatsApp-green button) fall short of WCAG's 4.5:1 text-contrast minimum. These are inherited from the original design handoff's token palette, which `CLAUDE.md` documents as final/high-fidelity rather than a rough guide, so left as-is pending an explicit call from Aleks on whether to adjust any of those tokens.

## Phase 4 — Google Business Profile & NAP Consolidation

Blocked on the user getting GBP access from their mother. Runs in parallel with Phases 1–3, not sequentially after them.

- [ ] Get login access to the Google Business Profile(s)
- [ ] **Investigate the likely duplicate listing**: the June 2026 performance email refers to a profile named "Studio Milica" (69 interactions, 0 calls, 0 chat clicks, 0 website visits) while a live Google Search knowledge panel shows a *different*-looking listing — "Soba Milica," 4.9★, 33 reviews — for what appears to be the same property. These are probably two separate GBP entries. Determine which is real/owned, and either request Google merge them or report the stale one as a duplicate via Google's official flow
- [ ] Once consolidated: correct business name to "Soba Milica", correct category (guesthouse/rooms, not generic), working phone number wired to actually receive calls, correct address/hours
- [ ] Add the website URL (once Phase 2's domain is live) to the profile
- [ ] Investigate why calls/chat clicks showed 0 despite 69 direction requests in June — likely a missing/wrong phone number or messaging not enabled
- [ ] Spot-check the third-party directories found during this discussion (sobe-smestaj.com, eBooking Srbija, visitaserbia.com, Planet of Hotels) for name/address consistency with the canonical NAP — low priority unless a real discrepancy turns up

## Phase 5 — Growth Content

- [ ] "Discover Palić" detail page(s) — expand beyond the homepage's 8-card summary into real long-tail-SEO content (e.g. individual pages or sections per attraction: Lake Palić, cycling, wineries, Secession architecture)
- [ ] "Discover Subotica" content — new, not in the original design handoff; scope with the user (own page vs. folded into the Palić content)
- [ ] Seasonal offers section/page
- [ ] **Upcoming local events section** (e.g. Palić Film Festival, Berbanski dani, Prvi maj) — homepage section (or small standalone page per event) announcing what's coming up, brief description of the event, and a "book early" nudge toward the Booking.com/WhatsApp CTAs. SEO rationale: not chasing Google's generic "freshness" signal (weak for a static brochure site) but targeting high-intent, low-competition seasonal long-tail queries people only search right before each event ("smeštaj za vreme Palićkog filmskog festivala," "gde odsesti Berbanski dani Subotica") — few competing guesthouses bother targeting these directly. Should carry `Event` JSON-LD structured data per event (name/startDate/endDate/location), not just prose, since that's what can actually earn rich-result visibility. Content has no CMS (per root `CLAUDE.md`, everything lives in `content.ts`), so this needs someone to manually rotate entries each season — worth deciding whether that's an acceptable recurring chore or whether it's worth a lighter structured-list format (dates/name/blurb fields to swap) rather than free-form prose rewritten every time
- [ ] Revisit whether Swan/Rose rooms deserve their own dedicated pages for SEO once there's more to say about each, vs. staying as homepage sections

## Phase 6 — Live Booking.com Reviews Widget

Deferred deliberately (decided in this conversation) — static "9.4" badge ships with Phase 1; this replaces it later.

- [ ] Set up a Booking.com Partner Center account (if not already present) → Marketplace → Products → reviews/rating widget
- [ ] Embed it in place of the static badge in hero + reviews sections, loaded lazily/deferred so it doesn't block page render or hurt Core Web Vitals
- [ ] Confirm it doesn't regress the Lighthouse numbers from Phase 3

## Phase 7 — Contact / Booking Inquiry Path (open question)

Not yet decided — the current design only has link-out CTAs (Booking.com, WhatsApp, phone, email), no on-site form. Revisit whether a simple contact/inquiry form is wanted beyond those, and if so whether it needs a backend (e.g. a form-to-email service) or stays link-only.

- [ ] Decide with the user whether an on-site contact form is needed at all
- [ ] If yes, scope the simplest option that fits (e.g. a static-site-friendly form service) rather than building custom backend infrastructure for a single contact form
- [ ] Add a **Viber** CTA alongside the existing WhatsApp link — Viber is more widely used than WhatsApp for personal/business messaging within Serbia, so domestic guests are more likely to reach out that way even though WhatsApp covers international guests better. Same link-out pattern as WhatsApp (`viber://chat?number=...` deep link / `https://invite.viber.com/...` fallback for desktop), same button treatment, placed next to it in the Contact section

## Phase 8 — "Powered By" Footer Credit (lowest priority, open question)

Idea, not a decision — revisit later. The user (who built this site for their mom) wants a small footer credit linking to their own site or LinkedIn. Blocker: `aleksthecoder.com` is currently just a coming-soon placeholder, no real site to link to yet.

- [ ] Decide what the credit actually links to for now — LinkedIn in the meantime, `aleksthecoder.com` once it's real, or hold off entirely until then
- [ ] If added, keep it small/unobtrusive in the footer — this is the guesthouse's site, not a portfolio piece

---

## Tijana feedback batch 1 (temporary — delete this section once addressed)

Sourced from a Google Doc review pass on the live site (25 numbered notes, #4/#14 merged as duplicates). Not part of the phased plan above — tracked here as a flat checklist so it's easy to delete once worked through.

### Website

- [ ] Add "Pogledajte sobe" nav link next to "Pogledajte dvorište"
- [ ] Add language flag icons to the sr/en toggle
- [ ] Move the location map higher on the page (e.g. below the hero, not just at the bottom) — address is important info, per Booking.com's placement
- [ ] Clarify driving distance vs. walking distance in location copy — emphasize "a few minutes by car"; current wording risks implying a short walk from central Subotica, and reviews mention 10–15 min on foot
- [ ] Add specific kitchen/bathroom amenity details (towels, hair dryer, cookware) or at least wording like "fully equipped" — "čajna kuhinja" alone is too vague
- [ ] Make the Booking.com rating badge (9.4 "Izuzetno") clickable, linking to reviews on Booking.com
- [ ] Add room photos to the hero section, not just yard photos
- [ ] Add bed dimensions to room details (a review mentioned a narrow double bed)
- [ ] Add missing "kitchen" amenity tag to Soba Ruža (Rose) — a photo appears to show one
- [ ] Fix the sparse/empty second row of amenity icons — add more items or consolidate to one row
- [ ] Improve the gallery slideshow transition — current effect feels too jarring/clicky
- [ ] Change the dvorište nav/section icon to something more fitting (e.g. a tree)
- [ ] Fix "send email" contact link not working on desktop (confirmed working on mobile)
- [ ] Add photos of Palić/the area to the Discover Palić section
- [ ] Add more amenity/attraction items — swing, trampoline, dog — mentioned in reviews, appeal to families with kids
- [ ] Add +381 country code to the displayed phone number
- [ ] Match the gallery dot-indicator color to the "Pogledajte galeriju" link text color
- [ ] Review whether identical icons across one section are intentional
- [ ] Fix a clipped/cut-off arrow icon

### Mobile

- [ ] Top-align nav/drawer menu text instead of vertically centering it
- [ ] Add a back arrow in the gallery/lightbox on mobile (only forward exists currently)
- [ ] Reorder Soba Labud (Swan) section on mobile — text before photos (desktop's photos-left/text-right layout doesn't translate well to a stacked mobile layout)
- [ ] Restructure the dvorište gallery on mobile to a hero-photo + thumbnails layout, matching the room galleries, instead of one long stack
- [ ] Fix top-of-page layout inconsistency vs. desktop — the Booking.com badge/section reads as too small/unnoticeable on mobile
