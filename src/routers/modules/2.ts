export default {
  path: '/menu',
  name: 'menu',
  redirect: '/menu/menu1',
  meta: {
    order: 1,
    icon: 'IEpList',
    title: '智能组网',
  },
  children: [
    {
      path: '/menu/menu2',
      name: 'menu2',
      redirect: '/menu/menu2/menu21',
      meta: {
        icon: 'IEpMenu',
        title: '云网络+',
      },
      children: [
        {
          path: '/menu/menu2/menu21',
          name: 'menu21',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: '云网络',
          },
        },
        {
          path: '/menu/menu2/menu22',
          component: '/menu/menu2/menu21/index',
          name: 'menu22',
          meta: {
            icon: 'IEpMenu',
            title: '运营报告',
          },
        },
        {
          path: '/menu/menu2/menu23',
          name: 'menu23',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: '告警记录',
          },
        },
        {
          path: '/menu/menu2/menu24',
          name: 'menu24',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: '故障演练',
          },
        },
        {
          path: '/menu/menu2/menu25',
          name: 'menu25',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: '速度测试',
          },
        },
        {
          path: '/menu/menu2/menu26',
          name: 'menu26',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: '运维工具',
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
        title: 'SD-Wan',
      },
      children: [
        {
          path: '/menu/menu3/menu31',
          name: 'menu31',
          component: '/menu/menu2/menu21/index',
          meta: {
            icon: 'IEpMenu',
            title: '网络管理',
          },
        },
        {
          path: '/menu/menu3/menu32',
          component: '/menu/menu2/menu21/index',
          name: 'menu22',
          meta: {
            icon: 'IEpMenu',
            title: '审计',
          },
          children: [
            {
              path: '/menu/menu3/menu321',
              name: 'menu321',
              component: '/menu/menu2/menu21/index',
              meta: {
                icon: 'IEpMenu',
                title: 'HTTP 审计',
              },
            },
            {
              path: '/menu/menu3/menu322',
              component: '/menu/menu2/menu21/index',
              name: 'menu322',
              meta: {
                icon: 'IEpMenu',
                title: '流量审计',
              },

            },
          ],
        },
        {
          path: '/menu/menu3/menu33',
          component: '/menu/menu2/menu21/index',
          name: 'menu33',
          meta: {
            icon: 'IEpMenu',
            title: '模板管理',
          },
          children: [
            {
              path: '/menu/menu3/menu331',
              name: 'menu331',
              component: '/menu/menu2/menu21/index',
              meta: {
                icon: 'IEpMenu',
                title: '业务分类',
              },
            },
            {
              path: '/menu/menu3/menu332',
              component: '/menu/menu2/menu21/index',
              name: 'menu332',
              meta: {
                icon: 'IEpMenu',
                title: 'Qos模版',
              },
            },
            {
              path: '/menu/menu3/menu333',
              component: '/menu/menu2/menu21/index',
              name: 'menu333',
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
    },

  ],
}
