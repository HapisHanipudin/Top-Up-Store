<template>
  <div class="bg-slate-800 flex w-full items-center justify-center">ini cart</div>
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
