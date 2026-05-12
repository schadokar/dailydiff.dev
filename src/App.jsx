import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Insight from './sections/Insight.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Features from './sections/Features.jsx';
import NonFeatures from './sections/NonFeatures.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Insight />
        <HowItWorks />
        <Features />
        <NonFeatures />
      </main>
    </>
  );
}
