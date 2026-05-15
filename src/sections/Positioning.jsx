export default function Positioning() {
  return (
    <section className="section" id="positioning" aria-labelledby="positioning-title">
      <div className="section__head">
        <span className="eyebrow">[06 · where this sits]</span>
        <h2 className="section__title" id="positioning-title">
          Between the daily problem and the roadmap.
        </h2>
      </div>
      <p className="section__lede">
        DailyDiff sits between Leetcode's daily problem (random, no progression)
        and NeetCode-style roadmaps (static, no daily cadence). It is the daily
        plan that neither provides.
      </p>
      <p className="section__lede">
        It does not compete with Pragmatic Engineer or ByteByteGo — those are
        content products. DailyDiff is a scheduling product. The value is the
        opinionated daily plan; email is just the delivery mechanism.
      </p>
    </section>
  );
}
