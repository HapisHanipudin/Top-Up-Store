<script setup>
import HomeIcon from "./icon/Home.vue";
import TransactionIcon from "./icon/Transaction.vue";
import CartIcon from "./icon/Cart.vue";
import ProductIcon from "./icon/Product.vue";
import AdminIcon from "./icon/Diagram.vue";

import { ref } from "vue";
import { useSessionStore } from "@/stores/user";
import { useRoute } from "vue-router";

const session = useSessionStore();
const $route = useRoute();

const transaction = ref(false);
const cart = ref("3");

const isActive = (path) => {
  return $route.path.includes(path);
};
</script>

<template>
  <div class="flex lg:flex-col gap-6 text-center relative text-sm items-center text-slate-300">
    <div
      class="lg:h-9 h-2 max-lg:-bottom-5 w-9 ease-in-out duration-300 lg:-left-5 lg:w-2 absolute lg:py-2 bg-slate-200"
      :class="{
        ' max-lg:translate-x-[0px] lg:translate-y-[0px]': isActive('/'),
        ' max-lg:translate-x-[60px] lg:translate-y-[60px]': isActive('/products'),
        ' max-lg:translate-x-[120px] lg:translate-y-[120px]': isActive('/cart'),
        ' max-lg:translate-x-[180px] lg:translate-y-[180px]': isActive('/transaction'),
        ' max-lg:translate-x-[240px] lg:translate-y-[240px]': isActive('/admin'),
      }"
    ></div>
    <RouterLink class="home w-9 h-9 nav-link relative" to="/"><HomeIcon class="home" /></RouterLink>
    <RouterLink class="products w-9 h-9 nav-link relative" to="/products"><ProductIcon class="product" /></RouterLink>
    <RouterLink class="cart w-9 h-9 nav-link relative" to="/cart"
      ><CartIcon class="cart" />
      <div v-if="cart > 0" class="p-1 bg-red-600 rounded-full absolute -top-1 -right-1">
        <!-- <span class="text-xs">{{ cart }}</span> -->
      </div>
    </RouterLink>
    <RouterLink class="trans w-9 h-9 nav-link relative" to="/transaction"
      ><TransactionIcon class="trans" />
      <div v-if="transaction" class="p-1 bg-red-600 rounded-full absolute -top-1 -right-1"></div>
    </RouterLink>
    <RouterLink v-if="session.user" class="admin w-9 h-9 nav-link relative" to="/admin/"><AdminIcon class="product" /></RouterLink>
  </div>
</template>
