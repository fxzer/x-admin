<script setup lang='ts'>
const list = await fetch('/api/networking/sdwan/network').then(res => res.json())
console.log('[ list ]-3', list)
</script>

<template>
  <div>
    网络管理 work!
  </div>
</template>

<style scoped lang='scss'>

</style>
