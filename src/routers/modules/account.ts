export default {
  path: '/account',
  name: 'account',
  redirect: '/account/info',
  meta: {
    order: 8,
    icon: 'IEpLock',
    title: '账户中心',
    isKeepAlive: true,
  },
  children: [
    {
      path: '/account/info',
      name: 'account-info',
      component: '/account/info/index',
      meta: {
        icon: 'IEpMenu',
        title: '账户信息',
        isKeepAlive: true,
      },
    },
    {
      path: '/account/safety',
      name: 'account-safety',
      component: '/account/safety/index',
      meta: {
        icon: 'IEpMenu',
        title: '安全设置',
        isKeepAlive: true,
      },
    },
    {
      path: '/account/alarmContact',
      name: 'account-alarmContact',
      component: '/account/alarmContact/index',
      meta: {
        icon: 'IEpMenu',
        title: '告警联系人',
        isKeepAlive: true,
      },
    },
    {
      path: '/account/user',
      name: 'account-user',
      component: '/account/user/index',
      meta: {
        icon: 'IEpMenu',
        title: '子用户信息',
        isKeepAlive: true,
      },
    },
    {
      path: '/account/role',
      name: 'account-role',
      component: '/account/role/index',
      meta: {
        icon: 'IEpMenu',
        title: '角色管理',
        isKeepAlive: true,
      },
    },

  ],
}
