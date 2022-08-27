<template>
  <div class="container-fluid no-parallax">
    <div class="row main-row">
      <div class="trap-shape"></div>
      <div class="trap-shape-2"></div>
      <div class="back-square"></div>

      <!--
      <div class="col-md-12 d-flex position-relative justify-content-center">
        <div class="card section-head text-center">
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
      </div>

      <div class="col-6 d-flex position-relative justify-content-center">
        <img
          src="src/assets/img/stock-photo-remove-bg.png"
          alt=""
          class="head-img"
        />
        <div class="card-1 p-4">
          <p class="big-bio-text">
            I believe my background in mortgage lending has given me an
            advantage to understand the full process of what takes place from
            contract to closing on all levels.
          </p>
        </div>
        <div class="trap-shape"></div>
      </div>

      <div class="col-6 d-flex position-relative justify-content-center">
        <div class="card-2 p-4">
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
            I have always enjoyed a challenge. On a personal level, I like to
            golf, play cards with friends and family and just recently started
            doing watercolor painting with my grandchildren.
          </p>
        </div>

        <div class="trap-shape-2"></div>
      </div>-->

      <div
        class="col-12 d-flex justify-content-center align-items-center position-absolute section-head"
      >
        <div class="text-center">
          <h2 class="">
            Over 14 yrs experience as a Real Estate Transaction Coordinator
          </h2>

          <b class="fs-4 text-secondary">
            I enjoy assisting agents with the details of their transactions, so
            they can be out doing what they love.
          </b>
        </div>
      </div>
      <div
        class="col-12 d-flex justify-content-center align-items-center position-absolute image-holder"
      >
        <img
          src="src/assets/img/stock-photo-remove-bg.png"
          alt=""
          class="head-img"
        />
        <div class="card card-1">
          <p class="p-4 fs-4">
            I believe my background in mortgage lending has given me an
            advantage to understand the full process of what takes place from
            contract to closing on all levels.
          </p>
        </div>
      </div>
      <div class="col-12 justify-content-center bio-holder">
        <p class="">
          In the past I was a realtor and realized that my giftings were in
          taking care of all the details of the transaction. An opportunity
          arose for me to become an underwriting assistant for a wholesale
          lender. With that position, I leaned in, asked a lot of questions and
          learned what an underwriter was looking for in a loan file. After
          about 6 months, I transitioned into a loan processor and within a
          couple of years my manager asked me to be a back-up
          underwriter/processor/closer. One of my specialties was in FHA 203 k
          rehab loans. Most of my colleagues avoided those types of loans, but I
          have always enjoyed a challenge. On a personal level, I like to golf,
          play cards with friends and family and just recently started doing
          watercolor painting with my grandchildren.
        </p>
      </div>
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

.no-parallax {
  min-height: 120vh;
  @media (max-width: 600px) {
    min-height: 250vh;
  }
}

.back-square {
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: rgba($light, 1);
  @media (max-width: 900px) {
    top: -30vh;
    right: 0;
  }
  @media (max-width: 600px) {
    position: absolute;
    top: 0vh;
    height: 230vh;
  }
}

.image-holder {
  z-index: 5;
  top: 20vh;
  @media (max-width: 900px) {
    top: -5vh;
  }
  @media (max-width: 600px) {
    position: absolute;
    top: 5vh;
  }
}

.card {
  border-radius: 0px;
  z-index: 5;
  outline: none;
  background: rgba($light, 1);
  border: 0em black solid;
}

.head-img {
  z-index: 10;
  padding-right: 2em;
  @media (max-width: 600px) {
    z-index: 3;
    position: absolute;
    top: 50vh;
  }
}
.card-1 {
  border-radius: 2.5px;
  background: rgba($light, 1);
  z-index: 5;
  border-right: 0.1em rgba(0, 0, 0, 0.528) solid;
  border-top: 0.1em rgba(0, 0, 0, 0.587) solid;
  box-shadow: -20vw 2em 0em rgba($info, 0.6);
  width: 40vw;
  font-size: 1.1em;
  @media (max-width: 600px) {
    width: 85vw;
    top: 80vh;
  }
}

.bio-holder {
  top: 80vh;
  position: absolute;
  z-index: 5;
  padding-left: 20em;
  padding-right: 20em;

  @media (max-width: 900px) {
    top: 40vh;
    padding-left: 6em;
    padding-right: 6em;
  }
  @media (max-width: 600px) {
    top: 135vh;
    margin-top: 2em;
    padding-left: 2em;
    padding-right: 2em;
  }
}

h2 {
  margin-top: 1em;
  font-size: 2.5em;
  font-family: "Unna", serif;
}

.section-head {
  top: -5vh;
  z-index: 5;
  @media (max-width: 900px) {
    top: -30vh;
  }
  @media (max-width: 600px) {
    top: 0vh;
    position: absolute;
  }
}

.trap-shape {
  border-bottom: 52vw solid rgba($light, 1);
  border-left: 2.5vh transparent solid;
  border-right: 2.5vh transparent solid;
  position: absolute;
  width: 120vh;
  left: -6vw;
  rotate: -90deg;
  z-index: 2;

  @media (max-width: 900px) {
    display: none;
  }
}
.trap-shape-2 {
  border-bottom: 52vw solid rgba($light, 1);
  border-left: 2.5vh transparent solid;
  border-right: 2.5vh transparent solid;
  position: absolute;
  width: 120vh;
  right: -6vw;
  rotate: 90deg;
  z-index: 2;
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 600px) {
  }
}
</style>
