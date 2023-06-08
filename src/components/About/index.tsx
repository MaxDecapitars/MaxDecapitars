import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SelectedPageContext from '@/context/SelectedPageContexts';
import { SelectedPage } from '@/types/types';
import { animationBottom, animationTop } from '@/types/const';
import Profile from '@/components/About/Profile';
import Skills from '@/components/About/Skills';
import Section from '@/components/shared/Section';
import Button from '@/components/shared/Button';

const About = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
  const { t } = useTranslation();
  const btnText: string = t('About.download-cv');

  const handleDownloadCV = () => {
    window.open('./Camilo-Villarraga-CV.pdf', '_blank');
  };

  return (
    <Section id={SelectedPage.About}>
      <motion.h2 {...animationBottom}>{t('About.name')}</motion.h2>
      <motion.div
        className="mt-8 gap-12 tablet:flex tablet:flex-row-reverse"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <Profile />
        <Skills />
      </motion.div>
      
    </Section>
  );
};

export default About;
