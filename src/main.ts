import { createApp } from 'vue'
import { setupAssets, setupErrorHandler } from './plugins'
import { setupStore } from './stores'
import { setupRouter } from './routers'
import { setupDirectives } from './directives'
import { setupGlobalImportEp } from './plugins/element-plus'
import App from './App.vue'
import { setupI18n } from './locales'
import Loading from '@/components/Loading/index.vue'

async function setupApp() {
  // 引入静态资源
  setupAssets()
  // 加载动画
  const appLoading = createApp(Loading)
  appLoading.mount('#appLoading')

  // 初始化 App
  const app = createApp(App)

  // 初始化错误捕捉
  setupErrorHandler(app)
  // 初始化 Directives
  setupDirectives(app)

  // 初始化 Store
  setupStore(app)

  // 初始化 I18n
  setupI18n(app)

  // 全局导入 ElementPlus
  setupGlobalImportEp(app)

  // 初始化 Router
  await setupRouter(app)

  // 卸载加载动画
  appLoading.unmount()
  app.mount('#app')
}
setupApp()
