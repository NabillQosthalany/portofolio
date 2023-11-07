<script setup>
import Navlink from "./Navlink/index.vue";
import { ref } from "vue";
import { defineEmits } from "vue";

const isOpen = ref(false);

const links = ref([
  {
    id: 1,
    name: "Home",
    ref: "heroSection",
  },
  {
    id: 2,
    name: "About",
    ref: "aboutSection",
  },
  {
    id: 3,
    name: "Experience",
    ref: "experienceSection",
  },
  {
    id: 4,
    name: "Skill",
    ref: "skillSection",
  },
  {
    id: 5,
    name: "Certificate",
    ref: "certificateSection",
  },
  {
    id: 6,
    name: "Portfolio",
    ref: "portofolioSection",
  },
]);

const activeSectionRef = ref(null);

const toggleNavbar = () => {
  isOpen.value = !isOpen.value;
};
const goToSection = (sectionRef) => {
  activeSectionRef.value = sectionRef;
};
</script>
<template>
  <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
    <div
      class="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="https://flowbite.com/" class="flex items-center md:pl-36">
        <span class="self-center text-2xl whitespace-nowrap dark:text-[#08D5B2]"
          >Nabilz Qosthalany</span
        >
      </a>
      <div class="flex md:order-2">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          @click="toggleNavbar"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        :class="{ hidden: !isOpen, block: isOpen }"
        class="items-center justify-between w-full md:flex md:w-auto"
        id="navbar-sticky"
      >
        <Navlink
          :links="links"
          :activeSectionRef="activeSectionRef"
          @goToSection="goToSection"
        />
      </div>
    </div>
  </nav>
</template>