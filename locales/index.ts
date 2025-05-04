import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from './en';
import * as vi from './vi';

i18n.use(initReactI18next).init({
  fallbackLng: 'vi',
  resources: {
    en,
    vi,
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
