<script>
import { ref } from "vue";
import LineRounded from "../Experience/LineRounded/linerounded.vue";

const isTabs = ref(true);

export default {
  components: {
    LineRounded,
  },
  data() {
    return {
      isTabs: true,
      experience: [
        {
          isTabs: true,
          name: "PT Indonesia Indicator",
          title:
            "Field Work Practice Becoming a web developer,<br/> using Spring Boot and Vue Js Technology",
          duration: "July - December 2022",
          classCustom: "absolute right-10 top-0",
        },
        {
          isTabs: true,
          name: "PP Pemuda Persis",
          title: "Become a volunteer, and use Laravel Technology",
          duration: "September - Now",
          classCustom: "absolute left-10 top-0",
        },
        {
          isTabs: false,
          name: "Majelis <br/> Permusyawaratan <br/>  Kelas (MPK)",
          title: "Become chairman of Commission 4",
          duration: "November 2021 - Maret 2023",
          classCustom: "absolute left-10 top-0",
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
    toggleTab(isWork) {
      this.isTabs = isWork;
    },
  },
};
</script>
<template>
  <section data-aos="fade-in" class="md:mt-40 mt-24" ref="sectionRef">
    <h1
      class="text-center md:text-3xl text-2xl font-semibold text-black dark:text-white"
    >
      Experience
    </h1>
    <div class="flex justify-center">
      <ul
        class="flex md:flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
      >
        <li class="mr-2">
          <a
            @click="toggleTab(true)"
            :class="{
              'text-primary border-b-2 border-primary dark:text-primary dark:border-primary group':
                isTabs,
              ' hover:text-gray-600 dark:hover:text-gray-300 group': !isTabs,
            }"
            class="cursor-pointer inline-flex items-center justify-center p-4 rounded-t-lg active"
            aria-current="page"
          >
            <svg
              class="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
              /></svg
            >Work Experience
          </a>
        </li>
        <li class="mr-2">
          <a
            @click="toggleTab(false)"
            :class="{
              'text-primary border-b-2 border-primary dark:text-primary dark:border-primary group':
                !isTabs,
              ' hover:text-gray-600 dark:hover:text-gray-300 group': isTabs,
            }"
            class="cursor-pointer inline-flex items-center justify-center p-4 rounded-t-lg active"
            aria-current="page"
          >
            <svg
              class="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
              /></svg
            >Organitation Experience
          </a>
        </li>
      </ul>
    </div>
    <div v-for="item in experience" :key="item.name">
      <LineRounded
        v-if="isTabs === item.isTabs"
        :name="item.name"
        :title="item.title"
        :duration="item.duration"
        :classCustom="item.classCustom"
      />
    </div>
  </section>
</template>

<style lang="">
</style>