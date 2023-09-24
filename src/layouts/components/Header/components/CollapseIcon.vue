<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()
const changeCollapse = () => globalStore.setGlobalState('isCollapse', !globalStore.isCollapse)
</script>

<template>
  <span @click="changeCollapse">
    <i-ep-expand v-if="globalStore.isCollapse" />
    <i-ep-fold v-else />
  </span>
</template>

<style scoped lang="scss">
.collapse-icon {
  margin-right: 10px;
  font-size: 22px;
  color: var(--el-header-text-color);
  cursor: pointer;
}
</style>
