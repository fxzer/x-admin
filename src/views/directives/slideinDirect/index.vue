<script setup lang='ts'>
import { rainbowColors } from '@/constants/rainbow'
</script>

<template>
  <div class="flex space-x-4">
    <div class="flex-1 text-2xl text-white space-y-4">
      <div class="h-20 flex-center bg-pink text-4xl">
        元素平滑上升
      </div>
      <div
        v-for="(item, index) in rainbowColors" :key="index" v-slideIn="100" class="h-20 flex-center text-4xl" :style="{
          backgroundColor: item,
        }"
      >
        {{ index }}
      </div>
    </div>
    <div class="flex-1 text-2xl text-white space-y-4">
      <div class="h-20 flex-center bg-pink text-4xl">
        元素平滑下降
      </div>
      <div
        v-for="(item, index) in rainbowColors" :key="index" v-slideIn="-100" class="h-20 flex-center text-4xl" :style="{
          backgroundColor: item,
        }"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
