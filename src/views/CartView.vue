<template>
  <div class="bg-slate-800 flex w-full items-center justify-center">ini cart</div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useSessionStore } from "@/stores/user";
import { auth } from "@/firebase/init";
import { doc, getDoc, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

const session = useSessionStore();

const $router = useRouter();
const sessionCheck = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      $router.push("/login");
    } else {
      getCart(user.uid);
    }
  });
};

const cart = ref([]);

const getCart = (uid) => {
  const cartRef = doc(db, "cart", where("user", "==", uid));
  const docSnap = getDocs(cartRef);
  cart.value = docSnap;
};

onBeforeMount(() => {
  sessionCheck();
});
</script>
