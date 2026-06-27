import { Users, UserRound, MessageCircle, Phone } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';
import { WHATSAPP_URL, PHONE_TEL } from '../constants';

const SESSIONS = [
  {
    title: 'Group Sessions',
    icon: Users,
    description:
      'Train alongside like-minded movers in our small-group sessions. High attention, low ego. All fitness levels welcome.',
    features: [
      'Energetic, community-driven classes',
      'Suitable for all levels',
      'Morning & evening batches available',
    ],
    cta: 'WhatsApp to Book',
    href: WHATSAPP_URL,
    icon2: MessageCircle,
  },
  {
    title: 'Private Sessions',
    icon: UserRound,
    description:
      'A dedicated hour, just you and your instructor. Fully tailored to your body, your goals, and your pace.',
    features: [
      '1-on-1 with a certified instructor',
      'Tailored programming to your goals',
      'Body assessment included',
    ],
    cta: 'Call to Book',
    href: PHONE_TEL,
    icon2: Phone,
  },
];

export default function Sessions() {
  const card1Ref = useTilt<HTMLDivElement>(true);
  const card2Ref = useTilt<HTMLDivElement>(true);

  const refs = [card1Ref, card2Ref];

  return (
    <section id="sessions" className="relative bg-charcoal-900 section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow">Sessions</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl font-light text-cream-100 md:text-5xl">
            Choose Your <span className="italic text-champagne-500">Practice</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SESSIONS.map((session, i) => {
            const Icon = session.icon;
            const CtaIcon = session.icon2;
            return (
              <div
                key={session.title}
                ref={refs[i]}
                className="tilt-card reveal group relative overflow-hidden rounded-2xl border-t-2 border-champagne-500 bg-charcoal-800 p-8 transition-all duration-500 hover:border-champagne-400 hover:shadow-[0_0_40px_rgba(201,169,110,0.15)] md:p-12"
              >
                {/* Gold corner accents */}
                <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-champagne-500/30" />
                <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-champagne-500/30" />

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-champagne-500/40 bg-champagne-500/5">
                  <Icon size={28} className="text-champagne-500" />
                </div>

                <h3 className="mb-4 font-serif text-3xl font-light text-cream-100">
                  {session.title}
                </h3>

                <p className="mb-8 font-sans text-base font-light leading-relaxed text-cream-300">
                  {session.description}
                </p>

                <ul className="mb-10 space-y-3">
                  {session.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm font-light text-cream-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-champagne-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={session.href}
                  target={session.href.startsWith('http') ? '_blank' : undefined}
                  rel={session.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="btn-gold w-full"
                >
                  <CtaIcon size={16} /> {session.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
