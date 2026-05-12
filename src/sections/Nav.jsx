import { useState, useEffect, useCallback } from 'react';
import Button from '../components/Button.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';

const links = [
  { label: 'Problem',      href: '#problem' },
  { label: 'Insight',      href: '#insight' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What you get', href: '#features' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, close]);

  return (
    <header className={`nav${open ? ' nav--open' : ''}`}>
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label="DailyDiff home">
          <span className="brand__mark" aria-hidden="true">//</span>
          <span className="brand__word">DAILYDIFF</span>
          <span className="brand__dot">·</span>
          <span className="brand__sub">STUDY OS</span>
        </a>

        <nav className="nav__links" id="primary-nav" aria-label="Primary">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav__cta">
          <ThemeToggle />
          <Button variant="solid" href="#signup">Get tomorrow's email →</Button>
        </div>

        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(o => !o)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>

      <div className="nav__drawer" id="mobile-nav" aria-hidden={!open}>
        {links.map(l => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        <Button variant="solid" href="#signup">Get tomorrow's email →</Button>
      </div>
    </header>
  );
}
