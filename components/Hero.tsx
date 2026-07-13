"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, BookOpen, CalendarCheck } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop"
          alt="Mesa abundante de comida casera en El Bodegón del Rancho"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/60 to-ink/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(184,134,59,0.4), transparent 50%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/images/logo.png"
            alt="El Bodegón del Rancho"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-hand text-5xl md:text-7xl text-paper leading-tight drop-shadow-lg"
        >
          Buena comida, buenos momentos.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-5 font-body text-paper/90 text-base md:text-lg max-w-xl leading-relaxed"
        >
          Desde nuestra cocina en Pilar, cocinamos como en casa: recetas de
          siempre, mesas largas y la puerta abierta para que la familia y los
          amigos se sienten a compartir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#carta"
            className="group flex items-center justify-center gap-2 bg-rust hover:bg-rust-dark text-paper font-display uppercase tracking-wider text-sm px-8 py-4 shadow-ribbon transition-all hover:-translate-y-0.5"
          >
            <BookOpen size={17} /> Ver Carta
          </a>
          <a
            href="#reservas"
            className="flex items-center justify-center gap-2 border-2 border-paper/70 text-paper font-display uppercase tracking-wider text-sm px-8 py-4 hover:bg-paper hover:text-ink transition-all hover:-translate-y-0.5"
          >
            <CalendarCheck size={17} /> Reservar Mesa
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-paper/80"
      >
        <ChevronDown size={30} />
      </motion.div>
    </section>
  );
}
