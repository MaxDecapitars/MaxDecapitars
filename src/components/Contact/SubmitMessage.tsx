import { Variants, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const errorVariants: Variants = {
  hidden: { opacity: 0.5, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

type Props = {
  state: 'SUCCESS' | 'ERROR';
};

const SubmitMessage = ({ state }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      {state === 'ERROR' ? (
        <motion.span
          className="absolute top-0 text-primary-300"
          variants={errorVariants}
          initial="hidden"
          animate="visible"
        >
          {t('Contact.form.messages.submitError')}
        </motion.span>
      ) : (
        <motion.span
          className="absolute top-0 text-secondary-100"
          variants={errorVariants}
          initial="hidden"
          animate="visible"
        >
          {t('Contact.form.messages.submitSuccess')}
        </motion.span>
      )}
    </>
  );
};

export default SubmitMessage;
