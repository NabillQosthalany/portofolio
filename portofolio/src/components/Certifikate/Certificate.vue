<template>
  <section ref='sectionRef' data-aos='fade-left' class='mt-15 d-flex justify-center'>
    <v-card width='800px' height='400px'>
      <v-card-title class='mt-5 ml-5'>Certificate</v-card-title>
      <div class='carousel pa-5'>
        <v-carousel hide-delimiters show-arrows='hover' height='281'>
          <v-carousel-item
            cover
            v-for='(item,i) in items'
            :key='i'
          >
            <v-row>
              <v-col cols='5'>
                <v-card width='241' height='160' class='mt-15 ml-10'>
                  <v-img width='450' class='ma-auto' :src='item.image' />
                </v-card>
              </v-col>
              <v-col cols='7'>
                <div class='certificate-detail-text pa-5 mt-15'>
                  <div class='text-details'>
                    <h1 class='d-inline'>Name Certificate :</h1>
                    <h1 class='d-inline ml-2'> {{ item.name }} </h1>
                  </div>
                  <div class='text-details'>
                    <h1 class='d-inline'>Get Date :</h1>
                    <h1 class='d-inline ml-2'> {{ item.date }} </h1>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Certificate',
  data() {
    return {
      items: [
        {
          image: '../src/assets/images/Sertifikat-1.png',
          name: 'Build With Angga',
          date: '12-02-2023'
        },
        {
          image: '../src/assets/images/Sertifikat-1.png',
          name: 'Build With Randy',
          date: '12-02-2023'
        },
        {
          image: '../src/assets/images/Sertifikat-1.png',
          name: 'Build With Zaki',
          date: '12-02-2023'
        }
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
@import url(certifkate.scss);
</style>
