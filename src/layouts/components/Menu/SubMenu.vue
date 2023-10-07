<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useGlobalStore } from '@/stores/modules/global'

defineProps<{ menuList: Menu.MenuOptions[] }>()
const globalStore = useGlobalStore()
const { menuSize } = storeToRefs(globalStore)
const router = useRouter()
function handleClickMenu(subItem: Menu.MenuOptions) {
  if (subItem.meta.isLink)
    return window.open(subItem.meta.isLink, '_blank')
  router.push(subItem.path)
}
watch(menuSize, () => {
  // 设置 html 变量
  document.documentElement.style.setProperty('--el-menu-item-height', menuSize.value.height)
}, {
  immediate: true,
})
</script>

<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <el-icon color="red">
          <component :is="subItem.meta.icon" />
        </el-icon>
        <span class="truncate">{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
      <el-icon>
        <component :is="subItem.meta.icon" />
      </el-icon>
      <template #title>
        <span class="truncate">{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<style lang="scss">
.el-sub-menu .el-sub-menu__title:hover {
  color: var(--el-menu-hover-text-color) !important;
  background-color: transparent !important;
}
.el-menu--collapse {
  .is-active {
    .el-sub-menu__title {
      color: #ffffff !important;
      background-color: var(--el-color-primary) !important;
    }
  }
}
.el-menu-item{
  &:hover {
    color: var(--el-menu-hover-text-color);
  }
  &.is-active {
    color: var(--el-menu-active-color) !important;
    background-color: var(--el-menu-active-bg-color) !important;
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 4px;
      content: "";
      background-color: var(--el-color-primary);
    }
  }

}

.vertical,
.classic,
.transverse {
  .el-menu-item {
    &.is-active {
      &::before {
        left: 0;
      }
    }
  }
}
.columns {
  .el-menu-item {
    &.is-active {
      &::before {
        right: 0;
      }
    }
  }
}
.classic,
.transverse {
  #driver-highlighted-element-stage {
    background-color: #606266 !important;
  }
}
</style>
