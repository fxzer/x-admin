<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import TriggerIcon from './TriggerIcon.vue'
import { HOME_URL } from '@/config'
import { setGlobalState, useKeepAliveStore, useTabsStore } from '@/stores'

const route = useRoute()
const router = useRouter()
const tabStore = useTabsStore()
const { removeTab, closeTabsOnSide, closeMultipleTab } = tabStore
const keepAliveStore = useKeepAliveStore()

// refresh current page
const refreshCurrentPage: Function = inject('refresh') as Function
function refresh() {
  setTimeout(() => {
    keepAliveStore.removeAliveName(route.name as string)
    refreshCurrentPage(false)
    nextTick(() => {
      keepAliveStore.addAliveName(route.name as string)
      refreshCurrentPage(true)
    })
  }, 0)
}

// maximize current page
function maximize() {
  setGlobalState('maximize', true)
}

// Close Current
function closeCurrentTab() {
  if (route.meta.isAffix)
    return
  removeTab(route.fullPath)
  keepAliveStore.removeAliveName(route.name as string)
}

// Close Other
function closeOtherTab() {
  closeMultipleTab(route.fullPath)
}

// Close All
function closeAllTab() {
  tabStore.closeMultipleTab()
  router.push(HOME_URL)
}
</script>

<template>
  <el-dropdown
    :teleported="false"
  >
    <div class="h-full w-9 flex-center">
      <TriggerIcon />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="refresh">
          <el-icon><IEpRefresh /></el-icon>{{ $t("tabs.refresh") }}
        </el-dropdown-item>
        <el-dropdown-item @click="maximize">
          <el-icon><IEpFullScreen /></el-icon>{{ $t("tabs.maximize") }}
        </el-dropdown-item>
        <el-dropdown-item divided @click="closeCurrentTab">
          <el-icon><IEpRemove /></el-icon>{{ $t("tabs.closeCurrent") }}
        </el-dropdown-item>
        <el-dropdown-item @click="closeTabsOnSide(route.fullPath, 'left')">
          <el-icon><IEpDArrowLeft /></el-icon>{{ $t("tabs.closeLeft") }}
        </el-dropdown-item>
        <el-dropdown-item @click="closeTabsOnSide(route.fullPath, 'right')">
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
</template>

<style scoped lang="scss">
@import '../index.scss';
</style>
