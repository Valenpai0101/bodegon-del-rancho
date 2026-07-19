"use client";
import { motion } from "framer-motion";
import { Ribbon } from "./Ribbon";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Historia() {
  return (
    <section id="historia" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <Ribbon size="md">Nuestra Historia</Ribbon>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-5 font-body text-ink/90 text-[1.05rem] leading-relaxed"
          >
            <motion.p variants={fadeUp}>
              <span className="font-display text-3xl float-left mr-3 mt-1 text-rust leading-[0.8]">
                E
              </span>
              n <strong>Ituzaingó 759</strong>, en el corazón de Pilar, abrimos
              las puertas de El Bodegón del Rancho con una idea simple:
              cocinar como se cocina en casa, sin apuro y sin vueltas.
            </motion.p>
            <motion.p variants={fadeUp}>
              Empezamos con unas mesas de madera, una parrilla que nunca se
              apaga y la certeza de que la mejor receta es la que se comparte.
              Con el tiempo, el rancho se llenó de vecinos, de familias enteras
              los domingos, de amigos que se quedan "una picada más".
            </motion.p>
            <motion.p variants={fadeUp}>
              Hoy seguimos siendo lo mismo de siempre: un lugar de puertas
              abiertas, empanadas caseras, asado de fin de semana y café de
              sobremesa. Porque para nosotros, <em>comer rico es vivir
              mejor</em>.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4 flex gap-8">
              <div>
                <span className="font-display text-4xl text-rust">+15</span>
                <p className="text-xs uppercase tracking-widest text-ink/60 mt-1">
                  Años de tradición
                </p>
              </div>
              <div>
                <span className="font-display text-4xl text-rust">100%</span>
                <p className="text-xs uppercase tracking-widest text-ink/60 mt-1">
                  Cocina casera
                </p>
              </div>
              <div>
                <span className="font-display text-4xl text-rust">6</span>
                <p className="text-xs uppercase tracking-widest text-ink/60 mt-1">
                  Días a la semana
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="carved-box p-3 bg-paper-dark rotate-2 shadow-xl">
             <img
  src="/images/historia-1.jpg"
  alt="Salón de El Bodegón del Rancho"
  className="w-full h-[420px] object-cover grayscale-[15%] sepia-[15%]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 carved-box bg-paper p-3 -rotate-3 shadow-xl hidden sm:block">
              <img
  src="/images/historia-2.jpg"
  alt="Plato de El Bodegón del Rancho"
  className="w-40 h-28 object-cover grayscale-[15%] sepia-[15%]"
/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
