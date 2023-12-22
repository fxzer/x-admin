export default {
  path: '/client',
  name: 'client',
  redirect: '/client/access',
  meta: {
    order: 7,
    icon: 'IEpStamp',
    title: '客户端',
    isKeepAlive: true,
  },
  children: [
    {
      path: '/client/access',
      name: 'client-access',
      component: '/client/access/index',
      meta: {
        icon: 'IEpMenu',
        title: '客户端接入节点',
        isKeepAlive: true,
      },
    },
    {
      path: '/client/account',
      name: 'client-account',
      component: '/client/account/index',
      meta: {
        icon: 'IEpMenu',
        title: '账号',
        isKeepAlive: true,
      },
    },
    {
      path: '/client/terminal',
      name: 'client-terminal',
      component: '/client/terminal/index',
      meta: {
        icon: 'IEpMenu',
        title: '终端',
        isKeepAlive: true,
      },
    },
    {
      path: '/client/download',
      name: 'client-download',
      component: '/client/download/index',
      meta: {
        icon: 'IEpMenu',
        title: '下载',
        isKeepAlive: true,
      },
    },
  ],
}
