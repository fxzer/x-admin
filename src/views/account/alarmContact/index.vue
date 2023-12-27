<script setup lang="ts">
const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
const currentTabName = ref('Contact')
</script>

<template>
  <div
    id="AccountIndex"
    class="account-index"
  >
    <el-tabs
      v-model="currentTabName"
      type="border-card"
    >
      <el-tab-pane label="告警联系人" name="Contact">
        <el-table

          :data="[]"
          :header-cell-style="headerCellStyle"
          :cell-style="cellStyle"
          style="margin-top: 15px"

          stripe border
        >
          <el-table-column type="index" label="序号" width="70px" />
          <el-table-column prop="name" label="接收人" />

          <el-table-column prop="phone" label="手机号">
            <template #default="{ row }">
              {{ row.phone }}
            </template>
          </el-table-column>
          <el-table-column label="邮箱">
            <template #default="{ row }">
              {{ row.email }}
            </template>
          </el-table-column>
          <el-table-column prop="level" label="告警等级" />
          <el-table-column label="接收方式">
            <el-table-column label="手机号" />
            <el-table-column label="邮箱" />
          </el-table-column>
          <el-table-column label="业务范围" />
          <el-table-column prop="createDate" label="创建时间" width="150px" />
          <el-table-column label="操作">
            <template #default>
              <el-button
                type="primary"
                class="el-icon-edit"
              />
              <el-button
                type="danger"
                class="el-icon-delete"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="告警WebHook" name="WebHook">
        <el-table
          :data="[]"
          :header-cell-style="headerCellStyle"
          :cell-style="cellStyle"
          style="margin-top: 15px"

          stripe border
        >
          <el-table-column type="index" label="序号" width="70" />
          <el-table-column prop="way" label="通知方式" min-width="115px">
            <template #default="{ row }">
              {{ row.way }}
            </template>
          </el-table-column>
          <el-table-column prop="url" label=" webhook" min-width="420px" />
          <el-table-column prop="level" label="告警等级" />
          <el-table-column label="业务范围" min-width="120px" />
          <el-table-column prop="keyword" label="关键词" />
          <el-table-column prop="description" label="描述" />
          <el-table-column prop="createDate" label="创建时间" width="150">
            <template #default="{ row }">
              {{ row.createDate }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="140">
            <template #default>
              <el-button
                type="primary"
                size="small"
                class="el-icon-edit"
              />
              <el-button
                type="danger"
                size="small"
                class="el-icon-delete"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.account-index {
  padding: 5px;
}
</style>
