<script setup lang='ts'>
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const data = [{
  uuid: '1',
  name: ' 北京百度云-香港百度云',
  status: '正常',
  state: '已开通',
  bandwidth: '10M',
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
      <el-table-column label="序号" prop="uuid" width="65" />
      <el-table-column label="连接线路" prop="name">
        <template #default="{ row }">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column label="带宽" prop="bandwidth" />
      <el-table-column label="状态" prop="status" />
      <el-table-column label="状况" prop="state" />
      <el-table-column label="监控">
        <template #default>
          <span flex-center>
            <i-material-symbols:add-chart-outline-sharp text="green-500" />
          </span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="createTime" />
      <el-table-column label="操作" width="80" fixed="right">
        <template #default="{ row }">
          <el-dropdown size="medium">
            <span class="el-dropdown-link text-blue">
              <span class="el-dropdown-link flex-center text-blue">更多<i-ep-arrow-down /></span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  xxx
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang='scss'>

</style>
