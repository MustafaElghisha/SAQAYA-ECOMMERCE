import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/components/Layout/MainLayout.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ProductsView from "@/views/Products/ProductsView.vue";
import ErrorView from "@/views/ErrorView.vue";
import DetailsView from "@/views/Products/DetailsView.vue";

const routes = [
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

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  routes,
});

export default router;
