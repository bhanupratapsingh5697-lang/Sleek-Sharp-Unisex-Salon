import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactData = z.infer<typeof contactSchema>;

const inputClass =
  "w-full border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-[#2E2E2E] placeholder:text-[#2E2E2E]/40 py-3 text-sm outline-none transition-colors duration-300";

export default function Contact() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (_data: ContactData) => {
    await new Promise((r) => setTimeout(r, 600));
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-semibold block mb-4">Find Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E2E2E] leading-tight">
            Get in <span className="italic text-[#D4AF37]">Touch</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="flex gap-4">
              <div className="w-11 h-11 bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif text-[#2E2E2E] text-base mb-1">Our Location</h4>
                <p className="text-[#2E2E2E]/60 text-sm leading-relaxed">
                  Bank Colony, Murlipura Scheme,<br />
                  Murlipura, Jaipur, Rajasthan 302039
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif text-[#2E2E2E] text-base mb-1">Phone</h4>
                <a
                  href="tel:+918005887169"
                  className="text-[#D4AF37] font-semibold hover:text-[#2E2E2E] transition-colors text-base"
                  data-testid="link-phone"
                >
                  +91 8005887169
                </a>
                <p className="text-[#2E2E2E]/40 text-xs mt-0.5">Mon–Sun: 9:00 AM – 8:30 PM</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+918005887169"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#121212] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs uppercase tracking-widest font-bold"
                data-testid="button-call-now"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/918005887169"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white hover:bg-[#1ebe5c] transition-all duration-300 text-xs uppercase tracking-widest font-bold"
                data-testid="button-whatsapp-contact"
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-[#D4AF37]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0!2d75.8!3d26.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db73a0aaaaaab%3A0xbe2a52c1a86d7d0c!2sMurlipura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SLEEK & SHARP Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-7 sm:p-9 border border-[#D4AF37]/20 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-7">
                <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif text-xl text-[#2E2E2E]">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className={inputClass}
                    data-testid="contact-input-name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className={inputClass}
                    data-testid="contact-input-email"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Your message..."
                    className={`${inputClass} resize-none`}
                    data-testid="contact-textarea-message"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#121212] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs uppercase tracking-widest font-bold disabled:opacity-60"
                  data-testid="contact-button-send"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
