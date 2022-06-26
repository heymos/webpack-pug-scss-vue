<template lang="pug">
.list-card.wrap
  .card-head
    h2.card-head__title= "{{members_data.card_title}}"
    button.card-head__button( @click="menu_show = !menu_show" )= "open menu"
      img(src="three-dots.svg" alt="three-dots")
  .list-card__menu( v-show="menu_show" )
    button.list-card__menu__button= "Open list"
    button.list-card__menu__button= "Charts"
  .list-card__counters( v-show="!menu_show" )
    p.list-card_member-counter="{{members_data.count}} people"
    p.list-card_percent-counter="{{members_data.percent}}%"
</template>
 
<style lang="scss" src="./list-card.scss"></style>
 
<script>

export default {

  props: {
    members_data: {}
  },

  data() {
    return {
      menu_show: false
    }
  }

}

</script>