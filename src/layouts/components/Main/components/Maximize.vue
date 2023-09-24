<script setup lang="ts">
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()
function exitMaximize() {
  globalStore.setGlobalState('maximize', false)
}
</script>

<template>
  <div class="maximize" @click="exitMaximize">
    <i-system-uicons:exit-left class="absolute bottom-2 left-2 text-white" />
  </div>
</template>

<style scoped lang="scss">
.maximize {
  position: fixed;
  top: -30px;
  right: -30px;
  z-index: 999;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: var(--el-color-info);
  border-radius: 50%;
  opacity: 0.9;
  &:hover {
    background-color: var(--el-color-info-dark-2);
  }
}
</style>
