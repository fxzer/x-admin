<script setup lang='ts'>
import { useAuthStore, useGlobalStore } from '@/stores/modules'

import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import CollapseIcon from '@/layouts/components/Header/components/CollapseIcon.vue'
import Logo from '@/layouts/components/Header/components/Logo.vue'

const route = useRoute()
const globalStore = useGlobalStore()
const authStore = useAuthStore()
const { isCollapse, isAccordion, asideInverted, menuClass } = toRefs(globalStore)
const { authMenuList } = toRefs(authStore)
const activeMenu = computed(() => (route.meta.activeMenu || route.path) as string)
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
    <el-drawer v-model="visible" :with-header="false" size="200px" direction="ltr" :class="{ inverted: asideInverted }">
      <div class="h-full flex-col">
        <Logo />
        <el-scrollbar class="flex-1">
          <el-menu
            :class="menuClass"
            :router="false" :default-active="activeMenu" :unique-opened="isAccordion"
          >
            <SubMenu :menu-list="authMenuList" />
          </el-menu>
        </el-scrollbar>
        <div class="h-6 w-full flex-end-center">
          <CollapseIcon :class="asideInverted ? 'text-info' : ''" />
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<style scoped lang='scss'>
.el-menu{
  border-right:none;
}
 .mobile-menu {
  &:deep(.el-drawer .el-drawer__body){
    padding:0 !important;
    //隐藏滚动条
    &::-webkit-scrollbar{
      display: none;
    }
  }
  :deep(.el-drawer.inverted){
    background-color: #141414;
  }
 }
</style>
