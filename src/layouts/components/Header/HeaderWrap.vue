<script setup lang='ts'>

</script>

<template>
  <el-header class="border-bottom flex-between-center">
    <slot />
  </el-header>
</template>

<style scoped lang='scss'>
.el-header {
  padding: 0 10px;
  position: relative;
  height: var(--el-menu-item-height);
  background: var(--el-bg-color);
}
</style>
