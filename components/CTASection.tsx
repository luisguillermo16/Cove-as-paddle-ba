'use client';

import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CTASection() {
  return (
    <section id="reservar" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-teal-500 p-12 md:p-20 overflow-hidden shadow-[0_20px_50px_rgba(45,212,191,0.3)]"
        >
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-black/60 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                Únete a nosotros
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight mb-8">
                ¿LISTO PARA TU <br />
                <span className="text-teal-900">PRÓXIMA AVENTURA?</span>
              </h2>
              <p className="text-white/90 text-xl font-light leading-relaxed mb-0">
                Reserva tu cupo ahora por WhatsApp y asegura la mejor tabla para tu visita. 
                Sin prepagos, confirmación inmediata.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-2xl font-bold tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-xl"
              >
                <ChatBubbleLeftRightIcon className="w-6 h-6" />
                RESERVAR POR WHATSAPP
              </a>
              
              <button
                onClick={() => document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 text-white font-bold tracking-widest text-xs border-b border-white/30 hover:border-white transition-all py-2"
              >
                VER MÁS DETALLES
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

        {/* Footer subtle brand */}
        <div className="mt-20 text-center">
          <p className="text-slate-300 font-light tracking-[0.5em] text-[10px] uppercase">
            Coveñas Paddle Bay — La experiencia definitiva
          </p>
        </div>

      </div>
    </section>
  );
}
