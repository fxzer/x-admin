<script setup lang="ts" name="longPressDirect">
import { ElMessage } from 'element-plus'

function longPress() {
  ElMessage.success('长按事件触发成功 🎉🎉🎉')
}
</script>

<template>
  <div class="card content-box">
    <span class="text">长按指令 🍇🍇🍇🍓🍓🍓</span>
    <el-button v-long-press="longPress" type="primary">
      长按2秒触发事件
    </el-button>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
