import { createI18n } from 'vue-i18n';
import en from '@/locale/en.json';
import ar from '@/locale/ar.json';

// Define messages
const messages = {
  en: en,
  ar: ar,
};

// Create i18n instance
const i18n = createI18n({
  locale: 'en', // Set locale
  fallbackLocale: 'en', // Set fallback locale
  messages, // Set locale messages
});

export default i18n;
