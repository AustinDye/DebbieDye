<template>
  <TopSection />
  <BioSection />
  <ServicesSection />
  <ReviewsSwiper />

  <Footer />
</template>

<script>
import ServicesSection from "../components/ServicesSection.vue";
import Footer from "../components/Footer.vue";
import AboutPage from "./AboutPage.vue";
import BioSection from "../components/BioSection.vue";
import TopSection from "../components/TopSection.vue";
export default {
  name: "Home",
  components: { ServicesSection, Footer, AboutPage, BioSection, TopSection },
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";
</style>
