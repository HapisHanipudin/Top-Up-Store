<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import { db } from "@/firebase/init";
import { getDoc, getDocs, doc, collection, query, where } from "firebase/firestore";
import { useRoute } from "vue-router";
import { useSessionStore } from "@/stores/user";

const session = useSessionStore();
const $route = useRoute();

const cart = ref({
  id: "",
  name: "",
  game: {},
  currency: {},
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
    cart.value.game = docSnap.data();
    // cart.value.loginMethod = cart.value.game.method.map((element) => ({ [element.name]: "" }));
    cart.value.loginMethod = cart.value.game.method.reduce((acc, element) => {
      acc[element.name] = "";
      return acc;
    }, {});

    // console.log(cart.value);
    const productsRef = collection(gameRef, "products");
    const productsSnapshot = await getDocs(productsRef);

    cart.value.game.products = productsSnapshot.docs.map((doc) => doc.data());
    // console.log(cart.value.game.products);
    if (cart.value.game.products.length > 0) {
      cart.value.currency = cart.value.game.products[0];
      getItems();
    }
  } catch (error) {
    console.error("Error fetching game data:", error);
  }
};

const getItems = async () => {
  try {
    const gameRef = collection(db, "game", $route.params.id, "products");
    const productRef = doc(gameRef, cart.value.currency.id);
    const itemsRef = collection(productRef, "items");

    const itemsSnapshot = await getDocs(itemsRef);
    product.value.items = itemsSnapshot.docs.map((doc) => doc.data());
    // console.log(product.value.items);
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
    <h1 class="text-3xl font-bold mt-3">{{ cart.game.name }}</h1>
    <div class="flex flex-col lg:flex-row gap-3">
      <div class="lg:w-96 w flex flex-col gap-3">
        <img :src="cart.game.image" alt="" />
        <div>
          <p class="bg-slate-700 p-3 rounded-md">{{ cart.game.desc }}</p>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <form action="#" class="flex flex-col gap-3">
          <div v-if="cart.game.method" v-for="method in cart.game.method" class="flex flex-col gap-3">
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
            <label for="currency">Currency</label>
            <div class="flex gap-3">
              <div
                v-if="cart.game.products"
                v-for="product in cart.game.products"
                :key="product.id"
                :class="cart.currency.id == product.id ? 'bg-blue-500 ' : 'bg-slate-600'"
                class="flex flex-col gap-2 relative w-4/12 p-3 rounded-lg justify-center items-center text-center"
              >
                <input @change="getItems" :value="product" v-model="cart.currency" class="absolute opacity-0 cursor-pointer w-full h-full top-0 left-0" type="radio" name="currency" id="currency" />
                <img :src="product.image" alt="" />
                <label class="text-lg" :for="'category_' + product">{{ product.name }}</label>
              </div>
              <div v-else class="flex flex-col relative w-4/12 p-3 rounded-lg items-center text-center bg-slate-600">
                <label class="text-lg">No items found</label>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <label for="item">Item</label>
            <div v-if="product.items.length > 0" class="flex gap-3">
              <div v-for="item in product.items" :key="item.id" :class="cart.item.id == item.id ? 'bg-blue-500 ' : 'bg-slate-600'" class="flex flex-col relative w-4/12 p-3 rounded-lg items-center text-center">
                <input :value="item" v-model="cart.item" class="absolute opacity-0 cursor-pointer w-full h-full top-0 left-0" type="radio" name="currency" id="currency" />
                <img :src="cart.currency.image" alt="" />
                <label class="text-lg" :for="'category_' + item.id">{{ item.name }}</label>
                <label class="text-lg" :for="'category_' + item.id">Rp {{ item.price.toLocaleString() }}</label>
              </div>
            </div>
            <div v-else class="bg-slate-700 p-3 rounded-lg">No item added</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
