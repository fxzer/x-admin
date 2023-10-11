<script setup lang='ts'>

</script>

<template>
  <el-header class="flex-between-center">
    <slot />
  </el-header>
</template>

<style scoped lang='scss'>
.el-header{
  padding:0 10px;
  position: relative;
  height: var(--el-menu-item-height);
  &::after{
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--el-border-color-extra-light);
  }
}
</style>
