<script setup lang='ts'>
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { size } = storeToRefs(globalStore)
// 9 种主题颜色
const colors = [
  '#409eff',
  '#e74c3c',
  '#9b59b6',
  '#fd726d',
  '#f39c12',
  '#daa96e',
  '#0c819f',
  '#27ae60',
  '#ff5c93',
]
const sizeMap = {
  small: 'wh-4',
  default: 'wh-5',
  large: 'wh-7',
}
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3 cursor-pointer gap-1px" :class="sizeMap[size]">
    <span
      v-for="color in colors" :key="color"
      :style="{ backgroundColor: color }"
    />
  </div>
</template>

<style scoped lang='scss'>

</style>
