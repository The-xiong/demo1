import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Drive from "../views/Drive.vue";
import Electric from "../views/Electric.vue";
import Information from "../views/Information.vue";
import Guanyu from "../views/Guanyu.vue"
import Control from "../views/Control.vue"
import NewsSubpage from "../views/NewsSubpage.vue"
import Support from "../views/Support.vue"
import Download from "../views/Download.vue"
import Motor from "../views/Motor.vue"
import Shijue from "../views/Shijue.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/drive",
    name: "Drive",
    component: Drive
  },
  {
    path: "/electric",
    name: "Electric",
    component: Electric
  },
  {
    path: "/information",
    name: "Information",
    component: Information
  },
  {
    path: "/guanyu",
    name: "Guanyu",
    component: Guanyu
  },
  {
    path: "/control",
    name: "Control",
    component: Control
  },
  {
    path: "/newssubpage",
    name: "NewsSubpage",
    component: NewsSubpage
  },
  {
    path: "/support",
    name: "Support",
    component: Support
  },
  {
    path: "/download",
    name: "Download",
    component: Download
  },
  {
    path: "/motor",
    name: "Motor",
    component: Motor
  },
  {
    path: "/shijue",
    name: "Shijue",
    component: Shijue
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
