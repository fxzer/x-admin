<!-- 横向布局 -->
<script setup lang="ts" name="layoutTransverse">
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore, useGlobalStore } from '@/stores'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'

const title = import.meta.env.VITE_APP_TITLE

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const { authMenuList } = toRefs(authStore)
const globalStore = useGlobalStore()
const { asideInverted } = toRefs(globalStore)
const activeMenu = computed(() => (route.meta.activeMenu || route.path) as string)

function handleClickMenu(subItem: Menu.MenuOptions) {
  if (subItem.meta.isLink)
    return window.open(subItem.meta.isLink, '_blank')
  router.push(subItem.path)
}
</script>

<template>
  <el-container class="layout">
    <el-header :class="{ inverted: asideInverted }">
      <div class="logo flex-center">
        <img class="logo-img" src="@/assets/images/logo.svg" alt="logo">
        <span class="logo-text text-primary">{{ title }}</span>
      </div>
      <el-menu
        mode="horizontal" :router="false" :default-active="activeMenu"
      >
        <!-- 不能直接使用 SubMenu 组件，无法触发 el-menu 隐藏省略功能 -->
        <template v-for="subItem in authMenuList" :key="subItem.path">
          <el-sub-menu v-if="subItem.children?.length" :key="subItem.path" :index="`${subItem.path}el-sub-menu`">
            <template #title>
              <el-icon>
                <component :is="subItem.meta.icon" />
              </el-icon>
              <span>{{ subItem.meta.title }}</span>
            </template>
            <SubMenu :menu-list="subItem.children" />
          </el-sub-menu>
          <el-menu-item v-else :key="`${subItem.path}el-menu-item`" :index="subItem.path" @click="handleClickMenu(subItem)">
            <el-icon>
              <component :is="subItem.meta.icon" />
            </el-icon>
            <template #title>
              <span>{{ subItem.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
      <ToolBarRight />
    </el-header>
    <Main />
  </el-container>
</template>

<style scoped lang="scss">
@import "./index.scss";
.el-header{
  color:var(--el-menu-text-color);
  height: var(--el-header-height-global);
  background-color: var(--el-menu-bg-color);
  //反转样式
  &.inverted {
    color:var(--el-menu-text-color);
    :deep(.el-dropdown .el-tooltip__trigger){
      color:var(--el-menu-text-color);
    }
    :deep(.el-breadcrumb .el-breadcrumb__inner) {
      color:var(--el-menu-text-color);
    }
  }
}
</style>
