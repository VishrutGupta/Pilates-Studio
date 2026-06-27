import { Clock, Sunrise, Sunset, CalendarClock, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const TIMINGS = [
  {
    icon: Clock,
    label: 'Open Daily',
    value: '7:00 AM – 9:00 PM',
  },
  {
    icon: Sunrise,
    label: 'Group · Morning Batches',
    value: '7:00 AM – 10:00 AM',
  },
  {
    icon: Sunset,
    label: 'Group · Evening Batches',
    value: '5:00 PM – 9:00 PM',
  },
  {
    icon: CalendarClock,
    label: 'Private Sessions',
    value: 'By Appointment',
  },
];

export default function Timings() {
  return (
    <section id="timings" className="relative overflow-hidden bg-olive-900 section-pad">
      <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-champagne-500/5 blur-[90px]" />

      <div className="mx-auto max-w-5xl">
        <div className="reveal mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow">Class Timings</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl font-light text-cream-100 md:text-5xl">
            Find Your <span className="italic text-champagne-500">Slot</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TIMINGS.map((timing) => {
            const Icon = timing.icon;
            return (
              <div
                key={timing.label}
                className="reveal flex items-center gap-5 rounded-xl border border-champagne-500/15 bg-charcoal-800/50 p-6 transition-all duration-300 hover:border-champagne-500/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne-500/40 bg-champagne-500/5">
                  <Icon size={20} className="text-champagne-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cream-400">
                    {timing.label}
                  </p>
                  <p className="mt-1 font-serif text-xl font-light text-cream-100">
                    {timing.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-serif text-lg font-light italic text-cream-300">
            DM or call to check slot availability.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle size={16} /> Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
