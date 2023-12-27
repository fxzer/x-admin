<script>
export default {

  data() {
    return {
      accessedHubList: [{ uuid: '7dc5614f03e7439f80f879dd3fe2b298', accountUuid: 'de3f247b7720430f8d339c688071f817', hybridwanNetworkUuid: '34b2216de1974311b1c17b90bdd7893c', hybridwanNetworkName: '拨测测试', siteName: '太仓', siteNum: 'Site-974', hubName: '太仓', siteUuid: '564eb9abeb0f4d79b7efd2b1f038cc7a', virtualIp: '192.168.30.1', ipv6VirtualIp: 'fc01:9991:5d55:5f33::2:1', publicKey: '3nmiM1vqKcCqgKjDexeb0Xb5QK5Oz/2sR/Vfl8TPa08=', port: 9000, cidr: '192.168.30.0/24', ipv6Cidr: 'fc01:9991:5d55:5f33::2:0/112', lastOpDate: 'Dec 27, 2023 11:26:04 AM', createDate: 'Dec 27, 2023 11:26:04 AM', accountName: 'zhangy', company: 'zy-test123' }, { uuid: 'c4adf080edcf47dc95783547382dbca1', accountUuid: 'de3f247b7720430f8d339c688071f817', hybridwanNetworkUuid: '34b2216de1974311b1c17b90bdd7893c', hybridwanNetworkName: '拨测测试', siteName: '北京拨测', siteNum: 'Site-949', hubName: '北京', siteUuid: '7c61dc72f62e4d0e88871e0a70856c4d', virtualIp: '192.168.10.1', ipv6VirtualIp: 'fc01:9991:5d55:5f33::1:1', publicKey: 'FceWq6E8g1LMvS5K/M8IpY+EtGLcQucP4WEwflTaQjQ=', port: 9000, cidr: '192.168.10.0/24', ipv6Cidr: 'fc01:9991:5d55:5f33::1:0/112', lastOpDate: 'Dec 22, 2023 4:47:28 PM', createDate: 'Dec 22, 2023 4:47:28 PM', accountName: 'zhangy', company: 'zy-test123' }],
      searchConds: [],
      currentSite: {},
      gridLoading: false,
      wrapperLoading: false,
      alloteShow: false,
      moveShow: false,
      addHubVisible: false,
      currentCompany: null,
      paginationOptions: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },

    }
  },

}
</script>

<template>
  <div bg-white p2>
    <div class="opt-group">
      <el-button
        mb2
        size="small"
        type="primary"
        style="margin-left: 15px"
        @click="openAddHub"
      >
        添加接入节点
      </el-button>
    </div>
    <el-table
      v-loading="gridLoading"
      :data="accessedHubList"
      style="width: 100%"
      stripe
      :header-cell-style="{
        textAlign: 'center',
        padding: '8px 0',
        backgroundColor: '#F5F7FA',
      }"
      :cell-style="{ textAlign: 'center', padding: '8px 0' }"
    >
      <el-table-column prop="siteNum" label="序号" />
      <el-table-column prop="hybridwanNetworkName" label="网络名称">
        <template #default="{ row }">
          <router-link v-slot="{ href }" :to="`/sdwnet/${row.hybridwanNetworkUuid}`">
            <a :href="href" target="_blank">{{ row.hybridwanNetworkName }}</a>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="siteName" label="站点名称">
        <template #default="{ row }">
          <router-link v-slot="{ href }" :to="`/siteManage/${row.siteUuid}`">
            <a :href="href" target="_blank">{{ row.siteName }}</a>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="hubName" label="HUB名称">
        <template #default="{ row }">
          <router-link v-slot="{ href }" :to="`/cpeManage/${row.uuid}`">
            <a :href="href" target="_blank">{{ row.hubName }}</a>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="ipv6Cidr" label="虚拟网段" width="250">
        <template #default="{ row }">
          <div>{{ row.cidr }}</div>
          <div>{{ row.ipv6Cidr }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="virtualIp" label="虚拟IP" width="200" />
      <el-table-column prop="prop" label="操作" width="120px" fixed="right">
        <template #default="{ row }">
          <el-dropdown>
            <span class="el-dropdown-link text-blue">
              更多<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="showRemoveHubAccess(row)">
                  移除
                </el-dropdown-item>
                <el-dropdown-item @click="alloteOrganization(row)">
                  部门分配
                </el-dropdown-item>
                <el-dropdown-item @click="moveOrganization(row)">
                  部门迁移
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang="scss">
.customer-center {
  .opts-wrap {
    margin-bottom: 10px;
    display: flex;
  }
  .organization-wrap {
    display: flex;
    height: 100%;
    .user-organ-left {
      min-width: 250px;
      height: 100%;
      // height: calc(100vh - 100px);
      min-height: 600px;
      border: 1px solid #ddd;
      .el-tree {
        height: 100%;
        padding: 10px 0;
        .business-name {
          font-size: 13px;
          max-width: 180px;
          display: inline-block;
        }
      }
    }
    .user-organ-right {
      margin-left: 10px;
      flex: 1;
    }
  }
}

.icon-qiye {
  font-size: 15px;
}
.icon-qiye,
.icon-bumenguanli,
.icon-user {
  margin-right: 3px;
}
.expand-tree-wrapper {
  padding-right: 8px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quota-btn {
  padding: 6px 10px;
  margin-left: 15px;
}
</style>
