export default {
  path: '/accel',
  name: 'accel',
  component: '/accel/index',
  meta: {
    order: 4,
    icon: 'i-icon-park-outline:acceleration',
    title: '智能加速',
  },
  children: [
    {
      path: '/accel/strategy',
      name: 'accel-strategy',
      component: '/accel/strategy/index',
      meta: {
        icon: 'i-ph:info-bold',
        title: '加速策略',
        isKeepAlive: true,
      },
    },
    {
      path: '/accel/analysis',
      name: 'accel-analysis',
      component: '/accel/analysis/index',
      meta: {
        icon: 'i-material-symbols:health-and-safety-outline',
        title: '应用分析',
        isKeepAlive: true,
      },
    },
    {
      path: '/accel/accesslog',
      name: 'accel-accesslog',
      component: '/accel/accesslog/index',
      meta: {
        icon: 'i-material-symbols:notification-add-outline-rounded',
        title: '访问日志',
        isKeepAlive: true,
      },
    },
  ],
}
