import { SelectedPage } from '@/types/types';
import Section from '../shared/Section';
import Slider from './Slider';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { animationBottom } from '@/types/const';

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
