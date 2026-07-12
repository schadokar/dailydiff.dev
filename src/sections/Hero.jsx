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
        The <span className="highlight">daily study plan</span> for engineers who{' '}
        <span className="ital">don't want to plan.</span>
      </h1>

      <p className="hero__thesis">
        <span className="thesis__label">[thesis]</span>
        You don't need more resources. You need fewer decisions.
      </p>

      <p className="hero__sub">
        Every morning, one email: problems to <span className="highlight hero__sub__cap">practice</span>,
        a fundamental to <span className="highlight hero__sub__cap">revise</span>, and an article to{' '}
        <span className="highlight hero__sub__cap">expand</span> your thinking. No streaks, no guilt —
        just open and do.
      </p>

      <div className="hero__ctas">
        <Button variant="solid" size="lg" href="#signup">Get tomorrow's email →</Button>
        <Button variant="ghost" size="lg" href="#how-it-works">See how it works</Button>
        <span className="doodle" style={{ left: '-56px', top: '10px', width: '58px', height: '58px' }} aria-hidden="true">
          <svg viewBox="0 0 60 60" width="58" height="58">
            <path d="M4 18 C 14 6, 24 30, 34 14 S 52 32, 56 22" />
            <polyline points="46,18 56,22 50,32" />
          </svg>
        </span>
      </div>
      </Reveal>
    </section>
  );
}
