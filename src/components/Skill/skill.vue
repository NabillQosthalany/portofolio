<script>
export default {
  data() {
    return {
      images: [
        { id: 1, image: "/images/html-logo.png" },
        { id: 2, image: "/images/css-logo.png" },
        { id: 3, image: "/images/scss-logo.png" },
        { id: 4, image: "/images/boostrap-logo.png" },
        { id: 5, image: "/images/vuetify-logo.png" },
        { id: 6, image: "/images/vuejs-logo.png" },
        { id: 7, image: "/images/nuxtjs-logo.png" },
        { id: 8, image: "/images/reactjs-logo.png" },
        { id: 9, image: "/images/mongodb-logo.png" },
        { id: 10, image: "/images/mysql-logo.png" },
        { id: 11, image: "/images/expressjs-logo.png" },
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
<template >
  <section data-aos="fade-right" ref="sectionRef" class="md:mt-40 mt-24">
    <h1 class="text-3xl font-semibold text-center mb-10">Skills</h1>
    <div
      class="mx-auto md:max-w-sm md:pr-5 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#F4F4F4] dark:border-gray-500"
    >
      <div class="grid grid-cols-4 gap-2">
        <div
          v-for="item in images"
          :key="item.id"
          class="flex items-center justify-center"
        >
          <img
            class="grayscale hover:grayscale-0 transition duration-300"
            :src="item.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
