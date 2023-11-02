<template>
  <section ref='sectionRef' class='mt-15'>
    <h1 class='text-center mb-5'>Contact</h1>
    <v-container>
      <v-row>
        <v-col cols='12' sm='6' md='6'>
          <v-form data-aos='zoom-in' data-aos-delay='300'
          >
            <v-text-field label='Name' variant='outlined'></v-text-field>
            <v-text-field label='Email' variant='outlined'></v-text-field>
            <v-textarea
              name='input-7-1'
              variant='outlined'
              label='Message'
              auto-grow
            ></v-textarea>
            <v-btn class='text-white' block color='#00897B' data-aos='zoom-in' data-aos-delay='300'>Submit</v-btn>
          </v-form>
        </v-col>
        <v-col data-aos='fade-left' cols='12' md='6' v-if='isMobile'>
          <v-img class='mx-auto contact-img' src='../src/assets/images/Contact.png' min-width='400' />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    scrollToSection() {
      this.$refs.sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth >= 430;
    }
  }
};
</script>

<style scoped>
@import url(contact.scss);
</style>
