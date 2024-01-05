<script setup>
import { ref, onBeforeMount } from "vue";
import { db } from "@/firebase/init";
import { getDoc, getDocs, doc, collection, query, where } from "firebase/firestore";
import { useRoute } from "vue-router";

const $route = useRoute();

const game = ref({});
const cart = ref({
  id: "",
  name: "",
  game: $route.params.id,
  category: "",
  item: "",
  loginMethod: {},
});

const product = ref({
  items: [],
});

const getGame = async () => {
  try {
    const gameRef = doc(db, "game", $route.params.id);
    const docSnap = await getDoc(gameRef);
    game.value = docSnap.data();
    // cart.value.loginMethod = game.value.method.map((element) => ({ [element.name]: "" }));
    cart.value.loginMethod = game.value.method.reduce((acc, element) => {
      acc[element.name] = "";
      return acc;
    }, {});

    console.log(cart.value);
    const productsRef = collection(gameRef, "products");
    const productsSnapshot = await getDocs(productsRef);

    game.value.products = productsSnapshot.docs.map((doc) => doc.data());

    if (game.value.products.length > 0) {
      cart.value.category = game.value.products[0].id;
      getItems();
    }
  } catch (error) {
    console.error("Error fetching game data:", error);
  }
};

const getItems = async () => {
  try {
    const gameRef = collection(db, "game", cart.value.game, "products");
    const productRef = doc(gameRef, cart.value.category);
    const docSnap = await getDoc(productRef);
    const result = docSnap.data();
    product.value = result;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

onBeforeMount(() => {
  getGame();
});
</script>

<template>
  <div class="container flex flex-col gap-3 p-4">
    <h1 class="text-3xl font-bold mt-3">{{ game.name }}</h1>
    <div class="flex flex-col lg:flex-row gap-3">
      <div class="lg:w-96 w flex flex-col gap-3">
        <img :src="game.image" alt="" />
        <div>
          <p class="bg-slate-700 p-3 rounded-md">{{ game.desc }}</p>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <form action="#" class="flex flex-col gap-3">
          <div v-for="method in game.method" class="flex flex-col gap-3">
            <label :for="method.name">{{ method.name }}</label>

            <!-- Input field for non-select methods -->
            <input v-if="method.type !== 'select'" :type="method.type" :placeholder="`Enter your ${method.name}`" class="bg-slate-700 p-3 rounded-lg text-lg" :id="method.name" v-model="cart.loginMethod[method.name]" />

            <!-- Select field for select methods -->
            <select v-if="method.type === 'select'" class="bg-slate-700 p-3 rounded-lg text-lg" :id="method.name" v-model="cart.loginMethod[method.name]">
              <option selected value="">Select {{ method.name }}</option>
              <option v-for="option in method.options" :key="option">{{ option }}</option>
            </select>
          </div>

          <div class="flex flex-col gap-3 bg-slate-700 p-3 rounded-lg">
            <label for="category">Category</label>
            <div class="flex gap-3">
              <div v-for="product in game.products" :key="product.id" :class="cart.category == product.id ? 'bg-blue-500 ' : 'bg-slate-600'" class="flex flex-col relative w-2/12 p-3 rounded-lg items-center text-center">
                <input @change="getItems" :value="product.id" v-model="cart.category" class="absolute opacity-0 cursor-pointer w-full h-full top-0 left-0" type="radio" name="category" id="category" />
                <img :src="product.image" alt="" />
                <label class="text-lg" :for="'category_' + product.id">{{ product.name }}</label>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <label for="item">Item</label>
            <div v-if="product.items.length > 0" class="flex gap-3">
              <div v-for="item in product.items" :key="item.id" :class="cart.item == item.id ? 'bg-blue-500 ' : 'bg-slate-600'" class="flex flex-col relative w-2/12 p-3 rounded-lg items-center text-center">
                <input :value="item.id" v-model="cart.item" class="absolute opacity-0 cursor-pointer w-full h-full top-0 left-0" type="radio" name="category" id="category" />
                <img :src="product.image" alt="" />
                <label class="text-lg" :for="'category_' + item.id">{{ item.name }}</label>
              </div>
            </div>
            <div v-else class="bg-slate-700 p-3 rounded-lg">No item added</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
