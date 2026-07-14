import { useState, useEffect, useCallback } from 'react';
import Button from '../components/Button.jsx';

const links = [
  { label: 'Problem',      href: '#problem' },
  { label: 'Insight',      href: '#insight' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What you get', href: '#features' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, close]);

  return (
    <header className={`nav${open ? ' nav--open' : ''}${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label="DailyDiff home">
          <img src={`${import.meta.env.BASE_URL}wordmark-logo.png`} alt="DailyDiff.dev" height="44" />
        </a>

        <nav className="nav__links" id="primary-nav" aria-label="Primary">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="nav__cta">
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
