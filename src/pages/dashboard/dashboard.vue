<template lang="pug">
.dashboard
  h1.main-title= "Dashboard"
  .columns.columns_1-1
    listCard( v-for= "item in getData.members" :members_data= "item" )
  
  .columns.columns_1-2
    progressbar
    textCard
</template>
 
<style lang="scss" src="./dashboard.scss"></style>
 
<script>

import listCard from "../../components/list-card/list-card.vue";
import progressbar from "../../components/progressbar-card/progressbar-card.vue";
import textCard from "../../components/text-card/text-card.vue";
import { mapGetters } from 'vuex';

export default {

  computed: {
    ...mapGetters([
      'getData',
    ]),
  },

  components: {
    listCard,
    progressbar,
    textCard
  }

}

</script>