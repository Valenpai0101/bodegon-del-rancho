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
              n <strong>Ituzaingó 759</strong>, en el corazón de Pilar, nació
              El Bodegón del Rancho con una idea sencilla: ofrecer comida
              casera, abundante y llena de sabor, como la que reúne a la
              familia alrededor de la mesa.
            </motion.p>
            <motion.p variants={fadeUp}>
              Desde el primer día apostamos por la cocina tradicional, el buen
              servicio y un ambiente cálido donde cada cliente se sienta como
              en casa. Hoy, con un chef que suma más de 17 años de
              experiencia, seguimos preparando cada plato con la misma
              dedicación y pasión que nos vio crecer.
            </motion.p>
            <motion.p variants={fadeUp}>
              Nuestro bodegón es un punto de encuentro para vecinos, familias
              y amigos que disfrutan de compartir una buena comida. Empanadas
              caseras, carnes a la parrilla, platos tradicionales y ese café
              de sobremesa que invita a quedarse un rato más.
            </motion.p>
            <motion.p variants={fadeUp}>
              En El Bodegón del Rancho, creemos que los mejores momentos
              siempre empiezan alrededor de <em>una buena mesa</em>.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4 flex gap-8">
              <div>
                <span className="font-display text-4xl text-rust">+17</span>
                <p className="text-xs uppercase tracking-widest text-ink/60 mt-1">
                  Años de experiencia
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

            <motion.div variants={fadeUp} className="pt-4 flex gap-8">
              <div>
                <span className="font-display text-4xl text-rust">+17</span>
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
  src="/images/historia-1.jpeg"
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
