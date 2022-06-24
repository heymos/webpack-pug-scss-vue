const VueRouter = require('vue-router');

import Dashboard from "../pages/dashboard/dashboard.vue";
import Profile from "../pages/profile.vue";
import UnavailablePage from "../pages/unavailable-page.vue";


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
    },
    {
      path: "/unavailable-page",
      component: UnavailablePage
    }
  ]
})