import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

import zh from '@/locales/zh'
import en from '@/locales/en'
import { initLanguage } from '@/utils'

const i18n = createI18n({
  allowComposition: true,
  legacy: false,
  locale: initLanguage()!,
  messages: {
    zh,
    en,
  },
})

export function setupI18n(app: App) {
  app.use(i18n)
}
