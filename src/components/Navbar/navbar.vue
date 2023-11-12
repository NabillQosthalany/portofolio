<script>
import SButton from "./../Button/button.vue";
export default {
  components: {
    SButton,
  },
  data() {
    return {
      isOpen: false,
      links: [
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
      ],
    };
  },
  props: {
    activeSectionRef: String,
    isDarkMode: Boolean,
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    },
    goToSection(sectionRef) {
      this.$emit("scrollToSection", sectionRef);
    },
    toggleDarkMode() {
      this.$emit("toggle-dark-mode");
    },
  },
};
</script>
<template>
  <nav class="fixed w-full z-20 top-0 left-0 backdrop-blur-sm">
    <div
      class="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a class="flex items-center md:pl-36">
        <span class="self-center text-2xl whitespace-nowrap text-[#08D5B2]"
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
        <ul
          class="md:mr-20 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li
            v-for="link in links"
            :key="link.id"
            class="relative inline-block"
          >
            <a
              @click="goToSection(link.ref)"
              :class="{
                'text-primary  ': link.ref === activeSectionRef,
              }"
              class="cursor-pointer block py-2 text-gray-400 hover:text-[#08D5B2] relative group dark:hover:text-[#08D5B2]"
              >{{ link.name }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#08D5B2] transition-all duration-300 ease-out origin-left transform scale-x-0 group-hover:scale-x-75"
              ></span>
            </a>
          </li>
          <SButton
            @toggle-dark-mode="toggleDarkMode"
            :isDarkMode="isDarkMode"
          />

          <div class="flex justify-center">
            <button
              @click="toggleDarkMode"
              type="button"
              class="md:hidden bg-gray-200 dark:bg-[#12141d] rounded-full text-center inline-flex items-center p-2.5"
            >
              <img
                class="w-8"
                :src="
                  isDarkMode ? 'images/sun-light.png' : 'images/dark-mode.png'
                "
                alt=""
              />
            </button>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>