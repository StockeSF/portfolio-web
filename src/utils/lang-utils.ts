import { languageList, defaultLang } from './lang-selector'

const parseLang = (lang: string) => (
  lang in languageList ? lang : defaultLang
)

const stripTrailingSlash = (url: string) => {
  if (url[url.length - 1] === '/') url = url.slice(0, -1)
  return url
}

export const filterLang = (locale: string, equal = true) => {
	const obj = Object.entries(languageList)
		.filter(([key, _]) => equal ? key === locale : key !== locale)

	return Object.fromEntries(obj)
}

export const parseUrl = (url: URL, locale: string) => {
  url = new URL(url)

  const [_, baseSegment] = url.pathname.split('/')

  if (baseSegment) {
    url.pathname = url.pathname.replace(baseSegment, locale)
  } else {
    url.pathname = url.pathname.replace('/' + baseSegment, '')
  }

  return url
}