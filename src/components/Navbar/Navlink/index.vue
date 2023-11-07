<script setup>
import SButton from "../../Button/index.vue";

import { defineEmits, defineProps } from "vue";

const props = defineProps({
  links: Array,
  activeSectionRef: String,
});

const emits = defineEmits(["goToSection"]);

const goToSection = (sectionRef) => {
  emits("goToSection", sectionRef);
};
</script>
<template>
  <ul
    class="md:mr-20 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
  >
    <li v-for="link in links" :key="link.id" class="relative inline-block">
      <a
        @click="goToSection(link.ref)"
        :class="{ active: link.ref === props.activeSectionRef }"
        class="cursor-pointer block py-2 text-[#7E7B7B] hover:text-cyan-500 relative group"
        >{{ link.name }}
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transition-all duration-300 ease-out origin-left transform scale-x-0 group-hover:scale-x-75"
        ></span>
      </a>
    </li>
    <SButton />

    <div class="flex justify-center">
      <button
        type="button"
        class="md:hidden bg-gray-200 rounded-full text-center inline-flex items-center p-2.5"
      >
        <img class="w-8" src="images/light-mode.png" alt="" />
        <span class="sr-only">Icon description</span>
      </button>
    </div>
  </ul>
</template>

