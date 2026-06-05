import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Jaipur",
    review: "I've been to salons across Delhi and Mumbai, but SLEEK & SHARP is genuinely on another level. My hair color lasted perfectly for months. The entire experience felt like a boutique hotel stay.",
    rating: 5,
    img: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Rahul Meena",
    role: "Business Owner",
    review: "I was skeptical about a unisex salon in Murlipura, but after my first visit I became a permanent client. The beard sculpting and hot towel shave is an experience I now look forward to every two weeks.",
    rating: 5,
    img: "https://i.pravatar.cc/80?img=33",
  },
  {
    name: "Kavita Agarwal",
    role: "Architect",
    review: "My bridal package was flawless. The team understood exactly what I wanted — understated, glowing, and timeless. If you want excellence, this is the only salon in Jaipur worth visiting.",
    rating: 5,
    img: "https://i.pravatar.cc/80?img=56",
  },
  {
    name: "Arjun Singhvi",
    role: "IAS Officer",
    review: "Attention to detail here is extraordinary. The hair cut, the styling, even the way they explained each product — everything was top-tier. Finally, Jaipur has a salon that matches international standards.",
    rating: 5,
    img: "https://i.pravatar.cc/80?img=68",
  },
  {
    name: "Nisha Joshi",
    role: "Fashion Designer",
    review: "I've been recommending SLEEK & SHARP to everyone I know. The facial treatments are the best I've experienced in Rajasthan. It's a sanctuary, not just a salon.",
    rating: 5,
    img: "https://i.pravatar.cc/80?img=44",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-semibold block mb-4">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E2E2E] leading-tight">
            What Our <span className="italic text-[#D4AF37]">Guests</span> Say
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden min-h-[260px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
                data-testid={`testimonial-card-${current}`}
              >
                <div className="p-7 sm:p-10 border border-[#D4AF37]/20 bg-white shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <blockquote className="text-[#2E2E2E]/75 text-sm sm:text-base font-light leading-relaxed italic mb-6 font-serif">
                    "{t.review}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37]/40"
                    />
                    <div>
                      <p className="font-semibold text-[#2E2E2E] text-sm font-serif">{t.name}</p>
                      <p className="text-[#D4AF37] text-xs tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#D4AF37] w-6" : "bg-[#D4AF37]/30 w-1.5"}`}
                  data-testid={`testimonial-dot-${i}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center transition-all duration-300"
                data-testid="testimonial-prev"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-[#D4AF37]" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center transition-all duration-300"
                data-testid="testimonial-next"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
