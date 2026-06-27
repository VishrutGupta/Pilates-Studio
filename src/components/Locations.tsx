import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { LOCATIONS, PHONE_TEL, WHATSAPP_URL } from '../constants';

export default function Locations() {
  return (
    <section id="locations" className="relative bg-charcoal-900 section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow">Locations</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl font-light text-cream-100 md:text-5xl">
            Find Us in <span className="italic text-champagne-500">Gurgaon</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {LOCATIONS.map((location) => (
            <div
              key={location.name}
              className="reveal overflow-hidden rounded-2xl border border-champagne-500/20 bg-charcoal-800"
            >
              {/* Decorative map panel */}
              <a
                href={location.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-56 w-full overflow-hidden bg-olive-900"
              >
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(201,169,110,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,169,110,0.25) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-500/15 blur-3xl transition-all duration-500 group-hover:bg-champagne-500/25" />
                {/* Pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-champagne-500 bg-charcoal-900/80 backdrop-blur-sm">
                      <MapPin size={22} className="text-champagne-500" />
                    </div>
                    <div className="mt-1 h-3 w-0.5 bg-champagne-500/60" />
                  </div>
                </div>
                {/* Hover label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-champagne-500/40 bg-charcoal-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-champagne-500 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  Open in Google Maps
                </div>
              </a>

              {/* Card content */}
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <MapPin size={20} className="text-champagne-500" />
                  <h3 className="font-serif text-2xl font-medium text-cream-100">
                    {location.name}
                  </h3>
                </div>

                <p className="mb-6 text-sm font-light text-cream-300">
                  {location.address}
                </p>

                <a
                  href={location.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-champagne-500 transition-colors hover:text-champagne-400"
                >
                  Open in Google Maps <ExternalLink size={13} />
                </a>

                <div className="flex gap-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 !py-3 !text-xs">
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                  <a href={PHONE_TEL} className="btn-gold flex-1 !py-3 !text-xs">
                    <Phone size={15} /> Call
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
