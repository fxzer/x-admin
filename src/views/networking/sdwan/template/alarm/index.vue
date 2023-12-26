<script setup lang="ts">
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const currentTabName = ref('custom')
const data = [{ uuid: '4591a471dcaf481c8ed5570690bca4c7', name: '通用告警模板', lastOpDate: 'Jun 20, 2023 10:38:57 AM', createDate: 'Jun 20, 2023 10:38:57 AM', rules: [{ uuid: '66569d1a9bcf43e3ac8b287bc528a43e', templateUuid: '66569d1a9bcf43e3ac8b287bc528a43e', targetType: '丢包率', threshold: 50, scope: 'Technique', level: '紧急', lastOpDate: 'Jun 20, 2023 10:38:57 AM', createDate: 'Jun 20, 2023 10:38:57 AM' }] }]
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
        <el-table-column
          prop="name"
          label="模板名称"
          width="400"
        />

        <el-table-column class-name="cell-no-padding" prop="rules" label="规则">
          <template #header>
            <div class="table-title">
              规则
            </div>
            <div class="sub-tb">
              <div class="tb-header">
                规则
              </div>
              <div class="tb-header">
                阈值
              </div>
              <div class="tb-header">
                级别
              </div>
            </div>
          </template>
          <template #default="{ row }">
            <el-table
              :data="row.rules"
              :header-cell-style="headerCellStyle"
              :show-header="false"
              :cell-style="cellStyle"
            >
              <el-table-column prop="targetType" label="规则">
                <template #default="{ row: ruleRow }">
                  {{
                    ruleRow.targetType
                  }}
                </template>
              </el-table-column>
              <el-table-column prop="threshold" label="阈值">
                <template #default="{ row: ruleRow }">
                  {{ ruleRow.threshold
                  }}{{ ruleRow.targetType === "Rtt" ? "ms" : "%" }}
                </template>
              </el-table-column>
              <el-table-column prop="level" label="级别">
                <template #default="{ row: ruleRow }">
                  {{
                    ruleRow.level
                  }}
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template #default>
            <el-button
              type="danger"
              size="small"
            >
              删除
            </el-button>
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
        <el-table-column
          prop="name"
          label="模板名称"
          width="400"
        />

        <el-table-column class-name="cell-no-padding" prop="rules" label="规则">
          <template #header>
            <div class="table-title">
              规则
            </div>
            <div class="sub-tb">
              <div class="tb-header">
                规则
              </div>
              <div class="tb-header">
                阈值
              </div>
              <div class="tb-header">
                级别
              </div>
            </div>
          </template>
          <template #default="{ row }">
            <el-table
              :data="row.rules"
              :header-cell-style="headerCellStyle"
              :show-header="false"
              :cell-style="cellStyle"
            >
              <el-table-column prop="targetType" label="规则">
                <template #default="{ row: ruleRow }">
                  {{
                    ruleRow.targetType
                  }}
                </template>
              </el-table-column>
              <el-table-column prop="threshold" label="阈值">
                <template #default="{ row: ruleRow }">
                  {{ ruleRow.threshold
                  }}{{ ruleRow.targetType === "Rtt" ? "ms" : "%" }}
                </template>
              </el-table-column>
              <el-table-column prop="level" label="级别">
                <template #default="{ row: ruleRow }">
                  {{
                    ruleRow.level
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
