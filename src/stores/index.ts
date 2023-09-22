import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

export function setupStore(app: App) {
  app.use(pinia)
  // store持久化
  pinia.use(piniaPluginPersistedstate)
}

export default pinia
