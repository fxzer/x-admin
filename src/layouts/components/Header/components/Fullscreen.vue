<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, isSupported, toggle } = useFullscreen()
function toggleScreen() {
  if (!isSupported.value)
    ElMessage.warning('当前您的浏览器不支持全屏 ❌')
  toggle()
}
</script>

<template>
  <div class="fullscreen" @click="toggleScreen">
    <i-ant-design:fullscreen-exit-outlined v-if="isFullscreen" />
    <i-ant-design:fullscreen-outlined v-else />
  </div>
</template>
