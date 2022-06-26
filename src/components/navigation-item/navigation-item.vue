<template lang="pug">
.navigation-item( 
  @click="routePage(navigation_current_item.display)"
  :class="{ active: itemActive(navigation_current_item.display) }"
)
  img( :src="  require('../../images/' + navigation_current_item.img) " alt="img")
  p="{{navigation_current_item.name}}"
</template>
 
<style lang="scss" src="./navigation-item.scss"></style>

<script>

export default {

  props: {
    navigation_current_item: {}
  },

  methods: {
    routePage (pageName) {
      this.$router.push("/" + pageName );
      console.log(this.$route.fullPath);
    },
    itemActive (pageName) {
      return "/" + pageName == this.$route.fullPath? true : false;
    }
  },

}

</script> 