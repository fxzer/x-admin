<script setup lang="ts">
const data = [{ uuid: 'a4a48722f0784c71b0999b2dbc85f80a', number: 6568, accountUuid: 'de3f247b7720430f8d339c688071f817', employeeUuid: '6fd9e2b2653c446b9a62fa36de31ea7a', employeeName: 'zhangyao@syscloud.cn', siteUuid: '7c61dc72f62e4d0e88871e0a70856c4d', siteName: '北京拨测', version: '0.2.13', os: 'Windows', state: 'Online', status: 'Connected', virtualIp: '192.168.10.2', ipv6VirtualIp: 'fc01:9991:5d55:5f33::1:2', publicKey: 'dAqcYWJbdR3r+wRH1UoFNKVvxZ3ZCvcnBEU1jQwN+GU=', privateKey: '8DPeUK6BiRYuFX+9LCXqu84Ks7kxEgAW83z4gab3ZXE=', endpoint: '192.168.3.176:9000', loginDate: 'Dec 27, 2023 11:28:03 AM', heartBeatDate: 'Dec 27, 2023 2:39:02 PM', lastOpDate: 'Dec 27, 2023 2:39:02 PM', createDate: 'Dec 27, 2023 11:28:03 AM', accountName: 'zhangy', company: 'zy-test123' }, { uuid: 'testUUID', number: 5725, accountUuid: 'e497f59723cb49269818b50898d09a8d', employeeUuid: '265cfcf657f5493f9d0a87fc4b22a956', employeeName: 'ios@syscloud.cn', siteUuid: '280cb0d76aef4524a1a82a9f0a09c53d', siteName: 'ios测试', version: '1', os: 'macOS', state: 'Offline', status: 'Connected', virtualIp: '110.110.0.3', ipv6VirtualIp: 'fc01:7833:5c33:a705::1:3', publicKey: 'N4/gd1WawWZQNM6I+URkEAbN9qsEUrXbFvrW1wNpqWQ=', privateKey: 'sPbAbpWK6TpKaKZ7T6aHBEfCArbg6dOcLKNQdlReYGo=', endpoint: '192.168.211.151:9000', loginDate: 'Sep 13, 2023 4:29:30 PM', heartBeatDate: 'Sep 13, 2023 4:55:32 PM', lastOpDate: 'Sep 13, 2023 5:10:00 PM', createDate: 'Sep 5, 2023 5:07:37 PM', accountName: 'ccq', company: 'syscloud' }]
</script>

<template>
  <div class="bg-white p2">
    <el-table
      :data="data"
      stripe
      :header-cell-style="{
        textAlign: 'center',
        padding: '8px 0',
        backgroundColor: '#F5F7FA',
      }"
      :cell-style="{ textAlign: 'center', padding: '8px 0' }"
    >
      <el-table-column prop="uuid" label="UUID" />
      <el-table-column prop="employeeName" label="账号" />
      <el-table-column prop="os" label="操作系统" />
      <el-table-column
        prop="version"
        label="版本"
        width="70px"
      />
      <el-table-column prop="virtualIp" label="本地IP">
        <template #default="{ row }">
          <p>{{ row.virtualIp }}</p>
          <p>{{ row.ipv6VirtualIp }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="virtualIp" label="加速节点">
        <template #default="{ row }">
          <p>{{ row.siteName }}</p>
          <p>{{ row.endpoint }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="在线状态">
        <template #default="{ row }">
          <el-tag
            :type="row.state !== 'Offline' ? 'success' : 'danger'"
            size="small"
          >
            {{ row.state !== "Offline" ? "在线" : "离线" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="连接状态">
        <template #default>
          <el-tag type="success" size="small">
            已连接
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="loginDate" label="登录时间" width="160px">
        <template #default="{ row }">
          {{ row.loginDate }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80px">
        <template #default>
          <el-button type="danger" size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang="scss">
</style>
