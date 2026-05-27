'use client';

import { useRef } from 'react';
import { useInView, Variants } from 'framer-motion';

/**
 * Hook reutilizable para detectar cuándo un elemento entra en el viewport.
 * @param margin Margen para activar la animación (ej: '-100px').
 * @returns Ref del elemento y estado booleano isInView.
 */
export function useScrollReveal(margin = '-80px') {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}

// ── Variantes de animación extraídas del skill ──

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export const fadeScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const slideFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export const slideFromRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.1 
    } 
  }
};

export const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
};
