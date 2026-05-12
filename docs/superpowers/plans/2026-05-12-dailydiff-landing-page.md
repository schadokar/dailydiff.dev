# DailyDiff Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page Vite + React 18 landing site for dailydiff.dev that matches the cavem dark design language and captures email signups with a stub handler.

**Architecture:** One SPA composed of 10 section components (`src/sections/`) wired together in `App.jsx`. All visual tokens live in a single global `src/styles.css` derived from the cavem CSS reference. No router, no state library — only two `useState` hooks (nav disclosure + signup form status).

**Tech Stack:** Vite 5, React 18 (plain JS), `@fontsource/inter`, `@fontsource/jetbrains-mono`, `@fontsource/newsreader`, single global CSS, static deploy to `dist/`.

---

## File Map

| File | Purpose |
|------|---------|
| `index.html` | Vite entry; `<html data-density="comfortable">`, meta/OG tags, favicon |
| `vite.config.js` | Vite config (root, build outDir) |
| `package.json` | deps: react, react-dom, @fontsource/* |
| `public/favicon.svg` | Ember glyph SVG (triangle + dot) |
| `src/main.jsx` | `ReactDOM.createRoot` mount |
| `src/App.jsx` | Compose all sections in order |
| `src/styles.css` | Global stylesheet — all tokens, all component classes |
| `src/sections/Nav.jsx` | Sticky header + mobile disclosure menu |
| `src/sections/Hero.jsx` | Tags + H1 + thesis + sub + CTAs + SampleIssueCard |
| `src/sections/Problem.jsx` | `[01 · problem]` kicker + lede + 3 bullets |
| `src/sections/Insight.jsx` | `[02 · insight]` kicker + 2 paragraphs |
| `src/sections/HowItWorks.jsx` | `[03 · how]` kicker + 3 numbered steps |
| `src/sections/Features.jsx` | `[04 · what you get]` kicker + 5 bullets |
| `src/sections/NonFeatures.jsx` | `[05 · what this isn't]` kicker + bullets |
| `src/sections/Positioning.jsx` | `[06 · where this sits]` kicker + 2 paragraphs |
| `src/sections/Signup.jsx` | Email form with stub submit handler |
| `src/sections/Footer.jsx` | Copyright + social icon links |
| `src/components/SampleIssueCard.jsx` | 3 stacked cards (DSA / READ / CONTEXT) |
| `src/components/Tag.jsx` | Tag pill variants |
| `src/components/Button.jsx` | Solid + ghost button variants |

---

## Task 1: Project scaffold

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `public/favicon.svg`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "dailydiff-landing",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@fontsource/inter": "^5.1.1",
    "@fontsource/jetbrains-mono": "^5.1.0",
    "@fontsource/newsreader": "^5.1.0"
  },
  "devDependencies": {
    "vite": "^5.4.0",
    "@vitejs/plugin-react": "^4.3.1"
  }
}
```

- [ ] **Step 2: Create `vite.config.js`**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' },
});
```

- [ ] **Step 3: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en" data-density="comfortable">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0b0a08" />
  <title>DailyDiff — The daily study plan for engineers</title>
  <meta name="description" content="A daily email that tells software engineers exactly what to study today. 2–3 DSA problems + curated engineering articles, Mon–Fri at 7am IST." />
  <meta property="og:title" content="DailyDiff — The daily study plan for engineers" />
  <meta property="og:description" content="A daily email that tells software engineers exactly what to study today. 2–3 DSA problems + curated engineering articles, Mon–Fri at 7am IST." />
  <meta property="og:image" content="/og-image.png" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

- [ ] **Step 4: Create `public/favicon.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path d="M4 26 L16 6 L28 26 Z" fill="none" stroke="#c8d96a" stroke-width="1.5"/>
  <circle cx="16" cy="20" r="2.2" fill="#c8d96a"/>
</svg>
```

- [ ] **Step 5: Create `src/main.jsx`**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/newsreader/400-italic.css';
import './styles.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 6: Install dependencies**

```bash
npm install
```

Expected: `node_modules/` created, no errors.

- [ ] **Step 7: Verify dev server starts**

```bash
npm run dev
```

Expected: Vite dev server running at `http://localhost:5173`. Open it — see a blank page (no App yet). Stop with Ctrl+C.

- [ ] **Step 8: Commit**

```bash
git add package.json vite.config.js index.html public/favicon.svg src/main.jsx
git commit -m "feat: scaffold Vite + React project"
```

---

## Task 2: Global stylesheet

**Files:**
- Create: `src/styles.css`

This is the most critical file. All design tokens and component classes live here, derived from the cavem reference (`cavem/Caveman — the token-efficient stack for agent-native builders_files/styles.css`). Tokens are adapted: same hue 73 (olive/lime) but using the spec's hex fallbacks for surfaces, and `@fontsource` fonts.

- [ ] **Step 1: Create `src/styles.css`**

```css
/* =====================================================================
   DAILYDIFF LANDING — global styles
   dark editorial developer aesthetic · olive/lime accent
   Derived from cavem design language (getcaveman.dev)
   ===================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

:root {
  /* Accent — olive/lime */
  --acc-h: 73;
  --acc-c: 0.15;
  --acc:     oklch(75% var(--acc-c) var(--acc-h));
  --acc-dim: oklch(55% calc(var(--acc-c) * 0.7) var(--acc-h));
  --acc-bg:  oklch(75% var(--acc-c) var(--acc-h) / 0.12);
  --acc-bg-2: oklch(75% var(--acc-c) var(--acc-h) / 0.22);

  /* Surfaces */
  --bg:      #0b0a08;
  --panel:   #141310;
  --panel-2: #1a1814;
  --line:    #2a2824;
  --line-2:  #3a3830;

  /* Text */
  --fg:      #e8e6dc;
  --fg-1:    #d0cec4;
  --fg-mute: #8a877c;
  --fg-dim:  #5a5850;

  /* Shape */
  --radius: 4px;

  /* Type */
  --font-sans:       'Inter', system-ui, sans-serif;
  --font-mono:       'JetBrains Mono', ui-monospace, monospace;
  --font-serif-ital: 'Newsreader', Georgia, serif;

  /* Layout */
  --pad:  clamp(20px, 4vw, 72px);
  --maxw: 1240px;

  color-scheme: dark;
}

*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }

html {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; animation: none !important; }
}

body {
  overflow-x: hidden;
  background:
    radial-gradient(1000px 500px at 75% -5%, oklch(75% var(--acc-c) var(--acc-h) / 0.08), transparent 60%),
    var(--bg);
}

a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; }
::selection { background: var(--acc-bg-2); color: var(--fg); }

/* ---- grain overlay ---- */
.grain {
  position: fixed; inset: 0;
  pointer-events: none; z-index: 100;
  opacity: 0.3;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.85  0 0 0 0 0.7  0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* ---- nav ---- */
.nav {
  position: sticky; top: 0; z-index: 50;
  padding: 14px var(--pad);
  background: color-mix(in oklab, var(--bg) 84%, transparent);
  backdrop-filter: saturate(130%) blur(10px);
  -webkit-backdrop-filter: saturate(130%) blur(10px);
  border-bottom: 1px solid color-mix(in oklab, var(--line) 60%, transparent);
}
.nav__inner {
  max-width: var(--maxw); margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
}
.brand {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-mono);
  font-size: 12px; letter-spacing: 0.06em;
  color: var(--fg);
}
.brand__mark { width: 22px; height: 22px; color: var(--acc); }
.brand__word { font-weight: 600; }
.brand__dot  { color: var(--fg-dim); }
.brand__sub  { color: var(--fg-mute); }

.nav__links {
  display: flex; gap: 26px;
  justify-self: center;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--fg-mute);
}
.nav__links a { transition: color .15s ease; }
.nav__links a:hover { color: var(--fg); }

.nav__cta { display: inline-flex; gap: 10px; align-items: center; }

.nav__toggle {
  display: none;
  flex-direction: column; justify-content: center; align-items: center;
  gap: 5px;
  width: 36px; height: 36px;
  background: none; border: 1px solid var(--line-2); border-radius: var(--radius);
  padding: 0;
  color: var(--fg);
}
.nav__toggle-bar {
  display: block; width: 16px; height: 1.5px;
  background: currentColor; border-radius: 1px;
  transition: transform .2s ease, opacity .2s ease;
}

.nav__drawer { display: none; }

@media (max-width: 900px) {
  .nav__links { display: none; }
  .nav__cta   { display: none; }
  .nav__inner { grid-template-columns: 1fr auto; }
  .nav__toggle { display: flex; }

  .nav--open .nav__drawer {
    display: flex; flex-direction: column; gap: 0;
    padding: 12px 0 16px;
    border-top: 1px solid var(--line);
    margin-top: 14px;
  }
  .nav__drawer a {
    display: block; padding: 12px 0;
    font-family: var(--font-mono); font-size: 14px;
    color: var(--fg-1);
    border-bottom: 1px solid color-mix(in oklab, var(--line) 50%, transparent);
  }
  .nav__drawer a:last-child { border-bottom: none; }
  .nav__drawer .btn { margin-top: 16px; width: 100%; justify-content: center; }
}

/* ---- buttons ---- */
.btn {
  --btn-py: 10px; --btn-px: 14px;
  display: inline-flex; align-items: center; gap: 8px;
  padding: var(--btn-py) var(--btn-px);
  border: 1px solid var(--line-2); border-radius: var(--radius);
  font-family: var(--font-mono); font-size: 12.5px; letter-spacing: 0.01em;
  color: var(--fg);
  background: var(--panel);
  white-space: nowrap;
  transition: border-color .15s ease, background .15s ease, color .15s ease;
}
.btn:hover { border-color: var(--fg-mute); background: var(--panel-2); }
.btn:focus-visible { outline: 2px solid var(--acc); outline-offset: 2px; }

.btn--solid {
  background: var(--fg); color: var(--bg);
  border-color: var(--fg); font-weight: 600;
}
.btn--solid:hover { background: var(--acc); border-color: var(--acc); color: #0b0a08; }

.btn--ghost { background: transparent; }
.btn--ghost:hover { background: var(--panel); }

.btn--lg { --btn-py: 14px; --btn-px: 18px; font-size: 13.5px; }

/* ---- tags ---- */
.tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
  padding: 5px 9px;
  border: 1px solid var(--line-2); border-radius: 999px;
  color: var(--fg-1);
  background: color-mix(in oklab, var(--panel) 50%, transparent);
}
.tag--soon  { color: var(--acc); border-color: var(--acc-dim); }
.tag--muted { color: var(--fg-mute); border-style: dashed; }

/* ---- hero ---- */
.hero {
  max-width: var(--maxw); margin: 0 auto;
  padding: clamp(48px, 10vw, 120px) var(--pad) clamp(40px, 6vw, 80px);
}
.hero__meta {
  display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
  margin-bottom: 32px;
}
.hero__title {
  font-family: var(--font-sans);
  font-size: clamp(36px, 6vw, 84px);
  font-weight: 500;
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin: 0 0 28px;
  max-width: 20ch;
  text-wrap: balance;
}
.ital {
  font-family: var(--font-serif-ital);
  font-style: italic;
  font-weight: 400;
  color: var(--acc);
  letter-spacing: -0.01em;
}
.hero__thesis {
  font-family: var(--font-mono);
  font-size: 13.5px; color: var(--fg-mute);
  margin: 0 0 20px;
}
.hero__thesis .thesis__label { color: var(--acc-dim); margin-right: 10px; }
.hero__sub {
  max-width: 58ch;
  font-size: clamp(16px, 1.5vw, 19px);
  color: var(--fg-1); line-height: 1.55;
  margin: 0 0 36px; text-wrap: pretty;
}
.hero__ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: clamp(56px, 7vw, 90px); }
.hero__visual { margin-top: 40px; }

/* ---- section scaffolding ---- */
.section {
  max-width: var(--maxw); margin: 0 auto;
  padding: clamp(56px, 8vw, 120px) var(--pad);
  border-top: 1px solid color-mix(in oklab, var(--line) 60%, transparent);
  position: relative;
}
.section__head { max-width: 720px; margin-bottom: 44px; }

.eyebrow {
  display: inline-block;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--acc);
  padding-bottom: 4px; margin-bottom: 16px;
  border-bottom: 1px solid var(--acc-dim);
}

.section__title {
  font-family: var(--font-sans);
  font-size: clamp(28px, 3.6vw, 48px);
  font-weight: 500; line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0 0 18px; text-wrap: balance;
}
.section__lede {
  font-size: clamp(15px, 1.3vw, 17px);
  color: var(--fg-1); max-width: 62ch;
  line-height: 1.6; text-wrap: pretty; margin: 0;
}

/* ---- bullets ---- */
.bullets {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 14px;
}
.bullets li {
  display: flex; gap: 10px; align-items: baseline;
  font-size: clamp(14.5px, 1.2vw, 16px); color: var(--fg-1);
  line-height: 1.5;
}
.bullets li::before {
  content: "→";
  color: var(--acc); font-family: var(--font-mono);
  font-size: 13px; flex-shrink: 0;
}

/* ---- numbered steps (How it works) ---- */
.steps {
  display: flex; flex-direction: column; gap: 24px;
  counter-reset: steps;
}
.step {
  display: grid; grid-template-columns: 40px 1fr;
  gap: 0 16px; align-items: start;
}
.step__num {
  font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.06em;
  color: var(--acc); padding-top: 3px;
}
.step__title {
  font-weight: 500; font-size: clamp(15px, 1.3vw, 17px);
  margin: 0 0 4px;
}
.step__body {
  font-size: clamp(14px, 1.2vw, 15.5px); color: var(--fg-mute);
  line-height: 1.5; margin: 0;
}

/* ---- signup block ---- */
.signup {
  max-width: var(--maxw); margin: 0 auto;
  padding: clamp(56px, 8vw, 120px) var(--pad);
  border-top: 1px solid color-mix(in oklab, var(--line) 60%, transparent);
}
.signup__block {
  border: 1px solid var(--acc-dim);
  border-radius: 8px;
  padding: clamp(32px, 5vw, 64px);
  background: color-mix(in oklab, var(--panel) 80%, transparent);
  max-width: 600px;
}
.signup__title {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 500; letter-spacing: -0.025em;
  margin: 0 0 8px;
}
.signup__sub {
  font-family: var(--font-mono); font-size: 13px; color: var(--fg-mute);
  margin: 0 0 28px;
}
.signup__form {
  display: flex; gap: 10px; flex-wrap: wrap;
}
.signup__input {
  flex: 1; min-width: 220px;
  padding: 12px 14px;
  background: var(--bg); border: 1px solid var(--line-2); border-radius: var(--radius);
  color: var(--fg); font-family: var(--font-sans); font-size: 14.5px;
  transition: border-color .15s ease;
}
.signup__input::placeholder { color: var(--fg-dim); }
.signup__input:focus { outline: none; border-color: var(--acc); }
.signup__microcopy {
  font-size: 12px; font-family: var(--font-mono); color: var(--fg-dim);
  margin: 12px 0 0;
}
.signup__success {
  font-family: var(--font-mono); font-size: 14px; color: var(--acc);
  padding: 14px 0;
}
.signup__error {
  font-family: var(--font-mono); font-size: 13px; color: #f87171;
  margin: 8px 0 0;
}

/* ---- sample issue cards ---- */
.sample-cards {
  display: flex; flex-direction: column; gap: 8px;
  max-width: 380px;
}
.sample-card {
  border: 1px solid var(--line); border-radius: var(--radius);
  padding: 10px 14px;
  background: var(--panel);
}
.sample-card--context { background: var(--panel-2); }
.sample-card__kicker {
  font-family: var(--font-mono); font-size: 9px;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--acc); margin-bottom: 4px;
}
.sample-card__body {
  font-size: 13.5px; color: var(--fg-1); line-height: 1.5;
}
.sample-card--context .sample-card__body { opacity: 0.85; }

/* ---- footer ---- */
.footer {
  max-width: var(--maxw); margin: 0 auto;
  padding: 28px var(--pad);
  border-top: 1px solid color-mix(in oklab, var(--line) 60%, transparent);
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.footer__copy {
  font-family: var(--font-mono); font-size: 12px; color: var(--fg-dim);
}
.footer__socials { display: flex; gap: 16px; align-items: center; }
.footer__social {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  border: 1px solid var(--line-2); border-radius: var(--radius);
  color: var(--fg-mute);
  transition: color .15s ease, border-color .15s ease;
}
.footer__social:hover { color: var(--fg); border-color: var(--fg-mute); }
.footer__social:focus-visible { outline: 2px solid var(--acc); outline-offset: 2px; }
```

- [ ] **Step 2: Verify CSS loads (after App.jsx exists — skip until Task 4)**

Verify after Task 4 step 2.

- [ ] **Step 3: Commit**

```bash
git add src/styles.css
git commit -m "feat: add global stylesheet with cavem design tokens"
```

---

## Task 3: Shared components

**Files:**
- Create: `src/components/Tag.jsx`
- Create: `src/components/Button.jsx`
- Create: `src/components/SampleIssueCard.jsx`

- [ ] **Step 1: Create `src/components/Tag.jsx`**

```jsx
export default function Tag({ children, variant = '' }) {
  return <span className={`tag${variant ? ` tag--${variant}` : ''}`}>{children}</span>;
}
```

- [ ] **Step 2: Create `src/components/Button.jsx`**

```jsx
export default function Button({ children, variant = 'ghost', size = '', href, onClick, type = 'button', disabled = false }) {
  const cls = `btn${variant ? ` btn--${variant}` : ''}${size ? ` btn--${size}` : ''}`;
  if (href) return <a className={cls} href={href}>{children}</a>;
  return <button className={cls} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
}
```

- [ ] **Step 3: Create `src/components/SampleIssueCard.jsx`**

```jsx
export default function SampleIssueCard() {
  return (
    <div className="sample-cards" aria-label="Sample daily issue">
      <div className="sample-card">
        <div className="sample-card__kicker">DSA · 2 Problems</div>
        <div className="sample-card__body">Sliding window — LC 3, LC 76</div>
      </div>
      <div className="sample-card">
        <div className="sample-card__kicker">Read · 1 Article</div>
        <div className="sample-card__body">Cloudflare · rate limiting</div>
      </div>
      <div className="sample-card sample-card--context">
        <div className="sample-card__kicker">Context</div>
        <div className="sample-card__body">Window primitive. Strings → requests.</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/
git commit -m "feat: add Tag, Button, SampleIssueCard components"
```

---

## Task 4: App shell + Nav

**Files:**
- Create: `src/App.jsx`
- Create: `src/sections/Nav.jsx`

- [ ] **Step 1: Create `src/sections/Nav.jsx`**

```jsx
import { useState, useEffect, useCallback } from 'react';
import Button from '../components/Button.jsx';

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What you get', href: '#features' },
  { label: 'Why this',     href: '#positioning' },
  { label: 'Sign up',      href: '#signup' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, close]);

  return (
    <header className={`nav${open ? ' nav--open' : ''}`}>
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label="DailyDiff home">
          <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M4 26 L16 6 L28 26 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16" cy="20" r="2.2" fill="currentColor" />
          </svg>
          <span className="brand__word">DAILYDIFF</span>
          <span className="brand__dot">·</span>
          <span className="brand__sub">STUDY OS</span>
        </a>

        <nav className="nav__links" id="primary-nav" aria-label="Primary">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav__cta">
          <Button variant="solid" href="#signup">Get the daily plan →</Button>
        </div>

        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(o => !o)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>

      <div className="nav__drawer" id="mobile-nav" aria-hidden={!open}>
        {links.map(l => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        <Button variant="solid" href="#signup">Get the daily plan →</Button>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create `src/App.jsx` (stub — adds sections progressively)**

```jsx
import Nav from './sections/Nav.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        {/* sections added in subsequent tasks */}
      </main>
    </>
  );
}
```

- [ ] **Step 3: Start dev server and verify nav renders**

```bash
npm run dev
```

Open `http://localhost:5173`. Expected: dark background with grain, sticky nav with brand + links (desktop) or hamburger (mobile at ≤900px). Toggle opens drawer. Escape closes it.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx src/sections/Nav.jsx
git commit -m "feat: add App shell and Nav with mobile disclosure"
```

---

## Task 5: Hero section

**Files:**
- Create: `src/sections/Hero.jsx`

- [ ] **Step 1: Create `src/sections/Hero.jsx`**

```jsx
import Tag from '../components/Tag.jsx';
import Button from '../components/Button.jsx';
import SampleIssueCard from '../components/SampleIssueCard.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__meta">
        <Tag variant="soon">pre-launch</Tag>
        <Tag variant="muted">Mon–Fri · 7am IST</Tag>
      </div>

      <h1 className="hero__title" id="hero-title">
        The daily study plan for engineers who{' '}
        <span className="ital">don't want to plan.</span>
      </h1>

      <p className="hero__thesis">
        <span className="thesis__label">[thesis]</span>
        decision fatigue kills more prep than hard problems.
      </p>

      <p className="hero__sub">
        DailyDiff is a daily email that tells you exactly what to study today.
        2–3 DSA problems, 2–3 curated engineering articles, and one sentence of
        context on why they fit — delivered Mon–Fri at 7am IST.
      </p>

      <div className="hero__ctas">
        <Button variant="solid" size="lg" href="#signup">Get tomorrow's email →</Button>
        <Button variant="ghost" size="lg" href="#how-it-works">See how it works</Button>
      </div>

      <div className="hero__visual">
        <SampleIssueCard />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Hero to `src/App.jsx`**

```jsx
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check: tag pills render, H1 has italic serif accent word in accent color, thesis line in mono, CTAs side by side, card stack below. On mobile, layout stacks correctly.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Hero.jsx src/App.jsx
git commit -m "feat: add Hero section with SampleIssueCard"
```

---

## Task 6: Problem + Insight sections

**Files:**
- Create: `src/sections/Problem.jsx`
- Create: `src/sections/Insight.jsx`

- [ ] **Step 1: Create `src/sections/Problem.jsx`**

```jsx
export default function Problem() {
  return (
    <section className="section" id="problem" aria-labelledby="problem-title">
      <div className="section__head">
        <span className="eyebrow">[01 · problem]</span>
        <h2 className="section__title" id="problem-title">
          Engineers relearn everything from scratch. Every time.
        </h2>
        <p className="section__lede">
          Most engineers only start interview prep when switching jobs — then
          spend weeks rediscovering the same ground. The resources exist.
          The real problem is decision fatigue at the start of each session.
        </p>
      </div>
      <ul className="bullets">
        <li>Open Leetcode, pick something too easy, feel productive, close it.</li>
        <li>Spend 30 minutes planning what to study instead of actually studying.</li>
        <li>Skip the session entirely because the choice feels overwhelming.</li>
      </ul>
    </section>
  );
}
```

- [ ] **Step 2: Create `src/sections/Insight.jsx`**

```jsx
export default function Insight() {
  return (
    <section className="section" id="insight" aria-labelledby="insight-title">
      <div className="section__head">
        <span className="eyebrow">[02 · insight]</span>
        <h2 className="section__title" id="insight-title">
          Removing choice is the product.
        </h2>
      </div>
      <p className="section__lede">
        Leetcode's daily problem works because it removes the question of what
        to do. But it's one random problem with no progression and no context.
      </p>
      <br />
      <p className="section__lede">
        DailyDiff applies the same mechanic to a structured, sequenced
        curriculum. Problems are ordered by topic and difficulty. Articles pair
        thematically. You open the email, do the work, close it.
        Even 3 of 7 days completed is meaningful progress.
      </p>
    </section>
  );
}
```

- [ ] **Step 3: Add both to `src/App.jsx`**

```jsx
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Insight from './sections/Insight.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Insight />
      </main>
    </>
  );
}
```

- [ ] **Step 4: Verify section borders and eyebrow labels render in accent color**

- [ ] **Step 5: Commit**

```bash
git add src/sections/Problem.jsx src/sections/Insight.jsx src/App.jsx
git commit -m "feat: add Problem and Insight sections"
```

---

## Task 7: HowItWorks + Features + NonFeatures sections

**Files:**
- Create: `src/sections/HowItWorks.jsx`
- Create: `src/sections/Features.jsx`
- Create: `src/sections/NonFeatures.jsx`

- [ ] **Step 1: Create `src/sections/HowItWorks.jsx`**

```jsx
export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Sign up — one email.',
      body: 'Enter your email. No account, no dashboard, no onboarding flow.',
    },
    {
      num: '02',
      title: 'Email lands at 7am IST, Mon–Fri.',
      body: 'Same issue for everyone in V1. No per-user state, no personalisation tax.',
    },
    {
      num: '03',
      title: 'Open. Do. Close.',
      body: 'Two or three problems, two or three articles, one context line. Then go.',
    },
  ];

  return (
    <section className="section" id="how-it-works" aria-labelledby="how-title">
      <div className="section__head">
        <span className="eyebrow">[03 · how]</span>
        <h2 className="section__title" id="how-title">Three steps. No more.</h2>
      </div>
      <div className="steps">
        {steps.map(s => (
          <div className="step" key={s.num}>
            <span className="step__num">{s.num}</span>
            <div>
              <p className="step__title">{s.title}</p>
              <p className="step__body">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `src/sections/Features.jsx`**

```jsx
export default function Features() {
  const items = [
    'Daily issue, Mon–Fri, delivered ~7am IST.',
    'DSA section — 2–3 Leetcode/GFG links, sequenced by topic and ramped difficulty.',
    'READ section — 2–3 curated engineering articles (Cloudflare, Netflix, Stripe, etc.) paired with the day\'s topic.',
    'CONTEXT line — 1–2 sentences linking the problems and the article conceptually.',
    'No streaks, no guilt — missed days are never penalised. No "you missed 4 days!" emails.',
  ];

  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="section__head">
        <span className="eyebrow">[04 · what you get]</span>
        <h2 className="section__title" id="features-title">
          Five things in your inbox. Nothing else.
        </h2>
      </div>
      <ul className="bullets">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Create `src/sections/NonFeatures.jsx`**

```jsx
export default function NonFeatures() {
  const items = [
    'No original long-form content — links only, beyond the context line.',
    'No hosted or reproduced problem statements.',
    'No per-user progress tracking in V1.',
    'No paid tier, courses, or premium content.',
    'No second daily email for sponsors.',
    'No paywall on the daily issue.',
  ];

  return (
    <section className="section" id="non-features" aria-labelledby="nonfeatures-title">
      <div className="section__head">
        <span className="eyebrow">[05 · what this isn't]</span>
        <h2 className="section__title" id="nonfeatures-title">
          Deliberately not those things.
        </h2>
      </div>
      <ul className="bullets">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  );
}
```

- [ ] **Step 4: Add all three to `src/App.jsx`**

```jsx
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Insight from './sections/Insight.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Features from './sections/Features.jsx';
import NonFeatures from './sections/NonFeatures.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Insight />
        <HowItWorks />
        <Features />
        <NonFeatures />
      </main>
    </>
  );
}
```

- [ ] **Step 5: Verify three sections render with numbered steps and bullet lists**

- [ ] **Step 6: Commit**

```bash
git add src/sections/HowItWorks.jsx src/sections/Features.jsx src/sections/NonFeatures.jsx src/App.jsx
git commit -m "feat: add HowItWorks, Features, NonFeatures sections"
```

---

## Task 8: Positioning section

**Files:**
- Create: `src/sections/Positioning.jsx`

- [ ] **Step 1: Create `src/sections/Positioning.jsx`**

```jsx
export default function Positioning() {
  return (
    <section className="section" id="positioning" aria-labelledby="positioning-title">
      <div className="section__head">
        <span className="eyebrow">[06 · where this sits]</span>
        <h2 className="section__title" id="positioning-title">
          Between the daily problem and the roadmap.
        </h2>
      </div>
      <p className="section__lede">
        DailyDiff sits between Leetcode's daily problem (random, no progression)
        and NeetCode-style roadmaps (static, no daily cadence). It is the daily
        plan that neither provides.
      </p>
      <br />
      <p className="section__lede">
        It does not compete with Pragmatic Engineer or ByteByteGo — those are
        content products. DailyDiff is a scheduling product. The value is the
        opinionated daily plan; email is just the delivery mechanism.
      </p>
    </section>
  );
}
```

- [ ] **Step 2: Add to `src/App.jsx`**

```jsx
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Insight from './sections/Insight.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Features from './sections/Features.jsx';
import NonFeatures from './sections/NonFeatures.jsx';
import Positioning from './sections/Positioning.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Insight />
        <HowItWorks />
        <Features />
        <NonFeatures />
        <Positioning />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/sections/Positioning.jsx src/App.jsx
git commit -m "feat: add Positioning section"
```

---

## Task 9: Signup section

**Files:**
- Create: `src/sections/Signup.jsx`

The form uses `useState` for a controlled input and a status state machine: `'idle' | 'submitting' | 'success' | 'error'`. The `onSubmit` handler is a stub: validates non-empty email format, sets `submitting` for 400ms, then `success`. Logs payload to console.

- [ ] **Step 1: Create `src/sections/Signup.jsx`**

```jsx
import { useState } from 'react';
import Button from '../components/Button.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      console.log('[DailyDiff] signup payload:', { email });
      setStatus('success');
    }, 400);
  }

  return (
    <section className="signup" id="signup" aria-labelledby="signup-title">
      <div className="signup__block">
        <h2 className="signup__title" id="signup-title">Get tomorrow's plan.</h2>
        <p className="signup__sub">One email. Mon–Fri. 7am IST.</p>

        {status === 'success' ? (
          <p className="signup__success">
            ✓ You're on the list. First email lands tomorrow morning.
          </p>
        ) : (
          <form className="signup__form" onSubmit={handleSubmit} noValidate>
            <input
              className="signup__input"
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
              placeholder="your@email.com"
              aria-label="Email address"
              required
              disabled={status === 'submitting'}
            />
            <Button variant="solid" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Sign up →'}
            </Button>
            {status === 'error' && (
              <p className="signup__error" role="alert">Enter a valid email address.</p>
            )}
          </form>
        )}

        <p className="signup__microcopy">Unsubscribe anytime. No spam. No streaks.</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to `src/App.jsx`**

```jsx
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Insight from './sections/Insight.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Features from './sections/Features.jsx';
import NonFeatures from './sections/NonFeatures.jsx';
import Positioning from './sections/Positioning.jsx';
import Signup from './sections/Signup.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Insight />
        <HowItWorks />
        <Features />
        <NonFeatures />
        <Positioning />
        <Signup />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Test signup form in browser**

1. Submit empty → error message appears.
2. Submit invalid email (no `@`) → error message.
3. Submit valid email → button says "Sending…" for ~400ms, then success message. Check browser console for `[DailyDiff] signup payload: { email: "..." }`.

- [ ] **Step 4: Commit**

```bash
git add src/sections/Signup.jsx src/App.jsx
git commit -m "feat: add Signup section with stub submit handler"
```

---

## Task 10: Footer section

**Files:**
- Create: `src/sections/Footer.jsx`

- [ ] **Step 1: Create `src/sections/Footer.jsx`**

Social icon SVGs: X (Twitter bird), Threads, Instagram — minimal single-path marks.

```jsx
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ThreadsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.024-3.609 1.241-6.42 3.618-8.368C7.348 1.698 10.352.952 12.953.997l.18.003c2.297.04 4.527.597 6.249 1.56 1.77.99 2.9 2.35 3.254 3.93.38 1.68.04 3.316-1.015 4.736-.98 1.316-2.465 2.224-4.22 2.67a9.89 9.89 0 0 1-1.53.26c.17.63.262 1.286.27 1.95.023 2.178-.728 4.005-2.18 5.283-1.303 1.143-3.04 1.742-4.775 1.611zm.036-21c-2.23-.038-4.708.595-6.4 1.968C3.94 6.478 3.024 8.85 3.004 12c.002 3.118.73 5.548 2.164 7.22C6.585 20.89 8.863 21.98 12.186 22c1.331.103 2.635-.345 3.635-1.22 1.07-.94 1.624-2.325 1.605-4.005a8.005 8.005 0 0 0-.327-2.175 9.9 9.9 0 0 1-1.854.018c-2.48-.214-4.346-1.474-4.877-3.285-.288-1-.09-2.02.554-2.833.737-.93 1.944-1.476 3.41-1.535a9.68 9.68 0 0 1 2.093.154c-.368-.572-.933-1.02-1.68-1.33C13.97 5.42 13.1 5.19 12.222 5h-.001zm1.924 9.018a8.148 8.148 0 0 0-1.593-.13c-.974.038-1.71.348-2.096.84-.263.33-.325.73-.184 1.214.32 1.11 1.635 1.94 3.377 2.09.422.035.849.035 1.273.002a7.795 7.795 0 0 0-.777-4.016z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">© dailydiff.dev · 2026</p>
      <div className="footer__socials">
        <a className="footer__social" href="#" aria-label="DailyDiff on X (Twitter)">
          <XIcon />
        </a>
        <a className="footer__social" href="#" aria-label="DailyDiff on Threads">
          <ThreadsIcon />
        </a>
        <a className="footer__social" href="#" aria-label="DailyDiff on Instagram">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to `src/App.jsx` (final version)**

```jsx
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Insight from './sections/Insight.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Features from './sections/Features.jsx';
import NonFeatures from './sections/NonFeatures.jsx';
import Positioning from './sections/Positioning.jsx';
import Signup from './sections/Signup.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Insight />
        <HowItWorks />
        <Features />
        <NonFeatures />
        <Positioning />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/sections/Footer.jsx src/App.jsx
git commit -m "feat: add Footer with social icon links"
```

---

## Task 11: Full verification pass

**Files:** No new files. This task verifies everything against the spec checklist.

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Desktop verification (≥1024px viewport)**

Check each item:
- [ ] Sticky nav is visible with brand + links + CTA button
- [ ] All 10 sections render in order: Hero, Problem, Insight, HowItWorks, Features, NonFeatures, Positioning, Signup, Footer
- [ ] Anchor links from nav scroll smoothly to correct sections
- [ ] Signup form: invalid email shows error, valid email shows success + console log
- [ ] SampleIssueCard shows 3 stacked cards with DSA / READ / CONTEXT labels
- [ ] Grain overlay visible
- [ ] Accent color (olive/lime) appears on: eyebrows, italic hero span, bullet arrows, tag--soon, signup border

- [ ] **Step 3: Mobile verification (≤480px viewport)**

- [ ] Nav shows only brand + hamburger button
- [ ] Hamburger click opens drawer with links + CTA
- [ ] Escape key closes drawer
- [ ] Clicking a link in drawer closes it and scrolls to section
- [ ] Signup form stacks vertically (input above button)
- [ ] Footer stacks vertically

- [ ] **Step 4: Keyboard accessibility check**

Tab through the page: nav links, CTA, hero CTAs, signup form, footer links — all must have visible focus rings.

- [ ] **Step 5: Reduced-motion check**

In browser DevTools → Rendering → Emulate CSS prefers-reduced-motion → check smooth-scroll is disabled.

- [ ] **Step 6: Production build**

```bash
npm run build
```

Expected: `dist/` created, no build errors.

```bash
npm run preview
```

Open `http://localhost:4173`. Verify everything works in built mode.

- [ ] **Step 7: Final commit**

```bash
git add -A
git commit -m "chore: production build verified"
```

---

## Spec coverage checklist

| Spec section | Covered by task |
|---|---|
| §2 one-page SPA | Tasks 1–10 |
| §2 mobile-responsive nav disclosure | Task 4 Nav.jsx |
| §2 email signup stub handler | Task 9 |
| §3 Vite + React 18 plain JS | Task 1 |
| §3 single global stylesheet | Task 2 |
| §3 @fontsource fonts | Task 1 main.jsx |
| §4 file layout | All tasks |
| §5 design tokens | Task 2 styles.css |
| §5 grain overlay | Task 2 styles.css + Task 4 App.jsx |
| §5 tag pills | Task 3 Tag.jsx + Task 2 CSS |
| §5 bracketed mono labels (eyebrows) | Task 2 CSS + section tasks |
| §5 italic serif accent | Task 2 CSS + Task 5 Hero.jsx |
| §5 two button variants | Task 3 Button.jsx + Task 2 CSS |
| §6.1 Nav | Task 4 |
| §6.2 Hero | Task 5 |
| §6.3 Problem | Task 6 |
| §6.4 Insight | Task 6 |
| §6.5 HowItWorks | Task 7 |
| §6.6 Features | Task 7 |
| §6.7 NonFeatures | Task 7 |
| §6.8 Positioning | Task 8 |
| §6.9 Signup | Task 9 |
| §6.10 Footer | Task 10 |
| §7 SampleIssueCard 3-card stack | Task 3 |
| §8 nav disclosure useState | Task 4 Nav.jsx |
| §8 email form state machine | Task 9 Signup.jsx |
| §8 anchor scroll CSS | Task 2 styles.css |
| §8 prefers-reduced-motion | Task 2 styles.css |
| §9 semantic landmarks | Tasks 4–10 (header/nav/main/section/footer) |
| §9 aria-labelledby on sections | Tasks 5–10 |
| §9 grain aria-hidden | Task 4 App.jsx |
| §9 mobile toggle aria-expanded | Task 4 Nav.jsx |
| §9 focus rings | Task 2 styles.css |
| §10 Vite production build | Task 11 |
| §11 meta/OG tags | Task 1 index.html |
| §11 favicon SVG | Task 1 public/favicon.svg |
| §12 verification checklist | Task 11 |
