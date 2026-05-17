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
          Left out on purpose.
        </h2>
      </div>
      <ul className="bullets">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  );
}
