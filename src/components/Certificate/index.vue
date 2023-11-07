<script setup>
import { onMounted, ref } from "vue";

const items = ref([
  {
    id: 1,
    name: "Build With Angga",
    description: "Certificate Bootcamp Fullstack <br/> Javascript MERN",
    image: "images/certificate-mern.png",
  },
  {
    id: 2,
    name: "Build With Angga",
    description: "Certificate Bootcamp <br/> Vue Js 3 Composition API",
    image: "images/certificate-vue.png",
  },
  {
    id: 3,
    name: "Dicoding Indonesia",
    description: "Certificate Course React Js",
    image: "images/certificate-react.png",
  },
  {
    id: 4,
    name: "Build With Angga",
    description: "Certificate Bootcamp Fullstack <br/> Laravel Nuxt Js",
    image: "images/certificate-laravue.png",
  },
]);
const aboutSection = ref(null); // Inisialisasi referensi untuk komponen ini

onMounted(() => {
  aboutSection.value = $refs.aboutSection; // Menetapkan referensi sesuai dengan ID
});
</script>

<template>
  <section id="about" ref="certificateSection" class="mt-40">
    <h1 class="text-center text-3xl font-medium">Certficate</h1>
    <div class="flex justify-center">
      <div class="grid grid-cols-4 grap-4 mt-5">
        <div class="ml-5" v-for="item in items" :key="item.id">
          <img :src="item.image" alt="" />
          <h1 class="font-medium">{{ item.name }}</h1>
          <p
            class="text-sm text-[#6C6B6B] font-light"
            v-html="item.description"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>
