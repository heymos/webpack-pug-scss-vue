const VueRouter = require('vue-router');

import Index from "../pages/indexPage.vue";
import Profile from "../pages/profilePage.vue";


export default new VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Index
    },
    {
      path: "/profile",
      component: Profile
    }
  ]
})