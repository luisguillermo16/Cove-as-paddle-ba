'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceCategories = [
  {
    categoryName: 'TOURS',
    services: [
      {
        title: 'TOUR CIÉNAGA LA CAIMANERA',
        duration: '60 min',
        description: 'Descubre los manglares en un recorrido guiado espectacular. Conexión total con la naturaleza en aguas tranquilas.',
        detailedDescription: 'Nuestro tour por la Ciénaga de la Caimanera es una inmersión completa en uno de los ecosistemas más vibrantes de la región. Navegaremos por túneles de manglares, donde podrás observar aves exóticas, vida marina y una paz inigualable. Perfecto para familias y amantes de la fotografía.',
        image: '/cienaga.jpg',
        price: '$120.000',
        inclusions: 'Incluye hidratación, instructor y chaleco'
      }
    ]
  },
  {
    categoryName: 'ALQUILERES',
    services: [
      {
        title: 'ALQUILER MEDIA HORA',
        duration: '30 min',
        description: 'Prueba la experiencia de remar a tu ritmo. Perfecto para un primer contacto rápido con el mar.',
        detailedDescription: 'Ideal si tienes poco tiempo o quieres hacer una primera prueba rápida. Te entregamos el equipo completo y, antes de entrar al agua, te damos una inducción rápida para garantizar tu seguridad.',
        image: '/alquileres.jpg',
        price: '$30.000',
        inclusions: 'Incluye equipo básico y chaleco'
      },
      {
        title: 'ALQUILER POR HORA',
        duration: '60 min',
        description: 'Equipos de alta gama para que explores a tu propio ritmo. Incluye inducción básica de seguridad para navegar.',
        detailedDescription: 'Si prefieres la aventura a tu propio ritmo, nuestro alquiler por hora es ideal para ti. Te entregamos un equipo completo de alta gama, y antes de entrar al agua, te damos una inducción rápida para garantizar tu seguridad y disfrute total.',
        image: '/alquileres.jpg',
        price: '$60.000',
        inclusions: 'Incluye equipo básico y chaleco'
      }
    ]
  },
  {
    categoryName: 'CLASES',
    services: [
      {
        title: 'CLASE PERSONALIZADA',
        duration: '60 min',
        description: 'Aprende la técnica perfecta con instructores certificados. Ideal para principiantes que buscan confianza en el mar.',
        detailedDescription: 'Diseñada especialmente para quienes nunca se han subido a una tabla de paddle board o quieren mejorar su técnica. Un instructor certificado te acompañará durante toda la hora, asegurándose de que ganes equilibrio, confianza y, sobre todo, que te diviertas.',
        image: '/clases.jpg',
        price: '$80.000',
        inclusions: 'Incluye equipo, instructor y chaleco'
      }
    ]
  }
];

export default function FeaturesSection() {
  const [selectedService, setSelectedService] = useState<typeof serviceCategories[0]['services'][0] | null>(null);

  return (
    <section id="servicios" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900"
          >
            EXPERIENCIAS <span className="font-bold">A TU MEDIDA</span>
          </motion.h2>
        </div>

        <div>
          {serviceCategories.map((category) => (
            <div key={category.categoryName} className="mb-20 last:mb-0">
              <h3 className="text-2xl md:text-2xl font-medium tracking-[0.15em] uppercase text-slate-400 mb-8 border-b border-slate-200 pb-4">
                {category.categoryName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedService(service)}
                    className="relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm hover:shadow-2xl h-[380px] md:h-auto md:aspect-[3/4] w-full"
                  >
                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Dark Overlays */}
                    <div className="absolute inset-0 transition-colors duration-500 bg-transparent group-hover:bg-black/20" />
                    <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-sky-950/90 via-sky-950/40 to-transparent opacity-90 group-hover:opacity-100" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center gap-1.5 text-teal-300 mb-2">
                          <ClockIcon className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="text-xs md:text-sm font-bold tracking-widest uppercase">{service.duration}</span>
                        </div>
                        
                        <h3 className="font-bold tracking-tight text-base md:text-xl text-white mb-2 drop-shadow-md">
                          {service.title}
                        </h3>

                        <div className="flex justify-between items-center mt-4">
                          <span className="text-sm md:text-base font-bold tracking-widest text-teal-400 uppercase drop-shadow-md">{service.price}</span>
                          <span className="inline-flex items-center gap-1.5 text-white/70 border border-white/20 rounded-full px-3 py-1.5 text-xs font-medium tracking-wide group-hover:text-white group-hover:border-white/50 transition-all duration-500">
                            Ver más <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Panel — full screen on mobile, floating card on desktop */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed inset-0 md:relative md:inset-auto md:w-full md:max-w-lg bg-white md:rounded-[2rem] shadow-2xl z-10 flex flex-col overflow-hidden"
            >
              {/* Full-bleed image with overlay content */}
              <div className="relative h-[45vh] md:h-72 w-full flex-shrink-0">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Top nav row */}
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-12 md:pt-5">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Servicios
                  </button>
                </div>

                {/* Title at bottom of image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-1.5 text-teal-300 mb-1.5">
                    <ClockIcon className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold tracking-widest uppercase">{selectedService.duration}</span>
                  </div>
                  <h3 className="font-bold text-2xl text-white leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto px-5 py-6 md:px-8 md:py-7">
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base mb-5">
                  {selectedService.detailedDescription || selectedService.description}
                </p>

                <div className="flex items-center gap-2 text-teal-600 text-xs font-medium mb-8">
                  <CheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{selectedService.inclusions}</span>
                </div>
              </div>

              {/* Sticky footer CTA */}
              <div className="flex-shrink-0 border-t border-slate-100 px-5 py-4 md:px-8 flex justify-between items-center bg-white">
                {selectedService.price !== 'Ver mas' && (
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">Precio</p>
                    <span className="text-lg font-bold text-teal-600">{selectedService.price}</span>
                  </div>
                )}
                <a
                  href={`https://wa.me/573125971913?text=Hola,%20me%20gustaría%20reservar%20el%20servicio:%20${encodeURIComponent(selectedService.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedService(null)}
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3.5 px-7 rounded-full tracking-widest text-xs uppercase transition-colors shadow-lg shadow-teal-500/30"
                >
                  Reservar Ahora
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ArrowIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  );
}

function CloseIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
