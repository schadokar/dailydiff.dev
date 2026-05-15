const STAGES = [
  { title: 'Panic prep', note: 'weeks of cramming before applying' },
  { title: 'Land the job', note: 'studying stops completely' },
  { title: 'Skills decay', note: '2 years pass, fundamentals fade' },
  { title: 'Switch jobs → relearn', note: 'rediscover the same ground, from zero', waste: true },
];

export default function CareerCycle() {
  return (
    <div className="career-cycle" role="img" aria-label="The broken study-and-job cycle engineers are stuck in">
      <div className="career-cycle__eyebrow">[the loop]</div>
      <div className="career-cycle__cap">the loop most engineers are stuck in</div>

      <div className="career-cycle__loop">
        <div className="career-cycle__spine" aria-hidden="true" />
        <div className="career-cycle__pulse" aria-hidden="true" />
        {STAGES.map((s) => (
          <div
            key={s.title}
            className={'career-cycle__step' + (s.waste ? ' career-cycle__step--waste' : '')}
          >
            <span className="career-cycle__dot" aria-hidden="true" />
            <b>{s.title}</b>
            <span className="career-cycle__note">{s.note}</span>
          </div>
        ))}
      </div>

      <div className="career-cycle__back">back to panic prep — every single time</div>
    </div>
  );
}
