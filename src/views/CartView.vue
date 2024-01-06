<template>
  <div class="bg-slate-800 flex flex-col w-full mt-3 gap-3">
    <div>
      <h1 class="text-3xl font-bold my-5">Your Cart</h1>
    </div>
    <div class="flex flex-col bg-slate-600 p-4 rounded-lg overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr class="text-2xl">
            <th class="px-6 py-3 min-w-60">Game</th>
            <th class="px-6 py-3 min-w-56">Name</th>
            <th class="px-6 py-3">Method</th>
            <th class="px-6 py-3">Price</th>
            <th class="px-6 py-3">Quantity</th>
            <th class="px-6 py-3">Total</th>
          </tr>
        </thead>
        <tbody v-if="isLoading">
          <tr>
            <td colspan="6">
              <div class="flex items-center justify-center p-4">
                <p>Loading..</p>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr class="rounded-lg p-3" v-if="carts.length > 0" v-for="cart in carts" :key="cart.id">
            <td class="px-6 py-4">
              <div class="flex items-center">
                <img class="w-20" :src="cart.gameData.image" alt="" />
                <p class="ml-4">{{ cart.gameData.name }}</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <img class="w-20" :src="cart.currencyData.image" alt="" />
                <p class="ml-4">{{ cart.itemData.name }}</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-col">
                <p v-for="method in cart.gameData.method" :key="method.name">{{ method.name + ": " + cart.loginMethod[method.name] }}</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <p>Rp: {{ cart.itemData.price.toLocaleString() }}</p>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <button class="w-5" v-if="cart.qty > 1" @click="minusQty(cart.cartId)"><minusIcon class="w-5" /></button>
                <p class="mx-2">{{ cart.qty }}</p>
                <button class="w-5" v-if="cart.qty < 5" @click="addQty(cart.cartId)"><AddIcon class="w-5" /></button>
              </div>
            </td>
            <td class="px-6 py-4">
              <p>Rp: {{ (cart.itemData.price * cart.qty).toLocaleString() }}</p>
            </td>
          </tr>
          <tr v-if="carts.length === 0">
            <td colspan="6">
              <div class="flex items-center justify-center p-4">
                <p>Cart is empty</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <button type="button" v-if="carts.length > 0" class="bg-slate-700 text-xl p-3 rounded-xl" @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script setup>
import AddIcon from "@/components/icon/Add.vue";
import minusIcon from "@/components/icon/Minus.vue";
import { ref, onBeforeMount } from "vue";
import { useSessionStore } from "@/stores/user";
import { auth } from "@/firebase/init";
import { doc, getDoc, where, getDocs, query, collection, orderBy, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { stringify } from "postcss";

const session = useSessionStore();
const isLoading = ref(true);

const $router = useRouter();
const sessionCheck = async () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      $router.push("/login");
    } else {
      getCart(user.uid);
      uid.value = user.uid;
    }
  });
};

const uid = ref("test");
const carts = ref([]);

const getCart = async (uid) => {
  const cartCollection = collection(db, "cart");
  const cartQuery = await getDocs(query(cartCollection, where("user", "==", uid), orderBy("timestamp")));
  carts.value = cartQuery.docs.map((doc) => doc.data());
  getItems();
};

const addQty = async (cartId) => {
  const cartIndex = carts.value.findIndex((cart) => cart.cartId === cartId);

  if (cartIndex !== -1) {
    const cartRef = doc(db, "cart", cartId);
    await updateDoc(cartRef, { qty: carts.value[cartIndex].qty + 1 });

    // Update the local array directly
    carts.value[cartIndex].qty += 1;
  }
};

const minusQty = async (cartId) => {
  const cartIndex = carts.value.findIndex((cart) => cart.cartId === cartId);

  if (cartIndex !== -1) {
    const cartRef = doc(db, "cart", cartId);
    await updateDoc(cartRef, { qty: carts.value[cartIndex].qty - 1 });

    // Update the local array directly
    carts.value[cartIndex].qty -= 1;
  }
};

const getItems = async () => {
  for (const item of carts.value) {
    const gameRef = item.game;
    const itemRef = item.item;
    const currencyRef = item.currency;

    const [gameSnapshot, itemSnapshot, currencySnapshot] = await Promise.all([getDoc(gameRef), getDoc(itemRef), getDoc(currencyRef)]);

    const gameData = gameSnapshot.data();
    const itemData = itemSnapshot.data();
    const currencyData = currencySnapshot.data();

    // Assuming you want to update carts with additional information
    const updatedItem = {
      ...item,
      gameData,
      itemData,
      currencyData,
    };

    // Update the carts array at the specific index
    const index = carts.value.findIndex((cartItem) => cartItem === item);
    if (index !== -1) {
      carts.value[index] = updatedItem;
    }
  }
  isLoading.value = false;
};

onBeforeMount(() => {
  sessionCheck();
});
</script>
