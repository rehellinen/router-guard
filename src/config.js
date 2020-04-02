// 不用权限验证的路由
export const publicRoutes = [
  '/index', '/not_login'
]

/**
 * 路由权限配置
 * @param path route路径
 * @param auth 权限名称
 */
export const routerConfig = [
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
