// import * as Vue from 'vue'
// import App from './components/header/header.vue'

const { createApp, h } = require('vue');
// const App = require("./components/header/header.vue")
import App from './components/app/app.vue'

// let Vue = require("vue")
// let App = require("./components/header/header.vue")

// const app = Vue.createApp(App)
// app.mount('#app')

const app  = createApp({
  render: ()=>h(App),
});

app.mount("#app")