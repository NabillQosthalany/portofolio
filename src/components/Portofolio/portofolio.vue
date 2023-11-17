<script>
import githubLogo from "@/assets/images/githublogo.png";

export default {
  name: "Portofolio",
  data() {
    return {
      githubLogo: githubLogo,
      items: [
        {
          id: 1,
          name: "Zullkit Design Apps",
          headerImage: "images/images(1).jpeg",
          images: ["images/Vue-logo.png", "images/tailwind-logo.png"],
          isHover: false,
          isButtonHover: false,
          link: "https://github.com/NabillQosthalany/zullkit-frontend",
        },
        {
          id: 2,
          name: "Website Event",
          headerImage: "images/images(2).jpeg",
          images: [
            "images/react-logo.png",
            "images/express-logo.png",
            "images/mongodb-logo.png",
          ],
          isHover: false,
          isButtonHover: false,
          link: "https://github.com/NabillQosthalany/Semina-Event-Fe",
        },
        {
          id: 3,
          name: "Website Crowfunding",
          headerImage: "images/images(3).jpeg",
          images: [
            "images/nuxtjs-logo.png",
            "images/golang-logo.png",
            "images/mysql-logo-mini.png",
          ],
          isHover: false,
          isButtonHover: false,
          link: "https://github.com/NabillQosthalany/CrowdFunding-Fe",
        },
        {
          id: 4,
          name: "PowerHuman",
          headerImage: "images/images(4).jpeg",
          images: [
            "images/nuxtjs-logo.png",
            "images/laravel-logo.png",
            "images/mysql-logo-mini.png",
          ],
          isHover: false,
          isButtonHover: false,
          link: "https://github.com/NabillQosthalany/PowerHuman-Fe",
        },
      ],
    };
  },
  props: {
    activeSection: Boolean,
  },
  methods: {
    scrollToSection() {
      window.scrollTo({
        top: this.$refs.sectionRef.offsetTop,
        behavior: "smooth",
      });
    },
    redirectToGithub(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<template >
  <section data-aos="fade-down" ref="sectionRef" class="md:mt-40 mt-24">
    <div class="flex justify-center items-center mb-5">
      <h1 class="mr-2 text-2xl font-semibold">Portofolio</h1>
      <div
        class="inline-block bg-primary text-white transfrom -skew-x-12 px-4 py-1"
      >
        <span class="transform skew-x-12">Section</span>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 md:px-40 px-5"
    >
      <div
        @mouseover="item.isHover = true"
        @mouseout="item.isHover = false"
        v-for="item in items"
        :key="item.id"
        class="max-w-sm rounded-lg overflow-hidden shadow-lg relative"
      >
        <img
          v-show="item.isHover || item.isButtonHover"
          class="z-50 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :src="githubLogo"
          alt=""
        />
        <button
          @click="redirectToGithub(item.link)"
          v-show="item.isHover || item.isButtonHover"
          type="button"
          class="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary hover:bg-[#08A88D] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          View Code
        </button>
        <img
          :class="[
            'w-full',
            item.isHover || item.isButtonHover ? 'brightness-50' : '',
          ]"
          class="w-full hover:brightness-50 transition-all duration-200"
          :src="item.headerImage"
          alt=""
        />
        <div class="px-6 py-4 dark:bg-slate-900 drop-shadow-lg">
          <div class="font-bold text-xl mb-2">
            <p class="text-gray-700 text-base dark:text-[#BDBDBD]">
              {{ item.name }}
            </p>
            <div class="flex justify-between items-center">
              <p class="text-gray-500 text-base mt-2 dark:text-[#FDFDFD]">
                Tools
              </p>
              <div class="flex flex-row">
                <img
                  v-for="(image, index) in item.images"
                  :key="index"
                  class="w-6 h-6 mx-1 box-border"
                  :class="[
                    image === '/images/tailwind-logo.png' ? 'w-8 h-5' : '',
                  ]"
                  :src="image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
</style>