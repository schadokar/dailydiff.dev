// Monochrome single-path brand marks (simple-icons), rendered in currentColor.
const LOGOS = {
  netflix: 'm5.398 0 8.348 23.602c2.346.059 4.856.398 4.856.398L10.113 0H5.398zm8.489 0v9.172l4.715 13.33V0h-4.715zM5.398 1.5V24c1.873-.225 2.81-.312 4.715-.398V14.83L5.398 1.5z',
  cloudflare: 'M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727',
  stripe: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z',
  uber: 'M0 7.97v4.958c0 1.867 1.302 3.101 3 3.101.826 0 1.562-.316 2.094-.87v.736H6.27V7.97H5.082v4.888c0 1.257-.85 2.106-1.947 2.106-1.11 0-1.946-.827-1.946-2.106V7.971H0zm7.44 0v7.925h1.13v-.725c.521.532 1.257.86 2.06.86a3.006 3.006 0 0 0 3.034-3.01 3.01 3.01 0 0 0-3.033-3.024 2.86 2.86 0 0 0-2.049.861V7.971H7.439zm9.869 2.038c-1.687 0-2.965 1.37-2.965 3 0 1.72 1.334 3.01 3.066 3.01 1.053 0 1.913-.463 2.49-1.233l-.826-.611c-.43.577-.996.847-1.664.847-.973 0-1.753-.7-1.912-1.64h4.697v-.373c0-1.72-1.222-3-2.886-3zm6.295.068c-.634 0-1.098.294-1.381.758v-.713h-1.131v5.774h1.142V12.61c0-.894.544-1.47 1.291-1.47H24v-1.065h-.396zm-6.319.928c.85 0 1.564.588 1.756 1.47H15.52c.203-.882.916-1.47 1.765-1.47zm-6.732.012c1.086 0 1.98.883 1.98 2.004a1.993 1.993 0 0 1-1.98 2.001A1.989 1.989 0 0 1 8.56 13.02a1.99 1.99 0 0 1 1.992-2.004z',
  meta: 'M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z',
  airbnb: 'M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z',
};

// Official brand colors. Uber is omitted — its mark is black/white,
// so it falls back to a theme-aware color and stays visible in both modes.
const BRAND = {
  netflix: '#E50914',
  cloudflare: '#F38020',
  stripe: '#635BFF',
  meta: '#0081FB',
  airbnb: '#FF5A5F',
};

function Logo({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={LOGOS[name]} fill="currentColor" />
    </svg>
  );
}

// The unsorted noise: DSA problems + engineering-blog sources, jumbled.
// `rot` jitters each tile so the cluster reads as disordered; `dim` recedes a few.
const CHAOS = [
  { kind: 'dsa', label: 'LC#121', rot: -7 },
  { kind: 'logo', name: 'netflix', rot: 5, dim: true },
  { kind: 'dsa', label: 'LC#3', rot: 4 },
  { kind: 'logo', name: 'uber', rot: -6 },
  { kind: 'logo', name: 'stripe', rot: 8 },
  { kind: 'dsa', label: 'LC#994', rot: -4, dim: true },
  { kind: 'logo', name: 'meta', rot: 6 },
  { kind: 'dsa', label: 'LC#76', rot: -8 },
  { kind: 'logo', name: 'airbnb', rot: 3, dim: true },
  { kind: 'dsa', label: 'LC#543', rot: 7 },
  { kind: 'logo', name: 'cloudflare', rot: -5 },
];

const SOLVE = [
  { label: 'LC#3', diff: 'med' },
  { label: 'LC#76', diff: 'hard' },
];

const FUNDAMENTAL = { title: 'CAP Theorem', from: 'Martin Kleppmann' };

const READ = [
  { name: 'cloudflare', from: 'Cloudflare Engineering' },
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
              (t.kind === 'dsa' ? ' curator__tile--dsa' : ' curator__tile--logo') +
              (t.dim ? ' curator__tile--dim' : '')
            }
            style={{ '--rot': `${t.rot}deg`, color: t.kind === 'logo' ? BRAND[t.name] : undefined }}
          >
            {t.kind === 'dsa' ? t.label : <Logo name={t.name} />}
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
                <span className="curator__arrow" aria-hidden="true">→</span>
                <span className="curator__text">{p.label}</span>
                <span className={`curator__badge curator__badge--${p.diff}`}>{p.diff}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="curator__group curator__group--revise">
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
                <span className="curator__mark" aria-hidden="true" style={{ color: BRAND[a.name] }}><Logo name={a.name} /></span>
                <span className="curator__text">{a.from}</span>
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
