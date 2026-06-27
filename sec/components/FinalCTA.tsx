import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { PHONE_TEL, WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 section-pad">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-500/8 blur-[120px]" />

      {/* Decorative ring */}
      <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne-500/10 animate-spin-slow" />
      <div className="absolute left-1/2 top-1/2 h-[35vh] w-[35vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne-500/15 animate-spin-slow [animation-direction:reverse]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="reveal mb-6 flex items-center justify-center gap-3">
          <span className="gold-rule" />
          <span className="eyebrow">Begin</span>
          <span className="gold-rule" />
        </div>

        <h2 className="reveal font-serif text-5xl font-light text-cream-100 md:text-7xl">
          Ready to <span className="italic text-champagne-500">move?</span>
        </h2>

        <p className="reveal mx-auto mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-cream-300 md:text-lg">
          DM us on Instagram or give us a call — we'll help you find the right session.
        </p>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={PHONE_TEL} className="btn-gold">
            <Phone size={16} /> Call to Book
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal mt-12 inline-flex items-center gap-2 text-sm font-medium text-cream-300 transition-colors hover:text-champagne-500"
        >
          <Instagram size={18} className="text-champagne-500" />
          {INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  );
}
