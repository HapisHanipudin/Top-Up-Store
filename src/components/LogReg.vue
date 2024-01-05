<script setup>
import router from "@/router";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import { useSessionStore } from "@/stores/user";

const session = useSessionStore();
</script>

<template>
  <div
    v-if="session.modalOpen || $route.path.includes('/login') || $route.path.includes('/register')"
    @click="$route.path.includes('/login') || $route.path.includes('/register') ? router.push('/') : (session.modalOpen = '')"
    class="bg-black h-screen z-50 left-0 top-0 bg-opacity-70 fixed flex w-screen items-center justify-center p-5"
  >
    <LoginForm v-if="$route.path.includes('/login') || session.modalOpen == 'login'" />
    <RegisterForm v-if="$route.path.includes('/register') || session.modalOpen == 'register'" />
  </div>
</template>
