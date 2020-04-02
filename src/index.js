import config from './config'
const { publicRoutes, routerConfig } = config

// 判断str是否以prefix开头，若不是则将str补上前缀prefix
const startsWith = (str, prefix) => str.startsWith(prefix) ? str : prefix + str

// 设置用户权限，auth为一个数组，格式类似['auth_a', 'auth_b']
export const setUserAuth = (auth = []) => {
  localStorage.setItem('__auth__', JSON.stringify(auth))
}

// 获取用户权限
export const getUserAuth = () => {
  return JSON.parse(localStorage.getItem('__auth__')) || []
}

/**
 * 路由守卫函数
 * @param path route路径
 */
export function guard (path) {
  // 容错处理
  path = startsWith(path, '/')
  // 判断是否为不用权限验证的路由
  const isPublic = publicRoutes
    .map(item => startsWith(item, '/'))
    .includes(path)
  if (isPublic) {
    return true
  }

  // 权限校验具体逻辑
  let routeAuth
  for (let item of routerConfig) {
    if (startsWith(item.path, '/') === path) {
      routeAuth = item.auth
      break
    }
  }

  const hasAuth = getUserAuth()
    .some(item => routeAuth.includes(item))

  return hasAuth
}

/**
 * 获取当前用户有权限访问的路由
 */
export function getEnableRoutes () {
  const userAuth = getUserAuth()
  const res = []
  for (let config of routerConfig) {
    for (let auth of userAuth) {
      if (config.auth.includes(auth)) {
        res.push(config.path)
        break
      }
    }
  }
  res.push(...publicRoutes)
  return res
}
