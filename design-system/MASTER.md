# RIVÂRE — Design System (Source of Truth)

Derived with the **UI/UX Pro Max** skill (`--design-system` + supplemental style / typography / color / ux / landing searches) and reconciled with the RIVÂRE brand assets (logo, 15 studio bottle shots, 3 lifestyle photos) and the project brief.

The skill's raw `--design-system` pass proposed a *Liquid Glass* style. **Rejected** — it scores poorly on performance and text contrast and contradicts the brief (no glassmorphism, no gradients, no heavy blur). We keep the skill's other outputs (palette direction: premium dark + warm neutral + gold accent; typography: elegant serif + clean sans) and swap the style for the skill's **Exaggerated Minimalism × Editorial Grid / Magazine** pairing — both rated *Excellent* performance and *WCAG AA/AAA*.

---

## 1. Design principles

1. **The bottle is the protagonist.** Photography leads; UI recedes.
2. **Type and space do the work.** Large classical serif for editorial statements, quiet geometric sans for everything functional.
3. **Two worlds, one system.** Light "paper" galleries alternate with dark "espresso" statement sections. Same grid, type scale and motion in both.
4. **Restraint over decoration.** No gradients, no glass, no drop shadows on cards, no pill-button soup, no emoji icons. Hairline rules and generous margins instead.
5. **Mobile is the flagship.** Every layout is designed at 375px first, then given room to breathe on desktop (asymmetry, oversreturn scale, split layouts).
6. **Motion is a whisper.** One or two elements animate per view; everything honours `prefers-reduced-motion`.

## 2. Colour tokens

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FBF8F2` | Default page background (warm off-white) |
| `ivory` | `#F1E9DB` | Alt light section; body text on dark |
| `sand` | `#E6DBC8` | Card fills, hairline borders on light |
| `sand-deep` | `#D8CAB2` | Pressed / active states on light |
| `taupe` | `#9C8C79` | Decorative + large text only (fails AA at body size) |
| `taupe-deep` | `#6E6051` | Muted body text on light — 5.6:1 on `paper` ✓ |
| `espresso` | `#2A2018` | Dark section background; primary buttons |
| `espresso-soft` | `#3B2F24` | Dark section cards / borders |
| `ink` | `#1E1712` | Headlines / body text on light — ~13:1 ✓ |
| `caramel` | `#B98B4E` | Accent: rules, underlines, hover, focus glow — decorative only |
| `caramel-deep` | `#8A5E2A` | Accent **text** and focus ring — 5.3:1 on `paper` ✓ |

Contrast rules: body text on light = `ink` or `taupe-deep`. Body text on dark = `ivory` (12.5:1 on `espresso`) or `sand`. Never `taupe` on `paper` below 24px. `caramel` is never the sole carrier of meaning.

## 3. Typography

Skill pairing "Classic Elegant / Luxury Minimalist" → **Cormorant Garamond** (display) + **Jost** (UI/text). Both self-hosted via `@fontsource`. Cormorant echoes the engraved Roman caps and the italic "Inspirada en…" line on the real RIVÂRE label; Jost's geometric forms read as fashion, not SaaS.

| Role | Family / weight | Size token |
|---|---|---|
| Hero statement | Cormorant Garamond 300 | `display-xl` (clamp 3→8rem) |
| Section headline | Cormorant Garamond 300–400 | `display-lg` / `display-md` |
| Product name | Cormorant Garamond 500 | `display-sm` |
| "Inspirado en …" | Cormorant Garamond 400 *italic* | 1–1.25rem |
| Eyebrow / kicker | Jost 500, `uppercase`, tracking 0.28em | `eyebrow` (0.75rem) |
| Body | Jost 400, line-height 1.7 | 1rem (min 16px) / `body-lg` 1.125rem |
| Nav / buttons / price / filters / meta | Jost 400–500, tracking 0.02–0.14em | `meta` (0.8125rem) |

Wordmark: extracted transparent PNGs (`wordmark-cream.png` for dark, `wordmark-ink.png` for light) from the official logo — never re-typeset.

Line length capped at `68ch` for running text.

## 4. Spacing & layout

- Shell max width `1440px`, gutter `clamp(1.25rem, 5vw, 4rem)`.
- Vertical section rhythm `clamp(4.5rem, 9vw, 9rem)`.
- Grid: 4 col (mobile) → 12 col (≥lg). Product grid: 2-up mobile, 3-up md, 4-up xl.
- Radius: **0** on structural surfaces; 2px only on inputs/buttons. No card shadows — separation by tone + hairline `1px solid sand`.
- z-index scale: header 40 · drawer-backdrop 60 · drawer 70 · mobile-nav 80 · skip-link 100.

## 5. Motion language

- Duration: micro 160–220ms; reveals 500–700ms; drawer 320ms. Easing `cubic-bezier(0.22,1,0.36,1)` (editorial ease-out).
- Patterns: fade+rise reveal on scroll (IntersectionObserver, `once`), staggered ≤6 items, image `scale(1.04)` on hover (wrapper `overflow:hidden`, no layout shift), caramel underline wipe on links, cross-tone section transitions, cart drawer slide-in, one marquee (testimonials) that becomes a static wrap under reduced-motion.
- Astro `<ClientRouter />` for soft page transitions.
- **Every** animation wrapped in `@media (prefers-reduced-motion: reduce)` → opacity only / instant.

## 6. Accessibility (skill priority 1–2)

Semantic landmarks, skip link, visible focus ring (`2px caramel-deep`, offset 2px), 44px min touch targets, icon buttons get `aria-label`, drawer traps focus + closes on Esc + restores focus, alt text describes the bottle, colour never the only signal, all interactive elements `cursor-pointer`.

## 7. Anti-patterns (do NOT do)

Glass / blur panels · gradients · vibrant or playful colour · rounded card grids · heavy shadows · ecommerce badges ("SALE", star ratings) · oversized pill buttons everywhere · emoji as icons · floating full-size WhatsApp bubble · Trustpilot-style review cards · desktop-first scaling · fabricated prices, notes, stock, hours, or brand affiliation claims.

## 8. Page overrides

See `design-system/pages/*.md`. If a page file exists it overrides this document; otherwise this file governs.
