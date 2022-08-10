<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 bg-primary blue d-flex p-0">
        <div class="angle-other-3 position-absolute"></div>
        <div class="angle-other-2 position-absolute"></div>
        <div class="angle-other-4 position-absolute"></div>
        <div class="position-absolute word-wrapper">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
            tempore repellat repudiandae ut aperiam atque molestias fuga dolorem
            dolor dolorum odit, totam doloribus nam delectus! Deleniti molestias
            soluta aliquid.
          </p>
        </div>
      </div>
      <div class="col-md-6 d-flex p-0">
        <div class="angle3 position-absolute"></div>
        <div class="angle2 position-absolute"></div>
        <div class="angle4 position-absolute"></div>
        <div class="angle"></div>
        <img
          class="head-img position-absolute"
          src="src/assets/img/stock-photo-remove-bg.png"
          alt=""
        />
      </div>

      <div
        class="
          col-12
          text-center
          bg-secondary
          second
          position-absolute
          second-section
        "
      >
        <h1>Glabglogabgalab</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.word-wrapper {
  z-index: 2;
  width: 550px;
  top: 25%;
  left: 10%;
}
.blue {
  height: 85vh;
}

.second {
  height: 100vh;
  top: 86%;
  z-index: 5;
}

.head-img {
  z-index: 5;
  width: 550px;
  top: 5.6em;
}
.img-col {
}
.angle,
.angle2,
.angle3,
.angle4 {
  z-index: 3;
  border-top: 85vh solid rgba($primary, 0.2);
  border-right: 80vw solid transparent;
}

.angle-other-2,
.angle-other-3,
.angle-other-4 {
}

.angle-other-2 {
}
.angle-other-3 {
}
.angle-other-4 {
}

.angle2 {
  border-top: 85vh solid rgba($primary, 1);
  border-right: 10vw solid transparent;
  z-index: 2;
}

.angle3 {
  z-index: 1;
  border-top: 85vh solid rgba($primary, 0.4);
  border-right: 40vw solid transparent;
}

.angle4 {
  z-index: 1;
  border-top: 85vh solid rgba($primary, 0.8);
  border-right: 20vw solid transparent;
}

.top-card {
  position: absolute;
  left: 200px;
  width: 30em;
}

.sash {
  height: 25em;
  width: 100%;
  top: 20em;
  left: -11em;
  transform: rotate(140deg);
  z-index: 1;
}
</style>
