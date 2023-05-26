import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import * as Icons from '../shared/icons';
import { liAnimate } from '@/types/const';
import Ul from './Ul';
import { useTranslation } from 'react-i18next';

type Props = {
  preview?: string;
  repository?: string;
  WIP?: boolean;
};

const Links = ({ preview, repository, WIP }: Props) => {
  const [scope, animate] = useAnimate();
  const { t } = useTranslation();

  useEffect(() => {
    animate(
      'svg',
      { x: [-5, 5, -5], scaleX: [0.8, 1, 0.8] },
      { repeat: Infinity }
    );
  });

  return (
    <Ul className="-right-2 top-10 laptop:top-[5.5rem] desktop:-right-8">
      <motion.li
        className={`${
          !preview && !repository ? 'hidden' : ''
        } aspect-square w-6`}
        variants={liAnimate}
        ref={scope}
      >
        <Icons.ArrowDoubleRight />
      </motion.li>

      {preview && (
        <motion.li className="aspect-square w-6" variants={liAnimate}>
          <a
            href={preview}
            target="_blank"
            title={t('Projects.links.preview') as string}
            rel="noopener noreferrer"
          >
            <Icons.Globe />
          </a>
        </motion.li>
      )}

      {repository && (
        <motion.li className="aspect-square w-6" variants={liAnimate}>
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            title={t('Projects.links.repository') as string}
          >
            <Icons.GitHub />
          </a>
        </motion.li>
      )}

      {WIP && (
        <motion.li
          className="flex aspect-square w-6 items-center justify-center"
          variants={liAnimate}
        >
          <span
            className="text-xs font-bold"
            title={t('Projects.links.WIP') as string}
          >
            WIP
          </span>
        </motion.li>
      )}
    </Ul>
  );
};
export default Links;
