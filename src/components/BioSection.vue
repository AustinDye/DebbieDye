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
        </div>
      </div>
      <div class="angle-front parallax"></div>
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
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

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

.angle-front {
  z-index: 5;
  width: 100vw;
  top: 45vh;
  border-bottom: 15vh transparent solid;
  border-left: 120vw rgba($secondary, 1) solid;
  border-top: 30vh transparent solid;
  position: absolute;

  &:hover {
    border-left: 120vw rgba($secondary, 1) solid;
    border-bottom: 100vh transparent solid;
  }

  .bio-text {
    opacity: 1;
  }
}

.angle-back {
  z-index: 1;
  width: 100vw;
  min-height: 20vh;
  top: 40vh;
  border-bottom: 15vh transparent solid;
  border-left: 120vw rgba($secondary, 0.5) solid;
  border-top: 30vh transparent solid;
  position: absolute;
}
.no-parallax {
  min-height: 200vh;
}

.parallax {
  min-height: 20vh;
}

.angle {
  z-index: 1;
  width: 60vw;
  top: 0;
  border-top: 30vh solid rgba($primary, 0.3);
  border-left: 60vw transparent solid;
  position: absolute;
}
</style>
