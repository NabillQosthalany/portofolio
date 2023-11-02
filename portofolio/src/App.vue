<template>
  <v-app>
    <v-main :class="{'dark-mode' : darkMode, 'light-mode' : !darkMode}">
      <Navbar :dark-mode='darkMode' :active-section-ref='activeSection' @dark-mode-toggle='toggleDarkMode'
              @scrollToSection='scrollToSection' />
      <Profile ref='profileSection' />
      <About ref='aboutSection' />
      <Skills ref='skillsSection' />
      <Certificate ref='certificateSection' />
      <Portofolio ref='portofolioSection' />
      <Contact ref='contactSection' />
      <Footer ref='footerSection' />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Profile from './components/Profile/Profile.vue';
import About from './components/About/About.vue';
import Skills from './components/Skills/Skills.vue';
import Certificate from './components/Certifikate/Certificate.vue';
import Portofolio from './components/Portofolio/Portofolio.vue';
import Contact from './components/Contact/Contact.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'App',

  components: {
    Footer,
    Contact,
    Portofolio,
    Certificate,
    Skills,
    About,
    Profile,
    Navbar
  },
  data() {
    return {
      darkMode: false,
      activeSection: null
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToSection(sectionRef) {
      this.$refs[sectionRef].scrollToSection();
    },
    handleScroll() {
      for (const sectionRef of ['profileSection', 'skillsSection', 'aboutSection', 'certificateSection', 'portofolioSection', 'contactSection', 'footerSection']) {
        const sectionEl = this.$refs[sectionRef].$el;
        const rect = sectionEl.getBoundingClientRect();

        if (rect.top >= 0.984375 && rect.bottom <= window.innerHeight) {
          this.activeSection = sectionRef;
          break;
        }
      }
    },
    toggleDarkMode(darkMode) {
      this.darkMode = !this.darkMode;
    }
  }
};
</script>
<style scoped>
@import url(global.scss);
</style>

