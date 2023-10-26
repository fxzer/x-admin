<script setup lang='ts'>
import { useGlobalStore } from '@/stores'
import { toggleDarkAnimate } from '@/hooks'

const { isDark } = storeToRefs(useGlobalStore())
</script>

<template>
  <span @click="toggleDarkAnimate">
    <i-ri-moon-line v-if="isDark" />
    <i-ri-sun-line v-else />
  </span>
</template>

<style scoped lang='scss'>

</style>
