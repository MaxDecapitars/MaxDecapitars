import { motion } from 'framer-motion';
import { ulAnimate } from '@/types/const';

type Props = {
  children: React.ReactNode;
  className: string;
};

const Ul = ({ children, className }: Props) => {
  return (
    <motion.ul
      className={`absolute flex h-12 items-center justify-center gap-3 rounded-lg bg-[linear-gradient(120deg,_#ffb4d1e9,_#ff7b7be9,_#ffeab7e9)] p-3 backdrop-blur-[1px] dark:bg-[linear-gradient(120deg,_#fe80b1e9,_#960707e9,_#dfb548e9)] ${className}`}
      variants={ulAnimate}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
};
export default Ul;
