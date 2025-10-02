import en from '../locales/en.json'
import es from '../locales/es.json'

export const languages = {
  en: 'English',
  da: 'Dansk',
  ja: '日本語',
}

export const defaultLang = 'en'

export const translations = {
  en,
  es,
  da: es, // TODO: Add Danish translations
  ja: es, // TODO: Add Japanese translations
}

export function getTranslations(lang = defaultLang) {
  return translations[lang] || translations[defaultLang]
}

export function getTransLink(lang, path) {
  if (lang === defaultLang) {
    return path
  }
  return `/${lang}${path}`
}

