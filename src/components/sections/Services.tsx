import { motion } from "framer-motion";
import { Scissors, Sparkles, Palette, User, Brush, Star, Leaf, Gem, Footprints, Crown, Award, Zap } from "lucide-react";

const SERVICES = [
  { icon: Scissors, title: "Hair Cut & Styling", desc: "Precision cuts tailored to your face shape and lifestyle, styled to perfection." },
  { icon: Sparkles, title: "Hair Spa", desc: "Deeply nourishing treatments that restore your hair's natural vitality and shine." },
  { icon: Palette, title: "Hair Coloring", desc: "Expert coloring, highlights, and balayage using premium international brands." },
  { icon: User, title: "Beard Styling", desc: "Sculpted beard grooming for the modern gentleman who demands the best." },
  { icon: Brush, title: "Shaving", desc: "Traditional hot-towel shaving experience for an impeccably smooth finish." },
  { icon: Star, title: "Facial Treatments", desc: "Revitalizing facials using luxury skincare formulas for radiant, glowing skin." },
  { icon: Leaf, title: "Cleanup", desc: "Deep cleansing treatments to remove impurities and refresh your complexion." },
  { icon: Gem, title: "Manicure", desc: "Meticulous nail care and polish for beautifully groomed, elegant hands." },
  { icon: Footprints, title: "Pedicure", desc: "Rejuvenating foot care rituals leaving your feet soft, smooth, and renewed." },
  { icon: Crown, title: "Bridal Makeup", desc: "Flawless, long-lasting bridal transformations for your most important day." },
  { icon: Award, title: "Groom Makeup", desc: "Refined grooming and subtle enhancement for the confident modern groom." },
  { icon: Zap, title: "Skin Treatments", desc: "Advanced skin therapies targeting specific concerns for visibly healthier skin." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #121212 0%, #1a1208 50%, #121212 100%)" }}
    >
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-semibold block mb-4">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
            Our <span className="italic text-[#D4AF37]">Signature</span> Services
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative p-5 sm:p-7 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-400 cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
              }}
              data-testid={`service-card-${service.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-transparent group-hover:from-[#D4AF37]/5 transition-all duration-400" />
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#D4AF37]/40 group-hover:border-[#D4AF37] flex items-center justify-center mb-4 transition-all duration-400 group-hover:bg-[#D4AF37]/10">
                  <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                </div>
                <h3 className="text-white font-serif text-sm sm:text-base mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/45 text-xs leading-relaxed font-light group-hover:text-white/65 transition-colors duration-300 hidden sm:block">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
