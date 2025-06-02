import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    it: { translation: translationIT },
  },
  lng: "it", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
