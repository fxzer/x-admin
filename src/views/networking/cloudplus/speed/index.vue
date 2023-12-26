<script setup lang='ts'>
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const data = [{
  direction: '上海办公室--->上海百度云',
  protocol: 'TCP',
  duration: '1分18秒',
  time: '2022-11-25 11:56:20',
  avg: '8.56M/s',
  status: '完成',
}, {
  direction: '上海办公室--->上海百度云',
  protocol: 'UDP',
  duration: '37秒',
  time: '2022-11-25 11:57:27',
  avg: '7.86M/s',
  status: '完成',
}, {
  direction: '上海办公室--->上海百度云',
  protocol: 'TCP',
  duration: '45秒',
  time: '2022-11-26 11:56:29',
  avg: '4.71M/s',
  status: '完成',
}]
</script>

<template>
  <div bg-white p5>
    <el-table
      :data="data" stripe border
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
    >
      <el-table-column label="测试方向" prop="direction" />
      <el-table-column label="协议" prop="protocol" />
      <el-table-column label="测速时间" prop="time" />
      <el-table-column label="持续时间" prop="duration" />
      <el-table-column label=" 平均速度" prop="avg" />
      <el-table-column label="测速状态" prop="status">
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
  </div>
</template>

<style scoped lang='scss'>

</style>
