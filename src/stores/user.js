import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/init";

export const useSessionStore = defineStore("session", () => {
  const router = useRouter();
  const user = ref({});
  const isLoggedIn = ref(false);
  const isAdmin = ref(false);
  const modalOpen = ref("");
  const admins = ["hapis.hanipuddin@gmail.com", "msauqi.ihsan324@gmail.com", "aqielsyafiq11@gmail.com", "tubagusalif1504@gmail.com", "ahmadtaqi999@gmail.com"];

  // Move your logic to a separate function
  const initializeStore = () => {
    onAuthStateChanged(auth, (userres) => {
      if (userres) {
        isLoggedIn.value = true;
        user.value = userres;
        if (admins.includes(user.value.email)) {
          isAdmin.value = true;
        }
      } else {
        user.value = null;
        isLoggedIn.value = false;
        isAdmin.value = false;
      }
    });
  };

  function openModal(modal) {
    modalOpen.value = modal;
  }

  function check() {
    if (!isLoggedIn.value) {
      router.push("/");
      modalOpen.value = "login";
    }
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

  // Use the onBeforeMount lifecycle hook to call initializeStore
  onBeforeMount(() => {
    initializeStore();
  });

  return { user, isLoggedIn, isAdmin, modalOpen, initializeStore, logout, openModal, check };
});
