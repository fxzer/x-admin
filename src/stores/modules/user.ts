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
  return { token, userInfo, setToken, setUserInfo }
}, { persist: true })
