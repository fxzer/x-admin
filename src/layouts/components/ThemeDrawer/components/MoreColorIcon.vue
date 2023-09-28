<script setup lang='ts'>
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
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3 wh-6 cursor-pointer gap-1px">
    <span
      v-for="color in colors" :key="color"
      :style="{ backgroundColor: color }"
    />
  </div>
</template>

<style scoped lang='scss'>

</style>
