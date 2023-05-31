import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from '@/assets/en.json';
import es from '@/assets/es.json';
import { Locales } from '@/types/types';

const resources = {
  [Locales.EN]: {
    translation: en,
  },
  [Locales.ES]: {
    translation: es,
  },
};

const getDefaultLanguage = (): Locales => {
  const storedLanguage = localStorage.getItem('lang') as Locales;
  const userLanguage = storedLanguage || window.navigator.language;
  return Object.values(Locales).includes(userLanguage)
    ? userLanguage
    : Locales.EN;
};

i18n.use(initReactI18next).init({
  resources,
  lng: getDefaultLanguage(),
  fallbackLng: Locales.EN,
});

export default i18n;
