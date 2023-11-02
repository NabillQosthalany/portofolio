// store/index.js
import { createStore } from 'vuex';

const state = {
  activeSection: null // Bagian yang sedang aktif
};

const mutations = {
  setActiveSection(state, section) {
    state.activeSection = section;
  }
};

export default createStore({
  state,
  mutations
});
