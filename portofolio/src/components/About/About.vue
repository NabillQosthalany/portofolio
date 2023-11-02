<template>
  <section ref='sectionRef'>
    <v-container>
      <v-row justify='center'>
        <v-col cols='12' sm='6' lg='6' class='my-auto'>
          <v-card class='rounded-xl' max-width='550' height='150' flat>
            <v-card-title class='text-center text-h4 text-grey-darken-1'>About Me</v-card-title>
            <v-card-subtitle class='responsive-text text-center text-subtitle-1 '>I am a front end web developer with a
              passion
              <br>
              for creating digital and interactive experiences.
              <br>
              If you're interested in collaborating or just want
              <br>
              more sessions,feel free to contact me via the contact
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols='12' sm='6' lg='6' md='6'>
          <v-card class='rounded-xl' max-width='411' height='428' flat>
            <div class='about-img'>
              <v-img
                aspect-ratio='1/1'
                src='../src/assets/images/about-img.png'
                cover
                class='ma-0 pa-0' width='412' height='428' />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      isMounted: false
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 430;
    }
  },
  methods: {
    scrollToSection() {
      this.$refs.sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
@import "about.scss";
</style>
