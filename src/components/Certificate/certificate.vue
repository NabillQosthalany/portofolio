<script>
import { onMounted, ref } from "vue";

export default {
  name: "SCertificate",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Build With Angga",
          description: "Certificate Bootcamp Fullstack <br/> Javascript MERN",
          image: "/images/certificate-mern.jpg",
        },
        {
          id: 2,
          name: "Build With Angga",
          description: "Certificate Bootcamp <br/> Vue Js 3 Composition API",
          image: "/images/certificate-vue.jpg",
        },
        {
          id: 3,
          name: "Dicoding Indonesia",
          description: "Certificate Course React Js",
          image: "/images/certificate-react.jpg",
        },
        {
          id: 4,
          name: "Build With Angga",
          description: "Certificate One Day Build <br/> Responsive Website",
          image: "/images/OneDayCertificate.jpg",
        },
        {
          id: 5,
          name: "Edspert.Id",
          description: "Webinar React Js",
          image: "/images/React-sertificat.jpg",
        },
        {
          id: 6,
          name: "Dicoding Indonesia",
          description: "Certificate Basic Web Developer",
          image: "/images/Dicoding-fe.jpg",
        },
      ],
    };
  },
  methods: {
    scrollToSection() {
      const yOffset = -150;
      const element = this.$refs.sectionRef;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>

<template>
  <section data-aos="fade-left" ref="sectionRef" class="md:mt-40 mt-24">
    <h1 class="text-center text-3xl font-medium">Certficate</h1>
    <div class="flex justify-center">
      <div class="grid grid-cols-2 md:grid-cols-3 grap-4 mt-5">
        <div class="ml-5 md:mb-5" v-for="item in items" :key="item.id">
          <img :src="item.image" alt="" />
          <h1 class="font-medium">{{ item.name }}</h1>
          <p
            class="text-sm text-[#6C6B6B] font-light mb-5 md:m-0 dark:text-gray-400"
            v-html="item.description"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>
