<script setup lang='ts'>
function handleClear() {
  localStorage.clear()
  location.reload()
}
</script>

<template>
  <div class="my-4 flex-x-center">
    <el-button type="primary" @click="handleClear">
      清空缓存并退出
    </el-button>
  </div>
</template>

<style scoped lang='scss'>

</style>
