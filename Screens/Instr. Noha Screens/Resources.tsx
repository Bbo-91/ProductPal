import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome Every one To  summer train!',
      greeting: 'Hello, {{name}}!',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue !',
      greeting: 'Salut, {{name}}!',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
