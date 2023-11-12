<script>
import Breadcrumb from "../Breadcrumb/breadcrumb.vue";
import ButtonLogo from "../Button/ButtonLogo/buttonlogo.vue";

export default {
  components: {
    Breadcrumb,
    ButtonLogo,
  },
  data() {
    return {
      items: [
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
      ],
    };
  },
  methods: {
    scrollToSection() {
      const yOffset = -220;
      const element = this.$refs.sectionRef;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>
<template  >
  <section ref="sectionRef" class="md:mt-52 mt-24 flex justify-center">
    <ButtonLogo
      class="w-auto"
      v-for="(item, index) in items"
      :key="index"
      :name="item.name"
      :description="item.description"
      :image="item.image"
      :customClass="item.customClass"
    />
    <div class="text-center md:px-32">
      <h1 class="text-2xl md:text-3xl font-medium text-primary font-quicksand">
        Nabil Qosthalany
      </h1>
      <h1
        class="md:text-3xl font-medium text-[#424141] md:my-5 dark:text-white"
      >
        Full Stack Web Developer
      </h1>
      <h1 class="md:text-2xl text-sm font-medium md:mt-2 text-[#C0B8B8]">
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