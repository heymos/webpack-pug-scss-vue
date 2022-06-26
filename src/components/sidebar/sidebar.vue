<template lang="pug">
.sidebar

  .sidebar-container.sidebar-container_blog.wrap
    h2.sidebar-container__title( @click="routePage('unavailable-page')" )= "Blog"

    .sidebar-container__sub
      sidebarItem( v-for="item in getData.sidebar_containers.posts" :sidebar_current_item= "item" )
  
  .sidebar-container.sidebar-container_description.wrap
    h2.sidebar-container__title= "Description"

    .sidebar-container__sub
      p.description-text
        span.description-text__mark-start "
        
        strong This app has used: 
        | {{dependencies_list.join(" ...... ")}}
        span.description-text__mark-end "

</template>
 
<style lang="scss" src="./sidebar.scss" scoped></style>
 
<script>

import sidebarItem from "../sidebar-item/sidebar-item.vue";
import { mapGetters } from 'vuex';
import dependencies from "../../../package.json";

export default {

  computed: {
    ...mapGetters([
      'getData',
    ]),
    dependencies_list(){
      let keys_dev = Object.keys(dependencies.devDependencies);
      let keys_prod = Object.keys(dependencies.dependencies);
      let keys = [...keys_dev, ...keys_prod];
      return keys;
    }
  },

  components: {
    sidebarItem
  },

  methods: {
    routePage (pageName) {
      this.$router.push("/" + pageName );
      console.log(this.$route.fullPath);
    },
  },
  
}

</script>