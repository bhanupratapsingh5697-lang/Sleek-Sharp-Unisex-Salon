import { motion } from "framer-motion";
import { Users, Package, Shield, BadgeIndianRupee, Cpu, ThumbsUp } from "lucide-react";

const FEATURES = [
  { icon: Users, title: "Experienced Professionals", desc: "Our master stylists bring years of specialized training and a passion for flawless results." },
  { icon: Package, title: "Premium Products", desc: "We use only internationally acclaimed, dermatologist-approved products for every service." },
  { icon: Shield, title: "Hygienic Environment", desc: "Rigorous sterilization ensures every tool and surface meets five-star standards." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Luxury-grade services at transparent, honest prices — exceptional value without compromise." },
  { icon: Cpu, title: "Modern Equipment", desc: "State-of-the-art styling tools for precision and superior outcomes on every visit." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Our guests leave not just satisfied — but genuinely transformed. Your confidence is our craft." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-semibold block mb-4">The Difference</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground leading-tight">
            Why Choose <span className="italic text-[#D4AF37]">SLEEK &amp; SHARP</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group p-7 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 bg-white hover:shadow-lg transition-all duration-300"
              data-testid={`feature-card-${feature.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="w-13 h-13 bg-[#D4AF37]/10 border border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/20 flex items-center justify-center mb-5 transition-all duration-300" style={{ width: 52, height: 52 }}>
                <feature.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-serif text-[#2E2E2E] mb-2">{feature.title}</h3>
              <p className="text-[#2E2E2E]/55 text-sm leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
