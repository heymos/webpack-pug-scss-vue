<template lang="pug">
.navigation-item( 
  @click="routePage(navigation_current_item.display)"
  :class="{ active: itemActive(navigation_current_item.display) }"
)
  <img :src="  require('../../images/' + navigation_current_item.img) " alt="img">
  p="{{navigation_current_item.name}}"
</template>
 
<style lang="scss">

.navigation-item {
  padding: 10px 30px;
  
  &:hover {
    background: #5765e0;
  }

  & p {
    font: 300 14px/20px 'Poppins', sans-serif;
  }
  
  &:hover p {
    color: #fff;
  }

  & img {
    float: left;
    margin-right: 10px;
  }
}

</style>

<script>

export default {
  props: {
    navigation_current_item: {}
  },
  methods: {
    routePage (pageName) {
      this.$router.push("/" + pageName );
      console.log(pageName);
    }
  },
}

</script>