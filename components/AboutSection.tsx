'use client';

import { motion } from 'framer-motion';
import { SunIcon, SparklesIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'PAZ INTERIOR',
    description: 'Siente la calma absoluta mientras te deslizas sobre aguas cristalinas a primera hora de la mañana.',
    icon: SunIcon,
  },
  {
    title: 'ATARDECERES MÁGICOS',
    description: 'Vive el espectáculo de colores del Caribe colombiano desde la mejor perspectiva posible: el mar.',
    icon: SparklesIcon,
  },
  {
    title: 'CONEXIÓN TOTAL',
    description: 'Una experiencia sensorial que combina el ejercicio suave con la meditación activa en la naturaleza.',
    icon: WavesIcon,
  },
];

export default function AboutSection() {
  return (
    <section id="experiencia" className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-slate-900 leading-tight mb-8">
              MÁS QUE UN DEPORTE, <br />
              <span className="font-bold text-teal-400">UN ESTADO MENTAL</span>
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
              En Coveñas Paddle Bay, creemos que el mar es el mejor lugar para reencontrarse.
              Nuestra misión es ofrecerte un refugio de serenidad lejos del ruido cotidiano.
            </p>

            <div className="space-y-10">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 shadow-sm flex items-center justify-center text-teal-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold tracking-widest text-xs uppercase text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 font-light leading-snug">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="/intro.jpg"
                alt="Paddle Board Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-sky-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Custom Waves Icon since it's not in standard Heroicons but we need it for the theme
function WavesIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 9" />
    </svg>
  );
}
