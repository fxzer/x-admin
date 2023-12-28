export default {
  path: '/gateway',
  name: 'gateway',
  component: '/gateway/index',
  meta: {
    order: 6,
    icon: 'i-bi:router-fill',
    title: '智能网关',
    isKeepAlive: true,
  },
  children: [
    {
      path: '/gateway/:esn',
      name: 'gateway-detail',
      component: '/gateway/detail',
      meta: {
        isHide: true,
        title: '云网络详情',
      },
    },
  ],
}
