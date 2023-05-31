import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SelectedPage } from '@/types/types';
import { animationBottom } from '@/types/const';
import Slider from '@/components/Projects/Slider';
import Section from '@/components/shared/Section';

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <Section id={SelectedPage.Projects}>
      <motion.h2 {...animationBottom}>{t('Projects.name')}</motion.h2>
      <Slider />
    </Section>
  );
};

export default Projects;
