export default function FrogCard() {
  return (
    <div
      className="frog-card"
      role="img"
      aria-label="Eat the frog — do the one hard thing first, at 7am"
    >
      <div className="frog-card__eyebrow">[the frog · 7am]</div>

      <p className="frog-card__headline">
        One hard thing, served before the day can argue.
      </p>

      <p className="frog-card__body">
        The issue lands at 7am — chosen for you, timed for you. No deciding,
        no deferring. Willpower never gets a vote.
      </p>

      <div className="frog-card__footer">
        <span className="frog-card__rule" aria-hidden="true">──</span>
        <span className="frog-card__line">
          eat the <span className="frog-card__frog">frog</span>. then coast.
        </span>
      </div>
    </div>
  );
}
