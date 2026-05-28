const PROBLEMS = [
  { title: 'Longest Substring Without Repeating', diff: 'med' },
  { title: 'Minimum Window Substring', diff: 'hard' },
];

const FUNDAMENTAL = { title: 'CAP Theorem', from: 'Martin Kleppmann · DDIA' };

const ARTICLES = [
  { title: 'How we rate limit the edge', from: 'Cloudflare Engineering' },
];

export default function TodayPlan() {
  return (
    <div
      className="today-plan"
      role="img"
      aria-label="Today's session — pre-decided, no choices required"
    >
      <div className="today-plan__eyebrow">[today · sliding window]</div>
      <div className="today-plan__cap">your session is ready.</div>

      <div className="today-plan__groups">
        <div className="today-plan__group">
          <div className="today-plan__group-label">solve</div>
          <ul className="today-plan__list">
            {PROBLEMS.map((p) => (
              <li key={p.title} className="today-plan__item">
                <span className="today-plan__arrow" aria-hidden="true">→</span>
                <span className="today-plan__text">{p.title}</span>
                <span className={`today-plan__badge today-plan__badge--${p.diff}`}>{p.diff}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="today-plan__group today-plan__group--revise">
          <div className="today-plan__group-label">revise</div>
          <ul className="today-plan__list">
            <li className="today-plan__item">
              <span className="today-plan__arrow" aria-hidden="true">→</span>
              <span className="today-plan__text">
                {FUNDAMENTAL.title}
                <span className="today-plan__from">{FUNDAMENTAL.from}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="today-plan__group">
          <div className="today-plan__group-label">expand</div>
          <ul className="today-plan__list">
            {ARTICLES.map((a) => (
              <li key={a.title} className="today-plan__item">
                <span className="today-plan__arrow" aria-hidden="true">→</span>
                <span className="today-plan__text">
                  {a.title}
                  <span className="today-plan__from">{a.from}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="today-plan__footer">
        <span className="today-plan__footer-label">time spent deciding</span>
        <span className="today-plan__zero">0m</span>
      </div>
    </div>
  );
}
