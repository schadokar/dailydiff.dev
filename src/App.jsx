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
import TodayPlan from './components/TodayPlan.jsx';
import StreakHeatmap from './components/StreakHeatmap.jsx';
import FrogCard from './components/FrogCard.jsx';
import CalmInbox from './components/CalmInbox.jsx';
import CuratorFunnel from './components/CuratorFunnel.jsx';
import Reveal from './components/Reveal.jsx';
import SketchbookGrid from './components/SketchbookGrid.jsx';

export default function App() {
  return (
    <>
      <SketchbookGrid />
      <Nav />
      <main id="top">
        <div className="layout">
          <Hero />
          <aside className="layout__rail layout__rail--hero">
            <Reveal delay={150}>
              <SampleIssueCard />
            </Reveal>
          </aside>

          <Problem />
          <aside className="layout__rail layout__rail--problem">
            <Reveal delay={150}>
              <CareerCycle />
            </Reveal>
          </aside>

          <Insight />
          <aside className="layout__rail layout__rail--insight">
            <Reveal delay={150}>
              <TodayPlan />
              <div className="insight-rail__gap" />
              <StreakHeatmap />
            </Reveal>
          </aside>

          <HowItWorks />
          <aside className="layout__rail layout__rail--how">
            <Reveal delay={150}>
              <FrogCard />
            </Reveal>
          </aside>

          <Features />
          <aside className="layout__rail layout__rail--features">
            <Reveal delay={150}>
              <CuratorFunnel />
            </Reveal>
          </aside>

          <NonFeatures />
          <aside className="layout__rail layout__rail--nonfeatures">
            <Reveal delay={150}>
              <CalmInbox />
            </Reveal>
          </aside>
        </div>

        <Signup />
      </main>
      <Footer />
    </>
  );
}
