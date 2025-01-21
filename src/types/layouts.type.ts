import type * as LAYOUTLANG from '@/i18n/layout/es/lang.json'

type LayoutLang = typeof LAYOUTLANG

export type LayoutLangThemeProvider = LayoutLang['ThemeProvider']
export type LayoutLangFooter = LayoutLang['FOOTER']

export interface SEOProps {
	title: string
	description: string
	url: string
}
