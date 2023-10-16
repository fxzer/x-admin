import { defineStore } from 'pinia'

export const useUserStore = defineStore('store-user', () => {
  const token = ref('')
  const userInfo = ref({ name: 'Fxzer' })

  // Set Token
  function setToken(tk: string) {
    token.value = tk
  }
  interface UserInfo {
    name: string
  }
  // Set setUserInfo
  function setUserInfo(info: UserInfo) {
    userInfo.value = info
  }
  // 保存当前路由，用于存储上一次路由
  const preRouter = ref()
  function setPreRouter(router: any) {
    preRouter.value = router
  }
  return { token, userInfo, preRouter, setToken, setUserInfo, setPreRouter }
}, { persist: true })
