<!-- 纵向布局 -->
<script setup lang="ts" name="layoutVertical">
import { useRoute } from 'vue-router'
import { breakpointsTailwind, useBreakpoints, useResizeObserver } from '@vueuse/core'
import { useAuthStore, useGlobalStore } from '@/stores'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarLeft from '@/layouts/components/Header/ToolBarLeft.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import MobileMenu from '@/layouts/components/Menu/MobileMenu.vue'
import CollapseIcon from '@/layouts/components/Header/components/CollapseIcon.vue'
import HeaderWrap from '@/layouts/components/Header/HeaderWrap.vue'
import Logo from '@/layouts/components/Header/components/Logo.vue'

const authStore = useAuthStore()
const globalStore = useGlobalStore()
const { isCollapse, isAccordion, menuWidth, menuClass } = toRefs(globalStore)

const breakpoints = useBreakpoints(breakpointsTailwind)

const isMobile = ref(breakpoints.isSmaller('md'))
useResizeObserver(document.body,
  () => {
    isMobile.value = breakpoints.isSmaller('md')
  },
)
const route = useRoute()

const menuList = computed(() => authStore.authMenuList)
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string)
//
const elMenuRef = ref()
watch(isAccordion, (val) => {
  if (val) {
    menuList.value.forEach((item) => {
      // 除了当前路由，其他全部关闭
      if (!route.path.includes(item.path))
        elMenuRef.value?.close(item.path)
    })
  }
})
</script>

<template>
  <el-container>
    <!-- 菜单 -->
    <div
      class="border-right relative z-100 hidden h-screen flex-col shrink-0 bg-[var(--el-menu-bg-color)] transition-width duration-300 md:flex"
      :style="{ width: menuWidth }"
    >
      <Logo />
      <el-scrollbar class="flex-1">
        <el-menu
          ref="elMenuRef" :class="menuClass" :router="false" :default-active="activeMenu"
          :collapse="isCollapse" :unique-opened="isAccordion" :collapse-transition="false"
        >
          <SubMenu :menu-list="menuList" />
        </el-menu>
      </el-scrollbar>
      <div class="h-7 w-full flex-y-center px-4">
        <CollapseIcon />
      </div>
    </div>
    <!-- 内容主体 -->
    <el-container direction="vertical">
      <HeaderWrap>
        <ToolBarLeft />
        <ToolBarRight />
      </HeaderWrap>
      <Main />
    </el-container>
    <MobileMenu v-if="isMobile" />
  </el-container>
</template>

<style scoped lang="scss">
@import '../styles/el-menu.scss';
@import '../styles/menu-card.scss';
</style>
