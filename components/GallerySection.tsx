'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal, staggerContainerVariants, cardItemVariants } from './Animations';
import { useState } from 'react';


const EXPERIENCES = [
  {
    id: 'e1',
    type: 'video',
    src: '/dron.mp4',
    alt: 'Vista aérea de Coveñas',
    label: 'Vistas Increíbles',
  },
  {
    id: 'e2',
    type: 'video',
    src: '/medusa.mov',
    alt: 'Medusa en el mar de Coveñas',
    label: 'Encuentros Sorpresa',

  },
  {
    id: 'e3',
    type: 'image',
    src: '/perritos.jpg',
    alt: 'Perritos disfrutando del mar',
    label: 'Amigos Peludos',

  },
];

function VideoWithLoading({ src, className }: { src: string; className: string }) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Determinamos el tipo de video según la extensión para mejor compatibilidad
  const isMov = src.toLowerCase().endsWith('.mov');

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0A1220]/5 z-10">
          <div className="w-6 h-6 border-2 border-[#6B8E8E]/20 border-t-[#6B8E8E] rounded-full animate-spin" />
        </div>
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata" // Cambiado de auto a metadata para no bloquear la carga inicial de la página
        onLoadedData={() => setIsLoading(false)}
        className={className}
      >
        {/* Siempre es ideal tener una versión mp4 como fallback universal */}
        <source src={src} type={isMov ? 'video/quicktime' : 'video/mp4'} />
        {/* 
          Nota para el futuro: Si comprimes los videos a webm, puedes agregar la línea abajo
          <source src={src.replace('.mp4', '.webm')} type="video/webm" /> 
        */}
      </video>
    </>
  );
}

export default function GallerySection() {
  const { ref, isInView } = useScrollReveal('-40px');

  return (
    <section id="galeria" className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#0A1220] tracking-tight leading-none"
            >
              Momentos Únicos
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md font-jakarta font-light text-sm text-[#0A1220]/70"
          >
            Cada salida al mar es irrepetible. La naturaleza nos regala paisajes y encuentros espectaculares que quedarán en tu memoria.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full h-[800px] md:h-[500px]"
        >
          {EXPERIENCES.map((item) => (
            <motion.div
              key={item.id}
              variants={cardItemVariants}
              className="relative overflow-hidden bg-[#0A1220]/5 group"
            >
              {item.type === 'video' ? (
                <VideoWithLoading
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              )}

              {/* Permanent overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/80 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Label - Always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full pointer-events-none">
                <span
                  className="inline-flex items-center gap-3 text-[#FAF9F6] font-cormorant text-2xl md:text-3xl font-medium drop-shadow-md"
                >

                  <span>{item.label}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom invite */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://wa.me/573125971913"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-transparent text-[#0A1220] px-6 py-3 font-jakarta font-medium tracking-[0.2em] text-xs uppercase transition-colors"
          >
            <span className="relative z-10 border-b border-[#0A1220]/30 group-hover:border-[#0A1220] transition-colors pb-1">
              Únete a la Aventura
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
