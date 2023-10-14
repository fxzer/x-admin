<script setup lang="ts">
import SearchResult from './SearchResult.vue'
import SearchFooter from './SearchFooter.vue'
import SearchHistory from './SearchHistory.vue'
import { useAuthStore } from '@/stores'

const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const router = useRouter()
const visible = useVModel(props, 'modelValue', emit)
const authStore = useAuthStore()
const { flatMenuList } = storeToRefs(authStore)
const { addHistory } = authStore
const menuList = computed(() => flatMenuList.value.filter(item => !item.meta.isHide))
const resultList = ref<Menu.MenuOptions[]>([])

function handleSearch(keyword: string) {
  resultList.value = keyword ? menuList.value.filter(filterNode(keyword)) : menuList.value
}

// 打开搜索框
const inputRef = ref()
const keyword = ref('')
const activeIndex = ref(0)
// 搜索窗关闭
function close() {
  visible.value = false
  /** 延时处理防止用户看到某些操作 */
  setTimeout(() => {
    keyword.value = ''
    activeIndex.value = 0
    resultList.value = []
  }, 100)
}
watch(visible, (val) => {
  if (val) {
    setTimeout(() => {
      inputRef.value.focus()
    })
  }
})
// 筛选菜单
function filterNode(keyword: string) {
  return (restaurant: Menu.MenuOptions) => {
    const { path, meta } = restaurant
    const isIncluded = (str: string, target: string) => str.toLowerCase().includes(target.toLowerCase())
    return isIncluded(path, keyword) || isIncluded(meta.title, keyword)
  }
}
// 跳转菜单
function handleSelect(e: Event, item: Menu.MenuOptions) {
  addHistory(item)
  const { meta: { isLink }, path } = item || resultList.value[activeIndex.value]
  if (isLink)
    window.open(isLink, '_blank')
  else router.push(path)
  close()
}

// TODO: 如果是按 ESC 的失焦，则关闭
// 按键盘上下键切换菜单
onKeyStroke(['ArrowUp'], () => {
  if (activeIndex.value === 0)
    activeIndex.value = resultList.value.length - 1
  if (activeIndex.value > 0)
    activeIndex.value -= 1
})

onKeyStroke(['ArrowDown'], () => {
  if (activeIndex.value === resultList.value.length - 1)
    activeIndex.value = 0
  if (activeIndex.value < resultList.value.length - 1)
    activeIndex.value += 1
})
</script>

<template>
  <el-dialog v-model="visible" class="search-dialog" :open-close="false" :before-close="close" destroy-on-close close-on-click-modal align-center>
    <el-input ref="inputRef" v-model="keyword" placeholder="菜单搜索 ：支持菜单名称、路径" clearable @input="handleSearch" @keyup.enter="handleSelect">
      <template #prefix>
        <i-iconamoon:search-light />
      </template>
    </el-input>
    <SearchHistory @select="handleSelect" />
    <SearchResult :active-index="activeIndex" :result-list="resultList" @select="handleSelect" />
    <template #footer>
      <SearchFooter />
    </template>
  </el-dialog>
</template>

<style  scoped lang="scss">
//重置 el-tag 样式
.el-tag{
  padding:2px 4px;
  border: none;
  height: 24px;
  position: relative;
  --el-icon-size:14px;
   :deep(.el-tag__close){
    width: 12px;
    height: 12px;
    display: none;
    position: absolute;
    right: -6px;
    top: -6px;
    color:#fff;
    background-color: var(--el-color-info-light-6);
    &:hover {
      background-color: var(--el-tag-hover-color);
    }
  }

  &:hover{
    :deep(.el-tag__close){
      display: block;
    }
  }
}
</style>
