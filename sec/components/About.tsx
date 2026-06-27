export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-olive-900 section-pad">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-champagne-500/5 blur-[100px]" />

      <div className="mx-auto max-w-5xl text-center">
        <div className="reveal mb-8 flex items-center justify-center gap-3">
          <span className="gold-rule" />
          <span className="eyebrow">Our Philosophy</span>
          <span className="gold-rule" />
        </div>

        <p className="reveal font-serif text-2xl font-light leading-relaxed text-cream-100 md:text-4xl md:leading-[1.4] text-balance">
          We believe movement is medicine.{' '}
          <span className="italic text-champagne-500">Pilates Armour</span> is where
          discipline meets grace — building bodies that are{' '}
          <span className="italic text-champagne-500">strong from the inside out.</span>
        </p>

        <div className="reveal mt-12 flex justify-center">
          <span className="gold-rule w-24" />
        </div>
      </div>
    </section>
  );
}
