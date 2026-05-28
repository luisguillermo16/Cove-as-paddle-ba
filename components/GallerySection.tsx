'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { VideoCameraIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useScrollReveal, staggerContainerVariants, cardItemVariants } from './Animations';

const EXPERIENCES = [
  {
    id: 'e1',
    type: 'video',
    src: '/dron.mp4',
    alt: 'Vista aérea de Coveñas',
    label: 'Vistas increíbles',
    icon: VideoCameraIcon,
  },
  {
    id: 'e2',
    type: 'video',
    src: '/medusa.mov',
    alt: 'Medusa en el mar de Coveñas',
    label: 'Encuentros sorpresa',
    icon: SparklesIcon,
  },
  {
    id: 'e3',
    type: 'image',
    src: '/perritos.jpg',
    alt: 'Perritos disfrutando del mar',
    label: 'Amigos peludos',
    icon: HeartIcon,
  },
];

export default function GallerySection() {
  const { ref, isInView } = useScrollReveal('-40px');
  const [activeId, setActiveId] = useState(EXPERIENCES[0].id);

  return (
    <section id="galeria" className="py-28 px-6 bg-sky-50/50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="block text-xs font-bold uppercase tracking-[0.25em] text-teal-500 mb-4"
          >
            Momentos Inolvidables
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
          >
            Experiencias Reales en el{' '}
            <span className="text-gradient-ocean">Mar Caribe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-500 text-lg"
          >
            Cada salida al mar es única. Dependiendo de la temporada y las circunstancias, la naturaleza nos regala encuentros y paisajes espectaculares que quedarán en tu memoria para siempre.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row gap-6 md:gap-4 w-full md:h-[600px]"
        >
          {EXPERIENCES.map((item) => (
            <motion.div
              key={item.id}
              variants={cardItemVariants}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className={`relative rounded-3xl md:rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm hover:shadow-2xl h-[400px] md:h-auto ${
                activeId === item.id ? 'md:flex-[2.5]' : 'md:flex-1 md:min-w-[80px]'
              }`}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              )}
              
              {/* Overlays */}
              <div className={`absolute inset-0 transition-colors duration-500 ${
                activeId === item.id ? 'bg-transparent' : 'bg-transparent md:bg-black/40'
              }`} />
              <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-sky-950/90 via-sky-950/20 to-transparent ${
                activeId === item.id ? 'opacity-100' : 'opacity-100 md:opacity-60'
              }`} />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col justify-end h-full pointer-events-none">
                <div className={`transition-all duration-500 ease-out flex items-center ${
                  activeId === item.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-0 opacity-100 md:translate-y-4 md:opacity-90'
                }`}>
                  <span
                    className="inline-flex items-center gap-2 text-white text-lg md:text-xl font-bold drop-shadow-md whitespace-nowrap"
                  >
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                    <span className={`${activeId === item.id ? 'block' : 'block md:hidden lg:block'}`}>{item.label}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom invite */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 text-slate-500 text-base"
        >
          ¿Qué sorpresas te esperan a ti?{' '}
          <button
            onClick={() => document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sky-600 font-semibold hover:underline underline-offset-2 transition-all"
          >
            Reserva tu experiencia
          </button>{' '}
          y descúbrelo.
        </motion.p>
      </div>
    </section>
  );
}
