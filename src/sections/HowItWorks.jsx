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
