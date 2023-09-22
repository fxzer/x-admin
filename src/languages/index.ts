import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

import zh from './modules/zh'
import en from './modules/en'
import { getBrowserLang } from '@/utils'

const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  messages: {
    zh,
    en,
  },
})

export function setupI18n(app: App) {
  app.use(i18n)
}
