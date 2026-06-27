import { lazy, Suspense, useEffect, useState } from 'react';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { PHONE_TEL, WHATSAPP_URL } from '../constants';
import GoldParticles from './GoldParticles';

const HeroRing = lazy(() => import('./HeroRing'));

function MobileRingFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-64 w-64 rounded-full border border-champagne-500/30 animate-spin-slow" />
      <div className="absolute h-48 w-48 rounded-full border border-champagne-500/50 animate-spin-slow [animation-direction:reverse]" />
      <div className="absolute h-32 w-32 rounded-full border-2 border-champagne-500/70 animate-float" />
      <div className="absolute h-64 w-64 rounded-full bg-champagne-500/10 blur-3xl" />
    </div>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-charcoal-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-800" />
      <div className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-500/5 blur-[120px]" />

      {/* Gold dust particles */}
      <GoldParticles />

      {/* 3D Ring */}
      <div className="absolute inset-0 flex items-center justify-center md:left-1/2 md:translate-x-[35%]">
        <div className="h-[60vh] w-full md:h-[80vh] md:w-[80vh]">
          {isMobile ? (
            <MobileRingFallback />
          ) : (
            <Suspense fallback={<MobileRingFallback />}>
              <HeroRing />
            </Suspense>
          )}
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 md:px-12">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow">Boutique Pilates · Gurgaon</span>
          </div>

          <h1 className="font-serif text-5xl font-light leading-[1.05] text-cream-100 sm:text-6xl md:text-7xl lg:text-8xl">
            Strength in
            <br />
            <span className="italic text-champagne-500">Movement</span>
          </h1>

          <p className="mt-8 max-w-md font-sans text-base font-light leading-relaxed text-cream-300 md:text-lg">
            Pilates Armour — a boutique Pilates studio in Gurgaon where discipline
            meets grace. Building bodies that are strong from the inside out.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={PHONE_TEL} className="btn-gold">
              <Phone size={16} /> Call to Book
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-cream-400">
            <span>Sector 45</span>
            <span className="h-1 w-1 rounded-full bg-champagne-500/60" />
            <span>Sector 52</span>
            <span className="h-1 w-1 rounded-full bg-champagne-500/60" />
            <span>Open Daily · 7am–9pm</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown size={24} className="text-champagne-500/60" />
      </div>
    </section>
  );
}
