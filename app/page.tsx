import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Historia } from "@/components/Historia";
import { Carta } from "@/components/Carta";
import { Especialidades } from "@/components/Especialidades";
import { Galeria } from "@/components/Galeria";
import { Eventos } from "@/components/Eventos";
import { Reservas } from "@/components/Reservas";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Historia />
      <Carta />
      <Especialidades />
      <Galeria />
      <Eventos />
      <Reservas />
      <Contacto />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
