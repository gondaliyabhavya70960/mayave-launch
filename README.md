# Mayavé — Launch Site

A single-page launch / pre-registration site for **Mayavé**, a house of
conscious modern luxury born in Surat: lab-grown diamonds set in recycled 18K
gold. Built with Next.js (App Router) and React, implemented from a Claude
Design export.

## The page

A cinematic, scroll-driven one-pager:

1. **Intro** — a full-screen cinematic wordmark shown once per session.
2. **Hero** — "Light, made—not mined." over a parallax film.
3. **Our belief** — the brand's conscience statement.
4. **Atmosphere** — a full-bleed mood band ("A world of quiet light.").
5. **The House** — the Surat / Dholakia heritage.
6. **Why grown** — three pillars on lab-grown diamonds.
7. **The Craft** — the four-step journey from light to jewel.
8. **The reveal** — a transition into the pieces.
9. **The Collection** — Floracious, Lumen and Près du Cœur.
10. **The line** — "We did not find this light. We made it."
11. **Join the Circle** — a waitlist form with validation.
12. **Footer**.

### Interactions

- **Scroll reveals** via `IntersectionObserver` (`components/Reveal.tsx`).
- **Parallax** background layers (`components/Parallax.tsx`).
- **Sticky nav** that appears after the hero (`components/Nav.tsx`).
- **Waitlist form** that validates name/email and persists entries to
  `localStorage` under `mayave_waitlist` (`components/JoinCircle.tsx`). There is
  no backend — swap the persistence in `onSubmit` for a real endpoint when one
  exists.
- All motion respects `prefers-reduced-motion`, and content stays visible
  without JavaScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
app/
  layout.tsx           Root layout — Bodoni Moda + Jost fonts, metadata, theme
  page.tsx             Section composition
  globals.css          Design tokens, keyframes, shared utilities, a11y
  icon.svg             Favicon (diamond mark)
  opengraph-image.tsx  Generated social card
components/             One component (+ CSS module) per section / primitive
lib/
  content.ts           Product data
  scroll.ts            Scroll-to-form helper
  cx.ts                className helper
assets/images/         Product + editorial photography (statically imported)
```

## Design notes

- **Palette:** deep red `#8D0124`, bright `#AA182C`, near-black `#1A1213`,
  cream `#FBF8F4`, gold `#D8B15E` — defined as CSS custom properties in
  `app/globals.css`.
- **Type:** Bodoni Moda (display / serif) and Jost (UI / sans), self-hosted via
  `next/font`.
- **Images** are imported statically so Next.js provides sizing, optimization
  and blur-up placeholders automatically.

## Deployment

Optimized for [Vercel](https://vercel.com). A push builds and deploys with no
extra configuration. Set `NEXT_PUBLIC_SITE_URL` to your production URL so Open
Graph / canonical metadata resolve correctly.
