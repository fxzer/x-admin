<script setup lang='ts'>
import { useAuthStore } from '@/stores'

defineEmits(['select'])

const authStore = useAuthStore()
const { removeHistory, clearHistory } = authStore
const { searchHistory } = storeToRefs(authStore)
</script>

<template>
  <div class="mb-1 mt-3">
    <div class="mb-2 flex-y-center">
      <span>搜索历史</span>
      <el-tooltip content="清空历史" placement="top">
        <i-ant-design:clear-outlined class="ml-1 !wh-18px hover:text-danger" @click="clearHistory" />
      </el-tooltip>
    </div>
    <div class="flex flex-wrap -mr-2">
      <el-tag
        v-for="(item, index) in searchHistory" :key="index" type="info" class="mb-2 mr-2 cursor-pointer" closable
        @close="removeHistory(item)"
        @click="$emit('select', $event, item)"
      >
        {{ item.meta.title }}
      </el-tag>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
