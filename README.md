router-guard
=================
## 目录结构
~~~
|-- build           webpack构建文件
|-- demo            Vue的demo
|-- src             路由守卫核心文件
  |-- platform    适配不同运行环境，如vue、react等
|-- static          静态资源
~~~

## 配置项
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

## DEMO
默认情况下，在App.vue中设置用户权限为['auth_a']。  
路由默认设置可到src/config.js中查看。

若用户进入无权限访问的路由，则会弹框提示并且跳转到首页。  
菜单组件：显示当前用户有权限访问的路由以及公开路由。  
路由信息组件：显示路由以及权限的相关信息。


