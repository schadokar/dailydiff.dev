const ROADMAP = [
  { title: 'Browse past issues', sub: 'the full archive, readable on the web' },
  { title: 'Read in your browser', sub: 'a shareable link for every issue' },
  // { title: 'Topic deep-dives', sub: "occasional long-form on the day's concept" },
  { title: 'RSS feed', sub: 'subscribe without an email' },
];

export default function RoadmapCard() {
  return (
    <div
      className="roadmap-card"
      role="img"
      aria-label="Coming soon to DailyDiff — a web archive, browser reading, deep-dives, and an RSS feed"
    >
      <div className="roadmap-card__eyebrow">[ coming soon ]</div>
      <p className="roadmap-card__headline">The email is just the start.</p>

      <ul className="roadmap-card__list">
        {ROADMAP.map((item) => (
          <li key={item.title} className="roadmap-card__item">
            <span className="roadmap-card__arrow" aria-hidden="true">→</span>
            <span className="roadmap-card__text">
              <span className="roadmap-card__title">{item.title}</span>
              <span className="roadmap-card__sub">{item.sub}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="roadmap-card__footer">
        <span className="roadmap-card__rule" aria-hidden="true">──</span>
        <span className="roadmap-card__line">
          shipping <span className="roadmap-card__hand">soon</span>.
        </span>
      </div>
    </div>
  );
}
