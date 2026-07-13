"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { businessInfo } from "@/lib/menu-data";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${businessInfo.phoneHref}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-xl px-4 py-3.5 md:px-5 md:py-4"
      aria-label="Escribinos por WhatsApp"
    >
      <MessageCircle size={22} fill="white" className="text-[#25D366]" />
      <span className="hidden md:inline font-display text-sm uppercase tracking-wide">
        Reservar
      </span>
    </motion.a>
  );
}
