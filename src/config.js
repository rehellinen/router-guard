export default {
  // 用户访问无权限的路由后默认跳转的页面
  defaultRoute: '/index',
  // 不用权限验证的路由
  publicRoutes: [
    '/index', '/not_login'
  ],
  // 路由权限配置
  // path为route路径；auth为权限名称
  routerConfig: [
    {
      path: '/',
      auth: ['auth_a', 'auth_b', 'auth_c', 'auth_d']
    }, {
      path: '/path_a',
      auth: ['auth_a']
    }, {
      path: '/path_b',
      auth: ['auth_b']
    }, {
      path: '/path_c',
      auth: ['auth_c']
    }, {
      path: '/path_d',
      auth: ['auth_d']
    }
  ]
}
