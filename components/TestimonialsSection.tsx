'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'VALENTINA R.',
    location: 'Medellín',
    text: 'La mejor experiencia de mi viaje. Ver el atardecer desde la tabla fue algo que nunca voy a olvidar. Los guías son súper amables.',
  },
  {
    name: 'CARLOS M.',
    location: 'Bogotá',
    text: 'Excelente equipo y muy buena inducción. Era mi primera vez y me sentí seguro en todo momento. ¡Totalmente recomendado!',
  },
  {
    name: 'ANDREA L.',
    location: 'Cali',
    text: 'Un lugar de paz absoluta. El servicio es impecable y las tablas están en perfecto estado. Volveré cada vez que venga a Coveñas.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-400 font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Opiniones Reales
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light tracking-tighter text-white"
          >
            LO QUE <span className="font-bold">NUESTROS CLIENTES</span> DICEN
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-teal-400" />
                ))}
              </div>
              <p className="text-slate-300 font-light leading-relaxed mb-8 italic">
                "{testi.text}"
              </p>
              <div>
                <h4 className="font-bold tracking-widest text-[10px] text-white uppercase">{testi.name}</h4>
                <p className="text-teal-500 text-[10px] font-medium tracking-wide">{testi.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
