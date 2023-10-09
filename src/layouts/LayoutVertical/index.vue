<!-- 纵向布局 -->
<script setup lang="ts" name="layoutVertical">
import { useRoute } from 'vue-router'
import { breakpointsTailwind, useBreakpoints, useResizeObserver } from '@vueuse/core'
import { useAuthStore, useGlobalStore } from '@/stores'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarLeft from '@/layouts/components/Header/ToolBarLeft.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import MobbileMenu from '@/layouts/components/Menu/MobileMenu.vue'
import CollapseIcon from '@/layouts/components/Header/components/CollapseIcon.vue'

const authStore = useAuthStore()
const globalStore = useGlobalStore()
const { isCollapse, isAccordion, currentSize } = toRefs(globalStore)

const breakpoints = useBreakpoints(breakpointsTailwind)

const isMoblie = ref(breakpoints.isSmaller('md'))
const title = import.meta.env.VITE_APP_TITLE
useResizeObserver(document.body,
  () => {
    isMoblie.value = breakpoints.isSmaller('md')
  },
)
const route = useRoute()

const menuList = computed(() => authStore.authMenuList)
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string)
</script>

<template>
  <el-container class="layout">
    <!-- 菜单 -->
    <div
      class="z-100 hidden h-screen flex-col shrink-0 border-r border-gray-100 transition-width duration-300 md:flex dark:border-gray-800"
      :style="{ width: isCollapse ? currentSize?.menu.fold : currentSize?.menu.unfold, background: `var(--el-menu-bg-color)` }"
    >
      <div class="logo h-14 flex-center">
        <img class="wh-7 object-contain" src="@/assets/images/logo.svg" alt="logo">
        <span v-show="!isCollapse" class="truncate text-xl font-semibold text-[var(--el-color-primary)]">{{ title
        }}</span>
      </div>
      <el-scrollbar class="flex-1">
        <el-menu
          :router="false" :default-active="activeMenu" :collapse="isCollapse" :unique-opened="isAccordion"
          :collapse-transition="false"
        >
          <SubMenu :menu-list="menuList" />
        </el-menu>
      </el-scrollbar>
      <div class="h-7 w-full flex-y-center px-4">
        <CollapseIcon />
      </div>
    </div>
    <!-- 内容主体 -->
    <el-container>
      <el-header class="flex-between-center" style="height: var(--el-header-height-global)">
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>
      <Main />
    </el-container>
  </el-container>
  <MobbileMenu v-if="isMoblie" />
</template>

<style scoped lang="scss">
// @import "./index.scss";
.el-menu {
  width: 100%;
  border: none;
  overflow: hidden;

  &.el-menu--collapse :deep(.el-menu-item) {
    .el-menu-tooltip__trigger {
      padding: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.el-menu--collapse :deep(.el-sub-menu) {
    .el-sub-menu__title {
      padding: 0 !important;
      justify-content: center;

    }
  }
}
</style>
