import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PACKAGES = [
  {
    name: "Basic",
    price: "₹499",
    tagline: "Essential Grooming",
    popular: false,
    features: ["Hair Cut & Styling", "Beard Sculpting", "Precision Shave", "Styling Finish", "Hair Wash"],
  },
  {
    name: "Premium",
    price: "₹1,499",
    tagline: "The Full Experience",
    popular: true,
    features: ["Everything in Basic", "Luxury Hair Spa", "Deep Facial Treatment", "Scalp Massage", "Premium Products", "Complimentary Refreshment"],
  },
  {
    name: "Bridal / Groom",
    price: "₹4,999",
    tagline: "Your Special Day",
    popular: false,
    features: ["Full Bridal / Groom Makeup", "Hair Styling & Setting", "Luxury Facial + Skin Prep", "Manicure & Pedicure", "Waxing & Threading", "Trial Session Included", "Day-Of Touch-Up"],
  },
];

export default function Pricing() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #121212 0%, #1c1507 50%, #121212 100%)" }}
    >
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-semibold block mb-4">Investment</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
            Our <span className="italic text-[#D4AF37]">Packages</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-white/45 mt-5 max-w-md mx-auto text-sm font-light">
            Transparent pricing, no hidden charges. Every package includes a complimentary consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col p-7 border transition-all duration-400 ${
                pkg.popular
                  ? "border-[#D4AF37] shadow-[0_0_36px_rgba(212,175,55,0.2)]"
                  : "border-white/10 hover:border-[#D4AF37]/40"
              }`}
              style={{
                background: pkg.popular
                  ? "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(18,18,18,0.9) 100%)"
                  : "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
              }}
              data-testid={`pricing-card-${pkg.name.replace(/[\s/]+/g, "-").toLowerCase()}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest px-5 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-7">
                <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-1">{pkg.tagline}</p>
                <h3 className="text-xl font-serif text-white mb-4">{pkg.name}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-4xl sm:text-5xl font-serif text-[#D4AF37]">{pkg.price}</span>
                  <span className="text-white/35 text-xs mb-1.5">/ session</span>
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-7">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-white/65 font-light">
                    <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className={`w-full py-3.5 text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[#D4AF37] text-black hover:bg-white"
                    : "border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                }`}
                data-testid={`pricing-book-${pkg.name.replace(/[\s/]+/g, "-").toLowerCase()}`}
              >
                Book This Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
