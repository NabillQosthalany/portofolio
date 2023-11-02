<template>
  <section ref='sectionRef' class='mt-15 d-flex justify-center'>
    <v-card data-aos='fade-up' width='600px' height='440px'>
      <v-card-title class='mt-5 ml-5'>Skills</v-card-title>
      <v-card-subtitle class='ml-5'>hover icon and you will see something different</v-card-subtitle>
      <v-card-text class='mt-5'>
        <v-row>
          <v-col data-aos='zoom-in' data-aos-delay='300' class='ma-auto' cols='3' v-for='image in images'
                 :key='image.id'>
            <div class='skills-image d-flex justify-center ma-auto'>
              <v-img class='animated-image' :src='image' :width="image.id === 4 || image.id === 8 ? '135' : '100'" />
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      images: [
        { id: 1, src: '../src/assets/images/Html.png' },
        { id: 2, src: '../src/assets/images/css.png' },
        { id: 3, src: '../src/assets/images/js.png' },
        { id: 4, src: '../src/assets/images/boostrap.png' },
        { id: 5, src: '../src/assets/images/scss.png' },
        { id: 6, src: '../src/assets/images/vuetify.png' },
        { id: 7, src: '../src/assets/images/Vue.png' },
        { id: 8, src: '../src/assets/images/Nuxt.png' }
      ]
    };
  },
  methods: {
    scrollToSection() {
      this.$refs.sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
@import url('skills.scss');
</style>
