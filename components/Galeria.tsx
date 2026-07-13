"use client";
import { motion } from "framer-motion";
import { Ribbon } from "./Ribbon";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
    alt: "Mesa servida con abundancia de platos",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    alt: "Empanadas caseras recién horneadas",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop",
    alt: "Parrilla y bife de chorizo",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
    alt: "Salón principal de madera",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    alt: "Copa de vino en la mesa",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    alt: "Café de sobremesa",
    span: "",
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Ribbon size="md">Galería</Ribbon>
          <p className="mt-6 font-hand text-2xl md:text-3xl text-cuero-dark">
            Un vistazo a nuestra mesa y nuestra gente
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[160px] md:auto-rows-[200px] gap-3">
          {gallery.map((g, i) => (
            <motion.div
              key={g.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden group carved-box ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115 grayscale-[10%] sepia-[8%] group-hover:grayscale-0 group-hover:sepia-0"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
