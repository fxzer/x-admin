import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/modules/auth'

/**
 * @description 页面按钮权限
 */
export function useAuthButtons() {
  const route = useRoute()
  const authStore = useAuthStore()
  const authButtons = authStore.authButtonList[route.name as string] || []

  const BUTTONS = computed(() => {
    const currentPageAuthButton: { [key: string]: boolean } = {}
    authButtons.forEach(item => (currentPageAuthButton[item] = true))
    return currentPageAuthButton
  })

  return {
    BUTTONS,
  }
}
