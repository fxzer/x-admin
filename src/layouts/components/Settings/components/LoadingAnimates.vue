<script setup lang='ts'>
import { useGlobalStore } from '@/stores'
import { loadings } from '@/constants'

const globalStore = useGlobalStore()
const { loadingName } = storeToRefs(globalStore)
</script>

<template>
  <div class="grid grid-cols-4 gap-1">
    <div
      v-for="key in Object.keys(loadings)" :key="key" class="cursor-pointer border-1 border-info-light-2 rounded-1" :class="{
        'border-primary': loadingName === key,
      }"
    >
      <div
        class="transform-origin-center scale-80" :class="{
          '!scale-30 translate-y-5': key === 'LoadingD',
        }"
        @click="loadingName = key"
      >
        <component :is="loadings[key]" />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
