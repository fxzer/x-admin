<script setup lang='ts'>
const activeMonitor = ref('Wan')
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const inselect = ref('拒绝')
const outselect = ref('接受')
const transformselect = ref('拒绝')
</script>

<template>
  <div flex bg-white p2>
    <!-- <div ref="chartRef" wh-180 /> -->
    <div class="left" flex-1 gap-2>
      <div>
        <h2 mb-3 text-center text-gray-700 font-bold>
          网络
        </h2>
        <div flex gap-2>
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
                10.44.15.57/29
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>网关:</span>
                </template>
                10.44.15.57
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
          <el-card shadow="always" flex-1>
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
                10.44.15.58/29
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <span font-bold>网关:</span>
                </template>
                10.44.15.58
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
      </div>
      <div mb-2 mt-3>
        <h2 mb-3 text-center text-gray-700 font-bold>
          监控
        </h2>
        <el-tabs v-model="activeMonitor" type="border-card" tab-position="top">
          <el-tab-pane
            label="Wan"
            name="Wan"
          >
            <img src="/export/wan.png" alt="">
          </el-tab-pane>
          <el-tab-pane
            label="Wan1"
            name="Wan1"
          >
            <img src="/export/wan1.png" alt="">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div ml-2 flex-1 border-l px-2>
      <h2 mb-3 text-center text-gray-700 font-bold>
        防火墙
      </h2>

      <div>
        <h3 text-14px text-gray-700 font-semibold italic>
          常规设置
        </h3>
        <el-form size="small" m-3 label-position="right" label-width="80px">
          <el-form-item label="入站数据">
            <el-select v-model="inselect">
              <el-option label="接受" value="接受" />
              <el-option label="拒绝" value="拒绝" />
            </el-select>
          </el-form-item>
          <el-form-item label="出站数据">
            <el-select v-model="outselect">
              <el-option label="接受" value="接受" />
              <el-option label="拒绝" value="拒绝" />
            </el-select>
          </el-form-item>
          <el-form-item label="转发">
            <el-select v-model="transformselect">
              <el-option label="接受" value="接受" />
              <el-option label="拒绝" value="拒绝" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <h3 mt-3 text-14px text-gray-700 font-semibold italic>
          端口转发
        </h3>
        <p mb-4 text-sm text-gray-400>
          端口转发允许互联网上的远程计算机连接到内部网络中的特定计算机或服务。
        </p>
        <el-table
          size="small"
          :data="[]" stripe border
          :cell-style="cellStyle"
          :header-cell-style="headerCellStyle"
        >
          <el-table-column label="名称" />
          <el-table-column label="匹配规则" />
          <el-table-column label="操作" />
          <el-table-column label="启用" />
        </el-table>
      </div>
      <div>
        <h3 mt-4 text-14px text-gray-700 font-semibold italic>
          NAT规则
        </h3>
        <p mb-3 text-sm text-gray-400>
          NAT 规则允许对源IP进行精细控制，以用于出站或转发流量。
        </p>
        <el-table
          size="small"
          :data="[]" stripe border
          :cell-style="cellStyle"
          :header-cell-style="headerCellStyle"
        >
          <el-table-column label="名称" />
          <el-table-column label="匹配规则" />
          <el-table-column label="操作" />
          <el-table-column label="启用" />
        </el-table>
      </div>
    </div>
  </div>
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
</style>
