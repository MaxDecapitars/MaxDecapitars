import { Variants } from 'framer-motion';
import { createAnimationAttributes } from '@/helpers/helpAnimation';

export const ulAnimate: Variants = {
  hidden: { opacity: 0.5, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.06,
    },
  },
};

export const liAnimate: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const navAnimate: Variants = {
  hidden: { opacity: 0.5, x: '100%' },
  visible: {
    opacity: 1,
    x: '3rem',
  },
};

export const animationRight = createAnimationAttributes(-50, 0);
export const animationLeft = createAnimationAttributes(50, 0);
export const animationBottom = createAnimationAttributes(0, -50);
export const animationTop = createAnimationAttributes(0, 50);
