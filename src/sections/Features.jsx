import Reveal from '../components/Reveal.jsx';

export default function Features() {
  const items = [
    'Daily issue, delivered ~7am IST.',
    'DSA section — 2–3 Leetcode/GFG links, sequenced by topic and ramped difficulty. Practice.',
    'FUNDAMENTALS section — 1 curated link revisiting a core SE concept (CAP, consistent hashing, distributed cache, etc.), cycling a small pool so ideas resurface naturally. Revise.',
    'READ section — 1 curated engineering article (Cloudflare, Netflix, Stripe, etc.) that expands on the day\'s theme. Expand.',
    // 'CONTEXT line — 1–2 sentences on how the day\'s problems, fundamental, and article connect to one idea.',
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
      <Reveal>
      <div className="section__head">
        <span className="eyebrow">[04 · what you get]</span>
        <h2 className="section__title" id="features-title">
         Three sections in your inbox. Nothing else.
        </h2>
      </div>
      <ul className="bullets">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="topics">
        <span className="topics__label">[ fundamentals section cycles through these topics ]</span>
        <ul className="topics__list">
          {topics.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
      </div>
      </Reveal>
    </section>
  );
}
