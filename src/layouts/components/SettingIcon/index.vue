<script setup lang="ts">
import { useGlobalStore } from '@/stores'

const { openSettings } = useGlobalStore()
</script>

<template>
  <div
    class="fixed right-0 top-1/2 z-2000 cursor-pointer rounded-1 bg-primary p-2 text-white"
    @click="openSettings"
  >
    <i-ep-setting class="animate-rotate" />
  </div>
</template>

<style scoped lang="scss">
//不断旋转动画
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
.animate-rotate {
  animation: rotate 3s linear infinite;
}
</style>
