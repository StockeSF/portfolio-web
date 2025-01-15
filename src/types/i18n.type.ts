import type * as HOMELANG from '@/i18n/home/es/lang.json'

type HomeLang = typeof HOMELANG

export type HomeLangProfile = HomeLang['PROFILE']
export type HomeLangExperience = HomeLang['EXPERIENCE']
export type HomeLangExperienceItem = HomeLang['EXPERIENCE']['LIST'][0]
export type HomeLangProjects = HomeLang['PROJECTS']

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