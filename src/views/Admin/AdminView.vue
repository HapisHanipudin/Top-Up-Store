<template>
  <h1 class="text-2xl">Admin</h1>
  <div class="relative justify-around text-center p-2 bg-slate-700 m-1 rounded-xl">
    <div class="grid grid-cols-3 h-11 bg-slate-700 items-center">
      <RouterLink to="/admin" class="text-xl z-10">View Products</RouterLink>
      <RouterLink to="/admin/orders" class="text-xl z-10">View Orders</RouterLink>
      <RouterLink to="/admin/users" class="text-xl z-10">View Users</RouterLink>
      <div class="h-11 rounded-xl w-[33%] duration-300 absolute bg-slate-600" :class="{ 'translate-x-[0px]': isActive('/admin'), 'translate-x-[100%]': isActive('/admin/orders'), 'translate-x-[200%]': isActive('/admin/users') }"></div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useSessionStore } from "@/stores/user";
import { useRouter, useRoute } from "vue-router";
import { auth } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";

const $route = useRoute();
const $router = useRouter();
const session = useSessionStore();
const isActive = (path) => {
  return $route.path.includes(path);
};
const sessionCheck = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      $router.push("/login");
    }
  });
};

onBeforeMount(() => {
  sessionCheck();
});
</script>
