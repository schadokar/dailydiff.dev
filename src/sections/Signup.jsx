import { useState } from 'react';
import Button from '../components/Button.jsx';
import RoadmapCard from '../components/RoadmapCard.jsx';
import Reveal from '../components/Reveal.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    
    try {
      // We use URLSearchParams to format the data as application/x-www-form-urlencoded, 
      // which is how Loops public form endpoints expect data.
      const formParams = new URLSearchParams();
      formParams.append("email", email);

      const endpoint = import.meta.env.VITE_LOOPS_FORM_ENDPOINT;
      if (!endpoint) {
        console.warn('Missing VITE_LOOPS_FORM_ENDPOINT environment variable. Check your .env file.');
        // Fallback to fake success if no endpoint is configured yet (for testing)
        setTimeout(() => setStatus('success'), 400);
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        body: formParams,
      });

      if (!response.ok) {
        throw new Error('Failed to submit email to Loops');
      }
      
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section className="signup" id="signup" aria-labelledby="signup-title">
      <div className="signup__grid">
        <Reveal>
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
                className={`signup__input ${status === 'error' ? 'shake' : ''}`}
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
        </Reveal>

        <Reveal delay={150}>
        <aside className="signup__rail">
          <RoadmapCard />
        </aside>
        </Reveal>
      </div>
    </section>
  );
}
