<template lang="pug">
div
  headerComponent
  menuComponent
</template>
 
<style>

</style>
 
<script>

import headerComponent from "../header/header.vue";
import menuComponent from "../menu/menu.vue";

export default {
  components: {
    headerComponent: headerComponent,
    menuComponent: menuComponent,
  }
}

console.log("app");
</script>