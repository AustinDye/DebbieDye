<template>
  <div class="container-fluid no-parallax">
    <div class="spacer-20"></div>
    <div class="row justify-content-center align-items-center p-5">
      <div class="review-angle-right"></div>
      <div class="review-angle-left"></div>
      <div class="angle-front"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.no-parallax {
  min-height: 70vh;
  background-color: rgba($light, 1);
  z-index: 1;
  overflow: hidden;
}

q {
  font-size: 1.4em;
}

.review-angle-right {
  width: 57vw;
  height: 120%;
  background: rgba($primary, 0.2);
  position: absolute;
  z-index: 3;
  top: -2em;
  right: -10em;
  rotate: -10deg;
}

.review-angle-left {
  width: 57vw;
  height: 120%;
  background: rgba($secondary, 0.2);
  position: absolute;
  z-index: 3;
  top: 0;
  left: -10em;
  rotate: -10deg;
}

.review-text {
  z-index: 6;
  position: relative;
  width: 35vw;
}

.angle-front {
  z-index: 3;
  width: 100vw;
  top: 60vh;
  border-bottom: 20vh transparent solid;
  border-right: 120vw rgba($light, 1) solid;
  border-top: 10vh transparent solid;
  position: absolute;
}
</style>
