<template>
  <div class="parallax bg container-fluid">
    <div class="spacer-20"></div>

    <div class="row d-flex bg-light">
      <div class="col-md-12 col-sm-12">
        <h1 class="text-center mt-5" v-scrollanimation>
          transaction coordination
        </h1>
        <p v-scrollanimation class="px-5 my-3">
          The job of a real estate agent is a lot like the two sides of a coin.
          There is the customer service aspect of the career, and then there is
          the transaction side. Both are as different as night and day but are
          both necessary to be a successful real estate agent. They are integral
          and must work together to close a successful deal and ensure everyone
          is satisfied with the ultimate outcome. The transaction coordinator
          works hard with the paperwork (both paper and electronic),
          coordination, phone calls, and other tasks. The agent handles the
          face-to-face customer service part of the job with the sellers,
          buyers, and others. A successful agent depends on their transaction
          coordinator and vice versa. The agent will show properties and focus
          on all aspects of real estate marketing while the transaction
          coordinator handles the behind-the-scenes tasks.
        </p>
      </div>
      <div class="col-md-12 d-flex align-items-center px-5">
        <div class="selling-point p-4">
          <h2 class="text-primary text-center p-4 fs-1 fw-bolder">
            Grow Your Buisness
          </h2>
          <b class="">
            Most agents hire a transaction coordinator in order to help them get
            more contracts signed. Agents view a transaction coordinator as an
            investment to grow their business
          </b>
        </div>
        <div class="selling-point p-4">
          <h2 class="text-primary text-center p-4 fs-1 fw-bolder">
            More Time Closing Deals
          </h2>
          <b>
            If you dislike the paperwork and attention to detail necessary for
            the closing process you will love having a TC. However, agents also
            want to use TC’s in order to “save themselves” from
            paperwork/administrative tasks and to ensure they can deliver
            fantastic service to clients
          </b>
        </div>
      </div>
      <div class="spacer-10" v-if="!mobile"></div>
      <!-- <div class="spacer-20"></div> -->
    </div>
    <div class="spacer-20" v-if="!mobile"></div>
    <div class="row bg position-relative">
      <div class="col-12 d-flex justify-content-center"></div>

      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div class="card card-1 contract">
          <div>
            <b v-scrollanimation class="fs-1">contract to close</b>
            <p v-scrollanimation class="text-body-mobile mt-3">
              Contract to Close is all about what happens once your contract has
              been accepted until the day of closing. Our goal is to ensure that
              you and your clients have a smooth transaction from executed
              contract to the closing table. We achieve this by assisting you
              with all of the daily details of your contracts once they have
              been executed. We ensure that all parties involved are updated
              with what is going on during the transactions, in addition to
              making sure deadline are being met and that we close on time. We
              are your assistants while you are out of the office doing what you
              do best—opening doors and selling homes! Let us take care of the
              paperwork.
            </p>
          </div>
          <h6 class="fs-2">
            Price per file : <span class="bubble">$250</span>
          </h6>
        </div>
      </div>

      <div
        class="col-md-6 p-5 d-flex justify-content-center align-items-center"
      >
        <div class="card card-2 pre-listing">
          <div>
            <b v-scrollanimation class="fs-1"
              >From pre-listing until contract to close</b
            >
            <p v-scrollanimation class="text-body-mobile mt-3">
              Instead of simply working through the closing and escrow services,
              we can help work from the very beginning of the pre-listing
              process and all the way until the home is sold. While the agent
              handles the face-to-face customer service part of the job with the
              sellers, buyers, and others, the transaction coordinator keeps an
              eye on the seller’s transactions, initial contract to the
              finalization of the agreement, and assists the real estate agent
              with preparing all materials such as pre-listing presentations,
              seller’s disclosures, listing agreement. They might also prepare
              the property’s comparative market analysis, research on old
              multiple listing service (MLS) listings, or pull an online
              property profile. We're available to work part or full-time, and
              can charge on an hourly or per-file basis.
            </p>
          </div>
          <h6 class="fs-2">
            Price per file : <span class="bubble">$250</span>
          </h6>
        </div>
      </div>

      <div class="review-angle-right"></div>
      <div class="review-angle-left"></div>
      <div class="angle-front"></div>
      <div class="angle-back"></div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  setup() {
    return {
      mobile: computed(() => {
        return window.screen.width <= 578;
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.parallax {
  min-height: 270vh;
}

.card {
  min-height: 100%;
  max-width: 40vw;
  border-radius: 0;
  z-index: 5;
  padding: 1em;
  outline: none;
  border: 0.2em black solid;
}

.selling-point {
  position: relative;
  min-height: 25vh;
  width: 50vw;
  bottom: 0em;
  border-radius: 0;
  z-index: 5;
}

.card-1 {
  box-shadow: -1em 1em 0em rgba($info, 0.6);
}
.card-2 {
  box-shadow: 1em 1em 0em rgba($info, 0.6);
}

.review-angle-right {
  width: 47vw;
  height: 100%;
  background: rgba($light, 1);
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0em;
}

.review-angle-left {
  width: 47vw;
  height: 100%;
  background: rgba($light, 1);
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0em;
}

.angle-front {
  z-index: 3;
  top: -10vh;
  border-bottom: 10vh transparent solid;
  border-right: 47vw rgba($light, 1) solid;

  border-top: 10vh transparent solid;
  position: absolute;
}

.angle-front {
  z-index: 3;
  top: -10vh;

  border-bottom: 10vh transparent solid;
  border-left: 47vw rgba($light, 1) solid;
  border-top: 10vh transparent solid;
  position: absolute;
}
.angle-back {
  z-index: 3;

  bottom: -10vh;
  border-bottom: 10vh transparent solid;
  border-left: 47vw rgba($light, 1) solid;
  border-top: 10vh transparent solid;
  position: absolute;
}

.angle-back {
  z-index: 3;

  bottom: -10vh;
  border-bottom: 10vh transparent solid;
  border-right: 47vw rgba($light, 1) solid;
  border-top: 10vh transparent solid;
  position: absolute;
}

.angle-card {
  z-index: 3;
  width: 100vw;
  top: -11vh;
  left: -1em;
  border-bottom: 10vh transparent solid;
  border-left: 30vw rgba($light, 1) solid;
  border-top: 10vh transparent solid;
  position: absolute;
}

.angle-card-2 {
  z-index: 2;
  width: 100vw;
  bottom: -10vh;
  left: -0.04em;
  border-bottom: 10vh transparent solid;
  border-left: 15vw rgba($light, 1) solid;
  border-top: 10vh transparent solid;
  position: absolute;
}

.angle-card-other {
  z-index: 3;
  width: 100vw;
  top: -11vh;
  right: -1em;
  border-bottom: 10vh transparent solid;
  border-right: 30vw rgba($light, 1) solid;
  border-top: 10vh transparent solid;
  position: absolute;
}

.angle-card-2-other {
  z-index: 2;
  width: 100vw;
  bottom: -10vh;
  right: -0.04em;
  border-bottom: 10vh transparent solid;
  border-right: 15vw rgba($light, 1) solid;
  border-top: 10vh transparent solid;
  position: absolute;
}
h6,
h2,
.card,
.p {
  z-index: 5;
}

.bubble {
  font-size: 6rem;
  color: rgba($secondary, 1);
}
.contract {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pre-listing {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 576px) {
  .parallax {
    min-height: 200vh;
  }
  .text-body-mobile {
    display: -webkit-box;
    line-clamp: 6;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.tagline {
  box-shadow: 0.2em 0.2em 0em rgba($info, 0.5);
  padding: 0.2em;
  outline: 0.06em black solid;
  background: rgba($light, 1);
}
</style>
