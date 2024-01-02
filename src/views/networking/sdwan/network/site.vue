<script  setup lang='ts'>
import data from './sites'

const cellStyle: any = inject('cellStyle')
const headerCellStyle: any = inject('headerCellStyle')
</script>

<template>
  <div
    class="site-wrapper"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(0, 0, 0, 0.5)"
  >
    <div class="grid-wrapper">
      <el-table
        stripe
        :data="data"
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
      >
        <el-table-column prop="number" label="站点序号" min-width="80px">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              站点序号
            </div>
            <div class="table-info">
&nbsp;
            </div>
          </template>
          <!-- 站点信息主体 -->
          <template #default="{ row }">
            {{ row.number }}
          </template>
        </el-table-column>
        <el-table-column
          prop="hybridwanNetworkName"
          label="网络名称"
          min-width="120px"
        >
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              网络名称
            </div>
            <div class="table-info">
&nbsp;
            </div>
          </template>
          <!-- 站点信息主体 -->
          <template #default="{ row }">
            {{ row.hybridwanNetworkName }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="站点名称" min-width="150px">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              站点名称
            </div>
            <div class="table-info">
&nbsp;
            </div>
          </template>
          <!-- 站点名称主体 -->
          <template #default="{ row }">
            <el-tooltip
              class="item"
              effect="dark"
              content="查看高级设置"
              placement="right"
            >
              <el-link
                type="primary"
                :underline="false"
              >
                {{ row.name }}
              </el-link>
            </el-tooltip>
            <div class="tag-list">
              <el-tag class="tag-item" type="success">
                HUB
              </el-tag>
              <el-tag
                v-if="row.collectSite"
                class="tag-item"
                type="success"
              >
                公网汇聚
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="accessType" label="接入类型">
          <template #header>
            <div class="table-title">
              接入类型
            </div>
            <div class="table-info">
&nbsp;
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="" label="区域" min-width="60px">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              区域
            </div>
            <div class="table-info">
&nbsp;
            </div>
          </template>
          <!-- 站点信息主体 -->
          <template #default="{ row }">
            {{ row.areaName }}
          </template>
        </el-table-column>

        <el-table-column prop="siteName" label="站点信息" width="280px">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              站点信息
            </div>
            <div class="table-info">
              (总带宽(M)&nbsp;|&nbsp;带宽使用率)
            </div>
          </template>
          <!-- 站点信息主体 -->
          <template #default="{ row }">
            <div class="site-info">
              <span class="total-bandwith">{{
                row.bandwidth
              }}</span>
              <span class="usage-rate">{{ Math.round(Math.random() * 10) }}%</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="" label="站点接入设备" min-width="220px">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              站点接入设备
            </div>
            <div class="table-info">
              (设备ESN号)
            </div>
          </template>
          <!-- 站点信息主体 -->
          <template #default="{ row }">
            <p class="cpe-state-line">
              <span
                class="cpe-role table-span-label"
              >
                <template v-if="row.masterCpe">主</template>
              </span>
              <span class="table-span-label esn-num">
                <template v-if="row.masterCpe">{{
                  row.masterCpe.esn
                }}</template>
              </span>
            </p>
            <p class="cpe-state-line">
              <span
                class="cpe-role table-span-label"
              >
                备
              </span>
              <span class="table-span-label esn-num">
                0c11232f0000
              </span>
            </p>
          </template>
        </el-table-column>

        <el-table-column prop="" label="链路状态" min-width="255px">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              链路状态
            </div>
            <div class="table-info">
              (角色&nbsp;|类型&nbsp;|&nbsp;延时&nbsp;|&nbsp;丢包率)
            </div>
          </template>
          <!-- 站点信息主体 -->
          <template #default>
            <p class="cpe-state-line">
              <span
                class="table-span-label cpe-link-type enable-color"
              >主</span>
              <span
                class="table-span-label cpe-link-type enable-color"
              >
                公网
              </span>
              <span class="table-span-label cpe-link-rtt">2ms</span>
              <span class="table-span-label cpe-link-loss">2%</span>
            </p>

            <p class="cpe-state-line">
              <span
                class="table-span-label cpe-link-type enable-color"
              >主</span>
              <span
                class="table-span-label cpe-link-type enable-color"
              >
                公网
              </span>
              <span class="table-span-label cpe-link-rtt">4ms</span>
              <span class="table-span-label cpe-link-loss">3%</span>
            </p>
          </template>
        </el-table-column>

        <el-table-column prop="" label="链路状态" min-width="255px">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              链路状态
            </div>
            <div class="table-info">
              (角色&nbsp;|类型&nbsp;|&nbsp;延时&nbsp;|&nbsp;丢包率)
            </div>
          </template>

          <!-- 站点信息主体 -->
          <template #default="{ row }">
            <p class="cpe-state-line">
              <span
                class="table-span-label cpe-link-type enable-color"
              >
                <template v-if="row.masterCpe">备</template>
              </span>
              <span
                class="table-span-label cpe-link-type enable-color"
              >
                <template v-if="row.masterCpe">公网</template>
              </span>
              <span class="table-span-label cpe-link-rtt">
                6ms
              </span>
              <span class="table-span-label cpe-link-loss">
                1%
              </span>
            </p>

            <p class="cpe-state-line">
              <span
                class="table-span-label cpe-link-type enable-color"
              >
                <template v-if="row.masterCpe">备</template>
              </span>
              <span
                class="table-span-label cpe-link-type enable-color"
              >
                <template v-if="row.masterCpe"> 公网</template>
              </span>
              <span class="table-span-label cpe-link-rtt">
                5ms
              </span>
              <span class="table-span-label cpe-link-loss">
                2%
              </span>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="监控分析" min-width="76">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              监控分析
            </div>
            <div class="table-info">
&nbsp;
            </div>
          </template>
          <template #default>
            <span flex-center>
              <i-material-symbols:add-chart-outline-sharp text="green-500" />
            </span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="120" fixed="right">
          <!-- 自定义表头 -->
          <template #header>
            <div class="table-title">
              操作
            </div>
            <div class="table-info">
&nbsp;
            </div>
          </template>

          <template #default>
            <el-button type="primary" size="small" @click="$router.push('/networking/sdwan/network/sites/1')">
              前往CPE
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-monitor2 {
  font-size: 20px;
  color: #4cd263;
}
.icon-monitor2.el-button.is-disabled {
  color: #c0c4cc;
}
.site-wrapper {
  // 表头
  .table-title {
    font-size: 14px;
  }
  .table-info {
    font-weight: 400;
    display: inline-block;
    height: 23px;
  }
  // 站点详情
  .site-info {
    display: flex;
    align-items: center;
    justify-content: center;
    .site-state {
      width: 40px;
      height: 24px;
      line-height: 23px;
    }
    .total-bandwith {
      color: #a871e3;
      background-color: #eaf0f5;
      display: inline-block;
      width: 50px;
      height: 24px;
      text-align: center;
      margin: 0 8px;
    }
    .usage-rate {
      display: inline-block;
      width: 40px;
      height: 24px;
      color: #fff;
      background-color: #4cd263;
    }
  }
}
.table-span-label {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 12px;
  color: #333;
  line-height: 17px;
  height: 17px;
  background-color: #eee;
  margin-right: 5px;
}
.cpe-role {
  width: 17px;
}
.esn-num {
  width: 90px;
}
// 站点信息
.cpe-link-type {
  padding: 0 2px;
}
.cpe-link-rtt,
.cpe-link-loss {
  width: 24px;
}
.enable-color {
  background-color: #4cd263 !important;
  color: #fff !important;
}
.disable-color {
  background-color: #e6a23c !important;
  color: #fff !important;
}
.warning-color {
  background-color: #f53f3f !important;
  color: #fff !important;
}
.tips {
  margin: 10px;
  color: #999;
}

.tag-list {
  display: flex;
  justify-content: center;
  .tag-item {
    padding: 0px 4px;
    font-size: 12px;
    transform: scale(0.9);
    margin-left: 0;
  }
}
</style>
