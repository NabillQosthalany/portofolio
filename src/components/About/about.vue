<script>
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {
    scrollToSection() {
      const yOffset = -150;
      const element = this.$refs.sectionRef;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>
<template>
  <div ref="sectionRef">
    <section data-aos="fade-up" class="text-center md:mt-40 mt-16">
      <h1 class="mb-5 md:text-3xl text-2xl font-semibold">About Me</h1>
      <p
        ref="sectionRef"
        class="text-gray-500 font-thin text-xs md:text-lg dark:text-gray-400"
      >
        A graduate of SMKN 4 Padalarang, majoring in Software Engineering,<br />
        Pioneering the Digital Frontier with Expertise in the MEVN Stack <br />
        Leveraging the Power of MongoDB for Agile Data Management, Leveraging
        <br />
        Express for Powerful Back-end Development, Orchestrating Vue.js for a
        <br />
        Seamless Front-end Experience, and Maximizing the Potential of Node.js
        for
        <br />
        Scalable Applications and Safe <br />
      </p>
    </section>
  </div>
</template>