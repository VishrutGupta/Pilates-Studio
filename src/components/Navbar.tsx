import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { PHONE_TEL, WHATSAPP_URL } from '../constants';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Sessions', href: '#sessions' },
  { label: 'Why Us', href: '#why' },
  { label: 'Locations', href: '#locations' },
  { label: 'Timings', href: '#timings' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-900/85 backdrop-blur-md border-b border-champagne-500/15'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-serif text-xl font-semibold tracking-wide text-cream-100 md:text-2xl">
            Pilates <span className="text-champagne-500">Armour</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream-300 transition-colors hover:text-champagne-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PHONE_TEL}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-500/40 text-champagne-500 transition-all hover:border-champagne-500 hover:bg-champagne-500/10"
            aria-label="Call to book"
          >
            <Phone size={16} />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold !px-5 !py-2.5 !text-xs">
            <MessageCircle size={15} /> Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-cream-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-champagne-500/10 bg-charcoal-900/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium tracking-wide text-cream-300 transition-colors hover:text-champagne-500"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex gap-3">
            <a href={PHONE_TEL} className="btn-outline flex-1 !py-3 !text-xs">
              <Phone size={15} /> Call
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold flex-1 !py-3 !text-xs">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
