<script setup lang='ts'>
import { useGlobalStore } from '@/stores'
import { loadings } from '@/constants'

const globalStore = useGlobalStore()
const { loadingName } = storeToRefs(globalStore)
const activeIndex = computed(() => Object.keys(loadings).findIndex(name => loadingName.value === name))
const left = computed(() => activeIndex.value * 46)
</script>

<template>
  <div class="relative grid grid-cols-4 gap-1">
    <div
      v-for="key in Object.keys(loadings)" :key="key" class="cursor-pointer border-1 border-info-light-2 rounded-1"
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
    <div
      class="absolute top-0 wh-42px cursor-pointer border-1 border-primary rounded-1 transition-all duration-300"
      :style="{ left: `${left}px` }"
    />
  </div>
</template>

<style scoped lang='scss'>

</style>
