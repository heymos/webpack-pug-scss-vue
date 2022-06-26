<template lang="pug">
.navigation( v-if="nav_show" )
  .navigation__logo
    <img src="logo.png" alt="img">
  .navigation__list
    navigationItem( v-for="item in getData.navigation_items" :navigation_current_item = "item" )
</template>
 
<style lang="scss" src="./navigation.scss"></style>
 
<script>

import navigationItem from "../navigation-item/navigation-item.vue"
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters([
      'getData',
    ])
  },

  props: ["nav_show"],

  components: {
    navigationItem,
  },

}

</script>