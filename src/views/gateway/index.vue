<script setup lang='ts'>
import dayjs from 'dayjs'
import data from './data'

const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
</script>

<template>
  <div bg-white p2>
    <el-table
      :data="data"
      stripe
      :header-cell-style="headerCellStyle"
      :cell-style="cellStyle"
    >
      <el-table-column prop="number" label="序号" width="100" />
      <el-table-column prop="esn" label="ESN" min-width="120">
        <template #default="{ row }">
          <router-link :to="`/gateway/${row.esn}`" text-blue>
            {{ row.esn }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" />

      <el-table-column prop="siteName" label="站点名称" min-width="100">
        <template #default="{ row }">
          {{ row.siteName }}
        </template>
      </el-table-column>
      <el-table-column
        prop="bandwidth"
        label="带宽(M)"
      />
      <el-table-column prop="agentVersion" label="软件版本">
        <template #default="{ row }">
          <div style="text-align:left">
            软件版本：{{ row.agentVersion
            }}<span
              v-if="row.agentUpgrade === 'Need'"
              class="upgrade-tag"
            />
          </div>
          <div style="text-align:left">
            镜像版本：{{ row.systemVersion
            }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default>
          <el-tag
            type="success"
          >
            在线
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="链路" width="200">
        <template #header>
          <div class="table-title">
            链路
          </div>
          <div class="table-info">
            (角色&nbsp;|类型&nbsp;|&nbsp;状态)
          </div>
        </template>
        <template #default="{ row }">
          <p v-if="row.masterLink">
            <el-tag size="small">
              {{ row.masterLink.role === 'Master' ? '主' : '备' }}
            </el-tag><span class="mx-2">{{
              row.masterLink.linkType === 'Vpn' ? '公网链路' : '隧道'
            }}</span>
            <el-tag
              type="success"
            >
              正常
            </el-tag>
          </p>
        </template>
      </el-table-column>

      <el-table-column label="链路" width="200">
        <template #header>
          <div class="table-title">
            链路
          </div>
          <div class="table-info">
            (角色&nbsp;|类型&nbsp;|&nbsp;状态)
          </div>
        </template>
        <template #default="{ row }">
          <p v-if="row.slaveLink">
            <el-tag size="small">
              {{ row.slaveLink.role === 'Master' ? '主' : '备' }}
            </el-tag><span class="mx-2">{{
              row.slaveLink.linkType === 'Vpn' ? '公网链路' : '隧道'
            }}</span>
            <el-tag
              type="success"
            >
              正常
            </el-tag>
          </p>
        </template>
      </el-table-column>
      <el-table-column
        prop="attachAccountDate"
        label="创建时间"
        width="170px"
      >
        <template #default="{ row }">
          {{ dayjs(new Date(row.attachAccountDate)).format('YYYY-MM-DD HH:mm:ss') }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="80" fixed="right">
        <template #default="{ row }">
          <el-dropdown size="medium">
            <span class="el-dropdown-link text-blue">
              <span class="el-dropdown-link flex-center text-blue">更多<i-ep-arrow-down /></span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  软件升级
                </el-dropdown-item>
                <el-dropdown-item>
                  镜像升级
                </el-dropdown-item>
                <el-dropdown-item>
                  高级设置
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
