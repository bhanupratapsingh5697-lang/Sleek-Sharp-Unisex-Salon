import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/90" />
      </div>

      {/* Content — stacked vertically, guaranteed to fit */}
      <div className="relative z-10 w-full px-5 text-center flex flex-col items-center gap-5 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#D4AF37] tracking-[0.25em] uppercase text-[10px] sm:text-xs font-semibold">
            Welcome to Jaipur's Finest
          </span>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1]">
            SLEEK &amp; SHARP
          </h1>
          <p className="text-[#D4AF37] italic font-serif font-light text-xl sm:text-3xl md:text-5xl">
            Unisex Salon
          </p>
        </motion.div>

        <motion.p
          className="text-white/65 text-xs sm:text-base font-light tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          Style. Confidence. Perfection.
        </motion.p>

        <motion.div
          className="flex flex-col xs:flex-row items-center justify-center gap-3 w-full max-w-xs xs:max-w-none"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
        >
          <button
            onClick={() => handleScroll("#booking")}
            className="w-full xs:w-auto px-7 py-3.5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white transition-all duration-300"
            data-testid="button-book-hero"
          >
            Book Appointment
          </button>
          <a
            href="tel:+918005887169"
            className="w-full xs:w-auto px-7 py-3.5 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-center"
            data-testid="button-call-hero"
          >
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#D4AF37] opacity-60 hover:opacity-100 transition-opacity p-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Scroll to About"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.button>
    </section>
  );
}
