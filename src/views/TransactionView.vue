<template>
  <div class="flex items-center justify-center">ini transaction</div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { useSessionStore } from "@/stores/user";
import { auth } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

const $router = useRouter();
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
