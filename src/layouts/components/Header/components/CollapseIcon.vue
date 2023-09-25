<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()
const changeCollapse = () => globalStore.setGlobalState('isCollapse', !globalStore.isCollapse)
</script>

<template>
  <span class="collapse-icon mr-3" @click="changeCollapse">
    <i-ep-expand v-if="globalStore.isCollapse" />
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
