<!-- 经典布局 -->
<script setup lang="ts" name="layoutClassic">
import { useRoute } from 'vue-router'
import { useAuthStore, useGlobalStore } from '@/stores'
import Main from '@/layouts/components/Main/index.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import ToolBarLeft from '@/layouts/components/Header/ToolBarLeft.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import HeaderWrap from '@/layouts/components/Header/HeaderWrap.vue'
import Logo from '@/layouts/components/Header/components/Logo.vue'

const route = useRoute()
const authStore = useAuthStore()
const globalStore = useGlobalStore()
const { isAccordion, isCollapse, menuWidth } = toRefs(globalStore)
const { authMenuList } = toRefs(authStore)
const activeMenu = computed(() => (route.meta.activeMenu || route.path) as string)
</script>

<template>
  <el-container direction="vertical">
    <HeaderWrap>
      <Logo class="mr-10px -ml-10px" />
      <div class="flex-between-center flex-1">
        <ToolBarLeft />
        <ToolBarRight />
      </div>
    </HeaderWrap>
    <el-container class="classic-content">
      <el-aside>
        <div class="aside-box" :style="{ width: menuWidth }">
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
@import '../styles/el-menu.scss'
</style>
