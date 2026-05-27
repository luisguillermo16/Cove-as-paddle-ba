'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Experiencia', href: 'experiencia' },
  { label: 'Servicios', href: 'servicios' },
  { label: 'Beneficios', href: 'beneficios' },
  { label: 'Testimonios', href: 'testimonios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(-1);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string, index: number) => {
    setMenuOpen(false);
    setSelected(index);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center font-sans">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          width: '100%',
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          mass: 1
        }}
        className={`pointer-events-auto w-full flex items-center justify-between px-8 py-4 transition-colors duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => {
            setSelected(-1);
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
          aria-label="Ir al inicio"
        >
          <Image 
            src="/logo.png" 
            alt="Coveñas Paddle Bay Logo" 
            width={180} 
            height={50} 
            className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
            priority
          />
          <span className="hidden sm:inline-block tracking-[0.2em] transition-all duration-500 uppercase text-xs font-medium">
            <span className="text-white">Coveñas</span> <span className="text-teal-400">Paddle Bay</span>
          </span>
        </button>

        {/* DESKTOP SLIDE TABS */}
        <div className="hidden lg:block">
          <ul
            onMouseLeave={() => {
              if (selected === -1) {
                setPosition((pv) => ({ ...pv, opacity: 0 }));
              } else {
                const selectedTab = tabsRef.current[selected];
                if (selectedTab) {
                  setPosition({
                    left: selectedTab.offsetLeft,
                    width: selectedTab.getBoundingClientRect().width,
                    opacity: 1,
                  });
                }
              }
            }}
            className="relative flex w-fit p-1"
          >
            {NAV_LINKS.map((tab, i) => (
              <Tab
                key={tab.href}
                ref={(el: HTMLLIElement | null) => { tabsRef.current[i] = el; }}
                setPosition={setPosition}
                onClick={() => scrollTo(tab.href, i)}
                isActive={selected === i}
                scrolled={scrolled}
              >
                {tab.label}
              </Tab>
            ))}
            <Cursor position={position} />
          </ul>
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              setSelected(-1);
              document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`group relative inline-flex items-center gap-2 px-6 rounded-none font-medium tracking-widest text-[10px] transition-all duration-500 active:scale-95 shadow-xl uppercase ${
              scrolled 
                ? 'bg-teal-400 text-black py-2 hover:bg-teal-300' 
                : 'bg-white text-black py-2.5 hover:bg-teal-400'
            }`}
          >
            Reservar
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-none transition-colors"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="lg:hidden absolute top-[calc(100%+1rem)] left-0 right-0 bg-[#020617]/95 backdrop-blur-2xl border border-white/10 px-6 py-8 rounded-none flex flex-col gap-4 shadow-2xl origin-top"
            >
              {NAV_LINKS.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href, i)}
                  className="text-left text-lg font-medium tracking-widest text-white hover:text-teal-400 transition-colors uppercase"
                >
                  {link.label}
                </button>
              ))}
              <hr className="border-white/10 my-2" />
              <button
                onClick={() => {
                  setMenuOpen(false);
                  document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-teal-400 text-black py-4 rounded-none font-bold text-lg shadow-lg shadow-teal-500/20 uppercase tracking-widest"
              >
                Reservar Ahora
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

const Tab = React.forwardRef<HTMLLIElement, { children: React.ReactNode, setPosition: (pos: any) => void, onClick: () => void, isActive: boolean, scrolled: boolean }>(
  ({ children, setPosition, onClick, isActive, scrolled }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (!ref || typeof ref === "function" || !ref.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className={`relative z-10 block cursor-pointer px-5 py-2 text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300 md:text-xs ${
          isActive ? 'text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        {children}
      </li>
    );
  }
);

Tab.displayName = "Tab";

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-8 rounded-none bg-teal-400/20 top-1/2 -translate-y-1/2"
    />
  );
};
