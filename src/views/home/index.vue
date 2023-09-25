<script setup lang="ts" name="home">
const a = 'IEpMenu'
</script>

<template>
  <div class="card home text-pink">
    <img class="home-bg" src="@/assets/images/welcome.png" alt="welcome">
    <component :is="a" />
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
