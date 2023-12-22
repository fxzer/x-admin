export default {
  path: '/client',
  name: 'client',
  redirect: '/client/access',
  meta: {
    order: 7,
    icon: 'i-icon-park-outline:add-computer',
    title: '客户端',
    isKeepAlive: true,
  },
  children: [
    {
      path: '/client/access',
      name: 'client-access',
      component: '/client/access/index',
      meta: {
        icon: 'i-gravity-ui:nodes-right',
        title: '客户端接入节点',
        isKeepAlive: true,
      },
    },
    {
      path: '/client/account',
      name: 'client-account',
      component: '/client/account/index',
      meta: {
        icon: 'i-material-symbols:supervisor-account-outline-rounded',
        title: '账号',
        isKeepAlive: true,
      },
    },
    {
      path: '/client/terminal',
      name: 'client-terminal',
      component: '/client/terminal/index',
      meta: {
        icon: 'i-tabler:message-code',
        title: '终端',
        isKeepAlive: true,
      },
    },
    {
      path: '/client/download',
      name: 'client-download',
      component: '/client/download/index',
      meta: {
        icon: 'i-material-symbols:cloud-download-outline',
        title: '下载',
        isKeepAlive: true,
      },
    },
  ],
}
