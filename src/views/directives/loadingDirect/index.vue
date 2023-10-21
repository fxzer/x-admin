<script setup lang='ts'>
const isLoading = ref(false)
function loadingHandle() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<template>
  <div>
    <div class="my-4 flex-center bg-white py-10">
      <el-button type="primary" size="default" @click="loadingHandle">
        加载
      </el-button>
    </div>

    <div class="flex space-x-4">
      <div v-loading="isLoading" class="h-100 flex-1">
        <div v-if="!isLoading" class="h-full flex-center bg-fuchsia-200 text-4xl">
          ElementPlus 自定义加载指令
        </div>
      </div>
      <div v-img-loading="isLoading" class="h-100 flex-1">
        <div v-if="!isLoading" class="h-full flex-center bg-blue-200 text-4xl">
          自定义图片加载指令
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
