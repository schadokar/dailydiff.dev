import Reveal from '../components/Reveal.jsx';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Sign up — one email.',
      body: 'Enter your email. No account, no dashboard, no onboarding flow.',
    },
    {
      num: '02',
      title: 'Email lands at 7am IST, every day.',
      body: 'Same issue for everyone.',
    },
    {
      num: '03',
      title: 'Open. Do. Close.',
      body: 'Practice (2–3 problems). Revise (one fundamental). Expand (one article). Then go.',
    },
  ];

  return (
    <section className="section" id="how-it-works" aria-labelledby="how-title">
      <Reveal>
      <div className="section__head">
        <span className="eyebrow">[03 · how]</span>
        <h2 className="section__title" id="how-title">Three steps. No more.</h2>
        <span className="doodle" style={{ left: 0, bottom: '-14px', width: '220px', height: '18px' }} aria-hidden="true">
          <svg viewBox="0 0 220 18" width="220" height="18">
            <path d="M2 10 C 20 2, 38 18, 56 10 S 92 2, 110 10 S 146 18, 164 10 S 200 2, 218 10" />
          </svg>
        </span>
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
      </Reveal>
    </section>
  );
}
