export default function Insight() {
  return (
    <section className="section" id="insight" aria-labelledby="insight-title">
      <div className="section__head">
        <span className="eyebrow">[02 · insight]</span>
        <h2 className="section__title" id="insight-title">
          Removing choice is the product.
        </h2>
      </div>
      <p className="section__lede">
        Leetcode's daily problem works because it removes the question of what
        to do. But it's one random problem with no progression and no context.
      </p>
      <br />
      <p className="section__lede">
        DailyDiff applies the same mechanic to a structured, sequenced
        curriculum. Problems are ordered by topic and difficulty. Articles pair
        thematically. You open the email, do the work, close it.
        Even 3 of 7 days completed is meaningful progress.
      </p>

      <div className="retro-progress" aria-label="3 of 7 days completed">
        <div className="retro-progress__label">
          <span className="retro-progress__week">WEEK_01</span>
          <span className="retro-progress__count">3 / 7 days</span>
        </div>
        <div className="retro-progress__track">
          {[...Array(7)].map((_, i) => (
            <span key={i} className={`retro-progress__block${i < 3 ? ' retro-progress__block--on' : ''}`} />
          ))}
        </div>
        <div className="retro-progress__footer">
          <span className="retro-progress__pct">43%</span>
          <span className="retro-progress__msg">still ahead of zero.</span>
        </div>
      </div>
    </section>
  );
}
