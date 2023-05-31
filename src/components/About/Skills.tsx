import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IconInterface, Technologies } from '@/types/types';
import { animationRight } from '@/types/const';
import Icon from '@/components/About/Icon';
import * as Icons from '@/components/shared/icons';

const icons: IconInterface[] = Object.values(Technologies).map(
  (technology) => ({
    name: technology,
    icon: Icons[technology],
  })
);

const Skills = () => {
  const { t } = useTranslation();

  return (
    <motion.article
      className="mt-8 basis-1/2 text-center tablet:mt-0"
      {...animationRight}
    >
      <h3>{t('About.skills-in')}</h3>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(3rem,_1fr))] gap-8">
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </div>
    </motion.article>
  );
};

export default Skills;
