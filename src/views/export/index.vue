<script setup lang='ts'>
const activeTab = ref('1')
</script>

<template>
  <el-tabs v-model="activeTab" type="border-card" tab-position="top" h-100>
    <el-tab-pane
      label="出口 1"
      name="1"
    >
      <div class="bg-green-100/70 text-gray-600" mx-4 my-2 px-3 py-2 text-sm space-x-7>
        <span>站点：上海办公室 </span>
        <span>智能网关：0c1197df0000</span>
        <span>公网地址池：11.44.15.57/29</span>
        <span>带宽：200M</span>
      </div>

      <div flex bg-white p4>
        <div class="left w-1/3">
          <el-card shadow="always" flex-1>
            <template #header>
              <div flex-between-center>
                <span>Wan</span>
                <div>
                  <el-button size="small">
                    重启
                  </el-button>
                  <el-button type="primary" size="small">
                    编辑
                  </el-button>
                  <el-button type="danger" size="small">
                    停止
                  </el-button>
                </div>
              </div>
            </template>
            <el-descriptions size="small" :column="1">
              <el-descriptions-item>
                <template #label>
                  <span font-bold>协议:</span>
                </template>
                静态地址
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>地址:</span>
                </template>
                11.44.15.57/29
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>网关:</span>
                </template>
                11.44.15.57
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>DNS1:</span>
                </template>
                114.114.114.114
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>已连接:</span>
                </template>
                10h 1m 23s
              </el-descriptions-item>
            </el-descriptions>
            <div my-2 border-b />
            <el-descriptions size="small" :column="1">
              <el-descriptions-item>
                <template #label>
                  <span font-bold>设备:</span>
                </template>
                eth0
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>MAC地址:</span>
                </template>
                E4:5F:01:2A:3B:4C
              </el-descriptions-item>
            </el-descriptions>
          </el-card>
          <el-card shadow="always" mt-5 flex-1>
            <template #header>
              <div flex-between-center>
                <span>Wan1</span>
                <div>
                  <el-button size="small">
                    重启
                  </el-button>
                  <el-button type="primary" size="small">
                    编辑
                  </el-button>
                  <el-button type="danger" size="small">
                    停止
                  </el-button>
                </div>
              </div>
            </template>
            <el-descriptions size="small" :column="1">
              <el-descriptions-item>
                <template #label>
                  <span font-bold>协议:</span>
                </template>
                静态地址
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>地址:</span>
                </template>
                11.44.15.58/29
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>网关:</span>
                </template>
                11.44.15.58
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>DNS1:</span>
                </template>
                114.114.114.114
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>已连接:</span>
                </template>
                10h 22m 24s
              </el-descriptions-item>
            </el-descriptions>
            <div my-2 border-b />
            <el-descriptions size="small" :column="1">
              <el-descriptions-item>
                <template #label>
                  <span font-bold>设备:</span>
                </template>
                eth1
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>MAC地址:</span>
                </template>
                E4:5F:01:2A:3B:4B
              </el-descriptions-item>
            </el-descriptions>
          </el-card>
        </div>
        <div class="right ml-5" flex-1 gap-2>
          <img src="/export/wan.png" alt="" class="h-273px w-full">
          <img src="/export/wan1.png" class="mt-5 h-273px w-full">
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang='scss'>
.left .el-card {
  :deep(.el-card__header) {
    padding: 10px !important;
  }
  :deep(.el-descriptions__cell) {
    padding-bottom: 0px !important;
  }
}
.el-tabs--border-card :deep(.el-tabs__content) {
  padding: 0px !important;
}
</style>
