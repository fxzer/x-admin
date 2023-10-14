<script setup lang='ts'>
import { useGlobalStore } from '@/stores'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const name = useVModel(props, 'modelValue', emit)
const { settingsVisible } = storeToRefs(useGlobalStore())
const breadAnimates = [
  {
    label: '向右滑入',
    value: 'slide-right',
  },
  {
    label: '向左滑入',
    value: 'slide-left',
  },
  {
    label: '向上滑入',
    value: 'slide-top',
  },
  {
    label: '向下滑入',
    value: 'slide-bottom',
  },
]

// count will increase every 200ms
function handleCilck(value: string) {
  name.value = value
}
const activeIndex = computed(() => breadAnimates.findIndex(item => item.value === name.value))
const left = computed(() => activeIndex.value * 9)
const show = ref(true)
const { pause, resume } = useIntervalFn(() => show.value = !show.value, 1000)
watch(settingsVisible, () => {
  if (settingsVisible.value)
    resume()
  else
    pause()
})
</script>

<template>
  <!-- :class="name === value ? 'border-primary' : ''" -->

  <div class="relative grid grid-cols-4 gap-1">
    <div
      v-for="{ value } in breadAnimates" :key="value" class="h-6 w-8 cursor-pointer border-1 rounded-1 p-2px"
      @click="handleCilck(value)"
    >
      <Transition :name="value" appear mode="out-in">
        <span
          v-show="show"
          class="inline-block wh-full rounded-1"
          :class="name === value ? 'bg-primary-light-8' : 'bg-[var(--el-fill-color)]'"
        />
      </Transition>
    </div>
    <div
      class="absolute top-0 h-6 w-8 cursor-pointer border-1 border-primary rounded-1 transition-all duration-300"
      :style="{ left: `${left * 4}px` }"
    />
  </div>
</template>

<style scoped lang='scss'>

</style>
