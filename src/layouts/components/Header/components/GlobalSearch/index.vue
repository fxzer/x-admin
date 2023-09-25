<script setup lang='ts'>
import SearchModal from './SearchModal.vue'

const searchVisible = ref(false)
// 监听 CMD+K 打开搜索框
document.addEventListener('keydown', (event) => {
  if (event.metaKey && event.key === 'k')
    searchVisible.value = true
})
</script>

<template>
  <div>
    <i-iconamoon:search-light @click="searchVisible = true" />
    <SearchModal v-model="searchVisible" />
  </div>
</template>

<style scoped lang='scss'>
:deep(.search-dialog .el-dialog__header) {
  display: none;
  border-bottom: none;
}

:deep(.search-dialog .el-dialog__footer) {
  border-top: 1px solid #ebeef5;
  padding-top: 20px;
}
</style>
