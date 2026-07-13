import type { Metadata } from "next";
import { Oswald, Lora, Caveat } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Bodegón del Rancho | Pilar",
  description:
    "El Bodegón del Rancho — comida casera, parrilla, pizzas y tragos en Pilar. Ituzaingó 759. Buena comida, buenos momentos.",
  keywords: [
    "bodegón Pilar",
    "restaurante Pilar",
    "parrilla Pilar",
    "El Bodegón del Rancho",
  ],
  openGraph: {
    title: "El Bodegón del Rancho",
    description: "Buena comida, buenos momentos. Ituzaingó 759, Pilar.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${oswald.variable} ${lora.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
