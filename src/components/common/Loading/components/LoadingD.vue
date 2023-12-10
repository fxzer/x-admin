<script setup lang='ts'>

</script>

<template>
  <div class="flex-center">
    <div class="leo blue" />
    <div class="leo green" />
    <div class="leo red" />
    <div class="leo primary w1" />
    <div class="leo primary w2" />
    <div class="leo primary w3" />
  </div>
</template>

<style scoped lang='scss'>
.leo {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.blue {
  width: 165px;
  height: 165px;
  border: 1.5px solid #ff9191a5;
  animation: spin3D 2s linear -0.5s infinite;
}

.green {
  width: 120px;
  height: 120px;
  border: 1.5px solid #91ffbfa5;
  animation: spin3D 2s linear infinite;
}

.red {
  width: 90px;
  height: 90px;
  border: 1.5px solid #ffca91a5;
  animation: spin3D 1s linear infinite;
}

.primary {
  width: 60px;
  height: 60px;
  border: 2px solid var(--el-color-primary);
  animation: spin3D 2s linear infinite;
}

.w1 {
  transform: rotate3D(1, 1, 1, 90deg);
  transition-delay: -1s;
}

.w2 {
  transform: rotate3D(1, 2, 0.5, 0deg);
}

.w3 {
  transform: rotate3D(0.5, 1, 2, 180deg);
}

.three-quarter-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #fb5b53;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;
}

@keyframes spin3D {
  from {
    transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  }
  to {
    transform: rotate3d(0deg);
  }
}
</style>
