<script setup lang='ts'>
const props = defineProps<{ activeIndex: number; resultList: Menu.MenuOptions[] }>()
defineEmits(['select'])

const { resultList = ref([]), activeIndex } = toRefs(props)
const isEmpty = computed(() => !resultList.value.length)
</script>

<template>
  <div class="h-140">
    <div v-if="isEmpty" class="wh-full flex-center">
      <el-empty :image-size="240" description="暂无搜索结果" />
    </div>
    <el-scrollbar v-else height="560">
      <div
        v-for="(item, index) in resultList" :key="index" :class="{ 'bg-primary-light-7!': activeIndex === index }"
        class="mb-2 flex-y-center cursor-pointer rounded-sm bg-gray-100 p-2 dark:bg-gray-500/10 hover:(font-semibold text-primary)"
        @click="$emit('select', $event, item)"
        @keyup.enter="$emit('select', $event, item)"
      >
        <el-icon class="mr-2">
          <component :is="item.meta.icon" />
        </el-icon>
        <span class="flex-1"> {{ item.meta.title }} </span>
        <i-ant-design:enter-outlined class="hover:!text-primary" />
      </div>
    </el-scrollbar>
  </div>
</template>
