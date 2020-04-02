<template lang="pug">
  .container
    my-menu
    router-view
</template>

<script>
import { setUserAuth } from 'src/index'
import MyMenu from './components/menu/menu'

export default {
  components: {
    MyMenu
  },
  created () {
    setUserAuth(['auth_a'])
  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
</style>
