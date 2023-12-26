<script setup lang='ts'>
import cpeDetail from '@/views/gateway/detail.vue'

const activeTab = ref('master')
</script>

<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card" stretch tab-position="top">
      <el-tab-pane
        label="上海 1"
        name="master"
      >
        <cpeDetail />
      </el-tab-pane>
      <el-tab-pane
        label="上海 2"
        name="slave"
      >
        <!-- <cpeDetail /> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang='scss'>

</style>
