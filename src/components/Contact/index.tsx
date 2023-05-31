import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SelectedPage } from '@/types/types';
import { animationBottom, animationRight } from '@/types/const';
import Form from '@/components/Contact/Form';
import Section from '@/components/shared/Section';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Section id={SelectedPage.Contact}>
      <motion.h2 {...animationBottom}>{t('Contact.name')}</motion.h2>

      <div className="mt-8 gap-12 tablet:flex">
        <motion.div className="flex basis-1/2 flex-col justify-center text-lg tablet:text-xl" {...animationRight}>
          <p>{t('Contact.invite1')}</p>
          <p>{t('Contact.invite2')}</p>
        </motion.div>
        <Form />
      </div>
    </Section>
  );
};
export default Contact;
