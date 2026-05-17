import { useState } from 'react';
import Button from '../components/Button.jsx';
import RoadmapCard from '../components/RoadmapCard.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      console.log('[DailyDiff] signup payload:', { email });
      setStatus('success');
    }, 400);
  }

  return (
    <section className="signup" id="signup" aria-labelledby="signup-title">
      <div className="signup__grid">
        <div className="signup__block">
          <h2 className="signup__title" id="signup-title">Get tomorrow's plan.</h2>
          <p className="signup__sub">One email each morning. Study without planning it.</p>

          {status === 'success' ? (
            <p className="signup__success">
              ✓ You're on the list. First email lands tomorrow morning.
            </p>
          ) : (
            <form className="signup__form" onSubmit={handleSubmit} noValidate>
              <input
                className="signup__input"
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                placeholder="your@email.com"
                aria-label="Email address"
                required
                disabled={status === 'submitting'}
              />
              <Button variant="solid" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Get my first email →'}
              </Button>
              {status === 'error' && (
                <p className="signup__error" role="alert">Enter a valid email address.</p>
              )}
            </form>
          )}

          <p className="signup__microcopy">Unsubscribe anytime. No spam. No streaks.</p>
        </div>

        <aside className="signup__rail">
          <RoadmapCard />
        </aside>
      </div>
    </section>
  );
}
