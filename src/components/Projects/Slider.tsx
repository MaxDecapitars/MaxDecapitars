import { TouchEventHandler, useContext, useState } from 'react';
import { TargetAndTransition, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import projects from '@/assets/projects.json';
import SelectedPageContext from '@/context/SelectedPageContexts';
import { Project, SelectedPage } from '@/types/types';
import { animationRight, animationTop } from '@/types/const';
import Slide from '@/components/Projects/Slide';
import Button from '@/components/shared/Button';
import { ArrowLongLeft, ArrowLongRight } from '@/components/shared/icons';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { setSelectedPage } = useContext(SelectedPageContext);
  const { t } = useTranslation();

  const titleNext: string = t('Projects.title.next');
  const titlePrev: string = t('Projects.title.prev');
  let touchX = 0;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleToucheStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchX = e.changedTouches[0].clientX;
  };

  const handleToucheEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    const FinalX = e.changedTouches[0].clientX;

    const diff = touchX - FinalX;

    if (diff > 60 || diff < -60) {
      diff > 0 ? handlePrev() : handleNext();
    }
  };

  const getSlideAnimate = (index: number): TargetAndTransition => {
    const isActive: boolean = index === activeIndex;
    const isNext: boolean = index === (activeIndex + 1) % projects.length;
    const isLast: boolean = index === (activeIndex + 2) % projects.length;

    const y: string = isActive ? '0' : isNext ? '1.5rem' : '3rem';
    const scale: number = isActive ? 1 : isNext ? 0.97 : 0.94;
    const zIndex: number = isActive ? 2 : isNext ? 1 : isLast ? 0 : -1;
    const opacity: number = isActive || isNext || isLast ? 1 : 0;

    return { y, opacity, scale, zIndex };
  };

  return (
    <div>
      <motion.div
        className="relative mt-8 h-[55vh] tablet:aspect-video tablet:h-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        onTouchStart={handleToucheStart}
        onTouchEnd={handleToucheEnd}
        {...animationRight}
      >
        {projects.map((project, index) => (
          <Slide
            isActive={activeIndex === index}
            project={project as Project}
            key={index}
            animate={getSlideAnimate(index)}
          />
        ))}
      </motion.div>
      <motion.div className="mt-16 flex justify-between" {...animationTop}>
        <Button onClick={handlePrev} title={titlePrev}>
          <span className="h-full p-1">
            <ArrowLongLeft />
          </span>
        </Button>

        <Button onClick={handleNext} title={titleNext}>
          <span className="h-full p-1">
            <ArrowLongRight />
          </span>
        </Button>
      </motion.div>
    </div>
  );
};

export default Slider;
