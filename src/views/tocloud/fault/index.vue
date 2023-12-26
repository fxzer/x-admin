<script setup lang='ts'>
const activeTab = ref('1')
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const data = []
</script>

<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card" tab-position="top">
      <el-tab-pane
        label="任务列表"
        name="1"
      >
        <el-button type="primary" size="small" mb-3>
          新增任务
        </el-button>

        <el-table
          :data="data" stripe border
          :cell-style="cellStyle"
          :header-cell-style="headerCellStyle"
        >
          <el-table-column label="任务ID" prop="id" />
          <el-table-column label="演练资源" prop="resource" />
          <el-table-column label="任务状态" prop="status" />
          <el-table-column label="演练时长" prop="duration" />
          <el-table-column label="开始时间" prop="start" />
          <el-table-column label="结束时间" prop="end" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-tag v-if="row.status === '完成'" size="small" type="success">
                {{ row.status }}
              </el-tag>
              <el-tag v-else size="small" type="danger">
                {{ row.status }}
              </el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane
        label="演练记录"
        name="2"
      >
        <el-table
          :data="data" stripe border
          :cell-style="cellStyle"
          :header-cell-style="headerCellStyle"
        >
          <el-table-column label="任务ID" prop="id" />
          <el-table-column label="演练资源" prop="resource" />
          <el-table-column label="任务状态" prop="status" />
          <el-table-column label="演练时长" prop="duration" />
          <el-table-column label="开始时间" prop="start" />
          <el-table-column label="结束时间" prop="end" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-tag v-if="row.status === '完成'" size="small" type="success">
                {{ row.status }}
              </el-tag>
              <el-tag v-else size="small" type="danger">
                {{ row.status }}
              </el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang='scss'>

</style>
