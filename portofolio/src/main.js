import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import 'aos/dist/aos.css';

loadFonts();
createApp(App)
  .use(vuetify)
  .mount('#app');

