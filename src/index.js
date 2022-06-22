const { createApp, h } = require('vue');
import App from './components/app/app.vue';

const VueRouter = require('vue-router');
import router from './router/router.js';

const app  = createApp({
  render: ()=>h(App),
});

app.use(router);
app.mount("#app");