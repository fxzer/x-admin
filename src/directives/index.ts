import type { App } from 'vue'
import VWave from 'v-wave'
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
  app.use(VWave, {
    color: '#009CF9',
    initialOpacity: 0.4,
    easing: 'ease-in-out',
  })
}
