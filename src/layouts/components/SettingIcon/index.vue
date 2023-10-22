<script setup lang="ts">
import { useGlobalStore } from '@/stores'

const { openSettings } = useGlobalStore()
// 拖拽按钮，只能拖拽改变垂直的位置，不能改变水平的位置，如果改变了水平位置，自动吸附到最右边
function dragStart(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const disY = e.clientY - el.offsetTop
  const screenHeight = document.body.clientHeight
  const elHeight = el.offsetHeight
  const maxTop = screenHeight - elHeight
  el.style.cursor = 'move'
  const move = (e: MouseEvent) => {
    el.style.cursor = 'move'
    let top = e.clientY - disY

    if (top < 0)
      top = 0
    else if (top > maxTop)
      top = maxTop

    el.style.right = '0px'
    el.style.top = `${top}px`
  }
  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
  }
  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', up)
}
</script>

<template>
  <div
    class="fixed right-0 top-1/2 z-2000 wh-9 cursor-pointer rounded-1 bg-primary p-2 text-white"
    @mousedown="dragStart"
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
