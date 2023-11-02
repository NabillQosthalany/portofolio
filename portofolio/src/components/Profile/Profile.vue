<template>
  <section ref='sectionRef' class='mb-15 mt-15'>
    <v-row>
      <v-col cols='12' sm='4' md='6' xs='12' class='d-flex justify-center'>
        <div class='main-content-text'>
          <h1 class='name-text pb-4'>Hello, I'm Nabil Qosthalany</h1>
          <h1 :class="{ 'font-dark-mode': darkMode, 'font-light-mode': !darkMode }" class='text-h5 pb-4'>Front - End Web
            Developer</h1>
          <h1 class='skills-text'>Strengthening User Experience Though Code</h1>
        </div>
      </v-col>
      <v-col cols='12' sm='4' md='6' xs='12' class='d-flex justify-end'>
        <div class='main-content-image'>
          <v-img
            cover
            class='avatar-image mt-10'
            src='../src/assets/images/AvatarLogo.png' />
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>

export default {
  name: 'Profile',
  props: {
    darkMode: Boolean
  },
  methods: {
    scrollToSection() {
      this.$refs.sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style lang='scss'>
@import "profile.scss";
</style>
