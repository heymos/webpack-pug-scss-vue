<template lang="pug">
.text-card.wrap
  h2.text-card__title= "{{getData.index_text.title}}"
  p.text-card__text= "{{getData.index_text.text}}"

</template>
 
<style lang="scss" src="./text-card.scss"></style>

<script>

import { mapGetters } from 'vuex';

export default {

  computed: {
    ...mapGetters([
      'getData',
    ]),

  },
}

</script>