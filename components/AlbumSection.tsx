'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ALBUM_IMAGES = [
  '/album/1.jpeg',
  '/album/2.jpeg',
  '/album/4.JPG',
  '/album/7.jpg',
  '/album/8.jpg',
  '/album/9.jpg',
  '/album/10.jpeg',
  '/album/13.jpeg',
  '/album/14.jpeg',
];

export default function AlbumSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="album" className="py-24 md:py-32 px-6 bg-slate-50 relative">
      {/* Premium subtle background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-100/30 blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-sky-100/40 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-teal-600 mb-4"
          >
            Nuestro Álbum
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-slate-900 tracking-tighter leading-tight"
          >
            Instantes <span className="font-bold">Inolvidables</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          {ALBUM_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setSelectedImage(src)}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-xl md:rounded-3xl group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={src}
                alt={`Album photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 md:pb-8">
                <span className="text-white text-xs font-medium tracking-widest uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Ampliar
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Premium backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full flex items-center justify-center p-0 md:p-12 pointer-events-none"
            >
              <div 
                className="relative w-full h-full md:rounded-2xl overflow-hidden pointer-events-auto cursor-default flex items-center justify-center"
                onClick={(e) => {
                  // Allow closing by clicking the image itself on mobile
                  if (window.innerWidth < 768) setSelectedImage(null);
                  e.stopPropagation();
                }}
              >
                <Image
                  src={selectedImage}
                  alt="Full screen photo"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Premium Fixed Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 md:top-8 md:right-8 z-[110] text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 md:p-4 backdrop-blur-md transition-all shadow-xl"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
