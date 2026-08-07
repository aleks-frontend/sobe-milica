# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

The production site is an **Astro** project (static output), scaffolded at the repo root. See `implementation-plan.md` for the phased build plan and the reasoning behind the stack/hosting/naming decisions — check it before starting new work, and check off/annotate items as they're completed, following its existing style (inline notes explaining what was actually done and why, not just checkbox flips).

Do not treat the `.dc.html` files under `claude-design-handoff/` as source to copy verbatim; they are prototype exports from a design tool (they load a `support.js` runtime that isn't part of this repo and won't run standalone). Use them as a visual/interaction reference only — see "Key files" below.

## Commands

- `npm run dev` — start the dev server (use `astro dev --background` when running it yourself, and manage it with `astro dev stop` / `astro dev status` / `astro dev logs` rather than a plain foreground process)
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the production build locally
- No test runner or linter is configured yet.

## Astro documentation

Consult these before working on related tasks: [routing/pages/middleware](https://docs.astro.build/en/guides/routing/), [Astro components](https://docs.astro.build/en/basics/astro-components/), [framework components (React/Vue/Svelte)](https://docs.astro.build/en/guides/framework-components/), [content collections](https://docs.astro.build/en/guides/content-collections/), [styling](https://docs.astro.build/en/guides/styling/), [i18n routing](https://docs.astro.build/en/guides/internationalization/) (relevant to Phase 3 of the implementation plan — the `/sr/`/`/en/` route split).

## Key files

- `claude-design-handoff/design_handoff_sobe_milica/README.md` — the full, authoritative design handoff spec (sections, interactions, state, design tokens, assets). **Read this in full before implementing anything** — it is more detailed than the summary below.
- `claude-design-handoff/design_handoff_sobe_milica/Sobe Milica.dc.html` — full prototype of the site (primary visual/interaction reference).
- `claude-design-handoff/design_handoff_sobe_milica/Hero ideas.dc.html` — exploratory hero-section alternatives (reference only, not final).
- `claude-design-handoff/design_handoff_sobe_milica/uploads/` — source photography to use in the built site (`hero.jpg`, `swan-1..7`, `rose-1..10`, `yard-1..7`, plus a couple of Palić reference/context photos).
- `claude-design-handoff/Studio Milica design brief.zip` — zip archive containing the same handoff folder (kept for reference; the extracted files above are the ones to use).

## What's being built

A single-page marketing/booking site for **Sobe Milica**, a family-run guesthouse in Palić, Vojvodina, Serbia. Serbian-first content with a full English translation toggle (`lang: 'sr' | 'en'`, default `sr`, driven by a translation-dictionary lookup — no external i18n library implied). No backend beyond a contact form / external booking links (Booking.com, WhatsApp, `tel:`, `mailto:`).

Section order: nav → hero (triptych photos, Ken Burns zoom) → about → rooms (Swan/Rose, each with photo gallery) → garden/"Dvorište" (masonry gallery, emotional centerpiece) → Discover Palić → amenities → reviews → location (OpenStreetMap embed) → contact → footer. A shared lightbox component serves all photo galleries (swan/rose/garden sets), with keyboard (arrows/Escape) and click-to-close support.

**Important terminology**: use **"dvorište"** (yard/garden grounds) for the garden section in Serbian copy and nav — not "bašta" (implies vegetable garden).

## Design system (from the handoff spec)

- **Fonts**: Cormorant Garamond (headings, serif) + Mulish (body/UI), both Google Fonts.
- **Palette**: cream background `#F4EEE1`, card cream `#FBF7EE`, ink `#33352B`, sage accent `#7E876B`, dark sage sections `#2A2E25`/`#2E332A`/`#242820`, clay/terracotta `#B98A72`, gold accents `#C9B78C`/`#D8C69C`/`#B9A57E`, Booking.com navy `#1a3a6b`, WhatsApp green `#25a35a`.
- **Ornament system**: exactly two recurring Palić folk motifs — a merlon-crenellation strip (punched-heart towers, used as thin divider bands/hero crown/footer band) and a downward-triangle column (used sparingly, e.g. above the Discover Palić heading, and as tiny flanking marks beside eyebrow labels). Do not invent new decorative motifs; reuse only these two, and keep them restrained (divider strips only, never a tiled watermark behind content).
- Cards/images use 12–20px radius; buttons are fully pill-shaped (100px radius); max content width 1240px.
- Full color/type/spacing/shadow token list is in the handoff README under "Design Tokens" — treat it as final/high-fidelity, not a rough guide.

## Behavior to preserve when implementing

- Scroll-reveal animation on major blocks (IntersectionObserver-based, with a failsafe timeout so content isn't stuck hidden if the observer misses).
- Nav background/ink swap after `scrollY > 40`; mobile drawer nav below 920px width.
- Lightbox state shape: `{ open, set: 'swan'|'rose'|'garden'|null, i }`.
- All room/amenity/review/attraction content is static and defined inline per language — no CMS or data fetching implied by the design.
