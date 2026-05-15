export default function SampleIssueCard() {
  return (
    <div
      className="email-preview"
      role="img"
      aria-label="Sample DailyDiff email in inbox"
    >
      <div className="email-preview__chrome">
        <span className="email-preview__dot" data-c="r" />
        <span className="email-preview__dot" data-c="y" />
        <span className="email-preview__dot" data-c="g" />
        <span className="email-preview__addr">inbox · you@dev.io</span>
      </div>

      <div className="email-preview__header">
        <div className="email-preview__row">
          <span className="email-preview__from">DailyDiff</span>
          <span className="email-preview__date">Tue, 6:00 AM</span>
        </div>
        <div className="email-preview__subject">
          Issue #042 — Sliding window day
        </div>
        <div className="email-preview__meta">to me · dailydiff.dev</div>
      </div>

      <div className="email-preview__body">
        <div className="email-block">
          <div className="email-block__kicker">DSA · 2 Problems</div>
          <ol className="email-block__list">
            <li>
              <span className="email-block__tag">LC 3</span>
              Longest Substring Without Repeating Characters
            </li>
            <li>
              <span className="email-block__tag">LC 76</span>
              Minimum Window Substring
            </li>
          </ol>
        </div>

        <div className="email-block">
          <div className="email-block__kicker">Read · 2 Articles</div>
          <ol className="email-block__list">
            <li>
              <div className="email-block__article">
                <div className="email-block__title">How we rate limit the edge</div>
                <div className="email-block__from">Cloudflare Engineering</div>
              </div>
            </li>
            <li>
              <div className="email-block__article">
                <div className="email-block__title">Designing data-intensive retries</div>
                <div className="email-block__from">Stripe Engineering</div>
              </div>
            </li>
          </ol>
        </div>

        <div className="email-block email-block--context">
          <div className="email-block__kicker">Context</div>
          <div className="email-block__body">
            Today's primitive is the <strong>window</strong>. Strings, requests,
            packets — all the same shape underneath.
          </div>
        </div>
      </div>
    </div>
  );
}
