<template>
  <div class="row no-parallax bg-white bio-section">
    <div class="col-12 position-relative">
      <div class="row">
        <div class="col-6 d-flex justify-content-center r">
          <div class="d-block pt-5 mt-4">
            <h1>Debbie Dye</h1>
            <div class="color-splash"></div>
            <h2>Transaction Coordination</h2>
          </div>
        </div>
        <div class="col-6 position-relative">
          <img
            class="head-img"
            src="src/assets/img/stock-photo-remove-bg.png"
            alt=""
          />
          <div class="angle"></div>
          <div class="angle-2"></div>
        </div>
      </div>
      <div class="angle-front"></div>
      <div class="bio-text w-50">
        <p class="fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          accusantium veritatis cumque iure culpa, repellendus magnam fugit
          debitis natus voluptatum velit voluptas mollitia!
        </p>
        <div class="btn d-flex ms-5">
          Read Reviews
          <div class="mdi text-dark ms-2 mdi-arrow-down"></div>
        </div>
      </div>
      <div class="angle-back"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";
.bio-section {
  &:hover {
    .background-text {
    }
  }
}

.head-img {
  z-index: 2;
  height: 60vh;
  margin-left: 18%;
  border-radius: 10%;
  position: absolute;
  bottom: -40vh;
}
.color-splash {
  border-top: 0.5em transparent solid;
  border-bottom: 0.5em transparent solid;
}

.bio-text {
  top: 62vh;
  margin-left: 5em;
  z-index: 10;
  position: absolute;
  color: white;
}

.bck-txt {
  z-index: 0;

  margin-right: 5em;
}
.angle-bottom {
  z-index: 100;
  width: 100vw;
  top: 90vh;
  border-bottom: 15vh transparent solid;
  border-right: 100vw rgba($primary, 1) solid;
  border-top: 30vh transparent solid;
  position: absolute;
}
.angle-front {
  z-index: 5;
  width: 100vw;
  top: 45vh;
  border-bottom: 15vh transparent solid;
  border-left: 120vw rgba($primary, 1) solid;
  border-top: 30vh transparent solid;
  position: absolute;
  &:hover {
    border-bottom: 0vh transparent solid;
  }
  .bio-text {
    opacity: 1;
  }
}

.angle-back {
  z-index: 1;
  width: 100vw;
  min-height: 20vh;
  top: 45vh;
  border-bottom: 15vh transparent solid;
  border-left: 120vw rgba($primary, 0.7) solid;
  border-top: 25vh transparent solid;
  position: absolute;
}
.no-parallax {
  min-height: 100vh;
}

.angle {
  z-index: 1;
  width: 60vw;
  top: 0;
  border-top: 30vh solid rgba($primary, 0.7);
  border-left: 60vw transparent solid;
  position: absolute;
}
.angle-2 {
  z-index: 2;
  width: 60vw;
  top: 0;
  border-top: 25vh solid rgba($primary, 1);
  border-left: 60vw transparent solid;
  position: absolute;
}

.background-text {
  bottom: 1em;
  z-index: 0;
  font-size: 2em;
  rotate: -6deg;
  margin-left: 5em;
  width: 75vw;
  overflow-x: scroll;
  white-space: nowrap;
}
</style>
