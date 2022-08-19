<template>
  <div class="container-fluid no-parallax">
    <div class="spacer-20"></div>
    <div class="row justify-content-center align-items-center">
      <div class="col-6 px-5">
        <p>
          In the past I was a realtor and realized that my giftings were in
          taking care of all the details of the transaction. An opportunity
          arose for me to become an underwriting assistant for a wholesale
          lender. With that position, I leaned in, asked a lot of questions and
          learned what an underwriter was looking for in a loan file. After
          about 6 months, I transitioned into a loan processor and within a
          couple of years my manager asked me to be a back-up
          underwriter/processor/closer. One of my specialties was in FHA 203 k
          rehab loans. Most of my colleagues avoided those types of loans, but I
          have always enjoyed a challenge. I believe my background in mortgage
          lending has given me an advantage to understand the full process of
          what takes place from contract to closing on all levels. On a personal
          level, I like to golf, play cards with friends and family and just
          recently started doing watercolor painting with my grandchildren.
        </p>
      </div>
      <div class="col-6">
        <p>
          Most agents hire a transaction coordinator in order to help them get
          more contracts signed.
        </p>
        <b>
          However, agents also want to use TC’s in order to “save themselves”
          from paperwork/administrative tasks and to ensure they can deliver
          fantastic service to clients
        </b>
        <p>
          If you dislike the paperwork and attention to detail necessary for the
          closing process you will love having a TC.
        </p>
        <b
          >Agents view a transaction coordinator as an investment to grow their
          business.</b
        >
      </div>
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
  width: 50vw;
  height: 120%;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  z-index: 3;
  top: -2em;
  right: -1em;
}

.review-angle-left {
  width: 50vw;
  height: 120%;
  background: rgba($secondary, 0.7);
  position: absolute;
  z-index: 3;
  top: 0;
  left: -1em;
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
