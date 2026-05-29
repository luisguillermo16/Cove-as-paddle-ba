import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-jakarta bg-[#FAF9F6] text-[#0A1220] selection:bg-[#6B8E8E]/30 selection:text-[#0A1220]">{children}</body>
    </html>
  );
}
