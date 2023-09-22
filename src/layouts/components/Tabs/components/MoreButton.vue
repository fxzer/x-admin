<script setup lang="ts">
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
</script>

<template>
  <el-dropdown
    trigger="click" :popper-options="{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 500],
          },
        },
      ],
    }" :teleported="false"
  >
    <div class="more-button">
      <i class="iconfont icon-xiala" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="refresh">
          <el-icon><Refresh /></el-icon>{{ $t("tabs.refresh") }}
        </el-dropdown-item>
        <el-dropdown-item @click="maximize">
          <el-icon><FullScreen /></el-icon>{{ $t("tabs.maximize") }}
        </el-dropdown-item>
        <el-dropdown-item divided @click="closeCurrentTab">
          <el-icon><Remove /></el-icon>{{ $t("tabs.closeCurrent") }}
        </el-dropdown-item>
        <el-dropdown-item @click="tabStore.closeTabsOnSide(route.fullPath, 'left')">
          <el-icon><DArrowLeft /></el-icon>{{ $t("tabs.closeLeft") }}
        </el-dropdown-item>
        <el-dropdown-item @click="tabStore.closeTabsOnSide(route.fullPath, 'right')">
          <el-icon><DArrowRight /></el-icon>{{ $t("tabs.closeRight") }}
        </el-dropdown-item>
        <el-dropdown-item divided @click="closeOtherTab">
          <el-icon><CircleClose /></el-icon>{{ $t("tabs.closeOther") }}
        </el-dropdown-item>
        <el-dropdown-item @click="closeAllTab">
          <el-icon><FolderDelete /></el-icon>{{ $t("tabs.closeAll") }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
@import "../index.scss";
</style>
