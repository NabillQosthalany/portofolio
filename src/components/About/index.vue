<script setup>
import { onMounted, ref } from "vue";

const sectionRef = ref(null);

onMounted(() => {
  const sectionEl = sectionRef.value;
  if (sectionEl) {
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});
</script>
<template>
  <section ref="sectionRef" class="text-center mt-40">
    <h1 class="mb-5 text-3xl font-semibold">About Me</h1>
    <p class="text-gray-500 font-thin">
      A graduate of SMKN 4 Padalarang, majoring in Software Engineering,<br />
      Pioneering the Digital Frontier with Expertise in the MEVN Stack <br />
      Leveraging the Power of MongoDB for Agile Data Management, Leveraging
      <br />
      Express for Powerful Back-end Development, Orchestrating Vue.js for a
      <br />
      Seamless Front-end Experience, and Maximizing the Potential of Node.js for
      <br />
      Scalable Applications and Safe <br />
    </p>
  </section>
</template>