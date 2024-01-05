import { ref, computed, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/init";

export const useSessionStore = defineStore("session", () => {
  const user = ref(null);
  const isLoggedIn = ref(false);
  const isAdmin = ref(false);
  const modalOpen = ref("");
  const admins = ["hapis.hanipuddin@gmail.com"];

  function checkAuthStatusOnMount() {
    onAuthStateChanged(auth, (userres) => {
      if (userres) {
        user.value = userres;
        isLoggedIn.value = true;
        if (admins.includes(user.value.email)) {
          isAdmin.value = true;
        }
      } else {
        user.value = null;
        isLoggedIn.value = false;
        isAdmin.value = false;
      }
    });
  }

  function openModal(modal) {
    modalOpen.value = modal;
  }

  function logout() {
    signOut(auth)
      .then(() => {
        user.value = null;
        isLoggedIn.value = false;
        isAdmin.value = false;
        modalOpen.value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Use the onBeforeMount lifecycle hook to call checkAuthStatusOnMount
  onBeforeMount(() => {
    checkAuthStatusOnMount();
  });

  return { user, isLoggedIn, isAdmin, modalOpen, checkAuthStatusOnMount, logout, openModal };
});
