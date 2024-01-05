import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("../views/ItemView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/transaction",
      name: "transaction",
      component: () => import("../views/TransactionView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/Admin/AdminView.vue"),
      children: [
        {
          path: "",
          name: "admin",
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: "add-product",
          name: "add-product",
          component: () => import("../views/Admin/AddProdView.vue"),
        },
        {
          path: "users",
          name: "users",
          component: () => import("../views/Admin/UsersView.vue"),
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("../views/Admin/OrderView.vue"),
        },
        {
          path: "item/:id",
          name: "item",
          component: () => import("../views/Admin/ItemView.vue"),
        },
      ],
    },
  ],
});

export default router;
