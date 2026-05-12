# DailyDiff Landing Page — Design Spec

**Date:** 2026-05-12
**Status:** Draft → ready for plan
**Scope:** Pre-launch single-page landing site for dailydiff.dev
**Canonical product reference:** `plan.docx` (in repo root) and `README.md`

---

## 1. Goal

Ship a single-page, pre-launch landing site that:

1. Explains DailyDiff's value (curated daily study plan email for engineers) in under one scroll on desktop.
2. Captures email signups (provider deferred — stub `onSubmit` handler).
3. Visually matches the design language of the reference site at `cavem/` (dark theme, olive/lime accent, grain texture, monospace labels, sectioned vertical rhythm).

The landing page is the only artifact built here. Content pipeline, scheduler, DB, and email-send live in other repos.

## 2. Scope

**In scope (V1):**
- One-page React SPA with the section list in §6.
- Mobile-responsive layout with a disclosure-style nav (single "Menu ↓" toggle).
- Email signup form with a stub submit handler.
- Static deploy as `dist/`.

**Out of scope (V1):**
- Real signup backend (deferred — pick provider before launch).
- Tweaks panel / theme switcher / hue picker.
- Light theme.
- Blog or content pages.
- Analytics (decide before launch).
- FAQ section.

## 3. Stack

- **Vite + React 18**, plain JavaScript (not TypeScript).
- **Single global stylesheet** (`src/styles.css`) — no CSS-in-JS, no CSS modules, no Tailwind.
- **Self-hosted fonts** via `@fontsource` (Inter, JetBrains Mono, Newsreader).
- **No router, no state library, no data fetching.**

Rationale: cavem's design language is encoded in its global CSS with custom properties. Keeping a single global stylesheet preserves the look 1:1 and makes future palette swaps a 3-line change. React is used because the project intent (per deleted `app.jsx`) was React; component decomposition keeps each section file small and editable.

## 4. File Layout

```
dailydiff.dev/
├── index.html              # Vite entry; sets <html> data-attrs + CSS vars; meta tags
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg         # ember-style glyph (adapted from cavem's triangle+dot)
├── src/
│   ├── main.jsx            # React mount
│   ├── App.jsx             # composes sections in order
│   ├── styles.css          # global stylesheet (cavem-derived)
│   ├── sections/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── Insight.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Features.jsx
│   │   ├── NonFeatures.jsx
│   │   ├── Positioning.jsx
│   │   ├── Signup.jsx
│   │   └── Footer.jsx
│   └── components/
│       ├── SampleIssueCard.jsx   # 3 stacked cards (DSA / READ / CONTEXT)
│       ├── Tag.jsx
│       └── Button.jsx            # variants: solid, ghost
```

## 5. Design Tokens

All visual tokens live as CSS custom properties on `:root`. Future palette swap = change the three accent lines.

```css
:root {
  /* Accent — olive/lime, matches cavem */
  --acc-h: 73;
  --acc-c: 0.15;
  --acc: oklch(75% var(--acc-c) var(--acc-h));

  /* Surfaces */
  --bg: #0b0a08;
  --panel: #141310;
  --panel-2: #1a1814;
  --line: #2a2824;

  /* Text */
  --fg: #e8e6dc;
  --fg-mute: #8a877c;

  /* Shape */
  --radius: 4px;

  /* Type */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --font-serif-ital: 'Newsreader', Georgia, serif;
}
```

**Visual elements adapted from cavem:**
- Fixed grain overlay (`.grain`, SVG noise, low opacity, `aria-hidden`).
- Tag pills (`.tag`, modifiers `.tag--soon`, `.tag--muted`) — small caps, bordered.
- Bracketed mono labels: `[ DSA ]`, `[ READ ]`, `[ CONTEXT ]`, `[thesis]`, `[01 · problem]` — uppercase, accent color, mono font.
- Italic serif accent spans inside H1 (cavem uses these for emphasis words).
- Two button variants: `.btn--solid` (accent background), `.btn--ghost` (transparent + border).
- Sectioned vertical rhythm at `comfortable` density.

**Typography hierarchy:**
- H1 hero: large sans, italic serif accent inline.
- H2 section title: medium sans with bracketed accent kicker label above.
- Body: sans, ~17px desktop / 16px mobile.
- Code / labels: mono.

## 6. Sections & Copy

Copy below is the V1 baseline drawn from README + plan.docx. Final wording can iterate during implementation.

### 6.1 Nav
- Brand: ember glyph + `DAILYDIFF` + `·` + `STUDY OS`.
- Links (anchor scroll): `How it works` → §6.5 · `What you get` → §6.6 · `Why this` → §6.8 Positioning · `Sign up` → §6.9.
- CTA button: `Get the daily plan →` (scrolls to Signup).
- Mobile: a single `Menu ↓` disclosure toggles a stacked vertical list.

### 6.2 Hero
- Tag row: `[ pre-launch ]` and `[ Mon–Fri · 7am IST ]`.
- H1: `The daily study plan for engineers who don't want to plan.` — italic serif on "don't want to plan".
- Thesis line (mono small): `[thesis] decision fatigue kill more prep than hard problems.`
- Sub: 2-sentence paraphrase of README's "What is DailyDiff?" — describes the email and the curriculum framing.
- CTAs: solid `Get tomorrow's email →` and ghost `See a sample`.
- Visual: `<SampleIssueCard />` — three stacked cards (DSA / READ / CONTEXT).

### 6.3 Problem — kicker `[01 · problem]`
Lede: engineers start prep only when switching jobs, then relearn from scratch each time.
Three bullets on decision fatigue (paraphrased from README): too easy, planning over doing, skip the session.

### 6.4 Insight — kicker `[02 · insight]`
Two short paragraphs: Leetcode daily removes choice; DailyDiff applies the same mechanic to a structured, sequenced curriculum.

### 6.5 How it works — kicker `[03 · how]`
Three numbered steps:
1. Sign up — one email.
2. Email lands 7am IST, Mon–Fri.
3. Open. Do. Close.

### 6.6 What you get (Features) — kicker `[04 · what you get]`
Five bullets paraphrased from README §Features: daily cadence, DSA section, READ section, CONTEXT line, no streaks / no shame.

### 6.7 Non-features — kicker `[05 · what this isn't]`
Bullets paraphrased from README §Non-Features.

### 6.8 Positioning — kicker `[06 · where this sits]`
Two short paragraphs: the "between Leetcode daily and NeetCode-style roadmap" framing, and the "scheduling product, not a content product" line.

### 6.9 Signup
Large block with accent border. H2: `Get tomorrow's plan.` Sub: `One email. Mon–Fri. 7am IST.` Email input + submit button. Microcopy: `Unsubscribe anytime. No spam. No streaks.`

### 6.10 Footer
Left: `© dailydiff.dev · 2026`. Right: three icon links — X, Threads, Instagram — `href="#"` placeholders.

## 7. SampleIssueCard Component

Three stacked cards inside one container, mirroring the card-stack mock approved in brainstorming.

- **Card 1 — DSA:** mono kicker `DSA · 2 PROBLEMS`, then a representative problem line (e.g., `Sliding window — LC 3, LC 76`).
- **Card 2 — READ:** mono kicker `READ · 1 ARTICLE`, then a representative source line (e.g., `Cloudflare · rate limiting`).
- **Card 3 — CONTEXT:** filled accent-tinted background (`--panel-2`), mono kicker `CONTEXT`, then a one-line tie (e.g., `Window primitive. Strings → requests.`).

Cards: bordered `--line`, radius `--radius`, padding ~10–14px, stacked vertically with small gaps. The component is purely presentational — no state.

## 8. Behavior

- **Mobile nav disclosure:** `useState(open)` in `Nav.jsx`. Click toggles `.nav--open` class, which reveals the stacked link list. Closes on link click and on Escape.
- **Email signup:** controlled input + `useState(status: 'idle' | 'submitting' | 'success' | 'error')`. `onSubmit` stub validates non-empty email format, sets `submitting` for 400ms, then `success`. Logs payload to console. Provider wiring is deferred.
- **Anchor scrolling:** CSS `scroll-behavior: smooth` on `html`. Each section has an `id` matching its nav link.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables smooth-scroll and any transitions.

## 9. Accessibility

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Each section H2 has an `id` matching its anchor link target.
- `.grain` overlay: `aria-hidden="true"`.
- Mobile menu toggle: `aria-expanded`, `aria-controls`.
- Focus rings: visible accent outline on all interactive elements.
- Body text contrast on `--bg`: verify ≥ 4.5:1 during implementation.

## 10. Performance & Deploy

- Vite production build with hashed assets.
- Fonts self-hosted (no third-party FOIT).
- Single CSS file, no runtime CSS-in-JS.
- Static deploy: any of Cloudflare Pages, Vercel, or Netlify — output is `dist/`.
- Target Lighthouse score: ≥ 95 across Performance, Accessibility, Best Practices, SEO.

## 11. Meta / SEO

`index.html` head includes:
- `<title>` and `<meta name="description">` from README copy.
- `og:title`, `og:description`, `og:image` (placeholder image to be added later).
- `<meta name="theme-color" content="#0b0a08">`.
- Favicon SVG.

## 12. Verification Checklist

Manual checks before declaring complete:
- Desktop and mobile viewports render correctly.
- Keyboard tab order through nav and signup form is sensible.
- Anchor links scroll to the correct section.
- Mobile menu disclosure opens, closes, and traps focus reasonably.
- Signup stub logs the payload and shows a success state.
- Lighthouse run meets the ≥95 target.

## 13. Open Items (decide before launch, not before build)

- Email signup provider (Q5 deferred).
- Social link destinations for footer.
- og:image asset.
- Analytics (or not).
