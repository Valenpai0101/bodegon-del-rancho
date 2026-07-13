"use client";
import { motion } from "framer-motion";
import { Ribbon } from "./Ribbon";
import { specialties } from "@/lib/menu-data";

const images = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626200924853-27d2c0f76d0e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=900&auto=format&fit=crop",
];

export function Especialidades() {
  return (
    <section
      id="especialidades"
      className="relative py-24 md:py-32 px-6 bg-cuero-darker text-paper overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(184,134,59,0.5), transparent 40%), radial-gradient(circle at 85% 85%, rgba(184,134,59,0.4), transparent 45%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <Ribbon size="md">Especialidades de la Casa</Ribbon>
          <p className="mt-6 font-hand text-2xl md:text-3xl text-gold-light">
            Lo que no te podés ir sin probar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((sp, i) => (
            <motion.div
              key={sp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative bg-paper text-ink overflow-hidden shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={images[i]}
                  alt={sp.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] sepia-[10%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 font-display text-lg text-paper bg-rust px-3 py-1">
                  {sp.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display uppercase tracking-wide text-lg text-cuero-darker">
                  {sp.name}
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed font-body">
                  {sp.desc}
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
