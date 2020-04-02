import Vue from 'vue'
import Router from 'vue-router'

import RouterInfo from '../components/route-info/route-info'
import { routerGuard } from 'src/platform/vue'

Vue.use(Router)

const routes = [
  { path: '/', component: RouterInfo },
  { path: '/path_a', component: RouterInfo },
  { path: '/path_b', component: RouterInfo },
  { path: '/path_c', component: RouterInfo },
  { path: '/path_d', component: RouterInfo },
  { path: '*', redirect: '/' }
]

export const router = new Router({
  routes
})

router.beforeEach(routerGuard)
