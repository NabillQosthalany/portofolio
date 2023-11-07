<script setup>
import { ref } from "vue";
import LineRounded from "../Experience/LineRounded/index.vue";

const isTabs = ref(true);

const experience = ref([
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
    name: "Majelis Permusyawaratan Kelas (MPK)",
    title:
      "Field Work Practice Becoming a web developer,<br/> using Spring Boot and Vue Js Technology",
    duration: "November 2021 - January 2023",
    classCustom: "absolute right-10 top-0",
  },
]);

const toggleTab = (isWork) => {
  isTabs.value = isWork;
};
</script>
<template>
  <section class="mt-40" ref="sectionRef">
    <h1 class="text-center text-3xl font-semibold">Experience</h1>
    <div class="flex justify-center">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
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
            :class="{
              ' text-primary border-b-2 border-primary  dark:text-primary dark:border-primary group':
                !isTabs,
              ' hover:text-gray-600 dark:hover:text-gray-300 group': isTabs,
            }"
            @click="toggleTab(false)"
            class="cursor-pointer inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg"
          >
            <svg
              class="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
              /></svg
            >Organization Experience
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