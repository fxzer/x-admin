/**
 * v-auth
 * 按钮权限指令
 */
import type { Directive, DirectiveBinding } from 'vue'
import { useAuthStore } from '@/stores/modules/auth'

const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    const authStore = useAuthStore()
    const currentPageRoles = authStore.authButtonList[authStore.routeName] ?? []
    if (Array.isArray(value) && value.length) {
      const hasPermission = value.every(item => currentPageRoles.includes(item))
      if (!hasPermission)
        el.remove()
    }
    else {
      if (!currentPageRoles.includes(value))
        el.remove()
    }
  },
}

export default auth
