import { defineStore } from 'pinia'
import type { KeepAliveState } from '@/stores/interface'

export const useKeepAliveStore = defineStore({
  id: 'geeker-keepAlive',
  state: (): KeepAliveState => ({
    aliveNames: [],
  }),
  actions: {
    // 添加缓存组件名
    async addAliveName(name: string) {
      !this.aliveNames.includes(name) && this.aliveNames.push(name)
    },
    // 删除缓存组件名
    async removeAliveName(name: string) {
      this.aliveNames = this.aliveNames.filter(item => item !== name)
    },
    // 设置缓存组件名
    async setAliveNames(aliveNames: string[] = []) {
      this.aliveNames = aliveNames
    },
  },
})
