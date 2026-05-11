const { useState, useEffect, useRef, useMemo } = React;

/* ============ data ============ */
const SOURCES = [
{ id: 'netflix', letter: 'N', name: 'Netflix', domain: 'netflixtechblog.com', color: '#E50914' },
{ id: 'stripe', letter: 'S', name: 'Stripe', domain: 'stripe.com/blog', color: '#7A5CFA' },
{ id: 'cloudflare', letter: 'C', name: 'Cloudflare', domain: 'blog.cloudflare.com', color: '#F38020' },
{ id: 'uber', letter: 'U', name: 'Uber', domain: 'uber.com/blog/engineering', color: '#1B1B1B' },
{ id: 'airbnb', letter: 'A', name: 'Airbnb', domain: 'medium.com/airbnb-engineering', color: '#FF5A5F' },
{ id: 'meta', letter: 'M', name: 'Meta', domain: 'engineering.fb.com', color: '#1877F2' },
{ id: 'github', letter: 'G', name: 'GitHub', domain: 'github.blog/engineering', color: '#23272E' },
{ id: 'discord', letter: 'D', name: 'Discord', domain: 'discord.com/blog', color: '#5865F2' }];


/* ============ entry observer ============ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .globe-enter');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============ subscribe form ============ */
function SubscribeForm({ ctaLabel = "Get tomorrow's →", placeholder = "you@work.dev" }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    setDone(true);
  };
  if (done) {
    return (
      <div className="subscribe-success">
        <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 0 4px rgba(89,194,138,0.16)' }}></span>
        you're in. tomorrow's issue will hit {email} at 7am.
      </div>);

  }
  return (
    <form className="subscribe" onSubmit={submit}>
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        spellCheck="false" />
      
      <button className="btn btn-primary" type="submit">{ctaLabel}</button>
    </form>);

}

/* ============ nav ============ */
function Nav() {
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">//</span>
          <span><span className="brand-name">dailydiff</span><span className="brand-tld">.dev</span></span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#sources">Sources</a>
          <a href="#sample">Sample issue</a>
          <a href="#faq">FAQ</a>
          <a href="#subscribe" className="btn btn-primary" style={{ height: 34, fontSize: 13, color: "rgb(10, 11, 14)" }}>Subscribe</a>
        </div>
      </div>
    </nav>);

}

/* ============ hero floating tags ============ */
const HERO_TAGS = [
{ t: 'two-pointer', k: 'pattern' },
{ t: 'sliding window', k: 'pattern' },
{ t: 'binary search', k: 'pattern' },
{ t: 'topological sort', k: 'pattern' },
{ t: 'union-find', k: 'pattern' },
{ t: 'system design', k: 'topic' },
{ t: 'distributed systems', k: 'topic' },
{ t: 'consistent hashing', k: 'topic' },
{ t: 'kafka', k: 'tech' },
{ t: 'redis', k: 'tech' },
{ t: 'postgres', k: 'tech' },
{ t: 'rate limiting', k: 'topic' },
{ t: 'LRU cache', k: 'pattern' },
{ t: 'leetcode #76', k: 'ref' },
{ t: 'leetcode #1143', k: 'ref' },
{ t: 'leetcode #198', k: 'ref' },
{ t: 'O(n log n)', k: 'big-o' },
{ t: 'monotonic stack', k: 'pattern' },
{ t: 'CAP theorem', k: 'topic' },
{ t: 'graph BFS', k: 'pattern' }];


function HeroFloat() {
  const reduced = typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // pre-compute deterministic-ish placements so layout stays stable across renders
  const items = React.useMemo(() => {
    // place tags only in the left or right margin columns so they never
    // overlap the centered headline / subscribe form
    return HERO_TAGS.map((tag, i) => {
      const seed = (n) => (Math.sin((i + 1) * n) + 1) / 2;
      const onRight = i % 2 === 0;
      // left column: 2–22 vw, right column: 78–98 vw
      const left = onRight ?
      78 + seed(12.9898) * 20 :
      2 + seed(12.9898) * 20;
      const top = 8 + seed(78.233) * 84; // 8–92 % of hero
      const drift = 14 + seed(43.7) * 22;
      const dur = 9 + seed(91.13) * 8;
      const delay = -seed(31.7) * dur;
      const rot = (seed(57.3) - 0.5) * 8;
      const size = 11 + Math.round(seed(11.1) * 3);
      const opacityClass = i % 5 === 0 ? 'tag-bright' : i % 3 === 0 ? 'tag-mid' : 'tag-dim';
      return { ...tag, left, top, drift, dur, delay, rot, size, opacityClass, key: i };
    });
  }, []);
  return (
    <div className="hero-float" aria-hidden="true">
      {items.map((it) =>
      <span
        key={it.key}
        className={`hero-tag hero-tag-${it.k} ${it.opacityClass} ${reduced ? 'no-anim' : ''}`}
        style={{
          left: `${it.left}%`,
          top: `${it.top}%`,
          fontSize: `${it.size}px`,
          '--drift': `${it.drift}px`,
          '--dur': `${it.dur}s`,
          '--delay': `${it.delay}s`,
          '--rot': `${it.rot}deg`
        }}>
        
          {it.k === 'ref' ? <span className="tag-prefix">↗ </span> : null}
          {it.k === 'big-o' ? <span className="tag-prefix">{'∑ '}</span> : null}
          {it.k === 'pattern' ? <span className="tag-prefix">{'// '}</span> : null}
          {it.k === 'tech' ? <span className="tag-prefix">{'· '}</span> : null}
          {it.k === 'topic' ? <span className="tag-prefix">{'§ '}</span> : null}
          {it.t}
        </span>
      )}
    </div>);

}

/* ============ hero ============ */
function Hero() {
  return (
    <section className="hero" id="top">
      <HeroFloat />
      <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
        <div className="fade-up in">
          <span className="eyebrow"><span className="dot"></span>a daily routine, not another newsletter</span>
        </div>
        <h1 className="headline fade-up in d1" style={{ fontSize: "64px", maxWidth: "891px", marginLeft: "auto", marginRight: "auto" }}>
          Stop planning your prep.
          <span className="muted-line" style={{ fontSize: "64px" }}><em>Just open today's email.</em></span>
        </h1>
        <p className="lede fade-up in d2">
          Two or three DSA problems. One curated engineering deep-dive. Every morning.
          We pick what you do — you just do it.
        </p>
        <div className="fade-up in d3" id="subscribe">
          <SubscribeForm />
          <p className="fineprint" style={{ textAlign: 'center', margin: 0 }}>
            Free. Unsubscribe in one click. No spam.
          </p>
        </div>
      </div>
    </section>);

}

/* ============ what's inside ============ */
function Inside() {
  return (
    <section style={{ lineHeight: "1.5", fontSize: "20px" }}>
      <div className="shell">
        <div className="fade-up">
          <div className="section-label">WHAT'S IN EACH ISSUE</div>
          <h2 className="section-title">Three things. <em>Sequenced for you.</em></h2>
        </div>
        <div className="card-grid">
          <div className="card fade-up d1">
            <span className="badge badge-blue">DSA</span>
            <h3>2–3 problems</h3>
            <p>Curated from Leetcode 75 and 150. Sequenced by topic and difficulty — not random.</p>
          </div>
          <div className="card fade-up d2">
            <span className="badge badge-green">DEEP DIVE</span>
            <h3 style={{ fontFamily: "\"Instrument Serif\"" }}>Engineering articles</h3>
            <p>From Netflix, Stripe, Cloudflare and friends. Picked to pair with the day's problems.</p>
          </div>
          <div className="card fade-up d3">
            <span className="badge badge-amber">CONTEXT</span>
            <h3>Why it matters</h3>
            <p>A line on what to look for and which pattern this belongs to. No fluff.</p>
          </div>
        </div>
      </div>
    </section>);

}

/* ============ sources showcase (replaces globe) ============ */
const SOURCE_ARTICLES = {
  netflix: { title: "Federated GraphQL at a million RPS", topic: 'API', read: '14m' },
  stripe: { title: "Idempotency at the API edge", topic: 'API', read: '11m' },
  cloudflare: { title: "How we size connection pools", topic: 'Networking', read: '12m' },
  uber: { title: "Reinventing Cassandra compaction", topic: 'Storage', read: '15m' },
  airbnb: { title: "Sharding the reservation database", topic: 'Storage', read: '13m' },
  meta: { title: "Async stack traces in production", topic: 'Tooling', read: '10m' },
  github: { title: "Scaling MySQL: thirteen years in", topic: 'Storage', read: '18m' },
  discord: { title: "Storing trillions of messages", topic: 'Storage', read: '14m' }
};

function SourcesShowcase() {
  const [idx, setIdx] = useState(2); // start on Cloudflare
  const [paused, setPaused] = useState(false);
  const active = SOURCES[idx];
  const article = SOURCE_ARTICLES[active.id];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % SOURCES.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setIdx((i) => (i + 1) % SOURCES.length);
  const prev = () => setIdx((i) => (i - 1 + SOURCES.length) % SOURCES.length);

  return (
    <section id="sources" className="showcase-section">
      <div className="shell">
        <div className="fade-up">
          <div className="section-label">WHERE THE ARTICLES COME FROM</div>
          <h2 className="section-title">
            Fifty engineering blogs, <em>one inbox.</em>
            <span className="muted-line">Curated, paired, and delivered.</span>
          </h2>
        </div>

        {/* marquee — auto-scrolling source ticker */}
        <div
          className="marquee fade-up"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          
          <div className="marquee-track">
            {[...SOURCES, ...SOURCES].map((s, i) =>
            <button
              key={i}
              className={`source-pill ${s.id === active.id ? 'is-active' : ''}`}
              onClick={() => setIdx(i % SOURCES.length)}
              style={{ '--src': s.color }}>
              
                <span className="pill-mark" style={{ background: s.color }}>{s.letter}</span>
                <span className="pill-name">{s.name}</span>
                <span className="pill-domain">{s.domain}</span>
              </button>
            )}
          </div>
        </div>

        {/* spotlight card */}
        <div
          className="spotlight fade-up d2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          
          <div className="spot-glow" style={{ '--src': active.color }}></div>
          <div className="spot-card">
            <div className="spot-left" key={active.id + '-l'}>
              <div className="spot-mark" style={{ background: active.color }}>{active.letter}</div>
              <div>
                <div className="spot-name">{active.name}</div>
                <div className="spot-domain">{active.domain}</div>
              </div>
              <div className="spot-meta">
                <span className="meta-chip">{article.topic}</span>
                <span className="meta-read">~{article.read} read</span>
              </div>
            </div>

            <div className="spot-right">
              <div className="spot-eyebrow">FEATURED · paired with today's DSA set</div>
              <h3 className="spot-title" key={active.id + '-t'}>{article.title}</h3>
              <p className="spot-excerpt" key={active.id + '-e'}>
                A senior engineer walks through the production trade-offs — what they tried, what
                broke, and which patterns generalize beyond {active.name.toLowerCase()}.
              </p>
              <div className="spot-controls">
                <div className="spot-dots">
                  {SOURCES.map((s, i) =>
                  <button
                    key={s.id}
                    className={`spot-dot ${i === idx ? 'is-active' : ''}`}
                    onClick={() => setIdx(i)}
                    aria-label={`Show ${s.name}`}
                    style={i === idx ? { background: active.color } : undefined} />

                  )}
                </div>
                <div className="spot-arrows">
                  <button className="spot-arrow" onClick={prev} aria-label="Previous source">←</button>
                  <button className="spot-arrow" onClick={next} aria-label="Next source">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="stats-row fade-up d3">
          <div className="stat">
            <div className="stat-num">50+</div>
            <div className="stat-label">engineering blogs</div>
          </div>
          <div className="stat">
            <div className="stat-num">3 - 5</div>
            <div className="stat-label">picked per morning</div>
          </div>
          <div className="stat">
            <div className="stat-num">0</div>
            <div className="stat-label">marketing fluff</div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============ how it works ============ */
function HowItWorks() {
  const steps = [
  { n: '01', t: 'Subscribe', d: "Drop your email. We won't ask anything else, won't sell anything, won't email twice a day." },
  { n: '02', t: 'Open at 7am', d: 'A short email. Three links. One paragraph of context. Skim it on your commute or at your desk.' },
  { n: '03', t: 'Do what you can', d: 'Solve one problem. Read the article on the train. Skip a day. The plan keeps moving — fail better.' }];

  return (
    <section id="how">
      <div className="shell">
        <div className="fade-up">
          <div className="section-label">HOW IT WORKS</div>
          <h2 className="section-title">Three steps. <em>Then it just runs.</em></h2>
        </div>
        <div className="card-grid">
          {steps.map((s, i) =>
          <div key={s.n} className={`card fade-up d${i + 1}`}>
              <span className="step-num">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============ sample issue ============ */
function Sample() {
  return (
    <section id="sample">
      <div className="shell">
        <div className="fade-up">
          <div className="section-label">A REAL ISSUE</div>
          <h2 className="section-title">Here's what landed in inboxes <em>last Tuesday.</em></h2>
        </div>
        <div className="sample-wrap fade-up d1">
          <div className="sample">
            <div className="sample-head">
              <div className="sample-head-left">Issue #042 · Sliding Window, Day 3</div>
              <div className="sample-head-right">Tue, May 5</div>
            </div>
            <div className="sample-body">
              <div className="sample-block">
                <div className="sample-label blue">DSA</div>
                <div className="sample-line"><span className="sample-arrow">→</span>Longest Substring Without Repeating Characters <span className="meta">(Medium, ~20m)</span></div>
                <div className="sample-line"><span className="sample-arrow">→</span>Minimum Window Substring <span className="meta">(Hard, ~35m — try, then peek)</span></div>
              </div>
              <div className="sample-block">
                <div className="sample-label green">READ</div>
                <div className="sample-line"><span className="sample-arrow">→</span>How Cloudflare Sizes Connection Pools <span className="meta">(Cloudflare Engineering, ~12m)</span></div>
              </div>
              <div className="sample-block">
                <div className="sample-label amber">CONTEXT</div>
                <div className="sample-line dim">Both problems are sliding-window with a hashmap. The Cloudflare piece is the same idea at infrastructure scale — a window over connections instead of characters.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============ footer cta ============ */
function FooterCTA() {
  return (
    <section className="tight">
      <div className="shell">
        <div className="cta-panel fade-up">
          <h2>One email. <em>Tomorrow morning.</em></h2>
          <p className="subtitle">That's the whole pitch.</p>
          <div style={{ maxWidth: 460, margin: '0 auto' }}>
            <SubscribeForm ctaLabel="Subscribe" />
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <div className="shell">
      <div className="footer">
        <div>dailydiff.dev · a side project by an engineer in Bengaluru</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">RSS</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </div>);

}

/* ============ tweaks ============ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#4a9eed",
  "displayFont": "Instrument Serif",
  "showLatLng": true,
  "coreLabel": "50+",
  "panel": "#121418",
  "backgroundFx": true
} /*EDITMODE-END*/;

function App() {
  useReveal();
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // apply tweaks live
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    r.style.setProperty('--accent-soft', hexA(t.accent, 0.12));
    r.style.setProperty('--blue', t.accent);
    r.style.setProperty('--panel', t.panel);
    r.style.setProperty('--font-display', `'${t.displayFont}', 'Times New Roman', serif`);
    document.querySelectorAll('.lat, .lng').forEach((el) => {
      el.style.display = t.showLatLng ? '' : 'none';
    });
    const core = document.querySelector('.core-num');
    if (core) core.textContent = t.coreLabel;
  }, [t]);

  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakColor = window.TweakColor;
  const TweakRadio = window.TweakRadio;
  const TweakSelect = window.TweakSelect;
  const TweakToggle = window.TweakToggle;
  const TweakText = window.TweakText;

  return (
    <>
      {t.backgroundFx && <window.BackgroundFX />}
      <Nav />
      <Hero />
      <Inside />
      <SourcesShowcase />
      <HowItWorks />
      <Sample />
      <FooterCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakColor
            label="Brand color"
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#4a9eed', '#7C5CFF', '#59C28A', '#E8B14C', '#FF6B5C']} />
          
        </TweakSection>
        <TweakSection title="Type">
          <TweakSelect
            label="Display font"
            value={t.displayFont}
            onChange={(v) => setTweak('displayFont', v)}
            options={[
            { value: 'Instrument Serif', label: 'Instrument Serif (default)' },
            { value: 'Fraunces', label: 'Fraunces' },
            { value: 'Newsreader', label: 'Newsreader' },
            { value: 'Geist', label: 'Geist (sans)' },
            { value: 'Geist Mono', label: 'Geist Mono' }]
            } />
          
        </TweakSection>
        <TweakSection title="Globe">
          <TweakToggle
            label="Show lat/lng wireframe"
            value={t.showLatLng}
            onChange={(v) => setTweak('showLatLng', v)} />
          
          <TweakText
            label="Core label"
            value={t.coreLabel}
            onChange={(v) => setTweak('coreLabel', v)} />
          
        </TweakSection>
        <TweakSection title="Background">
          <TweakToggle
            label="Animated background"
            value={t.backgroundFx}
            onChange={(v) => setTweak('backgroundFx', v)} />
        </TweakSection>
        <TweakSection title="Panels">
          <TweakColor
            label="Card fill"
            value={t.panel}
            onChange={(v) => setTweak('panel', v)}
            options={['#121418', '#0f1115', '#16191f', '#0a0b0e']} />
          
        </TweakSection>
      </TweaksPanel>
    </>);

}

function hexA(hex, a) {
  const h = hex.replace('#', '');
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);