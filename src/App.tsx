import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sessions from './components/Sessions';
import WhyUs from './components/WhyUs';
import Locations from './components/Locations';
import Timings from './components/Timings';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-charcoal-900">
      <div className="grain" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Sessions />
        <WhyUs />
        <Locations />
        <Timings />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
