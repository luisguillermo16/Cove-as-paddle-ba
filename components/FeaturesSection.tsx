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
        image: '/cienaga.JPG',
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
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedService(service)}
                    className="bg-white rounded-[2rem] shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl group overflow-hidden flex flex-col md:flex-row h-full md:h-72 cursor-pointer"
                  >
                    <div className="md:w-2/5 h-64 md:h-full overflow-hidden relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
                    </div>
                    <div className="p-8 md:w-3/5 flex flex-col justify-center">
                      <h3 className="font-bold tracking-widest text-sm uppercase text-slate-900 mb-2">{service.title}</h3>
                      
                      <div className="flex items-center gap-1.5 text-teal-600 mb-3">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-xs font-bold tracking-widest uppercase">{service.duration}</span>
                      </div>

                      <p className="text-slate-500 font-light leading-relaxed mb-4 text-sm">{service.description}</p>
                      <p className="text-teal-600 font-medium text-xs mb-6 italic">{service.inclusions}</p>

                      <div className="pt-6 border-t border-slate-50 flex justify-between items-center mt-auto">
                        <span className="text-xs font-bold tracking-widest text-teal-500 uppercase">{service.price}</span>
                        <button 
                          className="text-slate-300 group-hover:text-teal-500 transition-colors p-2 -mr-2"
                        >
                          <ArrowIcon className="w-5 h-5" />
                        </button>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
              
              <div className="h-64 sm:h-80 w-full relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <h3 className="font-bold tracking-widest text-xl sm:text-2xl text-white mb-2">
                    {selectedService.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-teal-300">
                    <ClockIcon className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-widest uppercase">{selectedService.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                  {selectedService.detailedDescription || selectedService.description}
                </p>
                
                <div className="bg-teal-50 rounded-2xl p-6 mb-8 border border-teal-100">
                  <p className="text-teal-800 font-medium text-sm flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    {selectedService.inclusions}
                  </p>
                </div>
                
                <div className="flex justify-end items-center gap-6">
                  {selectedService.price !== 'Ver mas' && (
                    <span className="text-lg font-bold tracking-widest text-teal-600 uppercase">{selectedService.price}</span>
                  )}
                  <a 
                    href={`https://wa.me/573125971913?text=Hola,%20me%20gustaría%20reservar%20el%20servicio:%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSelectedService(null)}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full tracking-widest text-sm uppercase transition-colors shadow-lg shadow-teal-500/30"
                  >
                    Reservar Ahora
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
