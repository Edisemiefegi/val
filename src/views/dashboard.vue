<template>
  <div class="w-sreen md:h-fit h-screen bg-red-800 flex flex-col gap-3 p-10">
    <div
      class="w-5/6 mx-auto bg-white p-5 items-center flex flex-col justify-center gap-2"
    >
      <p class="text-red-800 font-bold text-lg">Whyte Peter Emmanuel</p>
      <div class="mx-auto w-5/12">
        <img src="../assets/will-you-be-my-valentine-love-letters.gif" alt="" />
      </div>
      <div class="flex gap-3">
        <button
          @click="showgif = 'happy'"
          class="p-3 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-white"
        >
          Yes
        </button>
        <button
          @click="showgif = 'sad'"
          class="p-3 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-white"
        >
          No
        </button>
      </div>
    </div>

    <div class="mx-auto w-5/6 flex justify-center items-center">
      <div v-if="showgif == 'happy'">
        <img
          src="../assets/cute-happy-excited-milk-xvhsl7uckgxpgllc.gif"
          alt=""
        />
      </div>
      <div v-if="showgif == 'sad'">
        <img src="../assets/sad gif.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showgif = ref(null);
</script>

<style></style>
