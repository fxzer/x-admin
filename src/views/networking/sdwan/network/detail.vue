<script setup lang='ts'>
import { useNetworkStore } from '@/stores'

const route = useRoute()

const networkStore = useNetworkStore()
const uuid = route.params.uuid
networkStore.setCurrentNet(uuid)
const { currentNet } = storeToRefs(networkStore)
</script>

<template>
  <div bg-white p5>
    <el-tabs type="border-card" tab-position="top">
      <el-tab-pane
        label="网络详情"
      >
        <div
          class="network-wrap"
        >
          <el-card w-full shadow="always" :body-style="{ padding: '20px' }">
            <el-descriptions
              v-if="currentNet"
              w-full
              :column="2"
              border
            >
              <template #title>
                <el-button type="primary" size="small">
                  管理站点
                </el-button>
                <el-button
                  type="primary"
                  size="small"
                >
                  查看拓扑
                </el-button>
              </template>
              <template #extra>
                <div class="clearfix">
                  <el-dropdown class="more-opt">
                    <span class="el-dropdown-link" text-blue>
                      更多<i class="el-icon-arrow-down el-icon--right" />
                    </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item>
                          关联站点模板
                        </el-dropdown-item>
                        <el-dropdown-item>
                          修改网络
                        </el-dropdown-item>
                        <el-dropdown-item>
                          配额管理
                        </el-dropdown-item>
                        <el-dropdown-item>
                          删除
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </template>
              <el-descriptions-item>
                <template #label>
                  网络UUID
                </template>
                {{ currentNet.uuid }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  网络名称
                </template>
                <div class="net-name-wrap">
                  {{ currentNet.name }}
                </div>
              </el-descriptions-item>

              <el-descriptions-item>
                <template #label>
                  <i class="el-icon-user-solid" />
                  账户名
                </template>
                <el-tag size="small">
                  {{ currentNet.accountName }}
                </el-tag>
              </el-descriptions-item>

              <el-descriptions-item>
                <template #label>
                  站点数量
                </template>
                {{ currentNet.siteCount }}
              </el-descriptions-item>

              <el-descriptions-item>
                <template #label>
                  VID
                </template>
                {{ currentNet.vid }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  创建时间
                </template>
                {{ currentNet.createDate }}
              </el-descriptions-item>
            </el-descriptions>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="站点管理"
      >
        站点管理
      </el-tab-pane>
      <el-tab-pane
        label="CPE管理"
      >
        CPE管理
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.el-card {
  margin-right: 20px;
  margin-bottom: 20px;
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
