const VueRouter = require('vue-router');

import Dashboard from "../pages/dashboard.vue";
import Profile from "../pages/profile.vue";


export default new VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Dashboard
    },
    {
      path: "/profile",
      component: Profile
    }
  ]
})