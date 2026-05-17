# dailydiff.dev

> **Status:** WIP — pre-launch landing page.

An opinionated daily plan that removes the decision cost of figuring out what to study today.

This repo holds **only the landing page** for [dailydiff.dev](https://dailydiff.dev). Content pipeline, scheduler, database, and email-send code live elsewhere.

---

## What is DailyDiff?

A daily email that tells software engineers exactly what to study today:

- **2–3 DSA problems** sequenced by topic and progressive difficulty
- **2-3 curated engineering article** paired thematically with the day's problems
- **1–2 sentences of context** on why the pair fits and what pattern to notice

Not a content newsletter. A **delivery mechanism for a structured curriculum**. The product is the opinionated daily plan; email is the wrapper.

---

## The Problem

Engineers usually start interview prep only when switching jobs — and relearn everything from scratch each time.

Lack of resources is not the issue. Leetcode, NeetCode, engineering blogs are everywhere. The real issue is **decision fatigue at the start of each session**. Faced with 150 problems and 50 blogs, people:

- pick something too easy,
- spend 30 minutes planning instead of doing, or
- skip the session entirely.

## The Insight

Leetcode's daily problem works because it removes choice. But it is one random problem with no progression.

DailyDiff applies the same mechanic to a **structured, sequenced curriculum**: problems sequenced by topic and difficulty, articles paired thematically, reader just opens and does. Even **3 of 7 days completed = meaningful progress**.

---

## What DailyDiff Solves

| Pain | DailyDiff's answer |
|------|--------------------|
| "What should I do today?" | The daily email tells you. No choice. |
| "Random Leetcode daily has no progression." | Curriculum-sequenced, not random. |
| "Roadmaps show the map but not Tuesday's task." | Daily cadence fills that gap. |
| "Missed a day → guilt → unsubscribe." | No streaks, no shame. Plan keeps moving. |
| "Content newsletters take 30 min to read." | Link-only. 1–2 sentence context. Then go do. |

---

## Features

- **Daily issue, every day**, delivered ~7am IST.
- **DSA section** — 2–3 Leetcode/GFG links, sequenced by topic week and ramped difficulty.
- **READ section** — 2-3 curated engineering blog article (Cloudflare, Netflix, Stripe, etc.) paired with the day's DSA topic.
- **CONTEXT line** — 1–2 sentences linking the problems and the article conceptually.
- **No streaks, no guilt** — missed days are not penalized. No "you missed 4 days!" emails.
- **Link-only** — no original writing beyond the context line. Redirects to Leetcode and original blog.
- **Same issue for everyone (V1)** — no per-user state. Everyone gets the same plan today.

## Non-Features (by design)

- No original long-form content.
- No hosted/reproduced problem statements.
- No per-user progress tracking (V1).
- No paid tier, courses, or premium content.
- No second daily email for sponsors.
- No paywall on the daily issue.

---

## Positioning

DailyDiff sits between **Leetcode's daily problem** (random, no progression) and **NeetCode-style roadmaps** (static, no daily cadence). It is the daily plan that neither provides.

Competes on a different axis than Pragmatic Engineer / ByteByteGo — those are **content products**. DailyDiff is a **scheduling product**.

---

## This Repo

Landing page only. Files of interest:

- [index.html](index.html) — landing page markup
- [app.jsx](app.jsx) — main app
- [background.jsx](background.jsx) — background visual
- [tweaks-panel.jsx](tweaks-panel.jsx) — design tweaks panel
- [styles.css](styles.css) — styles
- [plan.docx](plan.docx) — full product plan (source of truth for product decisions)

For any change to copy, claims, or positioning on the landing page, [plan.docx](plan.docx) is the canonical reference.
