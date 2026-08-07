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

## Phase 2 — Custom Domain

- [ ] Decide/confirm the domain name (likely something close to "sobamilica", TBD with the user)
- [ ] Register on GoDaddy (existing registrar)
- [ ] Point DNS at the Phase 1 static host
- [ ] Confirm HTTPS auto-provisions correctly
- [ ] Quick manual cross-browser/mobile pass on the real domain

## Phase 3 — SEO Foundation

Not needed for the birthday demo, but the actual point of the project — do this right after Phase 1/2 land, not deferred indefinitely.

- [ ] Convert the single client-toggled page into real `/sr/...` (default) and `/en/...` routes via Astro's built-in i18n routing, with `hreflang` tags linking them — this is what lets "Palić sobe" and "Palić accommodation" each match the right-language page instead of one JS-toggled page Google can't attribute cleanly
- [ ] Switch all photos to Astro's `astro:assets` image pipeline (responsive `srcset`, WebP/AVIF, proper sizing) instead of raw JPGs — matters a lot here given ~30 photos at 150–850KB each
- [ ] Add `LocalBusiness`/`LodgingBusiness` JSON-LD structured data (name, address, phone, geo coordinates, photos, price range) — NAP fields must exactly match whatever comes out of Phase 4's GBP cleanup, not be decided independently
- [ ] Generate `sitemap.xml` and `robots.txt` (Astro's sitemap integration)
- [ ] Tune meta titles/descriptions and Open Graph tags per page/locale around the actual target queries ("Palić smeštaj", "Palić sobe", "Palić accommodation", border-crossing-overnight-stay angle for Hungary-crossing travelers)
- [ ] Favicon / app icons
- [ ] Run Lighthouse once the above lands; fix anything materially hurting Core Web Vitals

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
