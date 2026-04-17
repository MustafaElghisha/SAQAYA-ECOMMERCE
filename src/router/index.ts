import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import MainLayout from "@/components/Layout/MainLayout.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductsView from "@/views/Products/ProductsView.vue";
import ErrorView from "@/views/ErrorView.vue";
import DetailsView from "@/views/Products/DetailsView.vue";

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
        path: "about-us",
        name: "about-us",
        component: AboutView,
      },
      {
        path: "contact",
        name: "contact",
        component: ContactView,
      },
      {
        path: "products",
        name: "products",
        component: ProductsView,
      },
      {
        path: "products/:category",
        component: ProductsView,
      },
      {
        path: "productDetails/:id",
        component: DetailsView,
      },
      {
        path: "*",
        name: "not-found",
        component: ErrorView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }

  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({ x: 0, y: 0 });
  //     }, 0);
  //   });
  // },
  routes,
});

export default router;
