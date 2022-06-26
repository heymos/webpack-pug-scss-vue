<template lang="pug">
.inner
  button.toggle-nav( @click="nav_show=!nav_show" )= "Open navigation"
    img(src="three-dots.svg" alt="three-dots")
    
  navigation( :nav_show="nav_show" )
  .main
    router-view
  sidebar
</template>
 
<style lang="scss" src="./app.scss"></style>
 
<script>

import navigation from "../components/navigation/navigation.vue";
import sidebar from "../components/sidebar/sidebar.vue";

export default {

  data() {
    return {
      nav_show: true,
    }
  },

  methods: {
    navShowUpdate() {
      let width = window.innerWidth;
      if( width <= 1000) {
        this.nav_show = false;
      }
      else this.nav_show = true
    },
  },

  components: {
    navigation,
    sidebar,
  },

  async created () {
    this.$store.dispatch("fetchData");
    this.navShowUpdate();
    window.addEventListener('resize', this.navShowUpdate);
  },
  
}

</script>