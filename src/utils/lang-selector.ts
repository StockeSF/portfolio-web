type LanguageKeys = keyof typeof languageList

export const languageList = {
  es: 'Español',
  en: 'English'
}

const defaultLang = 'es'

export const langSelector = <T>(
  { currentLocale, labels }: { currentLocale: string, labels: Record<LanguageKeys, T> }
) => {
  return labels[currentLocale as LanguageKeys] || labels[defaultLang]
}
