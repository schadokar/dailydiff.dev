import { useState, useEffect, useCallback } from 'react';
import Button from '../components/Button.jsx';

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What you get', href: '#features' },
  { label: 'Why this',     href: '#positioning' },
  { label: 'Sign up',      href: '#signup' },
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
          <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M4 26 L16 6 L28 26 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16" cy="20" r="2.2" fill="currentColor" />
          </svg>
          <span className="brand__word">DAILYDIFF</span>
          <span className="brand__dot">·</span>
          <span className="brand__sub">STUDY OS</span>
        </a>

        <nav className="nav__links" id="primary-nav" aria-label="Primary">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav__cta">
          <Button variant="solid" href="#signup">Get the daily plan →</Button>
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
        <Button variant="solid" href="#signup">Get the daily plan →</Button>
      </div>
    </header>
  );
}
