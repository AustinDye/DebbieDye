<template>
  <div class="no-parallax container-fluid bg-light">
    <div class="spacer-10"></div>
    <div class="row d-flex justify-content-center">
      <h1 class="text-center mb-md-4">Reviews</h1>
      <div class="col-10">
        <div class="swiper-container">
          <swiper
            :modules="modules"
            :pagination="true"
            :slides-per-view="1"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="mySwiper"
          >
            <swiper-slide
              ><div class="swiper-box">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur nostrum dolorem eum inventore? Maiores molestiae
                  nisi iure assumenda alias, facere architecto esse quasi
                  similique? Magni molestiae repellat sunt pariatur et! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
                  deserunt necessitatibus minima porro molestias, enim
                  provident, praesentium sequi voluptatibus voluptatem culpa
                  quisquam adipisci ipsam. Voluptates quibusdam veniam et
                  laborum?
                </p>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="swiper-box">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur nostrum dolorem eum inventore? Maiores molestiae
                  nisi iure assumenda alias, facere architecto esse quasi
                  similique? Magni molestiae repellat sunt pariatur et! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
                  deserunt necessitatibus minima porro molestias, enim
                  provident, praesentium sequi voluptatibus voluptatem culpa
                  quisquam adipisci ipsam. Voluptates quibusdam veniam et
                  laborum?
                </p>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="swiper-box">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur nostrum dolorem eum inventore? Maiores molestiae
                  nisi iure assumenda alias, facere architecto esse quasi
                  similique? Magni molestiae repellat sunt pariatur et! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
                  deserunt necessitatibus minima porro molestias, enim
                  provident, praesentium sequi voluptatibus voluptatem culpa
                  quisquam adipisci ipsam. Voluptates quibusdam veniam et
                  laborum?
                </p>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="swiper-box">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur nostrum dolorem eum inventore? Maiores molestiae
                  nisi iure assumenda alias, facere architecto esse quasi
                  similique? Magni molestiae repellat sunt pariatur et! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
                  deserunt necessitatibus minima porro molestias, enim
                  provident, praesentium sequi voluptatibus voluptatem culpa
                  quisquam adipisci ipsam. Voluptates quibusdam veniam et
                  laborum?
                </p>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="swiper-box">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur nostrum dolorem eum inventore? Maiores molestiae
                  nisi iure assumenda alias, facere architecto esse quasi
                  similique? Magni molestiae repellat sunt pariatur et! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
                  deserunt necessitatibus minima porro molestias, enim
                  provident, praesentium sequi voluptatibus voluptatem culpa
                  quisquam adipisci ipsam. Voluptates quibusdam veniam et
                  laborum?
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>


<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";
.no-parallax {
  min-height: 60vh;
}
.parallax {
  min-height: 50vh;
  @media (max-width: 576px) {
    min-height: 80vh;
  }
}

.spacer-10 {
  position: relative;
}

.spacer-10::after {
  content: "";
  background: $secondary;
  height: 50%;
  width: 90%;
  top: 0;
  left: 0;
  position: absolute;
}

.mySwiper {
  height: 25vh;
  z-index: 5;
  text-align: center;
  @media (max-width: 576px) {
    min-height: 55vh;
  }
}

.swiper-container {
  padding: 1rem;
  background: white;
  border-radius: 3px;
  @media (max-width: 576px) {
    padding: 1.5rem;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-box {
  padding: 1rem;
  outline: none;
  border: 0.2em black solid;
  height: 80%;
  width: 90%;
  box-shadow: -1em 1em 0em rgba($info, 0.6);
}
</style>