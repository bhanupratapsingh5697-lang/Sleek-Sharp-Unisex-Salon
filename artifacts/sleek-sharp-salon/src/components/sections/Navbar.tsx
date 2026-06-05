import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close menu on scroll
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    // Small delay so menu closes before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-black/97 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-5 md:px-8 flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="text-xl md:text-2xl font-serif font-bold text-[#D4AF37] tracking-wider text-left"
          data-testid="nav-logo"
        >
          SLEEK &amp; SHARP
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-xs uppercase tracking-widest text-white/75 hover:text-[#D4AF37] transition-colors duration-300 relative group"
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => scrollTo("#booking")}
            className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase text-xs tracking-widest font-bold"
            data-testid="nav-book-now"
          >
            Book Now
          </button>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden text-[#D4AF37] p-2 -mr-2 relative z-10"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          data-testid="nav-hamburger"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu — absolutely positioned, NO overflow-hidden */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-black border-b border-[#D4AF37]/20 shadow-2xl"
            style={{ zIndex: 49 }}
          >
            <div className="container mx-auto px-5 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left py-3.5 px-2 text-base uppercase tracking-widest text-white/80 hover:text-[#D4AF37] active:text-[#D4AF37] transition-colors duration-200 border-b border-white/5 last:border-0 font-light"
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 + 0.05, duration: 0.2 }}
                onClick={() => scrollTo("#booking")}
                className="mt-4 w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm hover:bg-white active:bg-white transition-all duration-200"
                data-testid="mobile-nav-book"
              >
                Book Appointment
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
