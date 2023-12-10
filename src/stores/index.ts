import type { App } from 'vue'

import { createPinia } from 'pinia'

// store中使用了其他 store 报错问题

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function setupStore(app: App) {
  const pinia = createPinia()
  app.use(pinia)
  // store持久化
  pinia.use(piniaPluginPersistedstate)
}

export * from './modules'
export * from './interface'
