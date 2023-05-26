import { AnimationAttributes } from "@/types/types";

export function createAnimationAttributes(x: number, y: number): AnimationAttributes {
  return {
    variants: {
      hidden: { x: x, y: y, opacity: 0 },
      visible: { x: 0, y: 0, opacity: 1 },
    },
    initial: 'hidden',
    transition: { duration: 0.5 },
    whileInView: 'visible',
    viewport: { once: true, amount: 0.5 },
  };
}
