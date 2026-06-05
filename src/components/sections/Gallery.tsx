import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", alt: "Luxury salon interior" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", alt: "Hair styling session" },
  { src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80", alt: "Beard grooming" },
  { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80", alt: "Manicure treatment" },
  { src: "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=800&q=80", alt: "Facial treatment" },
  { src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80", alt: "Makeup artistry" },
  { src: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&q=80", alt: "Hair coloring" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80", alt: "Barber precision cut" },
  { src: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?w=800&q=80", alt: "Bridal makeup" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80", alt: "Spa hair treatment" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80", alt: "Salon chair styling" },
  { src: "https://images.unsplash.com/photo-1582095133179-bfd08e2533da?w=800&q=80", alt: "Premium pedicure" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));

  return (
    <section
      id="gallery"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #FAF7F2 0%, #f0ebe0 100%)" }}
    >
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-semibold block mb-4">Our Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E2E2E] leading-tight">
            The <span className="italic text-[#D4AF37]">Gallery</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </motion.div>

        {/* Responsive grid — 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden cursor-pointer group relative aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => openLightbox(i)}
              data-testid={`gallery-image-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest border border-white px-3 py-1.5">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-[#D4AF37] transition-colors z-10 p-2"
              onClick={closeLightbox}
              data-testid="lightbox-close"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#D4AF37] transition-colors z-10 p-3"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              data-testid="lightbox-prev"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightboxIndex}
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-w-[88vw] max-h-[80vh] object-contain shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#D4AF37] transition-colors z-10 p-3"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              data-testid="lightbox-next"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
