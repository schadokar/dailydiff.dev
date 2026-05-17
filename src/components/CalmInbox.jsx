const NEVER = [
  '"You missed 4 days!"',
  '"Your streak ended."',
  'Upgrade to Pro — 40% off today',
  'Sponsored: a second daily digest',
];

export default function CalmInbox() {
  return (
    <div
      className="calm-inbox"
      role="img"
      aria-label="Your inbox with DailyDiff — one email, and the nags that never arrive"
    >
      <div className="calm-inbox__eyebrow">[your inbox · still quiet]</div>

      <div className="calm-inbox__real">
        <div className="calm-inbox__from">
          <span className="calm-inbox__name">DailyDiff</span>
          <span className="calm-inbox__time">7:00 AM</span>
        </div>
        <div className="calm-inbox__subject">
          Issue #042 — Sliding window day
        </div>
      </div>

      <div className="calm-inbox__divider">never arrives</div>

      <ul className="calm-inbox__never">
        {NEVER.map((n) => (
          <li key={n} className="calm-inbox__ghost">
            <span className="calm-inbox__strike" aria-hidden="true" />
            <span className="calm-inbox__ghost-text">{n}</span>
          </li>
        ))}
      </ul>

      <div className="calm-inbox__footer">
        <span className="calm-inbox__rule" aria-hidden="true">──</span>
        <span className="calm-inbox__line">
          one email. <span className="calm-inbox__hand">nothing else.</span>
        </span>
      </div>
    </div>
  );
}
