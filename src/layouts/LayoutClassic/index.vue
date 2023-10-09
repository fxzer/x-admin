<!-- 经典布局 -->
<script setup lang="ts" name="layoutClassic">
import { useRoute } from 'vue-router'
import { useAuthStore, useGlobalStore } from '@/stores'
import Main from '@/layouts/components/Main/index.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import ToolBarLeft from '@/layouts/components/Header/ToolBarLeft.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'

const title = import.meta.env.VITE_APP_TITLE

const route = useRoute()
const authStore = useAuthStore()
const globalStore = useGlobalStore()
const { isAccordion, isCollapse } = toRefs(globalStore)
const { authMenuList } = toRefs(authStore)
const activeMenu = computed(() => (route.meta.activeMenu || route.path) as string)
</script>

<template>
  <el-container class="layout">
    <el-header>
      <div class="fog-mask header-lf">
        <div class="logo flex-center">
          <img class="logo-img" src="@/assets/images/logo.svg" alt="logo">
          <span class="logo-text">{{ title }}</span>
        </div>
        <ToolBarLeft />
      </div>
      <div class="header-ri">
        <ToolBarRight />
      </div>
    </el-header>
    <el-container class="classic-content">
      <el-aside>
        <div class="aside-box" :style="{ width: isCollapse ? '64px' : '210px' }">
          <el-scrollbar>
            <el-menu
              :router="false"
              :default-active="activeMenu"
              :collapse="isCollapse"
              :unique-opened="isAccordion"
              :collapse-transition="false"
            >
              <SubMenu :menu-list="authMenuList" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container class="classic-main">
        <Main />
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
