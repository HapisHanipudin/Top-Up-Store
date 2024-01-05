<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/sidebar.vue";
import LogReg from "./components/LogReg.vue";
import { useSessionStore } from "@/stores/user";

const session = useSessionStore();
</script>

<template>
  <div class="flex font-josefin flex-col-reverse lg:flex-row h-full w-full text-white">
    <LogReg v-if="!session.isLoggedIn" />
    <SideBar />
    <div class="bg-slate-800 max-lg:pb-24 justify-center flex items-start min-h-screen overflow-hidden w-full">
      <div class="container p-5">
        <RouterView />
      </div>
    </div>
  </div>
</template>
