<script setup lang='ts'>

</script>

<template>
  <span class="group grid grid-cols-2 grid-rows-2 wh-12px gap-2px duration-300 hover:rotate-90">
    <i class="bg-info group-hover:(rotate-45 bg-primary)" />
    <i v-for="i in 3" :key="i" class="bg-info group-hover:bg-primary" />
  </span>
</template>

<style scoped lang='scss'>
</style>
