<script setup lang="ts" name="debounceDirect">
import { ElMessage } from 'element-plus'

function debounceClick() {
  ElMessage.success('我是防抖按钮触发的事件 🍍🍓🍌')
}
</script>

<template>
  <div class="card content-box">
    <span class="text cursor-pointer">防抖指令 🍇🍇🍇🍓🍓🍓</span>
    <el-button v-debounce="debounceClick" type="primary">
      防抖按钮 (0.5秒后执行)
    </el-button>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
