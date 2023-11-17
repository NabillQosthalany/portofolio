
<template>
  <div>
    <Navbar
      :active-section-ref="activeSection"
      @scrollToSection="scrollToSection"
      @toggle-dark-mode="toggleDarkMode"
      :isDarkMode="isDarkMode"
    />

    <Hero ref="heroSection" />
    <About ref="aboutSection" />
    <Experience ref="experienceSection" />
    <Skill ref="skillSection" />
    <Certificate ref="certificateSection" />
    <Portofolio ref="portofolioSection" />
    <Sfooter />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/navbar.vue";
import Hero from "./components/Hero/hero.vue";
import About from "./components/About/about.vue";
import Experience from "./components/Experience/experience.vue";
import Skill from "./components/Skill/skill.vue";
import Certificate from "./components/Certificate/certificate.vue";
import Portofolio from "./components/Portofolio/portofolio.vue";
import Sfooter from "./components/Footer/Sfooter.vue";

export default {
  components: {
    Navbar,
    Hero,
    About,
    Experience,
    Skill,
    Certificate,
    Portofolio,
    Sfooter,
  },
  data() {
    return {
      activeSection: null,
      isDarkMode: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleDarkMode() {
      const body = document.querySelector("body");
      this.isDarkMode = !this.isDarkMode;
      body.classList.toggle("light");
      body.classList.toggle("dark");
    },
    scrollToSection(sectionRef) {
      this.$refs[sectionRef].scrollToSection();
    },

    handleScroll() {
      for (const sectionRef of [
        "heroSection",
        "aboutSection",
        "skillSection",
        "experienceSection",
        "certificateSection",
        "portofolioSection",
      ]) {
        const sectionEl = this.$refs[sectionRef].$el;
        const rect = sectionEl.getBoundingClientRect();

        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          this.activeSection = sectionRef;
          break;
        }
      }
    },
  },
};
</script>
