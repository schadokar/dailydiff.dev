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
