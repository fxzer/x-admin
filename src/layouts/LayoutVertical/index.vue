<!-- 纵向布局 -->
<script setup lang="ts" name="layoutVertical">
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/modules/auth'
import { useGlobalStore } from '@/stores/modules/global'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarLeft from '@/layouts/components/Header/ToolBarLeft.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'

const title = import.meta.env.VITE_APP_TITLE

const route = useRoute()
const authStore = useAuthStore()
const globalStore = useGlobalStore()
const accordion = computed(() => globalStore.accordion)
const isCollapse = computed(() => globalStore.isCollapse)
const menuList = computed(() => authStore.authMenuList)
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string)
</script>

<template>
  <el-container class="layout">
    <el-aside>
      <div class="aside-box" :style="{ width: isCollapse ? '64px' : '210px' }">
        <div class="logo flex-center">
          <img class="logo-img" src="@/assets/images/logo.svg" alt="logo">
          <span v-show="!isCollapse" class="logo-text">{{ title }}</span>
        </div>
        <el-scrollbar>
          <el-menu
            :router="false"
            :default-active="activeMenu"
            :collapse="isCollapse"
            :unique-opened="accordion"
            :collapse-transition="false"
          >
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>
      <Main />
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
