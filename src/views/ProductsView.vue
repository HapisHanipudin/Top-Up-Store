<script setup>
import plusIcon from "../components/icon/Add.vue";
import { onBeforeMount, ref, computed } from "vue";
import { db } from "../firebase/init.js";
import { collection, query, getDocs } from "firebase/firestore";
import { useSessionStore } from "@/stores/user";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";

const $route = useRoute();
const router = useRouter();

const session = useSessionStore();
const games = ref([]);
const selectedCategory = computed(() => {
  if ($route.path.includes("category")) {
    return $route.params.cat;
  } else if ($route.path.includes("admin")) {
    return "All Products";
  } else {
    return "";
  }
});

const getGames = async () => {
  const q = query(collection(db, "game"));
  const querySnapshot = await getDocs(q);
  games.value = querySnapshot.docs.map((doc) => doc.data());
};

const getAllCategories = () => {
  const categories = new Set();
  games.value.forEach((game) => {
    game.categories.forEach((category) => {
      categories.add(category);
    });
  });
  return Array.from(categories);
};

const categories = computed(() => {
  return getAllCategories();
});

const getCategoryLink = (category) => {
  return `/products/category/${category}`;
};

const getGameLink = (game) => {
  return $route.path.includes("admin") ? `/admin/item/${game.id}` : `/products/${game.id}`;
};

const filteredGames = computed(() => {
  if (!selectedCategory.value) {
    const result = [];

    categories.value.forEach((category) => {
      const categoryGames = games.value.filter((game) => game.categories.includes(category)).slice(0, 6);
      result.push({ category, games: categoryGames });
    });

    return result;
  } else {
    const selectedCategoryGames = games.value.filter((game) => game.categories.includes(selectedCategory.value));
    return [{ category: selectedCategory.value, games: selectedCategoryGames }];
  }
});

onBeforeMount(() => {
  getGames();
});
</script>

<template>
  <div class="flex flex-col justify-center mt-4 gap-4">
    <div v-for="category in filteredGames" class="flex flex-col justify-center mt-4 gap-4" :key="category.category">
      <div class="flex justify-between grow container">
        <h1 class="font-Niramit text-3xl bold">{{ category.category }}</h1>
        <RouterLink v-if="$route.path.includes('admin')" to="/admin/add-product" class="group text-lg font-semibold flex gap-2 items-center"><plusIcon class="w-7 duration-150 group-hover:scale-105" /> Add Product</RouterLink>
        <RouterLink v-else-if="!selectedCategory" :to="getCategoryLink(category.category)" class="text-lg font-semibold flex gap-2 items-center">See All</RouterLink>
        <RouterLink v-else-if="selectedCategory" to="/products" class="text-lg font-semibold flex gap-2 items-center">Back</RouterLink>
      </div>
      <div :class="!selectedCategory ? 'overflow-x-scroll' : 'flex-wrap justify-center'" class="flex gap-3 p-3">
        <RouterLink :to="getGameLink(game)" class="min-w-52 max-w-72 lg:min-w-72 relative text-center bg-slate-700 overflow-hidden rounded-xl pb-2 hover:scale-105 duration-300" v-for="game in category.games" :key="game.id">
          <div class="aspect-square p-3 flex items-center relative w-full overflow-hidden">
            <img class="top-0 h-full w-auto rounded-xl" :src="`${game.image}`" alt="" />
          </div>
          <h3 class="px-1 text-xl lg:text-2xl">{{ game.name }}</h3>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
