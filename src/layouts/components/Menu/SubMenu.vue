<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps<{ menuList: Menu.MenuOptions[] }>()
const router = useRouter()
function handleClickMenu(subItem: Menu.MenuOptions) {
  if (subItem.meta.isLink)
    return window.open(subItem.meta.isLink, '_blank')
  router.push(subItem.path)
}
</script>

<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <!-- <el-icon color="red">
          <component :is="subItem.meta.icon" />
        </el-icon> -->
        <i :class="subItem.meta.icon" mr2 text-xl text-white />
        <span class="truncate">{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
      <!-- <el-icon>
        <component :is="subItem.meta.icon" />
      </el-icon> -->
      <i :class="subItem.meta.icon" mr-2 text-lg text-white />
      <template #title>
        <span class="truncate">{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<style lang="scss">
.el-sub-menu .el-sub-menu__title:hover {
  color: var(--el-menu-hover-text-color) !important;
  background-color: var(--el-menu-hover-bg-color) !important;
}
.el-menu--collapse {
  .is-active {
    .el-sub-menu__title {
      color: #ffffff !important;
      background-color: var(--el-color-primary) !important;
    }
  }
}
.el-menu-item {
  &:hover {
    color: var(--el-menu-hover-text-color);
  }
  &.is-active {
    color: var(--el-menu-active-color) !important;
    background-color: var(--el-menu-hover-bg-color) !important;
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 4px;
      content: '';
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
