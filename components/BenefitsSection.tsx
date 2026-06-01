'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  HeartIcon,
  MapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'SEGURIDAD GARANTIZADA',
    description: 'Equipos certificados y chalecos salvavidas de alta flotabilidad. Tu tranquilidad es nuestra prioridad.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'BIENESTAR FÍSICO',
    description: 'Ejercita todo tu cuerpo sin impacto, mejorando el equilibrio y la postura en un entorno natural.',
    icon: HeartIcon,
  },
  {
    title: 'UBICACIÓN ESTRATÉGICA',
    description: 'Estamos en la zona de aguas más tranquilas de Coveñas, protegidos del viento fuerte.',
    icon: MapIcon,
  },
  {
    title: 'GUÍAS LOCALES',
    description: 'Nuestro equipo conoce cada rincón de la bahía y te acompañará para asegurar una gran experiencia.',
    icon: UserGroupIcon,
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 leading-tight mb-8"
            >
              <span className="font-bold">LA CALIDAD QUE</span> TU DESCANSO MERECE
            </motion.h2>
            <p className="text-slate-500 font-light leading-relaxed mb-10">
              No solo alquilamos tablas; creamos momentos de desconexión total con los más altos estándares de servicio en el Golfo de Morrosquillo.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-teal-50 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-500 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold tracking-widest text-[11px] uppercase text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-500 font-light leading-snug text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
