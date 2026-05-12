export default function Problem() {
  return (
    <section className="section" id="problem" aria-labelledby="problem-title">
      <div className="section__head">
        <span className="eyebrow">[01 · problem]</span>
        <h2 className="section__title" id="problem-title">
          Engineers relearn everything from scratch. Every time.
        </h2>
        <p className="section__lede">
          Most engineers only start interview prep when switching jobs — then
          spend weeks rediscovering the same ground. The resources exist.
          The real problem is decision fatigue at the start of each session.
        </p>
      </div>
      <ul className="bullets">
        <li>Open Leetcode, pick something too easy, feel productive, close it.</li>
        <li>Spend 30 minutes planning what to study instead of actually studying.</li>
        <li>Skip the session entirely because the choice feels overwhelming.</li>
      </ul>
    </section>
  );
}
