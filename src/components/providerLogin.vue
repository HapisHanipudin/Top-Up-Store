<script setup>
import Google from "@/components/icon/Google.vue";
import Apple from "@/components/icon/Apple.vue";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useSessionStore } from "@/stores/user";

const session = useSessionStore();
const provider = new GoogleAuthProvider();

const googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
</script>

<template>
  <div class="flex gap-4 justify-center">
    <button type="button" @click="googleLogin" href="" class="hover:scale-105 duration-100 flex gap-3 items-center rounded-lg ring-1 ring-gray-300 py-2 px-4"><Google class="" /> Sign in with Google</button>
    <!-- <button type="button" @click="appleLogin" class="hover:scale-105 duration-100 flex gap-3 items-center rounded-lg ring-1 ring-gray-300 py-2 px-4 r"><Apple class="" /> Sign in with Apple</button> -->
  </div>
</template>
