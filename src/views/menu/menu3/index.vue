<script setup lang="ts" name="menu3">
const value = ref<string>('')
</script>

<template>
  <div class="card content-box">
    <span class="text">我是menu3 🍓🍇🍈🍉</span>
    <el-input v-model="value" placeholder="测试缓存" />
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
