import Reveal from '../components/Reveal.jsx';

export default function NonFeatures() {
  const items = [
    <span>No original essays or long reads —<span className="bullet-sub">Just the plan and the links. Open, do, done.</span></span>,
    <span>No paid tier or premium content —<span className="bullet-sub">Everyone gets the same issue.</span></span>,
    <span>No paywall on the daily email —<span className="bullet-sub">The daily plan stays free.</span></span>,
  ];

  return (
    <section className="section" id="non-features" aria-labelledby="nonfeatures-title">
      <Reveal>
      <div className="section__head">
        <span className="eyebrow">[05 · what this isn't]</span>
        <h2 className="section__title" id="nonfeatures-title">
          Left out on purpose.
        </h2>
      </div>
      <ul className="bullets">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      </Reveal>
    </section>
  );
}
