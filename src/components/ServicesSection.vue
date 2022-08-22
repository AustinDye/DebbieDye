<template>
  <div class="parallax bg container-fluid">
    <div class="spacer-20"></div>

    <div class="row d-flex bg-light justify-content-center">
      <div class="col-10">
        <div class="title-item">
          <h1 class="text-center mt-5" v-scrollanimation>
            transaction coordination
          </h1>
          <p v-scrollanimation class="my-3">
            The job of a real estate agent is a lot like the two sides of a
            coin. There is the customer service aspect of the career, and then
            there is the transaction side. Both are as different as night and
            day but are both necessary to be a successful real estate agent.
            They are integral and must work together to close a successful deal
            and ensure everyone is satisfied with the ultimate outcome. The
            transaction coordinator works hard with the paperwork (both paper
            and electronic), coordination, phone calls, and other tasks. The
            agent handles the face-to-face customer service part of the job with
            the sellers, buyers, and others. A successful agent depends on their
            transaction coordinator and vice versa. The agent will show
            properties and focus on all aspects of real estate marketing while
            the transaction coordinator handles the behind-the-scenes tasks.
          </p>
        </div>
      </div>
      <div class="col-10 d-flex align-items-center px-5 mt-3">
        <div class="selling-point">
          <h2 class="text-secondary text-center fs-1 fw-bolder">
            Grow Your Buisness
          </h2>
          <p class="">
            Most agents hire a transaction coordinator in order to help them get
            more contracts signed. Agents view a transaction coordinator as an
            investment to grow their business
          </p>
        </div>
        <div class="selling-point">
          <h2 class="text-secondary text-center fs-1 fw-bolder">
            More Time Closing Deals
          </h2>
          <p>
            If you dislike the paperwork and attention to detail necessary for
            the closing process you will love having a TC. However, agents also
            want to use TC’s in order to “save themselves” from
            paperwork/administrative tasks and to ensure they can deliver
            fantastic service to clients
          </p>
        </div>
      </div>
      <div class="spacer-10" v-if="!mobile"></div>
      <!-- <div class="spacer-20"></div> -->
    </div>
    <div class="spacer-20" v-if="!mobile"></div>
    <div class="row position-relative">
      <div class="col-12 d-flex justify-content-center"></div>

      <div
        class="col-md-6 p-5 d-flex justify-content-center align-items-center"
      >
        <div class="card card-1">
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
        <div class="card card-2">
          <div>
            <b v-scrollanimation class="fs-1">From pre-listing until close</b>
            <p v-scrollanimation class="text-body-mobile mt-3">
              Instead of simply working through the closing and escrow services,
              we can help work from the very beginning of the pre-listing
              process and all the way until the home is sold. While the agent
              handles the face-to-face customer service part of the job with the
              sellers, buyers, and others, the transaction coordinator keeps an
              eye on the seller’s transactions, initial contract to the
              finalization of the agreement, and assists the real estate agent
              with preparing all materials such as pre-listing presentations,
              seller’s disclosures, listing agreement.
            </p>
          </div>
          <h6 class="fs-2">
            Price per file : <span class="bubble">$250</span>
          </h6>
        </div>
      </div>

      <div class="services-angle-right"></div>
      <div class="services-angle-left"></div>
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
  min-height: 260vh;
}

.title-item p {
  padding-left: 6rem;
  padding-right: 6rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.selling-point {
  position: relative;
  padding: 1rem;
  min-height: 45vh;
  width: 50vw;
  bottom: 0em;
  margin: 1rem;
  background: white;
  border-radius: 10px;
  z-index: 5;
  h2 {
    margin-top: 2rem;
  }
  p {
    padding: 3rem;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}
.col-md-6 {
  min-height: 85vh;
  @media (min-height: 1100px) {
    min-height: 70vh;
  }
}

.card {
  height: 80%;
  max-width: 35vw;
  z-index: 5;
  padding: 1em;
  outline: none;
  border: 0.2em black solid;
  justify-content: space-between;
  @media (orientation: portrait) {
    max-width: 100vw;
  }
  @media (min-height: 1100px) {
    height: 75%;
  }
}

.card div,
h6 {
  padding: 1rem;
}

.card-1 {
  box-shadow: -1em 1em 0em rgba($info, 0.6);
}
.card-2 {
  box-shadow: 1em 1em 0em rgba($info, 0.6);
}

.services-angle-right {
  border-bottom: 57vw solid rgba($light, 1);
  border-left: 2.5vh transparent solid;
  border-right: 2.5vh transparent solid;
  width: 80vh;
  rotate: -90deg;
  right: -1em;
  top: -16vh;
  position: absolute;
  z-index: 3;
}

.services-angle-left {
  border-bottom: 57vw solid rgba($light, 1);
  border-left: 2.5vh transparent solid;
  border-right: 2.5vh transparent solid;
  width: 80vh;
  rotate: 90deg;
  left: -1em;
  top: -16vh;
  position: absolute;
  z-index: 3;
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
  .card div,
  h6 {
    padding: 0;
  }
}

.tagline {
  box-shadow: 0.2em 0.2em 0em rgba($info, 0.5);
  padding: 0.2em;
  outline: 0.06em black solid;
  background: rgba($light, 1);
}
</style>
