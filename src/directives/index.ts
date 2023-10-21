import type { App } from 'vue'
import directivesMap from './modules'

const directives = {
  install(app: App<Element>) {
    Object.keys(directivesMap).forEach((key) => {
      app.directive(key, directivesMap[key])
    })
  },
}

export function setupDirectives(app: App) {
  app.use(directives)
}
