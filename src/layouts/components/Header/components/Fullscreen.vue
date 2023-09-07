<script setup lang="ts">
import { ElMessage } from 'element-plus'
import screenfull from 'screenfull'

const isFullscreen = ref(screenfull.isFullscreen)

onMounted(() => {
  screenfull.on('change', () => {
    if (screenfull.isFullscreen)
      isFullscreen.value = true
    else isFullscreen.value = false
  })
})

function handleFullScreen() {
  if (!screenfull.isEnabled)
    ElMessage.warning('当前您的浏览器不支持全屏 ❌')
  screenfull.toggle()
}
</script>

<template>
  <div class="fullscreen">
    <i :class="[isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" class="toolBar-icon iconfont" @click="handleFullScreen" />
  </div>
</template>
