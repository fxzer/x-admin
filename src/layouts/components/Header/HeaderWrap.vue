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
  height: var(--el-header-height-global);
  border-bottom: 1px solid var(--el-border-color-extra-light);
}
</style>
