<script setup lang='ts'>
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const data = [{
  uuid: '1',
  siteName: '上海办公室-北京百度云',
  duration: '4分 10 秒',
  content: '丢包率已达 100%（阈值5.0）',
  recovery: '2022-11-25 12:00:10',
  alarm: '2022-11-25 11:56:20',
  status: '已恢复',
}]
</script>

<template>
  <div bg-white p5>
    <el-table
      :data="data" stripe border
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
    >
      <el-table-column label="专线名称" prop="siteName" />
      <el-table-column label="告警时间" prop="alarm" />
      <el-table-column label="恢复时间" prop="recovery" />
      <el-table-column label="持续时间" prop="duration" />
      <el-table-column label="告警内容" prop="content" />
      <el-table-column label="告警状态" prop="status">
        <template #default="{ row }">
          <el-tag v-if="row.status === '已恢复'" size="small" type="success">
            {{ row.status }}
          </el-tag>
          <el-tag v-else size="small" type="danger">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang='scss'>

</style>
