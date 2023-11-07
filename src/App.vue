
<template>
  <div>
    <Navbar :activeSection="activeSection" @goToSection="handleGoToSection" />

    <Hero ref="heroSection" />
    <About ref="aboutSection" />
    <Experience ref="experienceSection" />
    <Skill ref="skillSection" />
    <Certificate ref="certificateSection" />
    <Portofolio ref="portofolioSection" />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar/index.vue";
import Hero from "./components/Hero/index.vue";
import About from "./components/About/index.vue";
import Experience from "./components/Experience/index.vue";
import Skill from "./components/Skill/index.vue";
import Certificate from "./components/Certificate/index.vue";
import Portofolio from "./components/Portofolio/index.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

const activeSection = ref(null);

const handleGoToSection = (sectionRef) => {
  activeSection.value = sectionRef;
  const sectionEl = document.getElementById(sectionRef);
  if (sectionEl) {
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
};
const handleScroll = () => {
  for (const sectionRef of [
    "heroSection",
    "aboutSection",
    "experienceSection",
    "skillSection",
    "certificateSection",
    "portofolioSection",
  ]) {
    const sectionEl = document.getElementById(sectionRef);
    if (sectionEl) {
      const rect = sectionEl.getBoundingClientRect();

      if (rect.top >= 0.984375 && rect.bottom <= window.innerHeight) {
        activeSection.value = sectionRef;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
