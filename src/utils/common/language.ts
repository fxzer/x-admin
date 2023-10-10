import type { LanguageType } from '@/stores'
import { getBrowserLang } from '@/utils'

export function initLanguage(): LanguageType {
  const globalStore = localStorage.getItem('store-global') || '{}'
  return JSON.parse(globalStore)?.language || getBrowserLang()
}
