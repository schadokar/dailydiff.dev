import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
      </main>
    </>
  );
}
