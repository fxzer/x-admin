<script setup lang='ts'>
const props = defineProps(['activeIndex', 'resultList'])

const router = useRouter()

const { resultList = ref([]), activeIndex } = toRefs(props)
const isEmpty = computed(() => !resultList.value.length)
// 点击菜单跳转
function handleSelect(menuItem: Menu.MenuOptions | Record<string, any>) {
  const { meta: { isLink }, path } = menuItem
  if (isLink)
    window.open(isLink, '_blank')
  else router.push(path)
  close()
}
</script>

<template>
  <el-empty v-if="isEmpty" :image-size="440" description="暂无搜索结果" />
  <el-scrollbar v-else height="560" class="mt-5">
    <div
      v-for="(item, index) in resultList" :key="index" :class="{ 'bg-primary-light-5': activeIndex === index }"
      class="mb-2 flex-y-center cursor-pointer rounded-sm bg-gray-100 p-2 hover:(font-semibold text-primary)"
      @click="handleSelect(item)"
      @keyup.enter="handleSelect(item)"
    >
      <el-icon class="mr-2">
        <component :is="item.meta.icon" />
      </el-icon>
      <span class="flex-1"> {{ item.meta.title }} </span>
      <i-ant-design:enter-outlined class="hover:!text-primary" />
    </div>
  </el-scrollbar>
</template>
