import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Import translations
import translationEN from "./locales/en/translation.json"
import translationRU from "./locales/ru/translation.json"
import translationUZ from "./locales/uz/translation.json"
import translationAR from "./locales/ar/translation.json"
import translationTR from "./locales/tr/translation.json"
import translationKO from "./locales/ko/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
  ar: {
    translation: translationAR,
  },
  tr: {
    translation: translationTR,
  },
  ko: {
    translation: translationKO,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
