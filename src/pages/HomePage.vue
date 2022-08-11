<template>
  <div class="row">
    <!--TODO  make sections into components-->
    <div class="col-md-12 bg-secondary w-100"><h1>Header</h1></div>

    <!--Top SECTION-->

    <div class="col-md-12 bg-primary d-flex p-0 position-relative">
      <img
        class=""
        src="src/assets/img/Screen Shot 2022-08-10 at 5.36.51 PM.png"
        alt=""
      />
      <div class="position-absolute word-wrapper text-white">
        <h1>Hello World</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
          tempore repellat repudiandae ut aperiam atque molestias fuga dolorem
          dolor dolorum odit, totam doloribus nam delectus! Deleniti molestias
          soluta aliquid.
        </h5>
      </div>
    </div>
    <!--About SECTION-->

    <div class="col-md-7 col-lg-6 blue d-flex pe-5 align-items-center">
      <div class="ps-lg-5 ms-lg-5 ps-5">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
          tempore repellat repudiandae ut aperiam atque molestias fuga dolorem
          dolor dolorum odit, totam doloribus nam delectus! Deleniti molestias
          soluta aliquid. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Soluta ipsa tempore repellat repudiandae ut aperiam atque
          molestias fuga dolorem dolor dolorum odit, totam doloribus nam
          delectus! Deleniti molestias soluta aliquid.
        </p>
        <span class="d-flex pt-lg-2 mt-lg-2 justify-content-between">
          <div class="rounded-circle bg-info text-center fs-1">content</div>
          <div class="rounded-circle bg-info text-center fs-1">content</div>
          <div class="rounded-circle bg-info text-center fs-1">
            content
          </div></span
        >
      </div>
    </div>

    <div class="col-md-5 p-0 angle-holder position-relative">
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
  <!--Services and Price SECTION-->
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-10">
        <h1 class="text-center">transaction coordination</h1>
        <p class="px-5 mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit rem
          porro consectetur distinctio exercitationem cupiditate repellat sequi,
          ut, optio, laboriosam sunt. Repellendus fuga consequatur
          necessitatibus cumque dolores fugiat assumenda illo? The job of a real
          estate agent is a lot like the two sides of a coin. There is the
          customer service aspect of the career, and then there is the
          transaction side. Both are as different as night and day but are both
          necessary to be a successful real estate agent. They are integral and
          must work together to close a successful deal and ensure everyone is
          satisfied with the ultimate outcome. The transaction coordinator works
          hard with the paperwork (both paper and electronic), coordination,
          phone calls, and other tedious tasks. The agent handles the
          face-to-face customer service part of the job with the sellers,
          buyers, and others. A successful agent depends on their transaction
          coordinator and vice versa. The agent will show properties and focus
          on all aspects of real estate marketing while the transaction
          coordinator handles the behind-the-scenes tasks.
        </p>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <div class="d-flex justify-content-center text-center">
            <h2 class="tagline">What's your timeline?</h2>
          </div>
        </div>
      </div>
      <div class="col-md-6 p-5">
        <div class="card contract p-4">
          <div>
            <b class="fs-1">contract to close</b>
            <p class="mt-3">
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
      <div class="col-md-6 p-5">
        <div class="card pre-listing p-4">
          <div>
            <b class="fs-1">From pre-listing until contract to close</b>
            <p class="mt-3">
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
      <div class="col-md-12 d-flex justify-content-center p-5">
        <!-- <div class="d-block p-2">
          <h1>Pricing</h1>
          <ul class="">
            <li></li>
            <li>Ipsum Ipsum Ipsum : $250</li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
  <div class="col-12 bg-primary w-100 h-25"><h1>Footer</h1></div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";

.bubble {
  font-size: 6rem;
  color: rgba($secondary, 1);
}

.contract {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
}

.pre-listing {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
}

.angle-holder {
  overflow: hidden;
}

.word-wrapper {
  z-index: 2;
  color: white;
  padding: 2em;
  width: 50vw;
  top: 30%;
  left: 45%;
}
.blue {
  z-index: 1;
  height: 85vh;
  background-color: rgba($primary, 0.8);
}

.second {
  height: 100vh;
  top: 86%;
  z-index: 5;
}

.head-img {
  z-index: 10;
  width: 800px;
  position: absolute;
}

.angle,
.angle2,
.angle3,
.angle4 {
  z-index: 3;
  border-top: 100% solid rgba($primary, 0.2);
  border-right: 80vw solid transparent;
  position: absolute;
}

.angle2 {
  border-top: 85vh solid rgba($primary, 1);
  border-right: 10vw solid transparent;
  z-index: 2;
  position: absolute;
}

.angle3 {
  z-index: 1;
  border-top: 85vh solid rgba($primary, 0.4);
  border-right: 40vw solid transparent;
  position: absolute;
}

.angle4 {
  z-index: 1;
  border-top: 85vh solid rgba($primary, 0.8);
  border-right: 20vw solid transparent;
  position: absolute;
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

@media (max-width: 1100px) {
  .angle {
    border-top: 10vh solid rgba($secondary, 0.2);
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
    width: 700px;
  }

  .word-wrapper {
    left: 16vw;
    top: 10vh;
    width: 80vw;
  }

  .blue {
    height: 65vh;
    background-color: rgba($secondary, 1);
  }
}
</style>
