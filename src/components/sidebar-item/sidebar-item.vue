<template lang="pug">
.sidebar-container__item
  p.sidebar-container__memo= "{{sidebar_current_item.date}}"
  p.sidebar-container__text= "{{sidebar_current_item.text}}"

</template>
 
<style lang="scss" src="./sidebar-item.scss"></style>
 
<script>

export default {

  props: {
    sidebar_current_item: {}
  }

}

</script>