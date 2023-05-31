import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';
import { ContactInputs } from '@/types/types';

type Props = {
  name: 'name' | 'email' | 'comments';
  type?: React.HTMLInputTypeAttribute;
  textarea?: boolean;
  register: UseFormRegister<ContactInputs>;
  registerOptions?: RegisterOptions<
    ContactInputs,
    'name' | 'email' | 'comments'
  >;
  errors: FieldErrors<ContactInputs>;
  Icon?: React.FunctionComponent;
};

const Input = ({
  name,
  type,
  textarea,
  register,
  registerOptions,
  errors,
  Icon,
}: Props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const { t } = useTranslation();

  const localizedName = t(`Contact.form.${name}`);

  const inputStyles =
    'h-full basis-full bg-transparent resize-none outline-none';
  const labelStyles = `uppercase transition-colors ${
    selected
      ? 'text-black dark:text-gray-50'
      : 'text-gray-300 dark:text-gray-700'
  }`;

  const handleBlur: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.target;
    if (!value) setSelected(false);
  };

  return (
    <div
      className={`relative mb-6 flex ${
        textarea ? 'h-40' : 'h-[5.5rem]'
      } items-center gap-3 border-b-[1px] border-b-gray-300 pt-12 dark:border-b-gray-700`}
    >
      {!textarea && (
        <div className="h-6 text-gray-300 dark:text-gray-700">
          {Icon && <Icon />}
        </div>
      )}

      {textarea ? (
        <>
          <textarea
            className={inputStyles}
            id={`${name}-textarea`}
            onFocus={() => setSelected(true)}
            {...register(name, {
              ...registerOptions,
              onBlur: handleBlur,
            })}
          ></textarea>
          <motion.label
            className={labelStyles}
            htmlFor={`${name}-textarea`}
            variants={{
              inactive: {
                position: 'absolute',
                left: 0,
                top: '3rem',
                cursor: 'text',
              },
              active: { left: 0, top: '1.5rem', scale: 0.8, cursor: 'default' },
            }}
            initial="inactive"
            animate={selected ? 'active' : 'inactive'}
          >
            {localizedName}
          </motion.label>
        </>
      ) : (
        <>
          <input
            className={inputStyles}
            type={type}
            id={`${name}-input`}
            onFocus={() => setSelected(true)}
            {...register(name, {
              ...registerOptions,
              onBlur: handleBlur,
            })}
          />
          <motion.label
            className={labelStyles}
            htmlFor={`${name}-input`}
            variants={{
              inactive: {
                position: 'absolute',
                left: '2.25rem',
                top: '3.5rem',
                cursor: 'text',
              },
              active: { left: 0, top: '1.5rem', scale: 0.8, cursor: 'default' },
            }}
            initial="inactive"
            animate={selected ? 'active' : 'inactive'}
          >
            {localizedName}
          </motion.label>
        </>
      )}

      {errors[name] && (
        <motion.span
          className="absolute -bottom-8 right-0 text-primary-300"
          variants={{
            hidden: { opacity: 0.5, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {errors[name]?.type === 'maxLength' &&
            t('Contact.form.messages.maxLength', {
              maxLength: registerOptions?.maxLength,
            })}

          {errors[name]?.type === 'pattern' &&
            t('Contact.form.messages.pattern', {
              name: localizedName,
            })}

          {errors[name]?.type === 'required' &&
            t('Contact.form.messages.required', {
              name: localizedName,
            })}
        </motion.span>
      )}
    </div>
  );
};

export default Input;
