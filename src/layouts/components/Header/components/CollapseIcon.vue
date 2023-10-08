<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()
const { isCollapse } = storeToRefs(globalStore)
const { toggleMenu } = globalStore
</script>

<template>
  <span class="collapse-icon mr-3" @click="toggleMenu">
    <i-ep-expand v-if="isCollapse" />
    <i-ep-fold v-else />
  </span>
</template>

<style scoped lang="scss">
.collapse-icon {
  &:hover {
    color:var(--el-color-primary)
  }
}
</style>
