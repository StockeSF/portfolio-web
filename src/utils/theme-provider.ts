enum Theme {
  system = 'system',
  light = 'light',
  dark = 'dark'
}

type ThemeList = keyof typeof Theme

export const STORAGEKEY = 'user-theme'

export const getColorScheme = (): ThemeList => (
  matchMedia('(prefers-color-scheme: light)').matches ? Theme.light : Theme.dark
)

const parseTheme = (theme: string | null): ThemeList => (
  theme !== null && theme in Theme ? Theme[theme as ThemeList] : Theme.system
)

const changeStorage = (theme: ThemeList) => {
  localStorage.setItem(STORAGEKEY, theme)
}

export const loadTheme = (theme: string | null) => {
  const getTheme = parseTheme(theme)
  const storageItem = localStorage.getItem(STORAGEKEY)

  if (storageItem !== theme) changeStorage(getTheme)
  document.documentElement.dataset.theme = getTheme
}
