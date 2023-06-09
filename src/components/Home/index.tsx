import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SelectedPageContext from '@/context/SelectedPageContexts';
import { SelectedPage } from '@/types/types';
import { animationBottom, animationTop } from '@/types/const';
import Section from '@/components/shared/Section';
import Button from '../shared/Button';

const Home = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
  const { t } = useTranslation();
  const slogan = t('Home.slogan');
  const title = t('Home.title');
  const btnText = t('About.download-cv');

  const handleDownloadCV = () => {
    window.open('./Camilo-Villarraga-CV.pdf', '_blank');
  };

  return (
    <Section id={SelectedPage.Home}>
      <motion.div
        className="flex flex-grow flex-col items-center justify-center text-center laptop:grid laptop:grid-rows-3"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.h1
          className="flex flex-col justify-center gap-4 text-center laptop:row-start-2 laptop:self-center"
          {...animationBottom}
        >
          <strong className="text-5xl tablet:text-7xl">
            Camilo Villarraga
          </strong>
          <strong className="text-2xl dark:text-primary-50 tablet:text-3xl">
            {title}
          </strong>
          <p className="text-primary-600 dark:text-primary-100">{slogan}</p>
        </motion.h1>
        <motion.div
          className="flex flex-col gap-4 laptop:row-start-3 laptop:self-end"
          {...animationTop}
        >
          <div className="mt-8 flex flex-row justify-center gap-4">
            <a
              href="https://github.com/MaxDecapitars"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/camilo-villarraga/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div>
            <Button onClick={handleDownloadCV}>
              <span className="p-2">{btnText}</span>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Home;
