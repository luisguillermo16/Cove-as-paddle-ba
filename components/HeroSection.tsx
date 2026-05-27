'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants } from './Animations';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,47,73,0.65) 0%, rgba(8,47,73,0.45) 50%, rgba(8,47,73,0.75) 100%)',
          zIndex: 0,
        }}
      />

      {/* Warm bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '180px',
          background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Floating decorative orbs */}
      <div
        className="absolute top-1/4 left-10 w-64 h-64 rounded-full float-anim pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-1/3 right-8 w-48 h-48 rounded-full float-anim-delayed pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: 1,
        }}
      />

      {/* ── Main content ── */}
      <div className="relative px-6 pt-24 pb-36 max-w-5xl mx-auto w-full" style={{ zIndex: 2 }}>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-widest rounded-full"
          style={{
            fontFamily: 'var(--font-poppins)',
            color: '#a5f3fc',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          🌊 Coveñas, Colombia · Mar Caribe
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="font-black tracking-tight leading-tight mb-6"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: '#ffffff',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          Vive la calma del mar
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #2DD4BF, #FDE68A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            sobre un paddle board
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-2xl mx-auto leading-relaxed mb-12"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
            color: 'rgba(255,255,255,0.88)',
            textShadow: '0 1px 8px rgba(0,0,0,0.2)',
          }}
        >
          Sin experiencia, sin estrés…
          <br className="hidden md:block" />
          solo tú, el agua y el atardecer.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            id="hero-cta-reservar"
            onClick={() => scrollTo('reservar')}
            className="btn-primary text-base px-8 py-4"
          >
            Reservar mi experiencia 🏄‍♂️
          </button>
          <button
            id="hero-cta-experiencia"
            onClick={() => scrollTo('experiencia')}
            className="text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            style={{
              fontFamily: 'var(--font-poppins)',
              color: '#ffffff',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              border: '2px solid rgba(255,255,255,0.28)',
            }}
          >
            Descubrir más ↓
          </button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
          style={{ color: 'rgba(255,255,255,0.72)' }}
        >
          {[
            { icon: '⭐', text: '5.0 en Google' },
            { icon: '🏄', text: '+500 experiencias' },
            { icon: '🛡️', text: 'Seguro incluido' },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className="text-base">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-poppins)', color: 'rgba(255,255,255,0.45)' }}
        >
          Desliza
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '2px solid rgba(255,255,255,0.35)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: 'rgba(255,255,255,0.55)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
