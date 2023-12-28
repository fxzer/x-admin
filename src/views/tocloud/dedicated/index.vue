<script setup lang='ts'>
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const data = [{
  uuid: '1',
  n: '百度云 10M 专线',
  name: ' 北京百度云-香港百度云',
  status: '正常',
  state: '已开通',
  bandwidth: '10M',
  createTime: '2023-12-01',
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
      <el-table-column label="名称" prop="n" />
      <el-table-column label="连接线路" prop="name">
        <template #default="{ row }">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column label="带宽" prop="bandwidth" width="70" />
      <el-table-column label="状况" prop="state" width="80" />
      <el-table-column label="状态" prop="status" width="70" />
      <el-table-column label="监控" width="70">
        <template #default>
          <span flex-center>
            <i-material-symbols:add-chart-outline-sharp text="green-500" />
          </span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="createTime" width="120" />
      <el-table-column label="操作" width="90" fixed="right">
        <template #default>
          <el-dropdown size="medium">
            <span class="el-dropdown-link text-blue">
              <span class="el-dropdown-link flex-center text-blue">更多<i-ep-arrow-down /></span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  终止
                </el-dropdown-item>
                <el-dropdown-item>
                  删除
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
