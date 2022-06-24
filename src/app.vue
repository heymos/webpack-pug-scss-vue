<template lang="pug">
.inner
  navigation
  router-view
  sidebar
</template>
 
<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 0;

  body {
    background: #f7fbfe;

    .inner {
      max-width: 1920px;
      height: 100vh;
      display: grid;
      grid-template-columns: 250px 1fr 300px;
      margin-right: 100px;
    }
  }
}

</style>
 
<script>

import navigation from "./components/navigation/navigation.vue";
import sidebar from "./components/sidebar/sidebar.vue";

export default {
  data() {
    return {}
  },
  components: {
    navigation,
    sidebar,
  }
}

</script>