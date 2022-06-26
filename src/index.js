const { createApp, h } = require('vue');
import App from './app/app.vue';
import router from './router/router.js';
import store from './store/store.js';



const app  = createApp({
  render: ()=>h(App),
});


app.use(store);
app.use(router);
app.mount("#app");