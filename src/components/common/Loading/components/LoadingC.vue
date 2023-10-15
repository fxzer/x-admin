<script setup lang='ts'>
const colors = ['#1875e5', '#c5523f', '#499255', '#f2b736']
</script>

<template>
  <div class="loading grid grid-cols-2 grid-rows-2 wh-10 content-center items-center gap-5px">
    <div v-for="(_, i) in 4" :key="i" class="shape wh-3 rounded-full bg-[var(--bg)]" :class="`shape-${i + 1}`" :style="`--bg:${colors[i]}`" />
  </div>
</template>

<style lang="scss" scoped>
.loading{
  animation: rotate 1s infinite linear;
  justify-items: center;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.shape-1 {
  animation: animation1 0.3s ease infinite alternate;
}

.shape-2 {
  animation: animation2 0.3s ease infinite 0.3s alternate;
}

.shape-3 {
  animation: animation3 0.3s ease infinite 0.3s alternate;
}

.shape-4 {
  animation: animation4 0.3s ease infinite alternate;
}

@keyframes animation1 {
  0% {
    transform: translate(5px, 5px);
  }

  100% {
    transform: translate(-3px, -3px);
  }
}

@keyframes animation2 {
  0% {
    transform: translate(-5px, 5px);
  }

  100% {
    transform: translate(3px, -3px);
  }
}

@keyframes animation3 {
  0% {
    transform: translate(5px, -5px);
  }

  100% {
    transform: translate(-3px, 3px);
  }
}

@keyframes animation4 {
  0% {
    transform: translate(-5px, -5px);
  }

  100% {
    transform: translate(3px, 3px);
  }
}
</style>
