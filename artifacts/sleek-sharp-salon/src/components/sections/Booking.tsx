import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Phone, User, MessageSquare, Scissors } from "lucide-react";

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  message: z.string().optional(),
});

type BookingData = z.infer<typeof bookingSchema>;

const SERVICES = [
  "Hair Cut & Styling",
  "Hair Spa",
  "Hair Coloring",
  "Beard Styling",
  "Shaving",
  "Facial Treatments",
  "Cleanup",
  "Manicure",
  "Pedicure",
  "Bridal Makeup",
  "Groom Makeup",
  "Skin Treatments",
];

const inputClass =
  "w-full bg-white/5 border border-white/20 focus:border-[#D4AF37] text-white placeholder:text-white/30 px-4 py-3 text-sm outline-none transition-colors duration-300";

export default function Booking() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", service: "", date: "", message: "" },
  });

  const onSubmit = async (_data: BookingData) => {
    await new Promise((r) => setTimeout(r, 800));
    toast({
      title: "Appointment Requested!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    reset();
  };

  return (
    <section
      id="booking"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #121212 0%, #1c1507 60%, #121212 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1600&q=20')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-semibold block mb-4">Reserve Your Chair</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
            Book an <span className="italic text-[#D4AF37]">Appointment</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div
            className="p-6 sm:p-10 border border-white/10"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-widest mb-2">
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Your full name"
                    className={inputClass}
                    data-testid="input-name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-widest mb-2">
                    <Phone className="w-3 h-3" /> Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                    data-testid="input-phone"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Service + Date */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-widest mb-2">
                    <Scissors className="w-3 h-3" /> Service
                  </label>
                  <select
                    {...register("service")}
                    className="w-full bg-[#1a1a1a] border border-white/20 focus:border-[#D4AF37] text-white px-4 py-3 text-sm outline-none transition-colors duration-300 appearance-none"
                    data-testid="select-service"
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-widest mb-2">
                    <CalendarDays className="w-3 h-3" /> Preferred Date
                  </label>
                  <input
                    {...register("date")}
                    type="date"
                    className="w-full bg-white/5 border border-white/20 focus:border-[#D4AF37] text-white/80 px-4 py-3 text-sm outline-none transition-colors duration-300 [color-scheme:dark]"
                    data-testid="input-date"
                  />
                  {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-widest mb-2">
                  <MessageSquare className="w-3 h-3" /> Notes (optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Any special requests..."
                  className={`${inputClass} resize-none`}
                  data-testid="textarea-message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                data-testid="button-book-appointment"
              >
                {isSubmitting ? "Sending..." : "Book Appointment"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
