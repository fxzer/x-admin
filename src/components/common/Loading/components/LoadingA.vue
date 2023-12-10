<script setup lang="ts">

</script>

<template>
  <span class="dot-spin"><i v-for="(_, i) in 4" :key="i" :style="`--delay:${0.4 * i}s`" /></span>
</template>

<style scoped lang="scss">
.dot-spin {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  animation: ant-rotate 1.2s infinite linear;

  i {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    opacity: 0.3;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    background-color: var(--el-color-primary);
    animation: ant-spin-move 1s infinite linear alternate;

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      animation-delay: var(--delay);
    }
  }
}
@keyframes ant-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes ant-spin-move {
  to {
    opacity: 1;
  }
}
</style>
