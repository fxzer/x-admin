export default {
  path: '/tocloud',
  name: 'tocloud',
  redirect: '/tocloud/dedicated',
  meta: {
    order: 3,
    icon: 'IEpBriefcase',
    title: '高速上云',
    isKeepAlive: true,
  },
  children: [
    {
      path: '/tocloud/dedicated',
      name: 'tocloud-dedicated',
      component: '/tocloud/dedicated/index',
      meta: {
        title: '云专线',
        icon: 'IEpMenu',
        isKeepAlive: true,
      },
    },
    {
      path: '/tocloud/sdwan',
      name: 'tocloud-sdwan',
      component: '/tocloud/sdwan/index',
      meta: {
        icon: 'IEpMenu',
        title: 'SD-Wan上云',
        isKeepAlive: true,
      },
    },
    {
      path: '/tocloud/operation',
      name: 'tocloud-operation',
      component: '/tocloud/operation/index',
      meta: {
        icon: 'IEpMenu',
        title: ' 运营报告',
        isKeepAlive: true,
      },
    },
    {
      path: '/tocloud/alarm',
      name: 'tocloud-alarm',
      component: '/tocloud/alarm/index',
      meta: {
        icon: 'IEpMenu',
        title: '告警记录',
      },
    },
    {
      path: '/tocloud/fault',
      name: 'tocloud-fault',
      component: '/tocloud/fault/index',
      meta: {
        icon: 'IEpMenu',
        title: '故障演练',
      },
    },
    {
      path: '/tocloud/speed',
      name: 'tocloud-speed',
      component: '/tocloud/speed/index',
      meta: {
        icon: 'IEpMenu',
        title: '速度测试',
      },
    },
    {
      path: '/tocloud/tools',
      name: 'tocloud-tools',
      component: '/tocloud/tools/index',
      meta: {
        icon: 'IEpMenu',
        title: ' 运维工具',
      },
    },
  ],
}
