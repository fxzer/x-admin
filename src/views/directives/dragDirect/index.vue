<script setup lang="ts" name="dragDirect"></script>

<template>
  <div class="card content-box">
    <span class="text">拖拽指令 🍇🍇🍇🍓🍓🍓</span>
    <div v-draggable class="drag-box flex-center">
      我可以拖拽哦~
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
