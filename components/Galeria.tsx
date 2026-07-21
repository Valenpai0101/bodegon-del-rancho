"use client";
import { motion } from "framer-motion";
import { Ribbon } from "./Ribbon";

const gallery = [
  {
    src: "/images/galeria-1.jpg",
    alt: "Picada de fiambres y quesos de El Bodegón del Rancho",
    span: "row-span-2",
  },
  {
    src: "/images/galeria-2.jpg",
    alt: "Salón de El Bodegón del Rancho",
    span: "",
  },
  {
    src: "/images/galeria-3.jpg",
    alt: "Milanesas napolitanas con papas fritas",
    span: "",
  },
  {
    src: "/images/galeria-4.jpg",
    alt: "Salón de El Bodegón del Rancho",
    span: "row-span-2",
  },
  {
    src: "/images/galeria-5.jpg",
    alt: "Fachada de El Bodegón del Rancho",
    span: "",
  },
  {
    src: "/images/galeria-6.jpg",
    alt: "Barra de bebidas de El Bodegón del Rancho",
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
