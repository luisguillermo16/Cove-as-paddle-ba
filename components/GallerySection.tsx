'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { VideoCameraIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useScrollReveal, staggerContainerVariants, cardItemVariants } from './Animations';

const EXPERIENCES = [
  {
    id: 'e1',
    type: 'video',
    src: '/dron.MP4',
    alt: 'Vista aérea de Coveñas',
    label: 'Vistas increíbles',
    icon: VideoCameraIcon,
  },
  {
    id: 'e2',
    type: 'video',
    src: '/medusa.MOV',
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

        {/* Accordion Gallery */}
        <motion.div
          ref={ref}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-4 w-full"
        >
          {EXPERIENCES.map((item) => (
            <motion.div
              key={item.id}
              variants={cardItemVariants}
              className="relative rounded-[2rem] overflow-hidden group cursor-pointer flex-1 md:hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm hover:shadow-2xl"
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
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-950/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-90 group-hover:opacity-100">
                  <span
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm md:text-base font-bold shadow-lg whitespace-nowrap"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
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
