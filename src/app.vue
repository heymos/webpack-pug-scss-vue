<template lang="pug">
.inner
  navigation
  .main
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

  p, h1, h2, h3, button {
    font: 500 14px/20px 'Poppins', sans-serif;
  }

  body {
    background: #f7fbfe;

    .inner {
      display: grid;
      grid-template-columns: 1fr 300px;
      position: relative;
      max-width: 1920px;
      height: 100vh;
      margin: 0 100px 0 250px;

      .main {
        padding: 0 35px 0 65px;
      }
    }
  }
}

h1 {
  font-size: 20px
}

.wrap {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 15px;
  background: #fff;
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
  },
  async mounted () {
    this.$store.dispatch("fetchData")
  }
}

</script>