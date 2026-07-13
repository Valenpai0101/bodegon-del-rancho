"use client";
import { motion } from "framer-motion";
import { MapPin, Instagram, Phone, Clock } from "lucide-react";
import { Ribbon } from "./Ribbon";
import { businessInfo } from "@/lib/menu-data";

export function Contacto() {
  const mapQuery = encodeURIComponent(businessInfo.address);

  return (
    <section id="contacto" className="relative py-24 md:py-32 px-6 bg-cuero-darker text-paper">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Ribbon size="md">Contacto</Ribbon>
          <p className="mt-6 font-hand text-2xl md:text-3xl text-gold-light">
            Te esperamos con la mesa puesta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <ContactRow
              icon={<MapPin size={20} />}
              label="Dirección"
              value={businessInfo.address}
              href={`https://maps.google.com/?q=${mapQuery}`}
            />
            <ContactRow
              icon={<Clock size={20} />}
              label="Horario"
              value={businessInfo.hours}
            />
            <ContactRow
              icon={<Phone size={20} />}
              label="Teléfono"
              value={businessInfo.phone}
              href={`https://wa.me/${businessInfo.phoneHref}`}
            />
            <ContactRow
              icon={<Instagram size={20} />}
              label="Instagram"
              value={businessInfo.instagram}
              href="https://instagram.com/elbodegondelrancho"
            />

            <div className="pt-4 flex gap-4">
              <a
                href={`https://wa.me/${businessInfo.phoneHref}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-rust hover:bg-rust-dark text-paper font-display uppercase tracking-wider text-sm px-6 py-3.5 shadow-ribbon transition-all hover:-translate-y-0.5"
              >
                <Phone size={16} /> Escribinos
              </a>
              <a
                href="https://instagram.com/elbodegondelrancho"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-paper/50 text-paper font-display uppercase tracking-wider text-sm px-6 py-3.5 hover:bg-paper hover:text-ink transition-all hover:-translate-y-0.5"
              >
                <Instagram size={16} /> Seguinos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="min-h-[340px] carved-box overflow-hidden"
          >
            <iframe
              title="Ubicación de El Bodegón del Rancho"
              src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full grayscale-[30%] contrast-125 min-h-[340px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold-light shrink-0 group-hover:bg-gold-light group-hover:text-ink transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-paper/50">
          {label}
        </p>
        <p className="font-body text-paper text-[1.05rem]">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
