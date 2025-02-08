export const languageList = {
  es: {
    label: 'Español',
    hreflang: 'es-ES',
  },
  en: {
    label: 'English',
    hreflang: 'en-US',
  },
}

type LanguageKeys = keyof typeof languageList

export const defaultLang = 'es'

export const langSelector = <T>({
  currentLocale,
  labels,
}: {
  currentLocale: string
  labels: Record<LanguageKeys, T>
}) => {
  return labels[currentLocale as LanguageKeys] || labels[defaultLang]
}
