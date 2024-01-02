<script setup lang='ts'>
// const list = await fetch('/api/networking/sdwan/network').then(res => res.json())
import { useNetworkStore } from '@/stores'

const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')

const networkStore = useNetworkStore()
const networks = networkStore.networks
</script>

<template>
  <div bg-white p2>
    <el-table
      :data="networks" stripe border
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
    >
      <el-table-column type="index" width="50" />
      <el-table-column label="网络名称" prop="name" />
      <el-table-column label="站点数量" prop="siteCount" />
      <el-table-column label="类型" prop="type" />
      <el-table-column label="操作">
        <el-dropdown split-button size="small" type="primary" @click="$router.push('/networking/sdwan/network/site/i')">
          管理站点
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$router.push('/gateway')">
                前往CPE
              </el-dropdown-item>
              <el-dropdown-item>启用/禁用</el-dropdown-item>
              <el-dropdown-item>查看拓扑</el-dropdown-item>
              <el-dropdown-item />
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang='scss'>

</style>
