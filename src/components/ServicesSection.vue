<template>
  <div class="parallax bg container-fluid">
    <div class="spacer-10"></div>
    <div class="row d-flex bg-light justify-content-center">
      <div class="col-md-10 col-sm-12">
        <div class="title-item">
          <h1 class="text-center mt-5" v-scrollanimation>
            transaction coordination
          </h1>
          <p v-scrollanimation class="">
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
      <div class="col-md-10 col-sm-12">
        <div class="row selling-point-container">
          <div class="col-md-6">
            <div class="selling-point">
              <h2 class="text-secondary text-center fs-1 fw-bolder">
                Grow Your Buisness
              </h2>
              <p class="">
                Most agents hire a transaction coordinator in order to help them
                get more contracts signed. Agents view a transaction coordinator
                as an investment to grow their business
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="selling-point">
              <h2 class="text-secondary text-center fs-1 fw-bolder">
                More Time Closing Deals
              </h2>
              <p class="">
                If you dislike the paperwork and attention to detail necessary
                for the closing process you will love having a TC. However,
                agents also want to use TC’s in order to “save themselves” from
                paperwork or administrative tasks and to ensure they can deliver
                fantastic service to clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer-10" v-if="!mobile"></div>
      <!-- <div class="spacer-20"></div> -->
    </div>
    <div class="spacer-20" v-if="!mobile"></div>
    <div class="spacer-10" v-if="mobile"></div>
    <div class="row position-relative h-sm-50">
      <div class="col-lg-6">
        <div class="card-container-left">
          <div class="card card-1">
            <div>
              <h5 v-scrollanimation class="fs-1">Contract to Close</h5>
              <p v-scrollanimation class="text-body-mobile mt-3">
                Contract to Close is all about what happens once your contract
                has been accepted until the day of closing. Our goal is to
                ensure that you and your clients have a smooth transaction from
                executed contract to the closing table. We achieve this by
                assisting you with all of the daily details of your contracts
                once they have been executed. We ensure that all parties
                involved are updated with what is going on during the
                transactions, in addition to making sure deadline are being met
                and that we close on time.
              </p>
            </div>
            <h6 class="fs-2">
              Price per file : <span class="bubble">$350</span>
            </h6>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card-container-right">
          <div class="card card-2">
            <div>
              <h5 v-scrollanimation class="fs-1">Pre-listing to Close</h5>
              <p v-scrollanimation class="text-body-mobile mt-3">
                Instead of simply working through the closing and escrow
                services, we can help work from the very beginning of the
                pre-listing process and all the way until the home is sold.
                While the agent handles the face-to-face customer service part
                of the job with the sellers, buyers, and others, the transaction
                coordinator keeps an eye on the seller’s transactions, initial
                contract to the
              </p>
            </div>
            <h6 class="fs-2">
              Price per file : <span class="bubble">$350</span>
            </h6>
          </div>
        </div>
      </div>
      <div class="spacer-20"></div>
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
  position: relative;
  transform-style: preserve-3d;
  // min-height: fit-content;
  @media (min-width: 1400px) {
    min-height: 250vh;
  }
  @media (min-width: 1600px) and (max-height: 900px) {
    min-height: 275vh;
  }
  @media (min-width: 2000px) {
    min-height: 200vh;
  }

  @media (orientation: portrait) and (max-width: 1400px) {
    min-height: 275vh;
  }
  @media (orientation: landscape) and (max-width: 1400px) {
    min-height: 230vh;
  }
  @media (orientation: portrait) and (max-width: 1200px) {
    min-height: 280vh;
  }
  @media (orientation: landscape) and (max-width: 1400px) {
    min-height: 360vh;
  }
  @media (orientation: portrait) and (max-width: 1200px) {
    min-height: 220vh;
  }
  @media (orientation: portrait) and (max-width: 992px) {
    min-height: 300vh;
    // min-height: fit-content;
  }
  @media (orientation: portrait) and (max-width: 767px) {
    min-height: 300vh;
  }
  @media (orientation: portrait) and (max-width: 578px) {
    min-height: 470vh;
  }
  @media (max-height: 500px) and (orientation: landscape) {
    min-height: 500vh;
  }
}

.title-item p {
  padding-left: 6rem;
  padding-right: 6rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (orientation: portrait) and (max-width: 576px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 992px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 1400px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.title-item h1 {
  @media (max-width: 576px) {
    font-size: 4rem;
  }
}

.selling-point {
  position: relative;
  padding: 1rem;
  margin: 1rem;
  background: white;
  border-radius: 10px;
}

// .parallax .row:nth-child(2) {
//   @media (min-width: 110px) {
//     display: flex;
//     flex-direction: column;
//   }
// }

.card-container-left,
.card-container-right {
  z-index: 2;
  position: relative;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  @media (min-width: 110px) {
  }
  @media (max-width: 576px) {
    padding-bottom: 1rem;
  }
  :nth-child(2) {
    @media (max-width: 576px) {
      padding-top: 1rem;
    }
  }
}

.card-1,
.card-2 {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 80vh;
  background-color: #fff;
  // max-width: 35vw;
  z-index: 5;
  padding: 1em;
  outline: none;
  border: 0.2em black solid;
  justify-content: space-between;
  transition: ease 0.25s;
  @media (max-height: 500px) and (orientation: landscape) {
    max-width: none;
  }
  @media (orientation: portrait) and (max-width: 578px) {
    max-width: none;
  }
}

.card-1:hover,
.card-2:hover {
  scale: (1.01);
  cursor: pointer;
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

.card-container-left::after,
.card-container-right::after {
  content: "";
  border-bottom: 50.1vw solid rgba($light, 1);
  border-left: 2.5vh transparent solid;
  border-right: 2.5vh transparent solid;
  width: 90vh;
  rotate: -90deg;
  position: absolute;
  z-index: -1;
  @media (max-width: 1200px) {
  }
  @media (max-width: 992px) {
    border-bottom: 100vw solid rgba($light, 1);
  }
  @media (max-width: 768px) {
    border-bottom: 100vw solid rgba($light, 1);
  }
  @media (max-width: 576px) {
    border-bottom: 100vw solid rgba($light, 1);
  }
  @media (max-height: 500px) and (orientation: landscape) {
    border-bottom: 102.1vw solid rgba($light, 1);
    width: 130vh;
  }
}

.card-container-right::after {
  content: "";
  rotate: 90deg;
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
