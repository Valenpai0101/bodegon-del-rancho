"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users2, Send } from "lucide-react";
import { Ribbon } from "./Ribbon";
import { businessInfo } from "@/lib/menu-data";

export function Reservas() {
  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    personas: "2",
    comentario: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola! Quiero reservar una mesa en El Bodegón del Rancho.%0A%0ANombre: ${form.nombre}%0AFecha: ${form.fecha}%0AHora: ${form.hora}%0APersonas: ${form.personas}%0AComentario: ${form.comentario || "-"}`;
    window.open(`https://wa.me/${businessInfo.phoneHref}?text=${msg}`, "_blank");
  };

  return (
    <section id="reservas" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <Ribbon size="md">Reservá tu Mesa</Ribbon>
          <p className="mt-6 font-hand text-2xl md:text-3xl text-cuero-dark">
            Guardamos tu lugar en la mesa larga
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="carved-box bg-paper/80 p-7 md:p-12 grid md:grid-cols-2 gap-6"
        >
          <div className="md:col-span-2">
            <label className="block text-xs uppercase tracking-widest text-ink/60 mb-2">
              Nombre y apellido
            </label>
            <input
              required
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="¿Cómo te llamás?"
              className="w-full bg-paper border-b-2 border-ink/25 focus:border-rust outline-none py-2.5 font-body text-ink placeholder:text-ink/35 transition-colors"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink/60 mb-2">
              <Calendar size={13} /> Fecha
            </label>
            <input
              required
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              className="w-full bg-paper border-b-2 border-ink/25 focus:border-rust outline-none py-2.5 font-body text-ink transition-colors"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink/60 mb-2">
              <Clock size={13} /> Hora
            </label>
            <input
              required
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              min="09:00"
              max="23:00"
              className="w-full bg-paper border-b-2 border-ink/25 focus:border-rust outline-none py-2.5 font-body text-ink transition-colors"
            />
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink/60 mb-2">
              <Users2 size={13} /> Cantidad de personas
            </label>
            <select
              name="personas"
              value={form.personas}
              onChange={handleChange}
              className="w-full bg-paper border-b-2 border-ink/25 focus:border-rust outline-none py-2.5 font-body text-ink transition-colors"
            >
              {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "persona" : "personas"}
                </option>
              ))}
              <option value="15+">Más de 14 (evento)</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs uppercase tracking-widest text-ink/60 mb-2">
              Comentario (opcional)
            </label>
            <textarea
              name="comentario"
              value={form.comentario}
              onChange={handleChange}
              rows={3}
              placeholder="Alguna celebración, alergia o pedido especial..."
              className="w-full bg-paper border-b-2 border-ink/25 focus:border-rust outline-none py-2.5 font-body text-ink placeholder:text-ink/35 resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 mt-2 flex items-center justify-center gap-2 bg-rust hover:bg-rust-dark text-paper font-display uppercase tracking-wider text-sm px-8 py-4 shadow-ribbon transition-all hover:-translate-y-0.5"
          >
            <Send size={16} /> Enviar reserva por WhatsApp
          </button>
          <p className="md:col-span-2 text-center text-xs text-ink/50">
            Te vamos a confirmar la disponibilidad por WhatsApp en breve.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
