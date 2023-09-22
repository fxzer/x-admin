import { useRoute, useRouter } from 'vue-router'
import { HOME_URL } from '@/config'
import { useTabsStore } from '@/stores/modules/tabs'
import { useGlobalStore } from '@/stores/modules/global'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'

const route = useRoute()
const router = useRouter()
const tabStore = useTabsStore()
const globalStore = useGlobalStore()
const keepAliveStore = useKeepAliveStore()

// refresh current page
const refreshCurrentPage: Function = inject('refresh') as Function
function refresh() {
  setTimeout(() => {
    keepAliveStore.removeKeepAliveName(route.name as string)
    refreshCurrentPage(false)
    nextTick(() => {
      keepAliveStore.addKeepAliveName(route.name as string)
      refreshCurrentPage(true)
    })
  }, 0)
}

// maximize current page
function maximize() {
  globalStore.setGlobalState('maximize', true)
}

// Close Current
function closeCurrentTab() {
  if (route.meta.isAffix)
    return
  tabStore.removeTabs(route.fullPath)
  keepAliveStore.removeKeepAliveName(route.name as string)
}

// Close Other
function closeOtherTab() {
  tabStore.closeMultipleTab(route.fullPath)
}

// Close All
function closeAllTab() {
  tabStore.closeMultipleTab()
  router.push(HOME_URL)
}

export function useTabMenu() {
  return {
    refresh,
    maximize,
    closeCurrentTab,
    closeOtherTab,
    closeAllTab,
  }
}
