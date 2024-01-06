<template>ini instant</template>
<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { db } from "@/firebase/init.js";
import { collection, query, getDocs, setDoc, doc } from "firebase/firestore";
import { useSessionStore } from "@/stores/user";

const session = useSessionStore();
const games = ref({});

const getGames = async () => {
  const q = query(collection(db, "game"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // Gunakan ID dokumen sebagai kunci
    const gameData = doc.data();
    const gameId = doc.id;
    gameData.categories = ["All Products"];

    // Tambahkan objek game ke dalam objek games
    games.value[gameId] = gameData;
  });

  console.log(games.value);
  SetGames();
};

const SetGames = async () => {
  for (const [key, value] of Object.entries(games.value)) {
    const gameRef = doc(db, "game", key);
    try {
      await setDoc(gameRef, value);
      console.log("Document written with ID: ", gameRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
};

onBeforeMount(() => {
  getGames();
});
</script>
