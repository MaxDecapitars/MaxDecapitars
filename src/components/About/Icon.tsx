import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconInterface } from '@/types/types';

type Props = {
  icon: IconInterface;
};

const Icon = ({ icon }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative [perspective:_6rem]"
    >
      <motion.figure
        className=" flex flex-col items-center [transform-style:_preserve-3d]"
        animate={isHover ? { rotateY: 180 } : {}}
        whileTap={{ scale: 0.9 }}
      >
        <div className="[backface-visibility:_hidden]">
          <icon.icon />
        </div>
        <figcaption className="absolute top-1/2 cursor-default rounded-full bg-primary-600 px-2 py-0.5 text-xs font-bold text-white [backface-visibility:_hidden] [transform:_rotateY(180deg)_translateY(-50%)]">
          {icon.name}
        </figcaption>
      </motion.figure>
    </motion.div>
  );
};

export default Icon;
