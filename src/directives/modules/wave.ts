// 按钮点击波纹效果
export default {
  mounted(el, binding) {
    el.addEventListener('click', (e) => {
      const customOpts = Object.assign({}, binding.value)
      const opts = Object.assign({
        ele: el, // 波纹作用元素
        color: 'rgba(0, 0, 0, 0.1)', // 波纹颜色
      }, customOpts)
      const target = opts.ele
      if (target) {
        target.style.position = 'relative'
        target.style.overflow = 'hidden'
        const rect = target.getBoundingClientRect()
        let ripple = target.querySelector('.waves-ripple')
        if (!ripple) {
          ripple = document.createElement('span')
          ripple.className = 'waves-ripple'
          ripple.style.height = ripple.style.width = `${Math.max(rect.width, rect.height)}px`
          target.appendChild(ripple)
        }
        else {
          ripple.className = 'waves-ripple'
        }
        const dst = document.documentElement.scrollTop || document.body.scrollTop
        const dsl = document.documentElement.scrollLeft || document.body.scrollLeft
        ripple.style.top = `${e.pageY - rect.top - ripple.offsetHeight / 2 - dst}px`
        ripple.style.left = `${e.pageX - rect.left - ripple.offsetWidth / 2 - dsl}px`
        ripple.style.backgroundColor = opts.color
        ripple.className = 'waves-ripple z-active'
        return false
      }
    }, false)
  },
}
