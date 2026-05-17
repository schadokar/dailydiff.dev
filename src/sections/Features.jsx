export default function Features() {
  const items = [
    'Daily issue, every day, delivered ~7am IST.',
    'DSA section — 2–3 Leetcode/GFG links, sequenced by topic and ramped difficulty.',
    'READ section — 2–3 curated engineering articles (Cloudflare, Netflix, Stripe, etc.), all anchored to one foundational concept.',
    'CONTEXT line — 1–2 sentences naming the day\'s concept and how the problems and articles map onto it.',
    'No streaks, no guilt — missed days are never penalised. No "you missed 4 days!" emails.',
  ];

  const topics = [
    'CAP theorem',
    'ACID',
    'SOLID principles',
    'Design patterns',
    'SQL vs NoSQL',
    'Consistency models',
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
      <div className="topics">
        <span className="topics__label">[ read topics rotate through the fundamentals ]</span>
        <ul className="topics__list">
          {topics.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
      </div>
    </section>
  );
}
