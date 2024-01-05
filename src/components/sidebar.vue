<script setup>
import { ref } from "vue";
import Nav from "./NavIcon.vue";
import LoginIcon from "./icon/Login.vue";
import LogoutIcon from "./icon/logout.vue";
// Inside your component script setup
import { useSessionStore } from "@/stores/user";

const session = useSessionStore();
const dropdown = ref("");
const toggleProfileDropdown = () => {
  dropdown.value == "" ? (dropdown.value = "active") : (dropdown.value = "");
};
</script>

<template>
  <div class="bg-slate-600 z-40 max-lg:w-full lg:w-[89.2px] relative bottom-0 max-lg:fixed lg:static max-lg:p-5 lg:px-5 lg:h-auto flex justify-center">
    <div class="flex lg:py-5 lg:fixed lg:top-0 lg:h-screen lg:flex-col gap-7">
      <RouterLink to="/" class="text-center hidden lg:block">
        LOGO <br />
        HERE
      </RouterLink>
      <div class="flex border-t border-gray-400"></div>
      <Nav></Nav>
      <div class="flex grow gap-1 items-center flex-col-reverse">
        <button @click="toggleProfileDropdown" v-if="session.isLoggedIn" :class="dropdown" class="flex group gap-1 items-center relative">
          <div
            class="absolute rounded-lg opacity-0 group-[.active]:opacity-100 invisible group-[.active]:visible duration-200 -translate-x-1/4 lg:translate-x-1/2 max-lg:group-[.active]:-translate-y-1/2 lg:group-[.active]:translate-x-3/4 lg:-right-full translate-y-1/2 bottom-1/2 bg-slate-700 p-2 px-3"
          >
            <button @click="session.logout" class="flex"><LogoutIcon class="nav-link w-10" />Sign Out</button>
          </div>
          <img class="w-10 rounded-full" :src="session.user.photoURL ? session.user.photoURL : 'https://avatar.oxro.io/avatar.png?name=' + session.user.displayName + '&background=random'" alt="" />
        </button>
        <button @click="session.openModal('login')" v-if="!session.isLoggedIn" class=" "><LoginIcon class="nav-link w-10" /></button>
      </div>
    </div>
  </div>
</template>
