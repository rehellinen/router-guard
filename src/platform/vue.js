import config from '../config'
import { guard } from '../index'

export function routerGuard (to, from, next) {
  const hasAuth = guard(to.path)

  if (!hasAuth) {
    alert(`无权限访问路由：${to.path}`)
    next({ path: config.defaultRoute })
  } else {
    next()
  }
}

