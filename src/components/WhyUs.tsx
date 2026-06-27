import { ShieldCheck, Target, RefreshCw, Clock } from 'lucide-react';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Expert Instructors',
    description: 'Certified, experienced, and movement-obsessed. Your form is our priority.',
  },
  {
    icon: Target,
    title: 'Personalised Approach',
    description: 'Every session is tailored to your body, your goals, and your pace.',
  },
  {
    icon: RefreshCw,
    title: 'All Levels Welcome',
    description: 'From first-timers to advanced practitioners — we meet you where you are.',
  },
  {
    icon: Clock,
    title: 'Daily 7am–9pm',
    description: 'Open every day with flexible slots that fit around your schedule.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-olive-900 section-pad">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-champagne-500/5 blur-[80px]" />

      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow">Why Pilates Armour</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl font-light text-cream-100 md:text-5xl">
            Built on <span className="italic text-champagne-500">Discipline</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="reveal group rounded-2xl border border-champagne-500/15 bg-charcoal-800/50 p-8 text-center transition-all duration-500 hover:border-champagne-500/50 hover:bg-charcoal-800"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-champagne-500/40 bg-champagne-500/5 transition-all duration-500 group-hover:scale-110 group-hover:border-champagne-500">
                  <Icon size={24} className="text-champagne-500" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-medium text-cream-100">
                  {pillar.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-cream-300">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
