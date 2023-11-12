<script>
import SButton from "../../Button/button.vue";
export default {
  name: "Navlink",
  components: {
    SButton,
  },
  data() {
    return {};
  },
  props: {
    activeSectionRef: String,
  },
  methods: {
    goToSection(sectionRef) {
      this.$emit("scrollToSection", sectionRef);
    },
  },
};
</script>
<template></template>

