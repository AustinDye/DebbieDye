<template>
  <div class="row parallax">
    <div
      class="col-md-7 col-lg-7 blue d-flex pe-5 justify-content-center align-items-center"
    >
      <div class="ps-lg-5 ms-lg-5 ps-5 about-holder">
        <h1 class="">Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
          tempore repellat repudiandae ut aperiam atque molestias fuga dolorem
          dolor dolorum odit, totam doloribus nam delectus! Deleniti molestias
          soluta aliquid. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Soluta ipsa tempore repellat repudiandae ut aperiam atque
          molestias fuga dolorem dolor dolorum odit, totam doloribus nam
          delectus! Deleniti molestias soluta aliquid.
        </p>
      </div>
    </div>

    <div class="col-md-5 py-5 position-relative angle-img-holder">
      <div>
        <div class="angle3"></div>
        <div class="angle2"></div>
        <div class="angle4"></div>
        <div class="angle"></div>
        <img
          class="head-img"
          src="src/assets/img/stock-photo-remove-bg.png"
          alt=""
        />
      </div>
    </div>

    <div class="col-12 p-5" v-scrollanimation>
      <span class="d-flex justify-content-between align-items-center my-5">
        <div class="text-center info-square-1 position-relative">
          <span class="d-flex ps-3">
            <div class="mdi mdi-format-quote-open"></div>
            <h5>Amazing</h5>

            <div class="mdi mdi-format-quote-close"></div
          ></span>
          <p class="position-absolute third-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            tempore debitis, eum deserunt temporibus odio expedita, magnam, amet
            dolor doloribus minima deleniti impedit obcaecati. Harum porro sunt
            exercitationem consectetur impedit!
          </p>
        </div>
        <div class="text-center info-square-2 position-relative">
          <span class="d-flex ps-3 text-light">
            <div class="mdi mdi-format-quote-open"></div>
            <h5>Amazing</h5>

            <div class="mdi mdi-format-quote-close"></div
          ></span>
          <p class="position-absolute third-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            tempore debitis, eum deserunt temporibus odio expedita, magnam, amet
            dolor doloribus minima deleniti impedit obcaecati. Harum porro sunt
            exercitationem consectetur impedit!
          </p>
        </div>

        <div class="text-center info-square-4 position-relative">
          <span class="d-flex ps-3">
            <div class="mdi mdi-format-quote-open"></div>
            <h5>Amazing</h5>

            <div class="mdi mdi-format-quote-close"></div
          ></span>
          <p class="position-absolute third-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            tempore debitis, eum deserunt temporibus odio expedita, magnam, amet
            dolor doloribus minima deleniti impedit obcaecati. Harum porro sunt
            exercitationem consectetur impedit!
          </p>
        </div>
      </span>
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

.parallax {
  transition: all 1s;
}

.angle-img-holder {
}
.card-span {
  max-width: 60vw;
  overflow: scroll;
}

.about-holder {
}
.card-holder {
  margin-top: 40vh;
  left: 5vw;
  z-index: 15;
}

.before-enter {
  min-height: 0;
  transition: all 1500ms ease;
}

.enter {
  min-height: 30vh;
  transition-delay: 0.08s;
}
.third-text {
  opacity: 0;
}
.info-square-1,
.info-square-2,
.info-square-3,
.info-square-4 {
  background-color: rgb($secondary, 0.8);
  border: 0.3em rgba($primary, 0.2) solid;
  border-radius: 15px;
  padding: 2em;
  transition: all 1s;
  width: 25vw;
  height: 10em;
  margin-right: 2em;
  &:hover {
    width: 400px;
    height: 380px;
    background-color: rgb($light, 1);
    > .third-text {
      opacity: 1;
    }
  }
}

.info-square {
  border-radius: 50% 50% 0% 0%;
}

@media (max-width: 1000px) {
  .word-wrapper {
    left: 16vw;
    top: 10vh;
    width: 80vw;
  }
}

//about section
.second {
  height: 100vh;
  top: 86%;
  z-index: 5;
}

.blue {
  z-index: 5;
  color: black;
  height: 80vh;
  background-color: rgb(255, 249, 241);
  box-shadow: 20px 0px 2px rgba($primary, 0.9);
  border-right: 10px rgba($primary, 0.8) solid;
  outline: 10px rgba($primary, 1) solid;
  border-radius: 0%20% 20% 0%;
}

.head-img {
  z-index: 10;
  height: 70vh;
  margin-left: 18%;
  position: absolute;
  background: rgba($primary, 0.6);
  border-left: 10px rgba($primary, 0.8) solid;
  border-right: 10px rgba($primary, 0.8) solid;
  box-shadow: 0px 10px 2px 5px rgba($primary, 0.8);

  border-radius: 10%;
}

.angle,
.angle2,
.angle3,
.angle4 {
  z-index: 3;
  width: 60vw;
  left: -20em;
  border-bottom: 50vw transparent solid;
  border-top: 17vh solid rgba($primary, 0.5);
  position: absolute;
}

.angle2 {
  border-top: 35vh solid rgba($primary, 0.5);
  z-index: 2;
}

.angle3 {
  z-index: 2;
  border-top: 55vh solid rgba($primary, 0.3);
}

.angle4 {
  z-index: 1;
  border-top: 70vh solid rgb(221, 237, 255);
}

@media (max-width: 1100px) {
  .angle {
    border-top: 10vh solid rgba($primary, 0.2);
    border-right: 0em solid transparent;
    position: relative;
    z-index: 0;
  }
  .angle2 {
    border-top: 10vh solid rgba($secondary, 0.8);
    border-right: 0em solid transparent;
    position: relative;
    z-index: 0;
  }

  .angle3 {
    z-index: 0;
    border-top: 10vh solid rgba($secondary, 1);
    border-right: 0vw solid transparent;
    position: relative;
  }

  .angle4 {
    z-index: 0;
    border-top: 10vh solid rgba($secondary, 0.4);
    border-right: 0vw solid transparent;

    position: relative;
  }

  .head-img {
    bottom: 0;
    z-index: 1;
    left: -20vw;
    width: 650px;
  }

  .blue {
    height: 65vh;
    background-color: rgba($secondary, 1);
  }
}

@media (max-width: 760px) {
  .about-holder {
    padding-top: 3em;
  }
  .head-img {
    bottom: 0;
    z-index: 1;
    left: 0;
    width: 425px;
  }

  .angle {
    border-top: 17vh solid rgba($primary, 0.2);
    border-right: 0em solid transparent;
    position: relative;
    z-index: 0;
  }
  .angle2 {
    border-top: 17vh solid rgba($primary, 0.8);
    border-right: 0em solid transparent;
    position: relative;
    z-index: 0;
  }

  .angle3 {
    z-index: 0;
    border-top: 17vh solid rgba($primary, 1);
    border-right: 0vw solid transparent;
    position: relative;
  }

  .angle4 {
    z-index: 0;
    border-top: 17vh solid rgba($primary, 0.4);
    border-right: 0vw solid transparent;

    position: relative;
  }
}
</style>
