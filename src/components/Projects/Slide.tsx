import { TargetAndTransition, motion } from 'framer-motion';
import { Project } from '@/types/types';
import Skills from '@/components/Projects/Skills';
import Links from '@/components/Projects/Links';

type Props = {
  isActive: boolean;
  project: Project;
  animate: TargetAndTransition;
};

const Slide = ({ isActive, project, animate }: Props) => {
  const { name, img, technologies, preview, repository, WIP } = project;

  return (
    <motion.article
      className={`absolute h-full w-full rounded-lg bg-[linear-gradient(120deg,_#fe80b1,_#960707,_#dfb548)] p-[2px]`}
      animate={animate}
      initial={false}
    >
      <h3 className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-base">
        {name}
      </h3>
      <div className="h-full overflow-hidden rounded-md bg-white bg-opacity-80 dark:bg-secondary-950 dark:bg-opacity-70">
        <img
          className={`h-full w-full object-cover object-top pt-6`}
          src={`./${img}`}
          alt={name}
        ></img>
      </div>
      {isActive && (
        <>
          <Skills technologies={technologies} />
          <Links preview={preview} repository={repository} WIP={WIP} />
        </>
      )}
    </motion.article>
  );
};

export default Slide;
