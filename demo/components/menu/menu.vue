<template lang="pug">
  ul.menu
    li.menu-item(v-for="menu in menus")
      router-link(tag="span" :to="menu") {{menu}}
</template>

<script>
import { getEnableRoutes } from 'src/index'

export default {
  data () {
    return {
      menus: getEnableRoutes()
    }
  }
}
</script>

<style lang="sass" scoped>
  .menu
    display: flex
    justify-content: space-around
    background-color: #f47983
    height: 50px
    align-items: center
    .menu-item
      font-size: 15px
      color: white
      cursor: pointer
  .de
</style>
