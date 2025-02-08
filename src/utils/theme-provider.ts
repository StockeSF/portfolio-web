const Themes = {
  system: 0,
  light: 1,
  dark: 2,
}

type ThemeList = keyof typeof Themes

const ThemeKeys = Object.keys(Themes) as ThemeList[]

export const STORAGEKEY = 'user-theme'

export const getColorScheme = (): ThemeList =>
  matchMedia('(prefers-color-scheme: light)').matches
    ? ThemeKeys[Themes.light]
    : ThemeKeys[Themes.dark]

const parseTheme = (theme: string | null): ThemeList =>
  theme !== null && Themes[theme as ThemeList]
    ? ThemeKeys[Themes[theme as ThemeList]]
    : ThemeKeys[Themes.system]

const changeStorage = (theme: ThemeList) => localStorage.setItem(STORAGEKEY, theme)

export const loadTheme = (theme: string | null) => {
  const getTheme = parseTheme(theme)
  const storageItem = localStorage.getItem(STORAGEKEY)

  if (storageItem !== theme) changeStorage(getTheme)
  document.documentElement.dataset.theme = getTheme
}
