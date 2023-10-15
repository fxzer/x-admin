<template>
  <div class="loading">
    <span v-for="(_, i) in 8" :key="i" :style="`--delay:${i * 0.125 - 10}s`" />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: relative;
  width: 40px;
  height: 40px;
}

.loading > span {
  display: inline-block;
  float: none;
  background-color: var(--el-color-primary);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 9px;
  height: 9px;
  margin-top: -4px;
  margin-left: -4px;
  border-radius: 100%;
  animation: ball-spin-clockwise 1s infinite ease-in-out;
 animation-delay: var(--delay);
}

.loading > span:nth-child(1) {
  top: 5%;
  left: 50%;
}

.loading > span:nth-child(2) {
  top: 18%;
  left: 81.8%;
}

.loading > span:nth-child(3) {
  top: 50%;
  left: 95%;
}

.loading > span:nth-child(4) {
  top: 81.8%;
  left: 81.8%;
}

.loading > span:nth-child(5) {
  top: 94.9%;
  left: 50%;
}

.loading > span:nth-child(6) {
  top: 81.8%;
  left: 18.1%;
}

.loading > span:nth-child(7) {
  top: 49.9%;
  left: 5%;
}

.loading > span:nth-child(8) {
  top: 18.1%;
  left: 18.1%;
}

@keyframes ball-spin-clockwise {
  0%,
  100% {
    opacity: 1;
    transform: scale(1.1);
  }

  80% {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
