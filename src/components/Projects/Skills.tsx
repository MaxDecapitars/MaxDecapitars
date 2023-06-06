import { useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { Technologies } from '@/types/types';
import { liAnimate } from '@/types/const';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Ul from '@/components/Projects/Ul';
import Button from '@/components/shared/Button';
import * as Icons from '@/components/shared/icons';

type Props = {
  technologies: Technologies[];
};

const Skills = ({ technologies }: Props) => {
  const [moreTechnologies, setMoreTechnologies] = useState<boolean>(false);

  const isAboveTabletScreens = useMediaQuery('(min-width: 40em)');

  const handleMoreTechnologies = () => {
    setMoreTechnologies(!moreTechnologies);
  };

  return (
    <>
      {(isAboveTabletScreens ||
        (!isAboveTabletScreens && technologies.length <= 4)) && (
        <Ul className="-left-2 bottom-4 laptop:bottom-[4rem] desktop:-left-8">
          {technologies.map((technology, index) => {
            const Icon = Icons[technology];

            return (
              <motion.li
                className="aspect-square w-6"
                key={index}
                variants={liAnimate}
                title={technology}
              >
                <Icon />
              </motion.li>
            );
          })}
        </Ul>
      )}

      {!isAboveTabletScreens && technologies.length > 4 && (
        <Ul className="-left-2 bottom-4 laptop:bottom-[4rem] desktop:-left-8">
          {technologies.map((technology, index) => {
            if (index > 2) return;
            const Icon = Icons[technology];

            return (
              <motion.li
                className="aspect-square w-6"
                key={index}
                variants={liAnimate}
                title={technology}
              >
                <Icon />
              </motion.li>
            );
          })}

          <motion.li
            className="relative flex aspect-square w-6 justify-center"
            variants={liAnimate}
          >
            {technologies.map((technology, index) => {
              if (index <= 2) return;

              const spanAnimate: Variants = {
                hidden: {
                  top: `-${(index - 1.5) * 1.5}rem`,
                  opacity: 0,
                  x: -30,
                  transition: {
                    delay: (index - 3) * 0.05,
                  },
                },
                visible: {
                  opacity: 1,
                  x: '.75rem',
                  transition: {
                    delay: (index - 3) * 0.05,
                  },
                },
              };

              return (
                <motion.span
                  className="absolute right-0 rounded-full bg-secondary-300 px-2 py-0.5 text-xs font-bold text-white"
                  key={index}
                  initial="hidden"
                  animate={moreTechnologies ? 'visible' : 'hidden'}
                  variants={spanAnimate}
                >
                  {technology}
                </motion.span>
              );
            })}

            <Button onClick={handleMoreTechnologies}>
              <span className="p-2 text-base">
                <small className="font-thin">+</small>
                <small>{technologies.length - 3}</small>
              </span>
            </Button>
          </motion.li>
        </Ul>
      )}
    </>
  );
};
export default Skills;
