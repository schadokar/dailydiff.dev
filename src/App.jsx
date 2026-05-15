import { useState, useEffect } from 'react';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Insight from './sections/Insight.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Features from './sections/Features.jsx';
import NonFeatures from './sections/NonFeatures.jsx';
import Signup from './sections/Signup.jsx';
import Footer from './sections/Footer.jsx';
import SampleIssueCard from './components/SampleIssueCard.jsx';
import CareerCycle from './components/CareerCycle.jsx';

/* Which component the right rail shows while a section owns the viewport.
   '' is the initial state (hero in view); unmapped sections show an empty rail. */
const RAIL = {
  '': 'email',
  problem: 'cycle',
};

export default function App() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.layout__flow section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const railKind = RAIL[activeId];

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <div className="layout">
          <Hero />

          <aside className="layout__rail">
            <div className="rail__sticky">
              {railKind === 'email' && (
                <div className="rail__fade" key="email">
                  <SampleIssueCard />
                </div>
              )}
              {railKind === 'cycle' && (
                <div className="rail__fade" key="cycle">
                  <CareerCycle />
                </div>
              )}
            </div>
          </aside>

          <div className="layout__flow">
            <Problem />
            <Insight />
            <HowItWorks />
            <Features />
            <NonFeatures />
          </div>
        </div>

        <Signup />
      </main>
      <Footer />
    </>
  );
}
