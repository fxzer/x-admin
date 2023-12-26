<script setup lang="ts">
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const currentTabName = ref('custom')
const data = [{ uuid: '9e33b1eba5dd4754b026b116638cf687', name: 'TCP', type: '协议', typeValues: 'Tcp', createDate: 'Jun 20, 2023 10:39:53 AM', lastOpDate: 'Jun 20, 2023 10:39:53 AM' }, { uuid: '8ea5a43d4c2f4c3386cdc98450459753', name: 'UDP', type: '协议', typeValues: 'Udp', createDate: 'Jun 20, 2023 10:39:40 AM', lastOpDate: 'Jun 20, 2023 10:39:40 AM' }, { uuid: 'e5ae72b518174179afbadf31f3a601db', name: 'ICMP', type: '协议', typeValues: 'Icmp', createDate: 'Jun 20, 2023 10:39:26 AM', lastOpDate: 'Jun 20, 2023 10:39:26 AM' }]
const customData = []
</script>

<template>
  <el-tabs v-model="currentTabName" type="border-card">
    <el-tab-pane label="自定义" name="custom">
      <el-table
        :data="customData"
        stripe border
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
      >
        <el-table-column prop="name" label="业务名称" width="180" />
        <el-table-column prop="type" label="类型" width="180">
          <template #default="{ row }">
            {{ row.type }}
          </template>
        </el-table-column>
        <el-table-column prop="typeValues" label="值" />
        <el-table-column label="操作" width="180">
          <template #default>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
            />
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="通用" name="normal">
      <el-table
        :data="data"
        stripe border
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
      >
        <el-table-column prop="name" label="业务名称" width="180" />
        <el-table-column prop="type" label="类型" width="180">
          <template #default="{ row }">
            {{ row.type }}
          </template>
        </el-table-column>
        <el-table-column prop="typeValues" label="值" />
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped></style>
