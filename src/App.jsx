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

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <div className="layout">
          <Hero />
          <aside className="layout__rail layout__rail--hero">
            <SampleIssueCard />
          </aside>

          <Problem />
          <aside className="layout__rail layout__rail--problem">
            <CareerCycle />
          </aside>

          <Insight />
          <aside className="layout__rail layout__rail--insight">
            <TodayPlan />
            <div className="insight-rail__gap" />
            <StreakHeatmap />
          </aside>

          <HowItWorks />
          <aside className="layout__rail layout__rail--how">
            <FrogCard />
          </aside>

          <Features />
          <aside className="layout__rail layout__rail--features">
            <CuratorFunnel />
          </aside>

          <NonFeatures />
          <aside className="layout__rail layout__rail--nonfeatures">
            <CalmInbox />
          </aside>
        </div>

        <Signup />
      </main>
      <Footer />
    </>
  );
}
