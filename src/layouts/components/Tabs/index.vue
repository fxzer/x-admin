<script setup lang="ts">
import Sortable from 'sortablejs'
import type { TabPaneName, TabsPaneContext } from 'element-plus'
import MoreButton from './components/MoreButton.vue'
import { HOME_URL } from '@/config'
import { useGlobalStore } from '@/stores/modules/global'
import { useTabsStore } from '@/stores/modules/tabs'
import { useAuthStore } from '@/stores/modules/auth'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'
import type { TabsMenuProps } from '@/stores/interface'

const route = useRoute()
const router = useRouter()
const tabStore = useTabsStore()
const authStore = useAuthStore()
const globalStore = useGlobalStore()
const keepAliveStore = useKeepAliveStore()

const tabsMenuValue = ref(route.fullPath)
const tabList = computed(() => tabStore.tabList)
const tabsIcon = computed(() => globalStore.tabsIcon)

onMounted(() => {
  tabsDrop()
  initTabs()
})

// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
  () => route.fullPath,
  () => {
    const { meta: { isAffix, isKeepAlive, isFull, icon = '', title = '' }, name = '', fullPath: path = '' } = route
    if (isFull)
      return
    tabsMenuValue.value = path as string
    const tabsParams = {
      icon,
      title,
      path,
      name,
      closable: !isAffix,
    } as TabsMenuProps
    tabStore.addTab(tabsParams)
    isKeepAlive && keepAliveStore.addAliveName(name as string)
  },
  { immediate: true },
)

// tabs 拖拽排序
function tabsDrop() {
  Sortable.create(document.querySelector('.el-tabs__nav') as HTMLElement, {
    draggable: '.el-tabs__item',
    animation: 300,
    onEnd({ newIndex, oldIndex }) {
      const tabsList = [...tabStore.tabList]
      const currRow = tabsList.splice(oldIndex as number, 1)[0]
      tabsList.splice(newIndex as number, 0, currRow)
      tabStore.setTabs(tabsList)
    },
  })
}

// 初始化需要固定的 tabs
function initTabs() {
  authStore.flatMenuList.forEach((item) => {
    if (item.meta.isAffix && !item.meta.isHide && !item.meta.isFull) {
      const tabsParams = {
        icon: item.meta.icon,
        title: item.meta.title,
        path: item.path,
        name: item.name,
        closable: !item.meta.isAffix,
      }
      tabStore.addTab(tabsParams)
    }
  })
}

// Tab Click
function tabClick(tabItem: TabsPaneContext) {
  const fullPath = tabItem.props.name as string
  router.push(fullPath)
}

// Remove Tab
function tabRemove(path: TabPaneName) {
  tabStore.removeTab(path as string, path === route.fullPath)
}
const menuPosition = reactive({
  x: 0,
  y: 0,
})
const triggerRef = ref()
const dropdownRef = ref()
const currentTab = ref()
const menuVisible = ref(false)

function handleContextMenu(e: MouseEvent, item: TabsMenuProps) {
  e.preventDefault()
  menuPosition.x = e.clientX
  menuPosition.y = e.clientY
  menuVisible.value = !menuVisible.value
  // 如果当前右键和上一次右键 tab 不同，则不关闭上一次的 tab
  const isSame = currentTab.value?.path === item.path
  if (isSame) {
    triggerRef.value?.click()
  }
  else {
    if (menuVisible) {
      // triggerRef.value?.click()
      dropdownRef.value.handleClose()
      setTimeout(() => {
        triggerRef.value?.click()
      }, 100)
    }
  }

  currentTab.value = item
}
// 右键菜单功能
// maximize current page
function maximize() {
  globalStore.setGlobalState('maximize', true)
}

// Close Current
function closeCurrentTab() {
  const { name, path } = currentTab.value
  tabStore.removeTab(path, path === route.fullPath)
  keepAliveStore.removeAliveName(name)
}

// Close Other
function closeOtherTab() {
  const { path } = currentTab.value
  router.push(path)
  tabStore.closeMultipleTab(path)
}

// Close All
function closeAllTab() {
  tabStore.closeMultipleTab()
  router.push(HOME_URL)
}
// 关闭两边
function closeTabsOnSide(path: string, direction: 'left' | 'right') {
  // 如果是关闭左边，激活的 tab 在当前 tab 的左边，关闭后激活当前 tab
  const currentIndex = tabStore.tabList.findIndex(item => item.path === path)
  const activeIndex = tabStore.tabList.findIndex(item => item.path === route.fullPath)
  if ((direction === 'left' && activeIndex < currentIndex) || (direction === 'right' && activeIndex > currentIndex))
    router.push(path)

  tabStore.closeTabsOnSide(path, direction)
}
</script>

<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
        <el-tab-pane v-for="item in tabList" :key="item.path" :label="item.title" :name="item.path" :closable="item.closable">
          <template #label>
            <span class="flex-center" @contextmenu="handleContextMenu($event, item)">
              <el-icon v-show="item.icon && tabsIcon" class="tabs-icon">
                <component :is="item.icon" />
              </el-icon>
              {{ item.title }}
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>
      <MoreButton />
      <el-dropdown
        ref="dropdownRef"
        trigger="click"
        :teleported="true"
      >
        <i
          ref="triggerRef" class="invisible fixed z-100000" :style="{
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`,
          }"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="maximize">
              <el-icon><IEpFullScreen /></el-icon>{{ $t("tabs.maximize") }}
            </el-dropdown-item>
            <el-dropdown-item divided @click="closeCurrentTab">
              <el-icon><IEpRemove /></el-icon>{{ $t("tabs.close") }}
            </el-dropdown-item>
            <el-dropdown-item @click="closeTabsOnSide(currentTab.path, 'left')">
              <el-icon><IEpDArrowLeft /></el-icon>{{ $t("tabs.closeLeft") }}
            </el-dropdown-item>
            <el-dropdown-item @click="closeTabsOnSide(currentTab.path, 'right')">
              <el-icon><IEpDArrowRight /></el-icon>{{ $t("tabs.closeRight") }}
            </el-dropdown-item>
            <el-dropdown-item divided @click="closeOtherTab">
              <el-icon><IEpCircleClose /></el-icon>{{ $t("tabs.closeOther") }}
            </el-dropdown-item>
            <el-dropdown-item @click="closeAllTab">
              <el-icon><IEpFolderDelete /></el-icon>{{ $t("tabs.closeAll") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
