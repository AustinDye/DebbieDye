<template>
  <div class="parallax bg">
    <div class="word-wrapper text-info">
      <h1>Debbie Dye TC Services</h1>
      <span class="d-flex"
        ><div class="mdi mdi-format-quote-open"></div>
        <h5>Be a ray of sunshine in someones life to make it a brighter day</h5>
        <div class="mdi mdi-format-quote-close pt-1"></div
      ></span>
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
.bg::after {
  transform: translateZ(-1px) scale(1.8);
}

.parallax {
  min-height: 120vh;
}

.word-wrapper {
  position: absolute;
  z-index: 2;
  color: white;
  padding: 2em;
  width: 50vw;
  top: 30%;
  left: 10%;
  @media (max-width: 576px) {
    top: 10%;
    left: 0;
    width: auto;
  }
}
</style>
