<template lang="pug">
  div.route-info
    p.title 当前路由：{{path}}
    p.title 拥有的权限：{{auth.join(' / ')}}
    p.title 权限配置：
    ul
      li.router-item(v-for="item in routerConfig")
        p 路径：{{item.path}}
        p 所需权限：{{item.auth.join(' / ')}}
    p.title 公开路由：
    ul
      li.router-item(v-for="item in publicRoutes")
        p {{item}}
</template>

<script>
import config from 'src/config.js'
import { getUserAuth } from 'src/index'

const { routerConfig, publicRoutes } = config

export default {
  data () {
    return {
      auth: getUserAuth(),
      path: '',
      routerConfig,
      publicRoutes
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (newRoute) {
        this.path = newRoute.path
      }
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
  .route-info
    margin-top: 25px
  p
    font-size: 13px
  .title
    font-size: 15px
    margin-top: 15px
    margin-bottom: 5px
    padding: 5px 10px
    background-color: #f47983
    color: white
  .router-item
    margin-bottom: 5px
    margin-left: 5px
  .de
</style>
