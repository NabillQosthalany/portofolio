<script setup>
const props = defineProps({
  name: String,
  description: String,
  image: String,
  customClass: String,
});
</script>
<template >
  <div :class="props.customClass">
    <button
      type="button"
      class="rounded-full drop-shadow-lg text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium text-xs px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-gray-200 mr-2 mb-2"
    >
      <img class="mr-2" :src="props.image" alt="" srcset="" />
      <div class="text-left">
        <p>{{ props.name }}</p>
        <p class="text-[#C0B8B8] font-light text-xs">{{ props.description }}</p>
      </div>
    </button>
  </div>
</template>

