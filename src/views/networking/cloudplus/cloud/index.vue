<script setup lang='ts'>
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const data = [{
  uuid: '1',
  vid: '1',
  name: ' 北京百度云-香港百度云',
  siteCount: 3,
  createTime: '2023-08-01',
}]
</script>

<template>
  <div bg-white p5>
    <el-table
      :data="data" stripe border
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
    >
      <el-table-column label="序号" prop="uuid" width="55" />
      <el-table-column label="VID" prop="vid" width="55" />
      <el-table-column label="云网络名称" prop="name">
        <template #default="{ row }">
          <router-link :to="`/networking/cloudplus/cloud/${row.uuid}`" text-blue>
            {{ row.name }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="站点数量" prop="siteCount" />
      <el-table-column label="创建时间" prop="createTime" />
    </el-table>
  </div>
</template>

<style scoped lang='scss'>

</style>
