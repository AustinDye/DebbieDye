<template>
  <div ref="Top"></div>
  <TopSection />
  <div ref="Bio"></div>
  <BioSection />
  <div ref="Services"></div>
  <ServicesSection />
  <div ref="Reviews"></div>
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
  methods: {
    scrollToElement(target) {
      console.log(target);
      let el = this.$refs[target];
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  components: { ServicesSection, Footer, AboutPage, BioSection, TopSection },
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";
</style>
