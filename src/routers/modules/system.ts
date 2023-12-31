export default {
  path: '/system',
  name: 'system',
  redirect: '/system/accountManage',
  meta: {
    order: 7,
    icon: 'IEpTools',
    title: '系统管理',
    isLink: '',
    isHide: false,
    isFull: false,
    isAffix: false,
    isKeepAlive: true,
  },
  children: [
    {
      path: '/system/accountManage',
      name: 'accountManage',
      component: '/system/accountManage/index',
      meta: {
        icon: 'IEpMenu',
        title: '账号管理',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/system/roleManage',
      name: 'roleManage',
      component: '/system/roleManage/index',
      meta: {
        icon: 'IEpMenu',
        title: '角色管理',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/system/menuMange',
      name: 'menuMange',
      component: '/system/menuMange/index',
      meta: {
        icon: 'IEpMenu',
        title: '菜单管理',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/system/departmentManage',
      name: 'departmentManage',
      component: '/system/departmentManage/index',
      meta: {
        icon: 'IEpMenu',
        title: '部门管理',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/system/dictManage',
      name: 'dictManage',
      component: '/system/dictManage/index',
      meta: {
        icon: 'IEpMenu',
        title: '字典管理',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/system/timingTask',
      name: 'timingTask',
      component: '/system/timingTask/index',
      meta: {
        icon: 'IEpMenu',
        title: '定时任务',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
    {
      path: '/system/systemLog',
      name: 'systemLog',
      component: '/system/systemLog/index',
      meta: {
        icon: 'IEpMenu',
        title: '系统日志',
        isLink: '',
        isHide: false,
        isFull: false,
        isAffix: false,
        isKeepAlive: true,
      },
    },
  ],
}
