import { languageList, defaultLang } from './lang-selector'

const langKeys = Object.keys(languageList)

const parseLang = (lang: string) => (langKeys.includes(lang) ? lang : defaultLang)

export const filterLang = (locale: string, equal = true) => {
  const obj = Object.entries(languageList).filter(([key]) =>
    equal ? key === locale : key !== locale
  )

  return Object.fromEntries(obj)
}

export const parseUrl = (url: URL, locale: string) => {
  url = new URL(url)

  const [, baseSegment] = url.pathname.split('/')

  const parsedLocale = parseLang(locale)

  if (baseSegment) {
    url.pathname = url.pathname.replace(baseSegment, parsedLocale)
  } else {
    url.pathname = url.pathname.replace('/' + baseSegment, '')
  }

  return url
}
