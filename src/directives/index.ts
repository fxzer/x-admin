import type { App, Directive } from 'vue'
import auth from './modules/auth'
import copy from './modules/copy'
import waterMarker from './modules/waterMarker'
import draggable from './modules/draggable'
import debounce from './modules/debounce'
import throttle from './modules/throttle'
import longPress from './modules/longPress'
import slideIn from './modules/slideIn'

const directivesList: { [key: string]: Directive } = {
  auth,
  copy,
  waterMarker,
  draggable,
  debounce,
  throttle,
  longPress,
  slideIn,
}

const directives = {
  install(app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      app.directive(key, directivesList[key])
    })
  },
}

export function setupDirectives(app: App) {
  app.use(directives)
  // 查看全局已注册的指令
  console.log(app._context.directives)
}
