<template>
  <div class="parallax">
    <div class="word-wrapper text-dark">
      <h1>Hello World</h1>
      <span class="d-flex"
        ><div class="mdi mdi-format-quote-open"></div>
        <h5>It's possible that I am the god of parallax</h5>
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
//top section
.word-wrapper {
  position: absolute;
  z-index: 2;
  color: white;
  padding: 2em;
  width: 50vw;
  top: 30%;
  left: 10%;
}
</style>
