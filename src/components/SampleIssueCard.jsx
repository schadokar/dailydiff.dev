export default function SampleIssueCard() {
  return (
    <div className="sample-cards" aria-label="Sample daily issue">
      <div className="sample-card">
        <div className="sample-card__kicker">DSA · 2 Problems</div>
        <div className="sample-card__body">Sliding window — LC 3, LC 76</div>
      </div>
      <div className="sample-card">
        <div className="sample-card__kicker">Read · 1 Article</div>
        <div className="sample-card__body">Cloudflare · rate limiting</div>
      </div>
      <div className="sample-card sample-card--context">
        <div className="sample-card__kicker">Context</div>
        <div className="sample-card__body">Window primitive. Strings → requests.</div>
      </div>
    </div>
  );
}
