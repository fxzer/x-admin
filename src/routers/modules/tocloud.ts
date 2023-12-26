export default {
  path: '/tocloud',
  name: 'tocloud',
  redirect: '/tocloud/dedicated',
  meta: {
    order: 3,
    icon: 'i-mdi:cloud-upload-outline',
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
        icon: 'i-carbon:ibm-cloud-direct-link-1-connect',
        isKeepAlive: true,
      },
    },
    {
      path: '/tocloud/sdwan',
      name: 'tocloud-sdwan',
      component: '/tocloud/sdwan/index',
      meta: {
        icon: 'i-carbon:hybrid-networking',
        title: 'SD-Wan上云',
        isKeepAlive: true,
      },
    },
    {
      path: '/tocloud/operation',
      name: 'tocloud-operation',
      component: '/tocloud/operation/index',
      meta: {
        icon: 'i-icon-park-outline:reverse-operation-in',
        title: ' 运营报告',
        isKeepAlive: true,
      },
    },
    {
      path: '/tocloud/alarm',
      name: 'tocloud-alarm',
      component: '/tocloud/alarm/index',
      meta: {
        icon: 'i-mdi:clipboard-text-clock',
        title: '告警记录',
      },
    },
    {
      path: '/tocloud/fault',
      name: 'tocloud-fault',
      component: '/tocloud/fault/index',
      meta: {
        icon: 'i-material-symbols:autoplay',
        title: '故障演练',
      },
    },
    {
      path: '/tocloud/speed',
      name: 'tocloud-speed',
      component: '/tocloud/speed/index',
      meta: {
        icon: 'i-icon-park-outline:speed-one',
        title: '速度测试',
      },
    },
  ],
}
