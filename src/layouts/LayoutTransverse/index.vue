<!-- 横向布局 -->
<script setup lang="ts" name="layoutTransverse">
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore, useGlobalStore } from '@/stores'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
import HeaderWrap from '@/layouts/components/Header/HeaderWrap.vue'
import Logo from '@/layouts/components/Header/components/Logo.vue'

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
  <el-container direction="vertical">
    <HeaderWrap :class="{ inverted: asideInverted }">
      <Logo class="-ml-10px" />
      <el-menu mode="horizontal" :router="false" :default-active="activeMenu">
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
    </HeaderWrap>
    <Main />
  </el-container>
</template>

<style scoped lang="scss">
@import "./index.scss";
  //反转样式
.el-header.inverted {
  color:var(--el-menu-text-color);
  background-color: var(--el-menu-bg-color);
  :deep(.el-dropdown .el-tooltip__trigger){
    color:var(--el-menu-text-color);
  }
  :deep(.el-breadcrumb .el-breadcrumb__inner) {
    color:var(--el-menu-text-color);
  }
}
</style>
