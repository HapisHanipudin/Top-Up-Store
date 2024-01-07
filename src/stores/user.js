import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/init";
import { db } from "@/firebase/init";
import { collection, getDoc, doc } from "firebase/firestore";

export const useSessionStore = defineStore("session", () => {
  const router = useRouter();
  const user = ref({});
  const isLoggedIn = ref(false);
  const isAdmin = ref(false);
  const modalOpen = ref("");
  const admins = ref([]);

  // Move your logic to a separate function
  const initializeStore = async () => {
    onAuthStateChanged(auth, (userres) => {
      getAdmins();
      if (userres) {
        isLoggedIn.value = true;
        user.value = userres;
      } else {
        user.value = null;
        isLoggedIn.value = false;
        isAdmin.value = false;
      }
    });
  };

  const getAdmins = async () => {
    try {
      const querySnapshot = await getDoc(doc(collection(db, "admins"), "admins"));
      if (querySnapshot.exists()) {
        const admin = querySnapshot.data();
        admins.value = admin.admin;
        console.log(admins.value);
        isAdmin.value = admins.value.includes(user.value.email);
      } else {
        console.error("Admin document does not exist.");
      }
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
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

  return { user, admins, isLoggedIn, isAdmin, modalOpen, initializeStore, logout, openModal, check };
});
