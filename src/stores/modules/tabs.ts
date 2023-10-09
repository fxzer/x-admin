import { defineStore } from 'pinia'
import type { TabsMenuProps } from '../interface'
import { useKeepAliveStore } from './keepAlive'
import router from '@/routers'

export const useTabsStore = defineStore('store-tabs', () => {
  const keepAliveStore = useKeepAliveStore() // 注意： 须写在回调函数里面，否则不能再 index.ts统一导出而报错
  const tabList = ref<TabsMenuProps[]>([])

  // 添加 Tab
  function addTab(tabItem: TabsMenuProps) {
    const isExist = tabList.value.some(item => item.path === tabItem.path)
    if (!isExist) // 若不存在则添加
      tabList.value.push(tabItem)
  }

  // 根据 path 移除单个Tab
  function removeTab(path: string, isCurrent: boolean = true) {
    const { value } = tabList
    const name = value.find(item => item.path === path)?.name || ''
    keepAliveStore.removeAliveName(name)
    if (isCurrent) {
      value.forEach((item, index) => {
        if (item.path !== path)
          return
        const nextTab = value[index + 1] || value[index - 1]
        if (!nextTab)
          return
        router.push(nextTab.path)
      })
    }
    tabList.value = value.filter(item => item.path !== path)
  }

  // 关闭一边的 Tab
  function closeTabsOnSide(path: string, type: 'left' | 'right') {
    const currentIndex = tabList.value.findIndex(item => item.path === path)
    if (currentIndex !== -1) {
      const range = type === 'left' ? [0, currentIndex] : [currentIndex + 1, tabList.value.length]
      tabList.value = tabList.value.filter((item, index) => {
        return index < range[0] || index >= range[1] || !item.closable
      })
    }
    keepAliveStore.setAliveNames(tabList.value.map(item => item.name))
  }

  // 关闭其他 Tab
  function closeMultipleTab(path?: string) {
    tabList.value = tabList.value.filter((item) => {
      return item.path === path || !item.closable
    })
    keepAliveStore.setAliveNames(tabList.value.map(item => item.name))
  }

  // 设置 Tabs
  function setTabs(tabs: TabsMenuProps[]) {
    tabList.value = tabs
  }

  // 设置 Tabs Title
  function setTabTitle(title: string) {
    const nowFullPath = location.hash.substring(1)
    tabList.value.forEach((item) => {
      if (item.path === nowFullPath)
        item.title = title
    })
  }
  return { tabList, addTab, removeTab, closeTabsOnSide, closeMultipleTab, setTabs, setTabTitle }
}, { persist: true })
