<script setup lang='ts'>
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const data = [{
  uuid: '1',
  name: ' 上海办公室',
  bandwidth: '100M',
  cidr: '192.168.102.1',
  downAvg: '6.18K',
  downTotal: '560M',
  upAvg: '3.18K',
  upTotal: '800M',
  createTime: '2023-08-01',
  avgbd: '5.1%',
}, {
  uuid: '2',
  name: ' 北京百度云',
  bandwidth: '160M',
  cidr: '192.168.102.4',
  downAvg: '2.18K',
  downTotal: '1.2G',
  upAvg: '1.68K',
  upTotal: '800M',
  createTime: '2023-08-11',
  avgbd: '3.6%',
}, {
  uuid: '3',
  name: ' 香港百度云',
  bandwidth: '120M',
  cidr: '192.168.102.4',
  downAvg: '2.45K',
  downTotal: '1.12G',
  upAvg: '1.61K',
  upTotal: '800M',
  createTime: '2023-08-11',
  avgbd: '6.9%',
}]
</script>

<template>
  <div bg-white p2>
    <el-table
      :data="data" stripe border
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
    >
      <el-table-column label="序号" prop="uuid" width="65" />
      <el-table-column label="站点名称" prop="name">
        <template #default="{ row }">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column label="带宽" prop="bandwidth" />
      <el-table-column label="平均下行速率" prop="downAvg" />
      <el-table-column label="平均上行速率" prop="upAvg" />
      <el-table-column label="下行总流量" prop="downTotal" />
      <el-table-column label="上行总流量" prop="upTotal" />
      <el-table-column label="平均带宽利用率" prop="avgbd" />
      <el-table-column label="创建时间" prop="createTime" />
    </el-table>
  </div>
</template>

<style scoped lang='scss'>

</style>
