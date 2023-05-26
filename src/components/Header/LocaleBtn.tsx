import { Locales } from '@/types/types';
import { useTranslation } from 'react-i18next';
import Button from '@/components/shared/Button';

const LocaleBtn = () => {
  const { i18n, t } = useTranslation();

  
  const title: string = t('Header.title.LocaleBtn');
  const currentLocale = i18n.language as Locales;
  const newLocale = currentLocale === Locales.EN ? Locales.ES : Locales.EN;

  const changeLanguage = async () => {
    localStorage.setItem('lang', newLocale);
    await i18n.changeLanguage(newLocale);
  };

  return (
    <Button onClick={changeLanguage} title={title}>
      <span className="inline-block w-6">{newLocale}</span>
    </Button>
  );
};
export default LocaleBtn;
