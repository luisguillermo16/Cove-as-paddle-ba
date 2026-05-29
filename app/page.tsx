import Navbar from '@/components/Navbar';
import Hero from '@/components/ui/demo';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import AlbumSection from '@/components/AlbumSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

/**
 * Landing page de Coveñas Paddle Bay — Coveñas, Colombia.
 * Orden: Hero → Experiencia → Galería → Álbum → Servicios → Beneficios → Testimonios → Reservar → Footer
 */
export default function LandingPage() {
  return (
    <div className="bg-white font-kanturmuy selection:bg-sky-100 selection:text-sky-900">
      {/* Navegación fija */}
      <Navbar />

      <main>
        {/* 1 · Hero — emoción + CTA principal */}
        <Hero />

        {/* 2 · Experiencia — narrativa sensorial */}
        <AboutSection />

        {/* 3 · Galería — fotos reales del mar */}
        <GallerySection />

        {/* 3.5 · Álbum — fotos adicionales */}
        <AlbumSection />

        {/* 4 · Servicios — alquiler / primera clase / tour atardecer */}
        <FeaturesSection />

        {/* 5 · Beneficios — fácil, seguro, relajante */}
        <BenefitsSection />

        {/* 6 · Testimonios — prueba social */}
        <TestimonialsSection />

        {/* 7 · Reservar — CTA final con WhatsApp */}
        <CTASection />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
