import { useEffect, useState, useMemo } from 'react';

const CELL = 32;
const SEGMENT = 24;
const JITTER = 1.1;

function seededRand(seed) {
  let s = seed | 0;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function wobblyPath(from, to, axis, rand) {
  const [x0, y0] = from;
  const [x1, y1] = to;
  const length = axis === 'h' ? x1 - x0 : y1 - y0;
  const steps = Math.max(2, Math.round(length / SEGMENT));
  let d = `M ${x0.toFixed(1)} ${y0.toFixed(1)}`;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const jitter = (rand() - 0.5) * 2 * JITTER;
    if (axis === 'h') {
      const x = x0 + length * t;
      const y = y0 + jitter;
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    } else {
      const x = x0 + jitter;
      const y = y0 + length * t;
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
  }
  return d;
}

export default function SketchbookGrid() {
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      setSize({ w: window.innerWidth, h: window.innerHeight });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const paths = useMemo(() => {
    if (!size.w || !size.h) return [];
    const rand = seededRand(42);
    const out = [];
    for (let y = CELL; y < size.h; y += CELL) {
      out.push(wobblyPath([0, y], [size.w, y], 'h', rand));
    }
    for (let x = CELL; x < size.w; x += CELL) {
      out.push(wobblyPath([x, 0], [x, size.h], 'v', rand));
    }
    return out;
  }, [size.w, size.h]);

  if (!size.w) return null;

  return (
    <svg
      className="sketchbook-grid"
      width={size.w}
      height={size.h}
      viewBox={`0 0 ${size.w} ${size.h}`}
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
