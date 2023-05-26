import { animationLeft } from '@/types/const';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const experience = t('About.experience');
  const comment = t('About.comment');
  const before =
    'before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:rounded-lg before:bg-secondary-50 before:bg-[linear-gradient(120deg,_#fe80b1,_#960707,_#dfb548)] before:p-[2px] before:[mask-composite:_exclude] before:[mask:_linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)]';

  return (
    <motion.article
      className="flex basis-1/2 flex-col text-center"
      {...animationLeft}
    >
      <h3>{t('About.profile')}</h3>
      <div
        className={`relative mt-8 flex h-full flex-col justify-center rounded-lg p-6 backdrop-blur-2xl ${before} dark:backdrop-blur-2xl`}
      >
        <p>{experience}</p>
        <br />
        <p>{comment}</p>
      </div>
    </motion.article>
  );
};
export default Profile;
