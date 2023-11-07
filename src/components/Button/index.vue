<template>
  <div class="items-center justify-center hidden md:flex">
    <img class="mr-2 w-6 h-6" src="images/light-mode.png" alt="" srcset="" />
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-[#EBEBEB] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#08D5B2] transition"
      ></div>
      <img class="ml-2 w-6 h-6" src="images/dark-mode.png" alt="" srcset="" />
    </label>
  </div>
</template> 

<script>
export default {
  name: "SButton",
};
</script>

<style>
</style>
