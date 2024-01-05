<script setup>
import plusIcon from "../components/icon/Add.vue";
import { onBeforeMount, ref } from "vue";
import { db } from "../firebase/init.js";
import { collection, query, getDocs } from "firebase/firestore";
import { useSessionStore } from "@/stores/user";

const session = useSessionStore();
const games = ref([]);

const getGames = async () => {
  const q = query(collection(db, "game"));
  const querySnapshot = await getDocs(q);
  games.value = querySnapshot.docs.map((doc) => doc.data());
};

onBeforeMount(() => {
  getGames();
});
</script>

<template>
  <div class="flex flex-col container justify-center mt-4 gap-4">
    <div v-if="$route.path.includes('admin')" class="flex-grow flex flex-row-reverse m-5">
      <RouterLink to="/admin/add-product" class="group text-lg font-semibold flex gap-2 items-center"><plusIcon class="w-7 duration-150 group-hover:scale-105" /> Add Product</RouterLink>
    </div>
    <div v-else class="flex flex-col grow container">
      <h1 class="font-Niramit text-3xl bold">Welcome To Our Gaming Store!</h1>
    </div>
    <div class="flex flex-wrap gap-3">
      <RouterLink
        :to="$route.path.includes('admin') ? `/admin/item/${game.id}` : `/products/${game.id}`"
        class="w-1/5 text-center bg-slate-700 overflow-hidden rounded-xl pb-2 hover:scale-105 duration-300"
        v-for="game in games"
        :key="game.id"
      >
        <div class="aspect-square w-full overflow-hidden">
          <img class="w-auto h-full" :src="`${game.image}`" alt="" />
        </div>
        <h3 class="text-xl">{{ game.name }}</h3>
      </RouterLink>
    </div>
  </div>
</template>
