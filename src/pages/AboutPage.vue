<template>
  <div class="row">
    <div class="col-12">
      <div class="top-box position-absolute bg-info"></div>
    </div>
    <div class="white-line"></div>
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="hidden-text">
        <h1 class="text-center">Simple is the new sexy</h1>

        <i class="mdi pt-5 fs-5 text-danger mdi-square"></i>
      </div>
    </div>
    <div class="col-12">
      <div class="bottom-box bg-info position-absolute"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";
.hidden-text {
  padding-top: 10em;
  display: flex;
  color: rgba(0, 0, 0, 0);
  transition: all 1000ms;
  transition-delay: 1500ms;
}
.effect-container {
  width: 100vw;
  height: 25vh;
}
.top-box {
  height: 100px;
  width: 100%;
  transition: all 1000ms;
  transition-delay: 1000ms;
}
.bottom-box {
  height: 100px;
  width: 100vw;
  top: 13vh;
  transition: all 1000ms;
  transition-delay: 1000ms;
}

.white-line {
  top: 12vh;
  left: 50vw;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  height: 0px;
  width: 50px;
  transition: all 1000ms;
}
.row {
  width: 100vw;
  &:hover {
    .top-box {
      height: 0px;
      width: 100vw;
    }
    .bottom-box {
      height: 0;
      top: 25vh;
      width: 100%;
    }

    .white-line {
      height: 5px;
      width: 100vw;
      left: 0;
    }
    .hidden-text {
      color: black;
      display: flex;
      padding-top: 3em;
    }
  }
}
</style>
