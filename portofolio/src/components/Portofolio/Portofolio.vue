<template>
  <section ref='sectionRef' data-aos='fade-right' class='mt-15 d-flex justify-center'>
    <v-card width='800px' height='400px'>
      <header>
        <div class='section-image d-flex flex-row'>
          <v-card-title class='mt-5 ml-5'>Portofolio</v-card-title>
          <div class='section-text'>
            <div class='parallelogram mt-7'>
              <h5 class='text'>Section</h5>
            </div>
          </div>
        </div>
        <p class='ml-8 font-weight-light'>some of the projects I've worked on</p>
      </header>
      <section>
        <div class='main-content'>
          <v-container>
            <v-row>
              <v-col cols='3' v-for='item in items' :key='item.id'>
                <v-img :src='item.src' />
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Portofolio',
  data() {
    return {
      items: [
        { id: 1, src: '../src/assets/images/Portofolio-1.png' },
        { id: 2, src: '../src/assets/images/Portofolio-1.png' },
        { id: 3, src: '../src/assets/images/Portofolio-1.png' },
        { id: 4, src: '../src/assets/images/Portofolio-1.png' },
        { id: 5, src: '../src/assets/images/Portofolio-1.png' },
        { id: 6, src: '../src/assets/images/Portofolio-1.png' }
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
@import url(portofolio.scss);
</style>
