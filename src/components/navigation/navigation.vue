<template lang="pug">
.navigation
  .navigation__logo
    <img src="logo.png" alt="img">
  .navigation__list
    navigationItem( v-for="item in navigationItems" :navigation_current_item="item" )
</template>
 
<style lang="scss">
.navigation {
  background: #fff;
  & .navigation__logo {
    padding: 30px;
  }
}
</style>
 
<script>

import navigationItem from "../navigation-item/navigation-item.vue"

export default {
  computed: {
    navigationItems(){
      return this.$store.getters.getData.navigation_items;
    }
  },
  components: {
    navigationItem,
  },
  async mounted () {
    this.$store.dispatch("fetchData")
  }
}

</script>