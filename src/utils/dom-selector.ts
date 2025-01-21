import type { Selector, SelectorList } from '@/types/dom.type'

export const $: Selector = (el: string) => document.querySelector(el)

export const $$: SelectorList = (el: string) => document.querySelectorAll(el)
