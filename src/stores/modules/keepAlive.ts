import { defineStore } from 'pinia'
import type { KeepAliveState } from '@/stores/interface'

export const useKeepAliveStore = defineStore({
  id: 'geeker-keepAlive',
  state: (): KeepAliveState => ({
    activeNames: [],
  }),
  actions: {
    // 添加缓存组件名
    async addActiveName(name: string) {
      !this.activeNames.includes(name) && this.activeNames.push(name)
    },
    // 删除缓存组件名
    async removeActiveName(name: string) {
      this.activeNames = this.activeNames.filter(item => item !== name)
    },
    // 设置缓存组件名
    async setActiveNames(activeNames: string[] = []) {
      this.activeNames = activeNames
    },
  },
})
