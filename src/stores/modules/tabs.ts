import { defineStore } from 'pinia'
import { useKeepAliveStore } from './keepAlive'
import router from '@/routers'
import type { TabsMenuProps, TabsState } from '@/stores/interface'
import { usePiniaPersistConfig } from '@/hooks'

const keepAliveStore = useKeepAliveStore()

export const useTabsStore = defineStore({
  id: 'geeker-tabs',
  state: (): TabsState => ({
    tabList: [],
  }),
  actions: {
    // 添加 Tab
    async addTab(tabItem: TabsMenuProps) {
      const isExist = this.tabList.some(item => item.path === tabItem.path)
      if (!isExist) // 若不存在则添加
        this.tabList.push(tabItem)
    },
    // 根据 path 移除单个Tab
    async removeTab(path: string, isCurrent: boolean = true) {
      const { tabList } = this
      const name = tabList.find(item => item.path === path)?.name || ''
      keepAliveStore.removeAliveName(name)
      if (isCurrent) {
        tabList.forEach((item, index) => {
          if (item.path !== path)
            return
          const nextTab = tabList[index + 1] || tabList[index - 1]
          if (!nextTab)
            return
          router.push(nextTab.path)
        })
      }
      this.tabList = tabList.filter(item => item.path !== path)
    },
    // 关闭一边的 Tab
    async closeTabsOnSide(path: string, type: 'left' | 'right') {
      const currentIndex = this.tabList.findIndex(item => item.path === path)
      if (currentIndex !== -1) {
        const range = type === 'left' ? [0, currentIndex] : [currentIndex + 1, this.tabList.length]
        this.tabList = this.tabList.filter((item, index) => {
          return index < range[0] || index >= range[1] || !item.closable
        })
      }
      keepAliveStore.setAliveNames(this.tabList.map(item => item.name))
    },
    // 关闭其他 Tab
    async closeMultipleTab(path?: string) {
      this.tabList = this.tabList.filter((item) => {
        return item.path === path || !item.closable
      })
      keepAliveStore.setAliveNames(this.tabList.map(item => item.name))
    },
    // Set Tabs
    async setTabs(tabList: TabsMenuProps[]) {
      this.tabList = tabList
    },
    // Set Tabs Title
    async setTabsTitle(title: string) {
      const nowFullPath = location.hash.substring(1)
      this.tabList.forEach((item) => {
        if (item.path === nowFullPath)
          item.title = title
      })
    },
  },
  persist: usePiniaPersistConfig('geeker-tabs'),
})
