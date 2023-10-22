import type { Directive } from 'vue'

/** 输入框自动高度调节 */
export default {
  mounted(el, binding) {
    const { value } = binding
    const { minRows, maxRows } = value

    const style = window.getComputedStyle(el)
    const lineHeight = Number.parseFloat(style.lineHeight)
    const paddingTop = Number.parseFloat(style.paddingTop)
    const paddingBottom = Number.parseFloat(style.paddingBottom)

    const min = minRows * lineHeight + paddingTop + paddingBottom
    const max = maxRows * lineHeight + paddingTop + paddingBottom

    const resize = () => {
      el.style.height = 'auto'
      el.style.overflowY = 'auto'

      const height = el.scrollHeight
      if (height < min) {
        el.style.height = `${min}px`
        el.style.overflowY = 'auto'
      }
      else if (height > max) {
        el.style.height = `${max}px`
        el.style.overflowY = 'auto'
      }
      else {
        el.style.height = `${height}px`
        el.style.overflowY = 'hidden'
      }
    }

    el.addEventListener('input', resize)
    nextTick(resize)
  },
} as Directive
