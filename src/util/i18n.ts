import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import LanguageDetector from "i18next-browser-languagedetector"

import translationEN from "../locales/en/translation.json"
import translationPT from "../locales/pt/translation.json"
import translationDE from "../locales/de/translation.json"

type languageKeys = "en" | "pt" | "de"

type Language = {
  translation: any
  code: string
  textKey: string
}

type SupportedLanguage = Record<languageKeys, Language>

export const SUPPORTED_LANGUAGES: SupportedLanguage = {
  en: {
    translation: translationEN,
    code: "en-US",
    textKey: "shell.button.user.settings.item.languageSwitch.en",
  },
  pt: {
    translation: translationPT,
    code: "pt",
    textKey: "shell.button.user.settings.item.languageSwitch.pt",
  },
  de: {
    translation: translationDE,
    code: "de",
    textKey: "shell.button.user.settings.item.languageSwitch.de",
  },
}

export const getSupportedLanguageResources = (): Language[] => {
  const languages: Language[] = []
  Object.entries(SUPPORTED_LANGUAGES).forEach((language) => {
    languages.push(language[1])
  })
  return languages
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: SUPPORTED_LANGUAGES,
    react: {
      useSuspense: false,
    },
    fallbackLng: "en",
  })

export default i18n
