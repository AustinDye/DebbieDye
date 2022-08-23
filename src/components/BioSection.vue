<template>
  <div class="container-fluid no-parallax">
    <div class="row">
      <div class="col-md-12 d-flex position-relative justify-content-center">
        <div class="card card-2 text-center">
          <div class="text-bio-start">
            <h2>
              Over 14 yrs experience as a Real Estate Transaction Coordinator
            </h2>
          </div>
          <b class="fs-4 text-secondary">
            I enjoy assisting agents with the details of their transactions, so
            they can be out doing what they love.
          </b>
        </div>
        <div class="shadow-right"></div>
        <div class="shadow-left"></div>
      </div>

      <div
        class="col-md-12 col-lg-6 d-flex position-relative justify-content-center align-items-center"
      >
        <div class="review-angle-top"></div>
        <img
          src="src/assets/img/istockphoto-500161061-1024x1024.jpeg"
          alt=""
          class="head-img"
        />
        <div class="review-angle-bottom"></div>
      </div>
      <div
        class="col-md-12 col-lg-6 d-flex position-relative justify-content-center"
      >
        <div class="card-1 p-5 mt-4">
          <p class="big-bio-text mt-5">
            I believe my background in mortgage lending has given me an
            advantage to understand the full process of what takes place from
            contract to closing on all levels.
          </p>
          <div class="orange-text"></div>
          <p class="">
            In the past I was a realtor and realized that my giftings were in
            taking care of all the details of the transaction. An opportunity
            arose for me to become an underwriting assistant for a wholesale
            lender. With that position, I leaned in, asked a lot of questions
            and learned what an underwriter was looking for in a loan file.
            After about 6 months, I transitioned into a loan processor and
            within a couple of years my manager asked me to be a back-up
            underwriter/processor/closer. One of my specialties was in FHA 203 k
            rehab loans. Most of my colleagues avoided those types of loans, but
            I have always enjoyed a challenge.
          </p>
        </div>
      </div>
    </div>
    <div class="trap-shape"></div>
    <div class="trap-shape-2"></div>
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

.orange-text {
  border-bottom: 0.4em solid rgba($dark, 0.8);
  margin: 2em;
  margin-left: 4em;
  margin-right: 4em;
}

.text-bio-start {
  z-index: 5;
  font-size: 1.2em;
}
.big-bio-text {
  font-weight: 700;
  font-size: 1.4em;
  font-family: sans-serif;
}

.card {
  border-radius: 0px;
  z-index: 5;
  outline: none;
  background: rgba($light, 1);
  border: 0em black solid;
  @media (orientation: portrait) {
    max-width: 100vw;
  }
}

.card-1 {
  border-radius: 2.5px;
  position: absolute;
  z-index: 5;
  outline: none;

  top: 0;
  width: 70vh;
  font-size: 1em;
  @media (max-width: 1000px) {
    top: 30em;
  }
}

h2 {
  margin-top: 1em;
  font-size: 2.5em;
  font-family: "Unna", serif;
}

.card-2 {
  min-width: 70vw;
  max-height: 20vh;
  z-index: 6;
  top: 2vh;
  padding-bottom: 1em;
  background: rgba($light, 1);
  color: rgba($info, 1);
  border: 0.2em black solid;
  @media (max-width: 1000px) {
    top: -20vh;
    margin: 1em;
    max-height: 30vh;
  }
}

.shadow-left {
  height: 9.5em;
  width: 30em;
  position: absolute;
  z-index: 5;
  top: 5vh;
  left: 11.9%;
  background-color: rgba($info, 0.5);
  @media (max-width: 1000px) {
    display: none;
  }
}
.shadow-right {
  height: 9.5em;
  width: 30em;
  position: absolute;
  z-index: 5;
  top: 5vh;
  right: 11.9%;

  background-color: rgba($info, 0.5);
  @media (max-width: 1000px) {
    top: -7vh;
  }
}

.card-3 {
  font-size: 1.2em;
  top: 3.5em;
  min-width: 30vw;
  height: 24vh;
  z-index: 3;
  color: rgba($light, 0.8);
  background: rgba($primary, 1);
}

.row {
}

.title-text {
  z-index: 10;
  // color: darken($primary, 10);
}

.img-holder {
  z-index: 5;
}

.head-img {
  z-index: 3;
  position: absolute;
  height: 60vh;
  top: 6em;

  @media (max-width: 1000px) {
    top: -10em;
  }
}

.no-parallax {
  min-height: 100vh;
}

.trap-shape {
  border-bottom: 45vw solid rgba($light, 1);
  border-left: 2.5vh transparent solid;
  border-right: 2.5vh transparent solid;
  width: 100vh;
  rotate: -90deg;
  top: 10%;
  left: -2em;
  position: absolute;
  z-index: 2;
  @media (max-width: 1000px) {
    border-bottom: 50vw solid rgba($light, 1);
    rotate: 90deg;
    left: -22.2vw;
    width: 135vh;
    top: 25%;
  }
}
.trap-shape-2 {
  border-bottom: 45vw solid rgba($light, 1);
  border-left: 2.5vh transparent solid;
  border-right: 2.5vh transparent solid;
  width: 100vh;
  rotate: 90deg;
  right: -2em;
  top: 10%;
  position: absolute;
  z-index: 2;
  @media (max-width: 1000px) {
    border-bottom: 50vw solid rgba($light, 1);
    rotate: -90deg;
    right: -22.2vw;
    width: 135vh;
    top: 25%;
  }
}
</style>
