import type { Metadata } from "next";
import { Bodoni_Moda, EB_Garamond, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic"],
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
    <html lang="es-AR" className={`${bodoniModa.variable} ${ebGaramond.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
