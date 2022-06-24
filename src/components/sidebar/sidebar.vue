<template lang="pug">
.sidebar
  h2="It's interesting"
  .sidebar-container.wrap
    h2.sidebar-container__title= "{{sidebarContainers.posts}}"
</template>
 
<style lang="scss" src="./sidebar.scss"></style>
 
<script>


export default {

  computed: {
    sidebarContainers(){
      return this.$store.getters.getData.sidebar_containers.posts;
    }
  },

  data() {
    return {
      
    }
  }
}

</script>