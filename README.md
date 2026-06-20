# Mayavé — Launch Site

A single-page launch / pre-registration site for **Mayavé** — "a new
definition of desire": lab-grown diamond jewellery made for her, with homes in
Noida, Ghaziabad and Gurugram. Built with Next.js (App Router) and React,
implemented from a Claude Design export with copy from the brand's Canva.

## The page

A cinematic, scroll-driven one-pager:

1. **Hero** — "A new definition of desire." (the Maya origin) over a parallax film.
2. **The future, with a touch of magic** — the brand statement.
3. **Atmosphere** — a full-bleed mood band ("Where the ordinary becomes extraordinary.").
4. **Made for her** — the meaning was always hers.
5. **What changed** — three pillars: Liberation, Artistry, Inclusivity.
6. **The Craft** — the four-step journey from light to jewel.
7. **Expression** — a transition band ("…designed to mesmerise.").
8. **The Mayavé way** — Craft · Experience · Expression.
9. **Mayavérse** — the store locations (Noida, Ghaziabad, Gurugram).
10. **The line** — "The future — with a touch of magic."
11. **Join the Mayavérse** — a waitlist form with validation.
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
