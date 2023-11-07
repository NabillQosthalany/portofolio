<script setup>
import { ref } from "vue";

const images = ref([
  { id: 1, image: "images/html-logo.png" },
  { id: 2, image: "images/css-logo.png" },
  { id: 3, image: "images/scss-logo.png" },
  { id: 4, image: "images/boostrap-logo.png" },
  { id: 5, image: "images/vuetify-logo.png" },
  { id: 6, image: "images/vuejs-logo.png" },
  { id: 7, image: "images/nuxtjs-logo.png" },
  { id: 8, image: "images/reactjs-logo.png" },
  { id: 9, image: "images/mongodb-logo.png" },
  { id: 10, image: "images/mysql-logo.png" },
  { id: 11, image: "images/expressjs-logo.png" },
]);
</script>
<template >
  <section ref="skillSection" class="mt-40">
    <h1 class="text-3xl font-semibold text-center mb-10">Skills</h1>
    <div
      class="mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#F4F4F4] dark:border-gray-500"
    >
      <div class="grid grid-cols-4 gap-2">
        <div
          v-for="item in images"
          :key="item.id"
          class="flex items-center justify-center"
        >
          <img
            class="grayscale hover:grayscale-0 transition duration-300"
            :src="item.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
