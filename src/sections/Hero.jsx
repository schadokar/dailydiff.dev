import Tag from '../components/Tag.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Reveal>
      <div className="hero__meta">
        <Tag variant="soon">pre-launch</Tag>
        <Tag variant="muted">Daily · 7am IST</Tag>
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
        Every morning, one email: problems to <em className="ital">practice</em>,
        a fundamental to <em className="ital">revise</em>, and an article to{' '}
        <em className="ital">expand</em> your thinking. No streaks, no guilt —
        just open and do.
      </p>

      <div className="hero__ctas">
        <Button variant="solid" size="lg" href="#signup">Get tomorrow's email →</Button>
        <Button variant="ghost" size="lg" href="#how-it-works">See how it works</Button>
      </div>
      </Reveal>
    </section>
  );
}
