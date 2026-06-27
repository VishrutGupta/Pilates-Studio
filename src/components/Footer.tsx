import { Phone, MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import {
  PHONE,
  PHONE_TEL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  LOCATIONS,
} from '../constants';

export default function Footer() {
  return (
    <footer className="border-t border-champagne-500/15 bg-charcoal-950 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-cream-100">
              Pilates <span className="text-champagne-500">Armour</span>
            </h3>
            <p className="mt-3 font-serif text-sm font-light italic text-cream-300">
              Strength in Movement
            </p>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-cream-400">
              Boutique Pilates studio in Gurgaon. Where discipline meets grace.
            </p>
          </div>

          {/* Locations */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-champagne-500">
              Studios
            </h4>
            <ul className="space-y-3">
              {LOCATIONS.map((loc) => (
                <li key={loc.name} className="flex items-start gap-2 text-sm font-light text-cream-300">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-champagne-500/70" />
                  <span>{loc.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-champagne-500">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light text-cream-300">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2 transition-colors hover:text-champagne-500">
                  <Phone size={15} className="text-champagne-500/70" /> {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-champagne-500"
                >
                  <MessageCircle size={15} className="text-champagne-500/70" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-champagne-500"
                >
                  <Instagram size={15} className="text-champagne-500/70" /> {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-champagne-500">
              Hours
            </h4>
            <div className="flex items-start gap-2 text-sm font-light text-cream-300">
              <Clock size={15} className="mt-0.5 shrink-0 text-champagne-500/70" />
              <div>
                <p>Open Daily</p>
                <p>7:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-champagne-500/10 pt-8 sm:flex-row">
          <p className="text-xs font-light text-cream-400">
            © {new Date().getFullYear()} Pilates Armour. All rights reserved.
          </p>
          <p className="text-xs font-light text-cream-400">
            Boutique Pilates · Gurgaon
          </p>
        </div>
      </div>
    </footer>
  );
}
