import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../src/locals/en.json';
import esTranslation from '../src/locals/es.json';
import frTranslation from '../src/locals/fr.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
