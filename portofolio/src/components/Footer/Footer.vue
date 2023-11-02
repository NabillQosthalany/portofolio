<template>
  <v-footer
    data
    class='text-center d-flex flex-column'
  >
    <div>
      <v-btn
        v-for='icon in icons'
        :key='icon'
        class='mx-4'
        :icon='icon'
        variant='text'
      ></v-btn>
    </div>
    <v-divider></v-divider>
    <div>
      {{ new Date().getFullYear() }} — <strong>Nabil Qosthalany</strong>
    </div>
  </v-footer>
</template>
<script>
import AOS from 'aos';

export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  }),
  mounted() {
    AOS.init();
  }

};
</script>

<style scoped>
@import url(footer.scss);
</style>
