"use client";
import { motion } from "framer-motion";
import { Users, PartyPopper, Briefcase } from "lucide-react";
import { Ribbon } from "./Ribbon";
import { businessInfo } from "@/lib/menu-data";

const events = [
  {
    icon: Users,
    title: "Reuniones Familiares",
    desc: "Cumpleaños, aniversarios y domingos en familia. Armamos la mesa larga y el menú a tu medida.",
  },
  {
    icon: PartyPopper,
    title: "Celebraciones",
    desc: "Despedidas, festejos con amigos y brindis de fin de año. El rancho se agranda para la ocasión.",
  },
  {
    icon: Briefcase,
    title: "Eventos Empresariales",
    desc: "Almuerzos de trabajo y after office. Ambiente relajado, atención dedicada y buena comida casera.",
  },
];

export function Eventos() {
  return (
    <section id="eventos" className="relative py-24 md:py-32 px-6 bg-paper-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Ribbon size="md">Eventos</Ribbon>
          <p className="mt-6 font-hand text-2xl md:text-3xl text-cuero-dark">
            Tu celebración, a la manera del bodegón
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="carved-box bg-paper p-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-cuero-dark flex items-center justify-center mb-5 shadow-md">
                <ev.icon className="text-paper" size={28} />
              </div>
              <h3 className="font-display uppercase tracking-wide text-xl text-cuero-darker mb-3">
                {ev.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed font-body">
                {ev.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="font-body text-ink/75 mb-5">
            ¿Tenés algo para celebrar? Contanos la ocasión y armamos todo juntos.
          </p>
          <a
            href={`https://wa.me/${businessInfo.phoneHref}?text=${encodeURIComponent(
              "Hola! Quiero consultar por un evento en El Bodegón del Rancho."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rust hover:bg-rust-dark text-paper font-display uppercase tracking-wider text-sm px-8 py-4 shadow-ribbon transition-all hover:-translate-y-0.5"
          >
            Consultar por mi evento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
