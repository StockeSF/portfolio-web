import type * as HOMELANG from '@/i18n/home/es/lang.json'
import type * as LAYOUTLANG from '@/i18n/layout/es/lang.json'

type LayoutLang = typeof LAYOUTLANG
type HomeLang = typeof HOMELANG

//	Layout
export type LayoutLangProfile = LayoutLang['PROFILE']
export type LayoutLangThemeProvider = LayoutLangProfile['FOOTER']['THEMEPROVIDER']
export type LayoutLangLangSelector = LayoutLangProfile['FOOTER']['LANGSELECTOR']
export type LayoutLangFooter = LayoutLang['FOOTER']

//	Home
export type HomeLangAbout = HomeLang['ABOUT']
export type HomeLangExperience = HomeLang['EXPERIENCE']
export type HomeLangExperienceItem = HomeLang['EXPERIENCE']['LIST'][0]
export type HomeLangProjects = HomeLang['PROJECTS']
export type HomeLangProjectsListItem = HomeLang['PROJECTS']['LIST'][0]
export type HomeLangEducation = HomeLang['EDUCATION']
export type HomeLangEducationListItem = HomeLang['EDUCATION']['LIST'][0]
export type HomeLangSkills = HomeLang['SKILLS']

interface PillProps {
	LABEL: string
	ICON?: string
}

export interface ExpTimeline extends HomeLangExperienceItem {
	PILLS: PillProps[]
}

export interface I18NSection<T> {
	LANG: T
}
