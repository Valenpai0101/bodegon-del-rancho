"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { businessInfo } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#historia", label: "Nuestra Historia" },
  { href: "#carta", label: "Carta" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#galeria", label: "Galería" },
  { href: "#eventos", label: "Eventos" },
  { href: "#reservas", label: "Reservas" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-ink/95 backdrop-blur-sm shadow-lg py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 text-paper">
  <img
    src="/images/logo.png"
    alt="El Bodegón del Rancho"
    className="w-11 h-11 md:w-14 md:h-14 shrink-0 rounded-full object-cover scale-150"
  />
            <div className="leading-none">
              <span className="block font-display uppercase tracking-widest text-lg md:text-xl">
                El Bodegón
              </span>
              <span className="block font-display uppercase tracking-[0.3em] text-[10px] md:text-xs text-gold-light">
                del Rancho
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-sm uppercase tracking-wider text-paper/90 hover:text-gold-light transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-light transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${businessInfo.phoneHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-display text-sm uppercase tracking-wide text-paper border border-paper/40 px-4 py-2 hover:bg-rust hover:border-rust transition-colors"
            >
              <Phone size={15} /> Reservar
            </a>
          </div>

          <button
            className="lg:hidden text-paper"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#150d05] flex flex-col items-center justify-center gap-7 overflow-y-auto py-10"
          >
            <button
              className="absolute top-5 right-5 text-paper"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={30} />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-2xl uppercase tracking-widest text-paper hover:text-gold-light"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
