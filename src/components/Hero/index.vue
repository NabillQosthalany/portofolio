<script setup>
import Breadcrumb from "../Breadcrumb/index.vue";
import ButtonLogo from "../Button/ButtonLogo/index.vue";

const items = [
  {
    name: "Express Js",
    description: "Javascript Framework",
    image: "images/express-logo.png",
    customClass: "absolute left-40 top-1/4",
  },
  {
    name: "Vue Js",
    description: "Javascript Framework",
    image: "images/Vue-logo.png",
    customClass: "absolute left-40 top-60",
  },
  {
    name: "Nuxt Js",
    description: "Javascript Framework",
    image: "images/Nuxt-logo.png",
    customClass: "absolute right-40 top-1/4",
  },
  {
    name: "React Js",
    description: "Javascript Framework",
    image: "images/react-logo.png",
    customClass: "absolute right-40 top-60",
  },
];
</script>
<template >
  <section ref="sectionRef" class="mt-52 flex justify-center">
    <ButtonLogo
      class="w-auto"
      v-for="(item, index) in items"
      :key="index"
      :name="item.name"
      :description="item.description"
      :image="item.image"
      :customClass="item.customClass"
    />
    <div class="text-center px-32">
      <h1 class="text-3xl font-medium text-primary font-quicksand">
        Nabil Qosthalany
      </h1>
      <h1 class="text-3xl font-medium text-[#424141] my-5">
        Full Stack Web Developer
      </h1>
      <h1 class="text-2xl font-medium mt-2 text-[#C0B8B8]">
        Crafting Digital Experiences, One Line of Code at a Time.
      </h1>
      <Breadcrumb />
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-family: "Quicksand", sans-serif;
}
</style>