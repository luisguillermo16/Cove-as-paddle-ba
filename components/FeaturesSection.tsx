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
        image: '/media h.jpeg',
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
    <section id="servicios" className="py-32 relative overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#0A1220]/10 pb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#0A1220] leading-none"
            >
              Experiencias <br />
              <span className="italic">a tu medida</span>
            </motion.h2>
          </div>
          <p className="max-w-xs font-jakarta font-light text-sm text-[#0A1220]/70">
            Cada travesía está diseñada para conectarte con el océano, respetando tu ritmo y la naturaleza.
          </p>
        </div>

        <div>
          {serviceCategories.map((category) => (
            <div key={category.categoryName} className="mb-24 last:mb-0">
              <h3 className="font-jakarta text-xs font-semibold tracking-[0.25em] uppercase text-[#0A1220]/50 mb-10">
                {category.categoryName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setSelectedService(service)}
                    className="group cursor-pointer flex flex-col h-full"
                  >
                    {/* Minimalist Image Container */}
                    <div className="relative overflow-hidden aspect-[4/5] w-full mb-6 bg-[#0A1220]/5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    
                    {/* Content below image (Editorial style) */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-cormorant font-medium text-2xl text-[#0A1220] group-hover:text-[#6B8E8E] transition-colors">
                            {service.title}
                          </h3>
                          <span className="font-jakarta text-xs tracking-widest text-[#0A1220]/50 uppercase">{service.duration}</span>
                        </div>
                        <p className="font-jakarta text-sm font-light leading-relaxed text-[#0A1220]/70 mb-6 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-[#0A1220]/10">
                        <span className="font-jakarta text-sm tracking-widest text-[#0A1220] uppercase">{service.price}</span>
                        <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6B8E8E] flex items-center gap-2 group-hover:gap-4 transition-all">
                          Ver más <ArrowIcon className="w-3 h-3" />
                        </span>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#0A1220]/40 backdrop-blur-sm"
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#FAF9F6] shadow-2xl z-10 flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 text-[#0A1220] hover:text-[#6B8E8E] transition-colors bg-[#FAF9F6] p-2 rounded-full"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              {/* Image Side */}
              <div className="relative h-64 md:h-auto md:w-1/2 flex-shrink-0">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto">
                <div className="flex-1">
                  <span className="inline-block font-jakarta text-[10px] uppercase tracking-[0.25em] text-[#6B8E8E] mb-4">
                    {selectedService.duration}
                  </span>
                  
                  <h3 className="font-cormorant font-medium text-4xl text-[#0A1220] leading-tight mb-6">
                    {selectedService.title}
                  </h3>

                  <p className="font-jakarta text-sm font-light leading-relaxed text-[#0A1220]/70 mb-10">
                    {selectedService.detailedDescription || selectedService.description}
                  </p>

                  <div className="flex items-start gap-3 p-4 bg-[#0A1220]/5 mb-10">
                    <CheckIcon className="w-4 h-4 text-[#6B8E8E] mt-0.5" />
                    <span className="font-jakarta text-xs font-medium text-[#0A1220]/80 tracking-wide uppercase">{selectedService.inclusions}</span>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="pt-8 border-t border-[#0A1220]/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {selectedService.price !== 'Ver mas' && (
                    <div>
                      <p className="font-jakarta text-[10px] text-[#0A1220]/40 uppercase tracking-[0.2em] mb-1">Inversión</p>
                      <span className="font-jakarta text-lg font-medium text-[#0A1220]">{selectedService.price}</span>
                    </div>
                  )}
                  <a
                    href={`https://wa.me/573125971913?text=Hola,%20me%20gustaría%20reservar%20el%20servicio:%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSelectedService(null)}
                    className="group inline-flex items-center justify-center gap-4 bg-[#0A1220] hover:bg-[#6B8E8E] text-[#FAF9F6] px-8 py-4 font-jakarta font-medium tracking-[0.2em] text-xs uppercase transition-colors duration-500"
                  >
                    Reservar Ahora
                    <ArrowIcon className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
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
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
