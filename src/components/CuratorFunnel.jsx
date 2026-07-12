function logoExt(name) {
  switch (name) {
    case 'zerodha':
    case 'razorpay':
      return 'jpeg'
    case '':
      return 'svg';
    default:
      return 'png';
  }
}

function Logo({ name }) {
  return (
    <img
      src={`/logos/${name}.${logoExt(name)}`}
      alt={name}
      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
    />
  );
}

// The unsorted noise: DSA problems + engineering-blog sources, jumbled.
// `rot` jitters each tile so the cluster reads as disordered; `dim` recedes a few.
const CHAOS = [
  { kind: 'dsa', label: 'LC#121', rot: -7 },
  { kind: 'logo', name: 'netflix', rot: 5 },
  { kind: 'dsa', label: 'LC#146', rot: 4 },
  { kind: 'concept', label: 'Caching', rot: -5 },
  { kind: 'logo', name: 'zerodha', rot: -6 },
  { kind: 'logo', name: 'stripe', rot: 8 },
  { kind: 'logo', name: 'meta', rot: 6 },
  { kind: 'dsa', label: 'LC#460', rot: -8 },
  { kind: 'concept', label: 'CAP', rot: 6, dim: true },
  { kind: 'logo', name: 'airbnb', rot: 3, dim: true },
  { kind: 'logo', name: 'razorpay', rot: -5 },
  { kind: 'logo', name: 'google', rot: 6 },
];

const SOLVE = [
  { label: 'LC#146', title: 'LRU Cache', diff: 'med' },
  { label: 'LC#460', title: 'LFU Cache', diff: 'hard' },
];

const FUNDAMENTAL = { title: 'Distributed Caching', from: 'ByteByteGo' };

const READ = [
  { name: 'Scaling Infrastructure for Millions', from: 'Hotstar Engineering' },
];

export default function CuratorFunnel() {
  return (
    <div
      className="curator"
      role="img"
      aria-label="The curator — the internet's unsorted noise funnelled into one sequenced daily issue"
    >
      <div className="curator__eyebrow">[ the curator ]</div>
      <div className="curator__cap">The internet's noise, filtered to one issue.</div>

      <div className="curator__label">[ the noise · everything, unsorted ]</div>
      <div className="curator__chaos">
        {CHAOS.map((t, i) => (
          <span
            key={i}
            className={
              'curator__tile' +
              (t.kind === 'dsa' ? ' curator__tile--dsa' : t.kind === 'concept' ? ' curator__tile--concept' : ' curator__tile--logo') +
              (t.dim ? ' curator__tile--dim' : '')
            }
            style={{ '--rot': `${t.rot}deg` }}
          >
            {t.kind === 'logo' ? <Logo name={t.name} /> : t.label}
          </span>
        ))}
      </div>

      <div className="curator__funnel" aria-hidden="true">
        <svg className="curator__funnel-svg" viewBox="0 0 120 64" preserveAspectRatio="none">
          <path d="M6 5 L52 44 L52 62" />
          <path d="M114 5 L68 44 L68 62" />
        </svg>
        <span className="curator__drop" />
      </div>

      <div className="curator__label">[ today's issue · sequenced ]</div>
      <div className="curator__output">
        <div className="curator__group">
          <div className="curator__group-label">solve</div>
          <ul className="curator__list">
            {SOLVE.map((p) => (
              <li key={p.label} className="curator__item">
                <span className="curator__num">{p.label}</span>
                <span className="curator__text">{p.title}</span>
                <span className={`curator__badge curator__badge--${p.diff}`}>{p.diff}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="curator__group">
          <div className="curator__group-label">revise</div>
          <ul className="curator__list">
            <li className="curator__item">
              <span className="curator__arrow" aria-hidden="true">→</span>
              <span className="curator__text">
                {FUNDAMENTAL.title}
                <span className="curator__from">{FUNDAMENTAL.from}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="curator__group">
          <div className="curator__group-label">expand</div>
          <ul className="curator__list">
            {READ.map((a) => (
              <li key={a.name} className="curator__item">
                <span className="curator__arrow" aria-hidden="true">→</span>
                <span className="curator__text">
                  {a.name}
                  <span className="curator__from">{a.from}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="curator__footer">
        <span className="curator__rule" aria-hidden="true">──</span>
        <span className="curator__line">everything in · one sequenced issue out</span>
      </div>
    </div>
  );
}
