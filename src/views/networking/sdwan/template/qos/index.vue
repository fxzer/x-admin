<script setup lang="ts">
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const currentTabName = ref('custom')
const data = [{ uuid: '03ba2adec94745a183ef0dcc06d116d6', name: 'tcp', rules: [{ uuid: 'c223d2f5167a4d4a8324a67498ba74c4', templateUuid: '03ba2adec94745a183ef0dcc06d116d6', apps: [{ name: 'TCP', type: 'Protocol', typeValues: ['Tcp'] }], network: 'Wan', priority: 'High', lastOpDate: 'Sep 25, 2023 8:29:01 PM', createDate: 'Sep 25, 2023 8:29:01 PM' }], lastOpDate: 'Sep 25, 2023 8:29:01 PM', createDate: 'Sep 25, 2023 8:29:01 PM' }]
const customData = []
</script>

<template>
  <el-tabs v-model="currentTabName" type="border-card">
    <el-tab-pane label="自定义" name="custom">
      <el-table
        :data="customData"
        stripe border
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
      >
        <el-table-column prop="name" label="模板名称" width="400" />

        <el-table-column
          class-name="cell-no-padding"
          prop="rules"
          label="规则"
        >
          <template #header>
            <div class="table-title">
              规则
            </div>
            <div class="sub-tb">
              <div class="tb-header">
                业务
              </div>
              <div class="tb-header">
                网络
              </div>
              <div class="tb-header">
                优先级
              </div>
            </div>
          </template>
          <template #default="scope">
            <el-table
              :data="scope.row.rules"
              :header-cell-style="headerCellStyle"
              :cell-style="cellStyle"
              :show-header="false"
            >
              <el-table-column prop="apps" label="业务">
                <template #default="{ row }">
                  <el-tag
                    v-for="(item, index) in row.apps"
                    :key="index"
                    size="small"
                  >
                    {{ item.name }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="network" label="网络">
                <template #default="{ row }">
                  {{
                    row.network
                  }}
                </template>
              </el-table-column>
              <el-table-column prop="priority" label="优先级">
                <template #default="{ row }">
                  {{
                    row.priority
                  }}
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="通用" name="normal">
      <el-table
        :data="data"
        stripe border
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
      >
        <el-table-column prop="name" label="模板名称" width="400" />

        <el-table-column
          class-name="cell-no-padding"
          prop="rules"
          label="规则"
        >
          <template #header>
            <div class="table-title">
              规则
            </div>
            <div class="sub-tb">
              <div class="tb-header">
                业务
              </div>
              <div class="tb-header">
                网络
              </div>
              <div class="tb-header">
                优先级
              </div>
            </div>
          </template>
          <template #default="scope">
            <el-table
              :data="scope.row.rules"
              :header-cell-style="headerCellStyle"
              :cell-style="cellStyle"
              :show-header="false"
            >
              <el-table-column prop="apps" label="业务">
                <template #default="{ row }">
                  <el-tag
                    v-for="(item, index) in row.apps"
                    :key="index"
                    size="small"
                  >
                    {{ item.name }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="network" label="网络">
                <template #default="{ row }">
                  {{
                    row.network
                  }}
                </template>
              </el-table-column>
              <el-table-column prop="priority" label="优先级">
                <template #default="{ row }">
                  {{
                    row.priority
                  }}
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
// 二级表头
.table-title,
.sub-tb {
  height: 26px;
  line-height: 26px;
}

.sub-tb {
  display: flex;
  border-top: 1px solid #ebeef5;
  .tb-header {
    flex: 1;
    background-color: #f5f7fa !important;
  }
  .tb-header:not(:first-of-type) {
    border-left: 1px solid #ebeef5;
  }
}
</style>
