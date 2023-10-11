<script setup lang="ts">
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { isCollapse } = storeToRefs(globalStore)
const { toggleMenu } = globalStore
</script>

<template>
  <span class="collapse-icon mr-3" @click="toggleMenu">
    <i-line-md-menu-fold-right v-if="isCollapse" />
    <i-line-md-menu-fold-left v-else />
  </span>
</template>

<style scoped lang="scss">
.collapse-icon {
  &:hover {
    color:var(--el-color-primary)
  }
}
</style>
