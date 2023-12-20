export default {
  path: '/1menu',
  name: '1menu',
  redirect: '/menu/menu1',
  meta: {
    order: 4,
    icon: 'IEpList',
    title: '智能加速',
  },
  children: [
    {
      path: '/menu/menu2',
      name: 'menu2',
      redirect: '/menu/menu2/menu21',
      meta: {
        icon: 'IEpMenu',
        title: '审计',
      },
      children: [
        {
          path: '/menu/menu2/menu21',
          name: 'menu21',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: 'HTTP 审计',
          },
        },
        {
          path: '/menu/menu2/menu22',
          name: 'menu22',
          component: '/menu/menu2/menu23/index',
          meta: {
            icon: 'IEpMenu',
            title: '流量审计',
          },
        },
      ],
    },
    {
      path: '/menu/menu3',
      name: 'menu3',
      component: '/menu/menu3/index',
      meta: {
        icon: 'IEpMenu',
        title: '模板管理',
      },
      children: [
        {
          path: '/menu/menu3/menu31',
          name: 'menu31',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: '业务分类',
          },
        },
        {
          path: '/menu/menu3/menu32',
          component: '/menu/menu2/menu21/index',
          name: 'menu22',
          meta: {
            icon: 'IEpMenu',
            title: 'Qos模版',
          },
        },
        {
          path: '/menu/menu4/menu42',
          component: '/menu/menu2/menu21/index',
          name: 'menu42',
          meta: {
            icon: 'IEpMenu',
            title: '告警模版',
          },
        },
      ],
    },
    {
      path: '/menu/menu3/menu34',
      component: '/menu/menu2/menu21/index',
      name: 'menu34',
      meta: {
        icon: 'IEpMenu',
        title: '站点报表',
      },
      children: [
        {
          path: '/menu/menu3/menu341',
          name: 'menu341',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: '实时离线',
          },
        },
        {
          path: '/menu/menu3/menu342',
          component: '/menu/menu2/menu21/index',
          name: 'menu342',
          meta: {
            icon: 'IEpMenu',
            title: '告警记录',
          },
        },
      ],
    },

  ],
}
