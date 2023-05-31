import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import SelectedPageContext from '@/context/SelectedPageContexts';
import { ContactInputs, SelectedPage } from '@/types/types';
import { animationLeft } from '@/types/const';
import Input from '@/components/Contact/Input';
import SubmitMessage from '@/components/Contact/SubmitMessage';
import { AtSymbol, User } from '@/components/shared/icons';
import Button from '@/components/shared/Button';
import Loader from '@/components/shared/Loader';

const before =
  'before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-[1] before:rounded-lg before:bg-secondary-50 before:bg-[linear-gradient(120deg,_#fe80b1,_#960707,_#dfb548)] before:p-[2px] before:[mask-composite:_exclude] before:[mask:_linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)]';

const Form = () => {
  const [submit, setSubmit] = useState<'SUCCESS' | 'ERROR' | false>(false);
  const { setSelectedPage } = useContext(SelectedPageContext);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    if (!isValid) return;

    const options: RequestInit = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
    };

    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/mdecapitars@gmail.com',
        options
      );

      if (!res.ok) throw new Error();

      reset();
      setSubmit('SUCCESS');
    } catch (error) {
      setSubmit('ERROR');
    } finally {
      setTimeout(() => {
        setSubmit(false);
      }, 6000);
    }
  };

  return (
    <motion.form
      className={`relative mt-8 basis-1/2 px-6 backdrop-blur-2xl tablet:mt-0 ${before}`}
      onSubmit={handleSubmit(onSubmit)}
      onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      {...animationLeft}
    >
      <Input
        name="name"
        type="text"
        register={register}
        errors={errors}
        registerOptions={{ required: true, maxLength: 100 }}
        Icon={User}
      />
      <Input
        name="email"
        type="email"
        register={register}
        errors={errors}
        registerOptions={{
          required: true,
          pattern: /^[A-Z0-9._/+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        }}
        Icon={AtSymbol}
      />

      <Input
        name="comments"
        textarea
        register={register}
        errors={errors}
        registerOptions={{ required: true, maxLength: 2000 }}
      />
      <div className="relative flex h-24 items-center justify-center py-6">
        {isSubmitting ? (
          <Loader />
        ) : (
          <Button type="submit">{t('Contact.form.button')}</Button>
        )}
        {submit && <SubmitMessage state={submit} />}
      </div>
    </motion.form>
  );
};

export default Form;
