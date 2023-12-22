/* 云网络+ */
const cloudPlus = {
  path: '/networking/cloudplus',
  name: 'cloudplus',
  redirect: '/networking/cloudplus/cloud',
  meta: {
    icon: 'IEpMenu',
    title: '云网络+',
  },
  children: [
    {
      path: '/networking/cloudplus/cloud',
      name: 'cloudplus-cloud',
      component: '/networking/cloudplus/cloud/index',
      meta: {
        icon: 'IEpMenu',
        title: '云网络',
      },
    },
    {
      path: '/networking/cloudplus/operation',
      component: '/networking/cloudplus/operation/index',
      name: 'cloudplus-operation',
      meta: {
        icon: 'IEpMenu',
        title: '运营报告',
      },
    },
    {
      path: '/networking/cloudplus/alarm',
      name: 'cloudplus-alarm',
      component: '/networking/cloudplus/alarm/index',
      meta: {
        icon: 'IEpMenu',
        title: '告警记录',
      },
    },
    {
      path: '/networking/cloudplus',
      name: 'menu24',
      component: '/networking/cloudplus',
      meta: {
        icon: 'IEpMenu',
        title: '故障演练',
      },
    },
    {
      path: '/networking/cloudplus/speed',
      name: 'cloudplus-speed',
      component: '/networking/cloudplus/speed/index',
      meta: {
        icon: 'IEpMenu',
        title: '速度测试',
      },
    },
    {
      path: '/networking/cloudplus/tools',
      name: 'cloudplus-tools',
      component: '/networking/cloudplus/tools/index',
      meta: {
        icon: 'IEpMenu',
        title: '运维工具',
      },
    },
  ],
}

/* SDWAN */
const sdwan = {
  path: '/networking/sdwan',
  name: 'sdwan',
  meta: {
    icon: 'IEpMenu',
    title: 'SD-Wan',
  },
  children: [
    {
      path: '/networking/sdwan/network',
      name: 'sdwan-network',
      component: '/networking/sdwan/network/index',
      meta: {
        icon: 'IEpMenu',
        title: '网络管理',
      },
    },
    {
      path: '/networking/sdwan/aduit',
      name: 'sdwan-aduit',
      meta: {
        icon: 'IEpMenu',
        title: '审计',
      },
      children: [
        {
          path: '/networking/sdwan/aduit/http',
          name: 'aduit-http',
          component: '/networking/sdwan/aduit/http/index',
          meta: {
            icon: 'IEpMenu',
            title: 'HTTP 审计',
          },
        },
        {
          path: '/networking/sdwan/aduit/flow',
          component: '/networking/sdwan/aduit/flow/index',
          name: 'aduit-flow',
          meta: {
            icon: 'IEpMenu',
            title: '流量审计',
          },

        },
      ],
    },
    {
      path: '/networking/sdwan/template',
      name: 'sdwan-template',
      meta: {
        icon: 'IEpMenu',
        title: '模板管理',
      },
      children: [
        {
          path: '/networking/sdwan/template/business',
          name: 'template-business',
          component: '/networking/sdwan/template/business/index',
          meta: {
            icon: 'IEpMenu',
            title: '业务分类',
          },
        },
        {
          path: '/networking/sdwan/template/qos',
          component: '/networking/sdwan/template/qos/index',
          name: 'template-qos',
          meta: {
            icon: 'IEpMenu',
            title: 'Qos模版',
          },
        },
        {
          path: '/networking/sdwan/template/alarm',
          component: '/networking/sdwan/template/alarm/index',
          name: 'template-alarm',
          meta: {
            icon: 'IEpMenu',
            title: '告警模版',
          },
        },
      ],
    },
    {
      path: '/networking/sdwan/report',
      name: 'sdwan-report',
      meta: {
        icon: 'IEpMenu',
        title: '站点报表',
      },
      children: [
        {
          path: '/networking/sdwan/report/offline',
          name: 'report-offline',
          component: '/networking/sdwan/report/offline/index',
          meta: {
            icon: 'IEpMenu',
            title: '实时离线',
          },
        },
        {
          path: '/networking/sdwan/report/alarm',
          component: '/networking/sdwan/report/alarm/index',
          name: 'report-alarm',
          meta: {
            icon: 'IEpMenu',
            title: '告警记录',
          },
        },
      ],
    },
  ],
}

export default {
  path: '/networking',
  name: 'networking',
  redirect: '/networking/cloudplus',
  meta: {
    order: 2,
    icon: 'IEpList',
    title: '智能组网',
  },
  children: [
    cloudPlus,
    sdwan,
  ],
}
