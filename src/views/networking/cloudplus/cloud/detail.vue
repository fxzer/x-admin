<script setup lang='ts'>
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const data = reactive([
  {
    uuid: 1,
    name: '上海办公室',
    type: 'SD-Wan',
    bandwidth: '100M',
    cidr: '10.254.251.2',
    status: '已连接',
    createTime: '2023-12-01',
  },
  {
    uuid: 2,
    name: '北京百度云',
    type: '云端口',
    bandwidth: '500M',
    cidr: '10.254.257.3',
    status: '已连接',
    createTime: '2023-12-11',
  },
  {
    uuid: 3,
    name: '香港百度云',
    type: '云端口',
    bandwidth: '150M',
    cidr: '10.254.256.5',
    status: '已连接',
    createTime: '2023-12-23',
  },
  {
    uuid: 4,
    name: '皓宽机房',
    type: '楼内纤',
    bandwidth: '100M',
    cidr: '10.254.252.6',
    status: '已连接',
    createTime: '2023-12-21',
  },
  {
    uuid: 5,
    name: '北京总部',
    type: '专线',
    bandwidth: '250M',
    cidr: '10.254.253.7',
    status: '已连接',
    createTime: '2023-12-28',
  },

])
</script>

<template>
  <div>
    <el-table
      :data="data"
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
      stripe border
    >
      <el-table-column
        prop="uuid"
        label="序号"
      />
      <el-table-column
        prop="name"
        label="站点名称"
      />
      <el-table-column
        prop="type"
        label="连接类型"
      />
      <el-table-column
        prop="bandwidth"
        label="带宽"
      />
      <el-table-column
        prop="cidr"
        label="互联地址"
      />
      <el-table-column
        prop="status"
        label="状态"
      >
        <template #default="{ row }">
          <el-tag v-if="row.status === '已连接'" type="success">
            已连接
          </el-tag>
          <el-tag v-else type="danger">
            未连接
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="站点路由表"
      >
        <template #default>
          <el-button size="small" type="primary">
            查看
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="监控"
      >
        <template #default>
          <span flex-center>
            <i-material-symbols:add-chart-outline-sharp text="green-500" />
          </span>
        </template>
      </el-table-column>

      <el-table-column
        prop="createTime"
        label="创建时间"
      />
      <el-table-column
        label="操作"
      >
        <template #default="{ row }">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link flex-center text-blue">更多<i-ep-arrow-down /></span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="$router.push(`/gateway/${row.uuid}`)">
                  前往CPE
                </el-dropdown-item>
                <el-dropdown-item>互联设置</el-dropdown-item>
                <el-dropdown-item>路由设置</el-dropdown-item>
                <el-dropdown-item>BGP策略</el-dropdown-item>
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
