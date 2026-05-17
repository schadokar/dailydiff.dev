// rows = weeks, columns = days (0=Sun … 6=Sat). 2 = future/pending
const WEEKS = [
  [0, 1, 0, 1, 0, 1, 0], // week 1: Mon Wed Fri
  [0, 0, 1, 0, 1, 0, 1], // week 2: Tue Thu Sat
  [1, 1, 0, 1, 1, 0, 0], // week 3: Sun Mon Wed Thu
  [0, 1, 0, 1, 0, 2, 2], // week 4 (current): Mon Wed done, Fri+ pending
];

const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function StreakHeatmap() {
  return (
    <div className="streak-heatmap" role="img" aria-label="4-week study streak heatmap">
      <div className="streak-heatmap__eyebrow">[streak · 4 weeks]</div>

      <div className="streak-heatmap__grid">
        {DAY_LABELS.map((d, i) => (
          <span key={`lbl-${i}`} className="streak-heatmap__day-label">{d}</span>
        ))}
        {WEEKS.flatMap((week, wi) =>
          week.map((val, di) => (
            <span
              key={`${wi}-${di}`}
              className={
                'streak-heatmap__dot' +
                (val === 1 ? ' streak-heatmap__dot--on' : '') +
                (val === 2 ? ' streak-heatmap__dot--pending' : '')
              }
            />
          ))
        )}
      </div>

      <div className="streak-heatmap__footer">
        <span className="streak-heatmap__count">3 of 7 this week</span>
        <span className="streak-heatmap__msg">still ahead of zero.</span>
      </div>
    </div>
  );
}
