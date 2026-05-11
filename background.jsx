/* ============ BackgroundFX ============
 * Sits fixed behind all content. Three layers:
 *  1. Aurora — two slow-drifting blue radial blobs
 *  2. Constellation — sparse drifting dots that connect when close
 *  3. Glyphs — occasional monospace symbols ('//','→','{ }') fading in/out
 * Pointer-events: none everywhere; respects prefers-reduced-motion.
 */

function BackgroundFX() {
  const canvasRef = React.useRef(null);
  const glyphLayerRef = React.useRef(null);

  React.useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, w, h, dpr;
    let dots = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // sparse density: ~1 dot per 18000 px²
      const target = Math.max(40, Math.min(110, Math.round((w * h) / 18000)));
      dots = new Array(target).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.1 + 0.4,
        // ~1 in 12 dots gets the accent tint
        accent: Math.random() < 0.08,
        // gentle pulse phase
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const accent = () => {
      // read current --accent so tweak changes propagate
      return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#4a9eed';
    };

    const tick = (t) => {
      ctx.clearRect(0, 0, w, h);

      const accentCol = accent();
      const time = t * 0.001;

      // dots
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        // wrap
        if (d.x < -10) d.x = w + 10;
        if (d.x > w + 10) d.x = -10;
        if (d.y < -10) d.y = h + 10;
        if (d.y > h + 10) d.y = -10;

        const pulse = 0.55 + 0.45 * Math.sin(time * 0.6 + d.phase);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        if (d.accent) {
          ctx.fillStyle = hexA(accentCol, 0.55 * pulse);
        } else {
          ctx.fillStyle = `rgba(200, 210, 230, ${0.18 * pulse})`;
        }
        ctx.fill();
      }

      // connections (only between nearby dots, very faint)
      const maxDist = 130;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i], b = dots[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const dist = Math.sqrt(d2);
            const alpha = (1 - dist / maxDist) * 0.10;
            const useAccent = a.accent || b.accent;
            ctx.strokeStyle = useAccent
              ? hexA(accentCol, alpha * 1.4)
              : `rgba(180, 200, 230, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (!reduced) raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    if (reduced) {
      // single static frame
      tick(0);
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Glyph layer — sparse fading monospace symbols
  React.useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const layer = glyphLayerRef.current;
    if (!layer) return;
    const SYMBOLS = ['//', '→', '{ }', '[ ]', '01', '0x', '++', '··'];
    let cancelled = false;

    const spawn = () => {
      if (cancelled) return;
      const el = document.createElement('span');
      el.className = 'bg-glyph';
      el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      const left = Math.random() * 100;
      const top = 60 + Math.random() * 35; // start lower-screen, drift up
      const drift = (Math.random() * 80 + 80); // px to drift up
      const rot = (Math.random() - 0.5) * 6;
      const dur = 9 + Math.random() * 8;
      const size = 11 + Math.random() * 4;
      el.style.left = left + 'vw';
      el.style.top = top + 'vh';
      el.style.fontSize = size + 'px';
      el.style.setProperty('--drift', `-${drift}px`);
      el.style.setProperty('--rot', rot + 'deg');
      el.style.animationDuration = dur + 's';
      layer.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000 + 200);
    };

    // initial sparse population
    for (let i = 0; i < 4; i++) setTimeout(spawn, i * 1200);
    const id = setInterval(spawn, 2400);
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-aurora bg-aurora-1"></div>
      <div className="bg-aurora bg-aurora-2"></div>
      <canvas ref={canvasRef} className="bg-canvas"></canvas>
      <div ref={glyphLayerRef} className="bg-glyphs"></div>
      <div className="bg-grain"></div>
    </div>
  );
}

function hexA(hex, a) {
  const h = hex.replace('#', '');
  const v = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

window.BackgroundFX = BackgroundFX;
