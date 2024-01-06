<script setup>
import AddIcon from "@/components/icon/Add.vue";
import { onBeforeMount, ref } from "vue";
import { useSessionStore } from "@/stores/user";
import { db, storage } from "@/firebase/init.js";
import { collection, doc, setDoc, query, getDocs, addDoc, getDoc } from "firebase/firestore";
import { uploadBytes, getDownloadURL, ref as refStorage } from "firebase/storage";

const session = useSessionStore();

const Newgame = ref({
  id: "",
  name: "",
  image: "", // Will store the download URL of the uploaded image
  uploader: session.user.email,
  method: [{ name: "", type: "" }],
  categories: ["All Products", ""],
});
const itemAdded = ref({ message: "", type: "" });
const gameAdded = ref({ message: "", type: "" });
const newCurrency = ref({
  id: "",
  name: "",
  image: "",
  uploader: session.user.email,
});
const newItems = ref({
  id: "",
  name: "",
  price: 0,
  game: "",
  currency: "",
  uploader: session.user.email,
});

const games = ref([]);
const categories = ref([]);

const getGames = async () => {
  const q = query(collection(db, "game"));
  const querySnapshot = await getDocs(q);
  games.value = querySnapshot.docs.map((doc) => doc.data());
  // console.log(games.value);
};

const getCurrencies = async () => {
  const q = query(collection(db, "game", newItems.value.game, "products"));
  const querySnapshot = await getDocs(q);
  categories.value = querySnapshot.docs.map((doc) => doc.data());
};

const handleFileUpload = async (event, type) => {
  const fileInput = event.target;
  const files = fileInput.files;

  if (files.length > 0) {
    const file = files[0];
    const storageRef = refStorage(storage, `images/${file.name}`);

    try {
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);
      // Assign the download URL to Newgame.image
      if (type === "game") {
        Newgame.value.image = downloadURL;
      } else {
        newCurrency.value.image = downloadURL;
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  }
};

const addGame = async () => {
  try {
    // Check if any of the required fields are empty
    if (!Newgame.value.id || !Newgame.value.name || !Newgame.value.desc || !Newgame.value.image) {
      console.error("Please fill in all required fields.");
      gameAdded.value = {
        message: "Please fill in all required fields.",
        type: "error",
      };
      return;
    }

    // Use the custom ID provided in Newgame.id
    const customId = Newgame.value.id;

    // Create a reference to the document with the custom ID
    const customDocRef = doc(collection(db, "game"), customId);

    // Upload the document with the custom ID
    await setDoc(customDocRef, Newgame.value);

    newItems.game = customId;

    gameAdded.value = {
      message: "Document with custom ID added: " + customId,
      type: "success",
    };

    console.log("Document with custom ID added: ", customId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const addedCurrency = ref({ message: "", type: "" });
const addCurrency = async () => {
  // Check if any of the required fields are empty
  if (!newCurrency.value.id || !newCurrency.value.name || !newCurrency.value.image) {
    console.error("Please fill in all required fields.");
    addedCurrency.value = {
      message: "Please fill in all required fields.",
      type: "error",
    };
    return;
  }

  try {
    // Use the custom ID provided in newCurrency.id
    const customId = newCurrency.value.id;

    // Create a reference to the game document
    const gameDocRef = doc(db, "game", newItems.value.game);

    // Create a reference to the 'products' collection within the game document
    const productsCollectionRef = collection(gameDocRef, "products");

    // Create a reference to the currency document within the 'products' collection
    const currencyRef = doc(productsCollectionRef, customId);

    // Upload the document with the custom ID to the currency reference
    await setDoc(currencyRef, newCurrency.value);

    // Update newItems.currency with the path to the added currency
    newItems.value.currency = customId;

    // Update addedCurrency.value to indicate success
    console.log("Document with custom ID added: ", customId);
    addedCurrency.value = {
      message: "Document with custom ID added: " + customId,
      type: "success",
    };
  } catch (e) {
    console.error("Error adding document: ", e);
    // You may want to add additional error handling here
    // For example, updating addedCurrency.value to indicate an error
    addedCurrency.value = {
      message: `Error adding document: ${e.message}`,
      type: "error",
    };
  }
};

const addItems = async () => {
  try {
    // Check if any of the required fields are empty
    if (!newItems.value.id || !newItems.value.name || !newItems.value.price || !newItems.value.game || !newItems.value.currency) {
      console.error("Please fill in all required fields.");
      itemAdded.value = {
        message: "Please fill in all required fields.",
        type: "error",
      };

      return;
    }
    try {
      // Gunakan ID kustom yang diberikan pada newItems.id

      // Referensi ke dokumen game yang dipilih
      const selectedGameRef = doc(db, "game", newItems.value.game); // Assuming 'game' is your collection name

      // Referensi ke subkoleksi 'products' pada dokumen game yang dipilih
      const productsCollectionRef = collection(selectedGameRef, "products");

      // Tambahkan item ke dalam subkoleksi 'products' dan doc 'currency'
      const currencyDocRef = doc(productsCollectionRef, newItems.value.currency);

      const itemsCollectionRef = collection(currencyDocRef, "items");

      const itemRef = doc(itemsCollectionRef, newItems.value.id);
      await setDoc(itemRef, newItems.value);

      // Get the currency data

      itemAdded.value = {
        message: "Item added to 'products' sub-collection in the selected game document.",
        type: "success",
      };
    } catch (e) {
      console.error("Error adding item: ", e);
    }
  } catch (e) {
    console.error("Error adding item: ", e);
  }
};

const convertOption = (index) => {
  const optionString = Newgame.value.method[index].optionString;
  const options = optionString.split(",");
  Newgame.value.method[index].options = options;
  console.log(Newgame.value.method[index].options);
};

const addMethod = () => {
  // Menambahkan objek method baru ke dalam array Newgame.value.method
  Newgame.value.method.push({ name: "", type: "" });
};

const addOption = (index) => {
  Newgame.value.method[index].options.push("");
};
const makeOption = (index) => {
  const object = {
    name: Newgame.value.method[index].name,
    type: Newgame.value.method[index].type,
    optionString: "",
    options: [],
  };
  Newgame.value.method[index] = object;
  console.log(Newgame.value.method[index]);
};

const deleteOption = (index) => {
  const object = {
    name: Newgame.value.method[index].name,
    type: Newgame.value.method[index].type,
  };
  Newgame.value.method[index] = object;
  console.log(Newgame.value.method[index]);
};

onBeforeMount(() => {
  getGames();
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Add Product</h1>
    <form class="flex flex-col gap-4">
      <label for="Games">Game</label>
      <select @change="getCurrencies" required class="bg-slate-700 p-3 rounded-lg text-lg max-w-md" name="Games" id="Games" v-model="newItems.game">
        <option selected disabled value="">Select game</option>
        <option v-for="game in games" :key="game.id" :value="game.id"><img :src="game.image" alt="" /> {{ game.name }}</option>
        <option selected v-if="gameAdded.type == 'success'" :value="Newgame.id">{{ Newgame.name }}</option>
        <option value="add">
          <span class="flex gap-3"><AddIcon />Add new game</span>
        </option>
      </select>

      <div class="flex flex-col gap-3" v-if="newItems.game == 'add'">
        <div class="flex gap-3">
          <div class="flex flex-col grow">
            <label for="id"><strong>Game</strong> ID:</label>
            <input placeholder="e.g. GENSHIN *No space or special characters" required type="text" class="bg-slate-700 p-3 rounded-lg text-lg" id="id" v-model="Newgame.id" />
          </div>
          <div class="flex flex-col grow">
            <label for="name"><strong>Game</strong> Name:</label>
            <input placeholder="Enter game name" required type="text" class="bg-slate-700 p-3 rounded-lg text-lg" id="name" v-model="Newgame.name" />
          </div>
        </div>
        <div class="flex-grow flex flex-row-reverse">
          <button type="button" @click="addMethod" class="group text-lg font-semibold flex gap-2 justify-center">
            <AddIcon class="w-7 duration-150 group-hover:scale-105" />
            Add method
          </button>
        </div>
        <div v-for="methodIndex in Newgame.method.length" :key="methodIndex" class="flex flex-col gap-3">
          <div class="flex gap-3 items-center">
            <div class="flex flex-col grow">
              <label for="id"><strong>Game</strong> Method Name:</label>
              <input placeholder='Will be displayed in the form "Enter/Select your <method-name>"' required type="text" class="bg-slate-700 p-3 rounded-lg text-lg" :id="'id_' + methodIndex" v-model="Newgame.method[methodIndex - 1].name" />
            </div>
            <div class="flex flex-col grow">
              <label for="name"><strong>Method</strong> Type:</label>
              <select
                @change="Newgame.method[methodIndex - 1].type === 'select' ? makeOption(methodIndex - 1) : deleteOption(methodIndex - 1)"
                class="bg-slate-700 capitalize p-4 rounded-lg text-lg"
                :id="'type_' + methodIndex"
                v-model="Newgame.method[methodIndex - 1].type"
              >
                <option class="" selected disabled value="">Select method type</option>
                <option value="text">text</option>
                <option value="email">Email</option>
                <option value="number">number</option>
                <option value="password">password</option>
                <option value="select">Select Option</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col grow">
            <div v-if="Newgame.method[methodIndex - 1].type === 'select'" class="flex justify-between grow">
              <label for="name"><strong>Select </strong> Option:</label>
              <!-- <button @click="addOption(methodIndex - 1)" type="button" class="group text-lg font-semibold flex gap-2 justify-center">
                <AddIcon class="w-7 duration-150 group-hover:scale-105" />
                Add Option
              </button> -->
              <span>GUNAKAN "," UNTUK MEMISAHKAN</span>
            </div>
            <div v-if="Newgame.method[methodIndex - 1].type === 'select'" class="flex-grow flex gap-3">
              <!-- v-for="(option, index) in Newgame.method[methodIndex - 1].optionString" -->
              <input
                placeholder='Enter option (Use "," to add new option)'
                required
                type="text"
                class="bg-slate-700 p-3 rounded-lg text-lg grow"
                :id="'option_' + index"
                @change="convertOption(methodIndex - 1)"
                v-model="Newgame.method[methodIndex - 1].optionString"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col grow">
          <label for="name"><strong>Game</strong> Description:</label>
          <textarea placeholder="Enter game description" required type="text" class="bg-slate-700 p-3 rounded-lg text-lg" id="name" v-model="Newgame.desc" />
        </div>
        <div class="flex max-h-60 max-w-60">
          <div>
            <label for="image"><strong>Game</strong> Image:</label>
            <input
              required
              type="file"
              class="p-3 file:p-2 file:font-josefin file:bg-slate-700 file:rounded-full file:border-0 file:hover:bg-slate-600 file:me-3 file:px-4 file:text-white"
              id="image"
              @change="handleFileUpload($event, 'game')"
            />
          </div>
          <img v-if="Newgame.image" :src="Newgame.image" class="" alt="Uploaded Image" style="max-width: 100%; margin-top: 10px" />
        </div>
        <button type="button" class="bg-blue-700 p-3 rounded-lg text-lg" @click="addGame">Add Game</button>
        <div v-if="gameAdded.message" :class="gameAdded.type === 'success' ? 'bg-green-500' : 'bg-red-500'" class="rounded-lg text-black p-5">
          <span>{{ gameAdded.message }}</span>
        </div>
      </div>

      <div class="flex flex-col gap-3" v-if="newItems.game && newItems.game != 'add'">
        <label for="Games">Currency</label>
        <select required class="bg-slate-700 p-3 rounded-lg text-lg max-w-md" name="Games" id="Games" v-model="newItems.currency">
          <option selected disabled value="">Select currency</option>
          <option v-for="currency in categories" :key="currency.id" :value="currency.id"><img :src="currency.image" alt="" /> {{ currency.name }}</option>
          <option selected v-if="addedCurrency.type == 'success'" :value="newCurrency.id">{{ newCurrency.name }}</option>
          <option value="add">
            <span class="flex gap-3"><AddIcon />Add new currency</span>
          </option>
        </select>
        <div class="flex flex-col grow gap-3" v-if="newItems.currency == 'add'">
          <div class="flex gap-3">
            <div class="flex flex-col grow">
              <label for="id"><strong>Currency</strong> ID:</label>
              <input placeholder="e.g. GCRYSTAL *No Spaces or Special Characters" required type="text" class="bg-slate-700 p-3 rounded-lg text-lg" id="id" v-model="newCurrency.id" />
            </div>
            <div class="flex flex-col grow">
              <label for="name"><strong>Currency</strong> Name:</label>
              <input placeholder="Enter currency name" required type="text" class="bg-slate-700 p-3 rounded-lg text-lg" id="name" v-model="newCurrency.name" />
            </div>
          </div>
          <div class="flex max-h-60 max-w-60">
            <div>
              <label for="image"><strong>Currency</strong> Image:</label>
              <input
                placeholder="Enter currency image URL"
                required
                type="file"
                class="p-3 file:p-2 file:bg-slate-700 file:font-josefin file:rounded-full file:border-0 file:hover:bg-slate-600 file:me-3 file:px-4 file:text-white"
                id="image"
                @change="handleFileUpload($event, 'currency')"
              />
            </div>
            <div></div>
            <img v-if="newCurrency.image" :src="newCurrency.image" class="" alt="Uploaded Image" style="max-width: 100%; margin-top: 10px" />
          </div>
          <button type="button" class="bg-blue-700 p-3 rounded-lg text-lg" @click="addCurrency">Add Currency</button>
          <div v-if="addedCurrency.message" :class="addedCurrency.type == 'success' ? 'bg-green-500' : 'bg-red-500'" class="rounded-lg text-black p-5">
            <span>{{ addedCurrency.message }}</span>
          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <div class="flex flex-col grow">
          <label for="id"><strong>Item</strong> ID:</label>
          <input placeholder="e.g. 2400 *Better to fill it with the amount" required type="text" class="bg-slate-700 p-3 rounded-lg text-lg" id="id" v-model="newItems.id" />
        </div>
        <div class="flex flex-col grow">
          <label for="name"><strong>Item</strong> Name:</label>
          <input placeholder="Enter item name" required type="text" class="bg-slate-700 p-3 rounded-lg text-lg" id="name" v-model="newItems.name" />
        </div>
      </div>
      <div class="flex flex-col grow">
        <label for="price"><strong>Item</strong> Price:</label>
        <input required type="number" class="bg-slate-700 p-3 rounded-lg text-lg" id="price" v-model="newItems.price" />
      </div>

      <button type="button" class="bg-blue-700 p-3 rounded-lg text-lg" @click="addItems">Add Items</button>
      <div v-if="itemAdded.message" :class="itemAdded.type === 'success' ? 'bg-green-300' : 'bg-red-300'" class="rounded-lg text-black p-5">
        <span>{{ itemAdded.message }} in </span>
      </div>
    </form>
  </div>
</template>
