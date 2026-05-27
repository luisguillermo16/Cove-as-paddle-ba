import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coveñas Paddle Bay | Vive el Mar en Coveñas",
  description:
    "La mejor experiencia de paddle board en Coveñas, Colombia. Alquiler de tablas, clases personalizadas y tours al atardecer en el Mar Caribe. ¡Reserva tu aventura hoy!",
  keywords: [
    "paddle board Coveñas",
    "paddle coveñas",
    "surf de remo Coveñas",
    "deportes acuáticos Coveñas",
    "tours Coveñas",
    "alquiler paddle board",
  ],
  openGraph: {
    title: "Coveñas Paddle Bay | Vive el Mar en Coveñas",
    description:
      "Deslízate sobre el mar Caribe en Coveñas. Sin experiencia, sin estrés. Solo tú y el agua.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
