import { defineStore } from 'pinia'
import type { UserState } from '@/stores/interface'
import { usePiniaPersistConfig } from '@/hooks'

export const useUserStore = defineStore({
  id: 'store-user',
  state: (): UserState => ({
    token: '',
    userInfo: { name: 'Geeker' },
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
    },
  },
  persist: usePiniaPersistConfig('store-user'),
})
