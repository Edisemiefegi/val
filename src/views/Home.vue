<template>
  <main class="bg-red-500 min-h-screen h-fit relative">
    <div class="absolute left-5 top-2">
      <p class="text-2xl">🥰🥰💓❤</p>
    </div>
    <div class="flex flex-col md:flex-row h-full gap-10 w-5/6 mx-auto py-10">
      <div class="md:w-2/6 w-full text-white flex flex-col gap-2 text-justify">
        <p class="text-lg font-bold">My Big Baby 💌</p>
        <p>
          Here's a little something as I find myself overflowing with love for
          you. You always make time for me, even amidst your busy schedule, and
          for that, I'm endlessly grateful. In every shared moment, whether it's
          the simple joy of cuddling on the bed or the adventures we've embarked
          on hand in hand, you've shown me the true essence of love. I'm beyond
          fortunate to have found not only a partner in crime but also a friend,
          a best friend, and a great programming mentor wrapped up in one
          incredible person—you. So, my love, here's a question straight from
          the depths of my heart 🌹:
        </p>
        <button>
          <i class="pi pi-arrow-right text-lg font-bold" @click="openval"></i>
        </button>
      </div>
      <div class="flex gap-3 md:w-3/5 w-full px-2 md:px-0">
        <div
          class="flex flex-col gap-3 w-2/4 h-full rounded-lg overflow-hidden"
        >
          <img
            src="../assets/we 3.jpg"
            alt=""
            class="object-cover h-1/2 w-full rounded-lg"
          />
          <img
            src="../assets/we2.jpg"
            alt=""
            class="object-cover h-1/2 w-full rounded-lg"
          />
        </div>
        <div class="w-2/4 h-full">
          <img
            src="../assets/we.jpg"
            alt=""
            class="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
      <div class="mt-2 md:mt-0"></div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const openval = () => {
  router.push({ name: "dashboard" });
};
</script>

<style></style>
