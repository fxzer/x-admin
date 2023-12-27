<script setup lang='ts'>
const activeTab = ref('1')
const activeNames = ref('1')
</script>

<template>
  <div bg-white p2>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template #title>
          <div flex-between-center>
            <div flex gap-15>
              <span><b text-gray-700 font-semibold>加速线路：</b>上海 HUB(ESN:0c1197df0000) <i text-green-600 font-bold>-------> </i> HK出口</span>
              <span><b text-gray-700 font-semibold>加速模式：</b>白名单</span>
              <span><b text-gray-700 font-semibold>访问模式：</b> 无证书</span>
            </div>
            <span flex-center>
              监控： <i-material-symbols:add-chart-outline-sharp text="green-500" />
            </span>
          </div>
        </template>
        <el-tabs v-model="activeTab" type="border-card">
          <el-tab-pane
            label="加速域名"
            name="1"
          >
            <img src="/apps.png" alt="">
          </el-tab-pane>
          <el-tab-pane label="加速IP集" name="2">
            暂无应用
          </el-tab-pane>
          <el-tab-pane label="域名内名单" name="3">
            暂无应用
          </el-tab-pane>
        </el-tabs>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title>
          <div flex-between-center>
            <div flex gap-15>
              <span><b text-gray-700 font-semibold>加速线路：</b>上海 HUB(ESN:0c1198df0000) <i text-green-600 font-bold>-------> </i> 韩国出口</span>
              <span><b text-gray-700 font-semibold>加速模式：</b>白名单</span>
              <span><b text-gray-700 font-semibold>访问模式：</b> 无证书</span>
            </div>
            <span flex-center>
              监控： <i-material-symbols:add-chart-outline-sharp text="green-500" />
            </span>
          </div>
        </template>
        <el-tabs v-model="activeTab" type="border-card">
          <el-tab-pane
            label="加速域名"
            name="1"
          >
            <img src="/apps.png" alt="">
          </el-tab-pane>
          <el-tab-pane label="加速IP集" name="2">
            暂无应用
          </el-tab-pane>
          <el-tab-pane label="域名内名单" name="3">
            暂无应用
          </el-tab-pane>
        </el-tabs>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped lang='scss'>

</style>
