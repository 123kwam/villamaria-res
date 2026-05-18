# CLAUDE.md — Villa Maria Argentine Steakhouse

This file is the working brief for the Villa Maria restaurant website rebuild. Read it before editing anything in this repo.

---

## Project

A premium marketing site for **Villa Maria — Argentine Steakhouse** (Netherlands). It replaces the existing site at `https://www.restaurantvillamaria.nl/?lang=en` with a richer, more cinematic experience.

The site must feel like the restaurant: dark, warm, confident — the kind of place you book for an anniversary, not a Tuesday. It is not a generic restaurant template.

## Tech stack

- **Framework:** Next.js 15 (App Router, React Server Components where applicable)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 with CSS variables for brand tokens
- **Animation:** GSAP + `@gsap/react` (for `story-scroll`), Framer Motion (for micro-interactions), canvas particles (for `vapour-text-effect`)
- **Icons:** `lucide-react`
- **Structure:** shadcn-style — shared primitives in `components/ui/`, page sections in `components/sections/`

## Brand identity

The logo is the source of truth. Maroon field, royal-blue "VILLA MARIA" wordmark, white pampas bull, white "ARGENTINA STEAK" plinth.

### Color tokens

| Token | Hex | Use |
| --- | --- | --- |
| `--vm-burgundy` | `#6B1A1F` | Primary background, hero, deep panels |
| `--vm-burgundy-deep` | `#3D0E11` | Navbar scroll state, footer |
| `--vm-ember` | `#A8302A` | Hover states, accents, dividers |
| `--vm-blue` | `#1E3A8A` | Secondary accent (echoes the wordmark) |
| `--vm-gold` | `#C8A24B` | Premium accent — CTAs, prices, fine rules |
| `--vm-gold-bright` | `#E5C77A` | Hover gold, highlights |
| `--vm-cream` | `#F5EFE2` | Light section background, body text on dark |
| `--vm-bone` | `#E8DFCB` | Secondary cream, card surfaces on light sections |
| `--vm-charcoal` | `#1A1110` | Near-black for text on cream, image overlays |

Default everything to the dark palette. Cream sections exist as palate-cleansers between dark ones, not as the primary mood.

### Typography

- **Display / headings:** `Cormorant Garamond` or `Playfair Display` — serif, high contrast, used in italic for menu items and section eyebrows.
- **Body / UI:** `Inter` — workhorse sans for paragraphs, nav, forms.
- **Accent / numerals:** `DM Serif Display` for menu prices and large stats, sparingly.

Load via `next/font/google`. Never use system fonts.

### Voice

Sparing, confident, sensory. "Grilled over quebracho embers" beats "cooked with traditional Argentine wood." Avoid emoji and exclamation points. Use Argentine Spanish for cut names (`Bife de Chorizo`, `Ojo de Bife`) followed by English in lighter weight.

## Features (in scope)

1. **Vapour-text hero** — using `components/ui/vapour-text-effect.tsx`. Cycles through "Asado.", "Quebracho.", "Malbec." in cream on burgundy.
2. **Story-scroll heritage section** — using `components/ui/story-scroll.tsx`. Stacked panels telling the Pampas → Amsterdam story. Burgundy / charcoal / cream / blue / burgundy stack.
3. **Animated menu** — categories (Parrilla, Entradas, Sides, Wines, Desserts), per-item hover that reveals cut diagram or origin note. Prices in gold.
4. **Reservation form** — date, time, party size, occasion. Client-side validated, mocked confirmation. No real backend.
5. **Gallery** — masonry grid, lightbox, image-led.
6. **Reviews carousel** — three to five testimonials, draggable / arrow nav.
7. **Events & private dining** — short panel with CTA.
8. **Contact + map** — address, hours, phone, embedded map, social links.
9. **Language toggle:** EN / NL / ES. Content lives in a single `lib/i18n/dictionaries.ts` keyed by locale. Persist preference in `localStorage`.

## Repo conventions

- `app/` — App Router routes. Single `/` route for the long-scroll homepage. Sub-routes for `/menu`, `/reserve`, `/contact` only if a section grows past 1 viewport of standalone depth.
- `components/ui/` — primitives (`story-scroll`, `vapour-text-effect`, `button`, `input`, etc.). Reusable, no business copy.
- `components/sections/` — page sections (`Hero`, `Heritage`, `Menu`, `Reserve`, etc.). Compose primitives + content.
- `lib/i18n/` — locale dictionaries and the `useLocale` hook.
- `lib/content/` — menu data, testimonials, gallery image lists.
- `public/` — `logo.png` lives here; add hero/gallery images here when sourced.

Tailwind brand tokens are exposed via CSS variables in `app/globals.css` and aliased in `tailwind.config.ts` so `bg-burgundy`, `text-gold`, etc. just work.

## Provided assets

- `logo.png` — the brand mark. Use as-is in navbar and footer.
- `components/scroll.txt` — source for `components/ui/story-scroll.tsx`. Port verbatim.
- `components/text-effect.txt` — source for `components/ui/vapour-text-effect.tsx`. Port verbatim.
- `inspiration.png` — mood reference, not a layout to copy.

## Out of scope

- Real reservation backend / payments
- CMS — content is static in `lib/content/`
- Auth, accounts, loyalty
- Cookie banner / analytics (add later)
