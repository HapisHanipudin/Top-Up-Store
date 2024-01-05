<script setup>
import { auth } from "@/firebase/init";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import { useSessionStore } from "@/stores/user";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";
import { onBeforeMount } from "vue";
import { ref } from "vue";

const $route = useRoute();
const router = useRouter();

const sessionCheck = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if ($route.path.includes("/login")) {
        router.push("/");
      }
    }
  });
};

onBeforeMount(() => {
  sessionCheck();
});

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
