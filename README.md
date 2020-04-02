router-guard
=================
## 目录结构
~~~
|-- build           webpack构建文件
|-- demo            Vue的demo
|-- src             路由守卫核心文件
  |-- platform      适配不同运行环境，如vue、react等
|-- static          静态资源
~~~

## 配置
```
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
      auth: ['auth_a', 'auth_b']
    }, {
      path: '/path_a',
      auth: ['auth_a']
    }
  ]
}
```
该配置项为路由具体权限配置。  
上面配置项表示:
1. 默认路由为/index
2. 公开路由有/index和/not_login
3. 拥有auth_a权限的用户可以访问/path_a；拥有auth_a或者auth_b的用户可以访问/path_b

## 使用
用户需要到src/platform下覆盖相应运行环境的守卫函数。目前拥有一个Vue运行环境的简单示例。

## DEMO
默认情况下，在App.vue中设置用户权限为['auth_a']。  
路由守卫默认设置可到src/config.js中查看。

若用户进入无权限访问的路由，则会弹框提示并且跳转到默认路由。  

DEMO组件：
1. 菜单组件：显示当前用户有权限访问的路由以及公开路由。  
2. 路由信息组件：显示路由以及权限的相关信息。


