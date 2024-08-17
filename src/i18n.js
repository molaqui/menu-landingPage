import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import en from './locale/en.json';
import fr from './locale/fr.json';
import ar from './locale/ar.json';
import zh from './locale/zh.json';

i18n
  .use(Backend) // load translations using http (default public/assets/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
      zh: { translation: zh },
    },
    lng: localStorage.getItem('i18nextLng') || 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en', // use en if detected lng is not available
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
