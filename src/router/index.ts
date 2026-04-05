import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import HomeView from "@/views/HomeView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductsView from "@/views/ProductsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },

      {
        path: "/about-us",
        name: "about-us",
        component: AboutUsView,
      },
      {
        path: "/contact",
        name: "contact",
        component: ContactView,
      },
      {
        path: "/products",
        name: "products",
        component: ProductsView,
      },
      {
        path: "*",
        name: "not-found",
        component: NotFoundView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
