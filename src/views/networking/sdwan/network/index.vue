<script setup lang='ts'>
// const list = await fetch('/api/networking/sdwan/network').then(res => res.json())
import { useNetworkStore } from '@/stores'

const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')

const networkStore = useNetworkStore()
const networks = networkStore.networks
</script>

<template>
  <div bg-white p5>
    <el-table
      :data="networks" stripe border
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
    >
      <el-table-column type="index" width="50" />
      <el-table-column
        label="网络名称"
      >
        <template #default="{ row }">
          <router-link :to="`/networking/sdwan/network/${row.uuid}`" text-blue>
            {{ row.name }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="accountName" label="账户">
        <template #default="{ row }">
          <div>账户名：{{ row.accountName }}</div>
          <div>公司：{{ row.company }}</div>
        </template>
      </el-table-column>
      <el-table-column label="站点数量" prop="siteCount" />
      <el-table-column label="类型" prop="type" />
    </el-table>
  </div>
</template>

<style scoped lang='scss'>

</style>
