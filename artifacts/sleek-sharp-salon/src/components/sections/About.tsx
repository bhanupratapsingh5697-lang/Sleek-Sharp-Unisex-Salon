import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Salon styling"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            {/* Decorative elements — hidden on mobile to prevent overflow */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-2/3 aspect-square bg-[#D4AF37]/10 z-0" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-1/2 aspect-square border border-[#D4AF37]/25 z-0" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#D4AF37] tracking-widest uppercase text-xs font-semibold mb-4">
              The SLEEK &amp; SHARP Experience
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Where Every Visit Feels Like A{" "}
              <span className="italic text-[#D4AF37]">Ritual</span>
            </h3>

            <div className="space-y-5 text-foreground/75 font-light leading-relaxed text-sm sm:text-base">
              <p>
                Located in the heart of Jaipur, SLEEK &amp; SHARP is more than just a salon — it's a sanctuary for those who appreciate the finer details. We've redefined grooming by combining world-class techniques with an atmosphere of unhurried luxury.
              </p>
              <p>
                Our philosophy is simple: precise execution, premium products, and an environment that rivals a boutique five-star hotel. From whisper-quiet scissor work to rejuvenating skin rituals, every service is tailored to elevate your confidence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 border-t border-[#D4AF37]/20 pt-8">
              {[
                { value: "5+", label: "Years of\nExcellence" },
                { value: "500+", label: "Happy\nClients" },
                { value: "15+", label: "Expert\nStylists" },
              ].map((stat) => (
                <div key={stat.value}>
                  <h4 className="text-3xl sm:text-4xl font-serif text-[#D4AF37] mb-1">{stat.value}</h4>
                  <p className="text-xs uppercase tracking-wider text-foreground/60 whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
