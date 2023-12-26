<script setup lang='ts'>
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
</script>

<template>
  <div
    class="operation-log"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(0, 0, 0, 0.5)"
  >
    <div class="grid-wrapper">
      <el-table
        :data="[]"
        stripe
        class="width-percent-100"
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
      >
        <el-table-column label="网络名称" prop="hybridwanNetworkName">
          <template #default="{ row }">
            <p>名称: {{ row.hybridwanNetworkName }}</p>
            <p>VNI: {{ row.vni }}</p>
          </template>
        </el-table-column>
        <el-table-column label="请求来源" prop="esn">
          <template #default="{ row }">
            <p>ESN: {{ row.esn }}</p>
            <p v-if="row.employeeName">
              客户端账号: {{ row.employeeName }}
            </p>
          </template>
        </el-table-column>
        <el-table-column label="请求方法" prop="method" />
        <el-table-column label="请求协议" prop="protocol" />
        <el-table-column label="HOST" prop="host" width="220" />
        <el-table-column label="请求状态" prop="status_code" />
        <el-table-column label="请求时间" prop="time_start" />
        <el-table-column label="总时长(ms)" prop="time_taken">
          <template #default="{ row }">
            {{
              row.time_taken
            }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
