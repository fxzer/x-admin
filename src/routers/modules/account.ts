export default {
  path: '/account',
  name: 'account',
  redirect: '/account/info',
  meta: {
    order: 8,
    icon: 'i-material-symbols:account-circle-full',
    title: '账户中心',
    isKeepAlive: true,
  },
  children: [
    {
      path: '/account/info',
      name: 'account-info',
      component: '/account/info/index',
      meta: {
        icon: 'i-ph:info-bold',
        title: '账户信息',
        isKeepAlive: true,
      },
    },
    {
      path: '/account/safety',
      name: 'account-safety',
      component: '/account/safety/index',
      meta: {
        icon: 'i-material-symbols:health-and-safety-outline',
        title: '安全设置',
        isKeepAlive: true,
      },
    },
    {
      path: '/account/alarmContact',
      name: 'account-alarmContact',
      component: '/account/alarmContact/index',
      meta: {
        icon: 'i-material-symbols:notification-add-outline-rounded',
        title: '告警联系人',
        isKeepAlive: true,
      },
    },
    {
      path: '/account/user',
      name: 'account-user',
      component: '/account/user/index',
      meta: {
        icon: 'i-material-symbols:supervisor-account-outline-rounded',
        title: '子用户信息',
        isKeepAlive: true,
      },
    },
    {
      path: '/account/role',
      name: 'account-role',
      component: '/account/role/index',
      meta: {
        icon: 'i-carbon:user-role',
        title: '角色管理',
        isKeepAlive: true,
      },
    },

  ],
}
