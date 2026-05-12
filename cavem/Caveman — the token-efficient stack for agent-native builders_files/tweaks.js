(function () {
  const T = window.__TWEAKS || {};
  const body = document.body;
  const root = document.documentElement;

  function apply() {
    root.style.setProperty('--acc-h', T.accentHue);
    root.style.setProperty('--acc-c', T.accentChroma);
    body.dataset.humor = T.humorLevel || 'light';
    body.dataset.density = T.density || 'comfortable';
    body.dataset.grain = T.grainOn ? '1' : '0';
  }
  apply();

  // Wire up panel
  const hue = document.getElementById('tk-hue');
  const hueV = document.getElementById('tk-hue-v');
  const chroma = document.getElementById('tk-chroma');
  const chromaV = document.getElementById('tk-chroma-v');
  const grain = document.getElementById('tk-grain');
  const humor = document.getElementById('tk-humor');
  const density = document.getElementById('tk-density');

  function syncUI() {
    hue.value = T.accentHue; hueV.value = T.accentHue + '°';
    chroma.value = T.accentChroma; chromaV.value = T.accentChroma;
    grain.checked = !!T.grainOn;
    humor.value = T.humorLevel || 'light';
    density.value = T.density || 'comfortable';
  }
  syncUI();

  function persist(edits) {
    Object.assign(T, edits);
    apply();
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    } catch (e) {}
  }

  hue.addEventListener('input', (e) => {
    const v = parseInt(e.target.value, 10);
    hueV.value = v + '°';
    persist({ accentHue: v });
  });
  chroma.addEventListener('input', (e) => {
    const v = parseFloat(e.target.value);
    chromaV.value = v;
    persist({ accentChroma: v });
  });
  grain.addEventListener('change', (e) => persist({ grainOn: e.target.checked }));
  humor.addEventListener('change', (e) => persist({ humorLevel: e.target.value }));
  density.addEventListener('change', (e) => persist({ density: e.target.value }));

  // --- mobile nav toggle ---
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.getElementById('primary-nav');
  const navScrim = document.querySelector('.nav__scrim');

  function closeNav() {
    body.classList.remove('nav-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }
  function openNav() {
    body.classList.add('nav-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
  }
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      if (body.classList.contains('nav-open')) closeNav();
      else openNav();
    });
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', closeNav)
    );
    if (navScrim) navScrim.addEventListener('click', closeNav);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
    const mq = window.matchMedia('(min-width: 901px)');
    mq.addEventListener('change', (e) => { if (e.matches) closeNav(); });
  }

  // Tweak mode handshake — register listener first, then announce availability.
  window.addEventListener('message', (ev) => {
    const t = ev.data && ev.data.type;
    if (t === '__activate_edit_mode') body.classList.add('tweaks-on');
    if (t === '__deactivate_edit_mode') body.classList.remove('tweaks-on');
  });
  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (e) {}
})();
