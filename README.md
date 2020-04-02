router-guard
=================

## 介绍
```
export const routerConfig = [
  {
    path: '/',
    auth: ['auth_a', 'auth_b']
  }, {
    path: '/path_a',
    auth: ['auth_a']
  }
]
```
该配置项为路由具体权限配置。  
上面配置项表示拥有auth_a权限的用户可以访问/path_a；拥有auth_a或者auth_b的用户可以访问/path_b。

```
export const publicRoutes = [
  '/index', '/not_login'
]
```
该配置项为公开路由，即不受保护的路由。
