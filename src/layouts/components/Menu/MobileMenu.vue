<script setup lang='ts'>
import { useAuthStore, useGlobalStore } from '@/stores/modules'

import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import CollapseIcon from '@/layouts/components/Header/components/CollapseIcon.vue'

const route = useRoute()
const title = import.meta.env.VITE_APP_TITLE
const globalStore = useGlobalStore()
const authStore = useAuthStore()
const { isCollapse, accordion } = toRefs(globalStore)
const menuList = computed(() => authStore.authMenuList)
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string)
const visible = computed<boolean>({
  set(val) {
    isCollapse.value = !val
  },
  get() {
    return !isCollapse.value
  },
})
</script>

<template>
  <div class="mobile-menu">
    <el-drawer v-model="visible" :with-header="false" size="200px" direction="ltr">
      <div class="h-full flex-col">
        <div class="logo h-14 flex-center">
          <img class="wh-7 object-contain" src="@/assets/images/logo.svg" alt="logo">
          <span class="truncate text-xl font-semibold text-[var(--el-color-primary)]">{{ title
          }}</span>
        </div>
        <el-scrollbar class="flex-1">
          <el-menu
            :router="false" :default-active="activeMenu" :unique-opened="accordion"
          >
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>
        <div class="h-6 w-full flex-end-center">
          <CollapseIcon />
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<style scoped lang='scss'>
.el-menu{
  border-right:none;
}
 .mobile-menu :deep(.el-drawer .el-drawer__body){
    padding:0 !important;
    //隐藏滚动条
    &::-webkit-scrollbar{
      display: none;
    }
  }
</style>
