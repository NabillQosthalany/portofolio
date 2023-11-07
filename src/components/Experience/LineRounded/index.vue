<template >
  <div class="h-28 flex items-center justify-center mt-10">
    <div class="h-40 w-0.5 bg-black relative">
      <div
        class="hover:bg-[#11A78D] w-3 h-3 bg-primary rounded-full absolute top-0 transform -translate-x-1/2 left-1/2"
      >
        <div :class="classCustom" :id="id">
          <h1 class="text-base text-black whitespace-nowrap font-medium">
            {{ name }}
          </h1>
          <p
            class="font-light text-xs text-[#606060] whitespace-nowrap my-2"
            v-html="title"
          ></p>
          <p class="font-normal text-xs">{{ duration }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

defineProps({
  id: String,
  name: String,
  duration: String,
  title: String,
  classCustom: String,
});
const titleFormatted = computed(() => title.replace(/<br\s*\/?>/g, "<br/>"));
</script>
