import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SelectedPageContext from '@/context/SelectedPageContexts';
import { SelectedPage } from '@/types/types';
import { animationBottom } from '@/types/const';
import Section from '@/components/shared/Section';

const Home = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
  const { t } = useTranslation();
  const slogan = t('Home.slogan');
  const title = t('Home.title');

  return (
    <Section id={SelectedPage.Home}>
      <motion.h1
        className="flex h-full flex-col justify-center gap-4 text-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        {...animationBottom}
      >
        <strong className="text-5xl tablet:text-7xl">Camilo Villarraga</strong>
        <strong>{title}</strong>
        <p className="text-primary-600 dark:text-primary-100">{slogan}</p>
      </motion.h1>
    </Section>
  );
};

export default Home;
