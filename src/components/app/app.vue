<template lang="pug">
div
  //- headerComponent
  //- menuComponent
  //- p(v-for="(person, index) in people")= "{{person.name}} - {{person.age}}"
  <router-view></router-view>
</template>
 
<style>

</style>
 
<script>

// import headerComponent from "../header/header.vue";
// import menuComponent from "../menu/menu.vue";

export default {
  // data() {
  //   return {
  //     people: [
  //       { name: 'Ваня', age: 34 },
  //       { name: 'Марина', age: 25 },
  //       { name: 'Николай', age: 51 },
  //     ]
  //   }
  // },
  // components: {
  //   headerComponent: headerComponent,
  //   menuComponent: menuComponent,
  // }
}

const people = "Ваня"

console.log("app");
</script>