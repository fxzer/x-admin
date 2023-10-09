import { defineStore } from 'pinia'

export const useKeepAliveStore = defineStore('store-keepAlive', () => {
  const aliveNames = ref<string[]>([])

  // 添加缓存组件名
  function addAliveName(name: string) {
    !aliveNames.value.includes(name) && aliveNames.value.push(name)
  }
  // 删除缓存组件名
  function removeAliveName(name: string) {
    aliveNames.value = aliveNames.value.filter(item => item !== name)
  }
  // 设置缓存组件名
  function setAliveNames(names: string[] = []) {
    aliveNames.value = names
  }
  return { aliveNames, addAliveName, removeAliveName, setAliveNames }
}, {
  persist: true,
})
