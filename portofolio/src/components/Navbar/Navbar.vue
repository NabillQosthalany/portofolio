<template>

  <!--  Navbar Untuk Mobile-->
  <v-app-bar v-if='isMobile'>
    <h3 class='ml-4'>Nabil Qosthalany</h3>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon v-if='isMobile' variant='text' @click='toggleDrawer' class='ml-4'></v-app-bar-nav-icon>
  </v-app-bar>
  <!--  <v-navigation-drawer-->
  <!--    class='drawer'-->
  <!--    v-model='drawer'-->
  <!--    location='right'>-->
  <!--    <v-list>-->
  <!--      <v-list-item>Well</v-list-item>-->
  <!--      <v-list-item>Well</v-list-item>-->
  <!--      <v-list-item>Well</v-list-item>-->
  <!--      <v-list-item>Well</v-list-item>-->

  <!--    </v-list>-->
  <!--  </v-navigation-drawer>-->
  <!--  Navbar Untuk Desktop -->
  <v-app-bar class='navbar-header mt-2 d-none d-md-flex d-lg-flex d-xl-flex' :elevation='1'>
    <v-app-bar-nav-icon class='ml-5 d-flex justify-start text-capitalize'>
      <h3>Nabil Qosthalany</h3>
    </v-app-bar-nav-icon>
    <v-list class='d-flex justify-center align-content-center ma-auto'>
      <v-list-item v-for='item in items' :key='item.id' @click='goToSection(item.ref)'
                   :class="{ 'active': item.ref === activeSectionRef }"
                   :style="{color:darkMode ? 'white' : 'black'}"
      >{{ item.name }}
      </v-list-item>
    </v-list>
    <div class='toggle-mode d-flex flex-row mr-5'>
      <v-img
        :class="{'dark-mode' : darkMode}"
        :width='30'
        :src='getImageSun'
      ></v-img>
      <v-switch
        color='#08D5B2'
        v-model='darkMode'
        @change='toggleDarkMode'
        class='pt-7 px-2'></v-switch>
      <v-img
        :class="{'dark-mode' : darkMode}"
        :width='30'
        :src='getImageMoon'
      ></v-img>
    </div>
  </v-app-bar>


</template>

<script>
export default {
  name: 'Navbar',
  props: {
    activeSectionRef: String
  },
  data: () => ({
    darkMode: false,
    drawer: false,
    items: [
      { id: 1, name: 'Profile', ref: 'profileSection' },
      { id: 2, name: 'About', ref: 'aboutSection' },
      { id: 3, name: 'Skills', ref: 'skillsSection' },
      { id: 4, name: 'Certifikate', ref: 'certificateSection' },
      { id: 5, name: 'Portofolio', ref: 'portofolioSection' },
      { id: 6, name: 'Contact', ref: 'contactSection' }
    ]
  }),
  computed: {
    isMobile() {
      return window.innerWidth <= 430;
    },
    getImageMoon() {
      return this.darkMode ? '../src/assets/images/light-mode-icon.png' : '../src/assets/images/Dark.png';
    },
    getImageSun() {
      return this.darkMode ? '../src/assets/images/light-mode-icon-sun.png' : '../src/assets/images/Light.png';
    }
  },
  methods: {
    goToSection(sectionRef) {
      this.$emit('scrollToSection', sectionRef);
    },
    toggleDarkMode() {
      this.$emit('dark-mode-toggle', this.darkMode);
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style lang='scss'>
@import "navbar.scss";
</style>
