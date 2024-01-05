<script setup>
import Google from "@/components/icon/Google.vue";
import Apple from "@/components/icon/Apple.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useSessionStore } from "@/stores/user";
import providerLogin from "./providerLogin.vue";

const session = useSessionStore();
const name = ref("");
const email = ref("");
const password = ref("");
const conpassword = ref("");
const errorMessage = ref("");

const signUp = () => {
  if (email.value == "" || password.value == "" || name.value == "" || conpassword.value == "") {
    errorMessage.value = "Please fill in all fields";
  } else {
    createUserWithEmailAndPassword(auth, email.value, password.value).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name.value,
      }).catch((error) => {
        errorMessage.value = error.message;
      });
    });
  }
};
</script>

<template>
  <div @click.stop class="bg-white w-full h-fit rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-6 space-y-4 w-full md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign up to your account</h1>
      <form class="space-y-4 md:space-y-6" action="#">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
          <input
            v-model="name"
            type="text"
            name="name"
            id="name"
            class="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            class="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <span v-if="password.length > 0 && password.length < 6" class="text-xs text-red-500">Minimum 6 characters</span>
        </div>
        <div>
          <label for="conpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
          <input
            v-model="conpassword"
            type="password"
            name="conpassword"
            id="conpassword"
            placeholder="••••••••"
            class="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <span v-if="password.length > 0 && conpassword.length > 0 && password !== conpassword" class="text-xs text-red-500">Passwords do not match</span>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <span v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</span>

            <!-- <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-900 dark:ring-offset-gray-800"
                required
              />
            </div> -->
            <!-- <div class="ml-3 text-sm">
              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
            </div> -->
          </div>
          <a href="#" class="text-sm font-medium text-primary-900 hover:underline dark:text-primary-500">Forgot password?</a>
        </div>
        <button
          type="button"
          @click="signUp"
          class="w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign up
        </button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Have an account? <button type="button" @click="session.openModal('login')" class="font-medium text-primary-900 hover:underline dark:text-primary-500">Sign in</button>
        </p>
      </form>
      <div class="flex items-center space-x-4">
        <div class="flex grow border-t border-gray-400"></div>
        <span>or</span>
        <div class="flex grow border-t border-gray-400"></div>
      </div>
      <providerLogin />
    </div>
  </div>
</template>
