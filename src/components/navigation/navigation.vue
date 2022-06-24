<template lang="pug">
.navigation
  .navigation__logo
    <img src="logo.png" alt="img">
  .navigation__list
    navigationItem( v-for="item in navigationItems" :navigation_current_item = "item" )
</template>
 
<style lang="scss" src="./navigation.scss"></style>
 
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
}

</script>