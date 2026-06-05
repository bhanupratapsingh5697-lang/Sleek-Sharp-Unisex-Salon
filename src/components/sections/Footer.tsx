import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES_LIST = [
  "Hair Cut & Styling",
  "Hair Coloring",
  "Beard Styling",
  "Facial Treatments",
  "Bridal Makeup",
  "Skin Treatments",
];

const SOCIALS = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaWhatsapp, href: "https://wa.me/918005887169", label: "WhatsApp" },
];

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0a0a0a" }} className="border-t border-white/10">
      <div className="container mx-auto px-5 md:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#D4AF37] font-serif text-2xl tracking-wider mb-1">SLEEK &amp; SHARP</h3>
            <p className="text-white/35 text-xs tracking-widest uppercase mb-4">Unisex Salon · Jaipur</p>
            <p className="text-white/45 text-sm font-light leading-relaxed mb-6">
              Jaipur's premium grooming destination. Precision, luxury, and elegance in every visit.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/15 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white/40 flex items-center justify-center transition-all duration-300"
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-serif text-base mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-white/45 hover:text-[#D4AF37] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#D4AF37] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-serif text-base mb-5 tracking-wide">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    onClick={(e) => scrollTo(e, "#services")}
                    className="text-white/45 hover:text-[#D4AF37] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#D4AF37] group-hover:w-3 transition-all duration-300" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-serif text-base mb-5 tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <p className="text-white/45 text-sm leading-relaxed">
                  Bank Colony, Murlipura Scheme,<br />Murlipura, Jaipur, RJ 302039
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+918005887169"
                  className="text-white/45 hover:text-[#D4AF37] text-sm transition-colors duration-300"
                  data-testid="footer-phone"
                >
                  +91 8005887169
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <FaWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/918005887169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/45 hover:text-[#25D366] text-sm transition-colors duration-300"
                  data-testid="footer-whatsapp"
                >
                  WhatsApp Us
                </a>
              </div>
              <p className="text-white/25 text-xs">Mon–Sun: 9:00 AM – 8:30 PM</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-white/25 text-xs">
            &copy; 2025 SLEEK &amp; SHARP UNISEX SALON. All rights reserved.
          </p>
          <p className="text-white/15 text-xs italic">Style. Confidence. Perfection.</p>
        </div>
      </div>
    </footer>
  );
}
