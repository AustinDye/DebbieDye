<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-8">
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
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur nostrum dolorem eum inventore? Maiores molestiae nisi
              iure assumenda alias, facere architecto esse quasi similique?
              Magni molestiae repellat sunt pariatur et! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quia cumque deserunt
              necessitatibus minima porro molestias, enim provident, praesentium
              sequi voluptatibus voluptatem culpa quisquam adipisci ipsam.
              Voluptates quibusdam veniam et laborum?</swiper-slide
            >
            <swiper-slide
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur nostrum dolorem eum inventore? Maiores molestiae nisi
              iure assumenda alias, facere architecto esse quasi similique?
              Magni molestiae repellat sunt pariatur et! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quia cumque deserunt
              necessitatibus minima porro molestias, enim provident, praesentium
              sequi voluptatibus voluptatem culpa quisquam adipisci ipsam.
              Voluptates quibusdam veniam et laborum?</swiper-slide
            >
            <swiper-slide
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur nostrum dolorem eum inventore? Maiores molestiae nisi
              iure assumenda alias, facere architecto esse quasi similique?
              Magni molestiae repellat sunt pariatur et! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quia cumque deserunt
              necessitatibus minima porro molestias, enim provident, praesentium
              sequi voluptatibus voluptatem culpa quisquam adipisci ipsam.
              Voluptates quibusdam veniam et laborum?</swiper-slide
            >
            <swiper-slide
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur nostrum dolorem eum inventore? Maiores molestiae nisi
              iure assumenda alias, facere architecto esse quasi similique?
              Magni molestiae repellat sunt pariatur et! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quia cumque deserunt
              necessitatibus minima porro molestias, enim provident, praesentium
              sequi voluptatibus voluptatem culpa quisquam adipisci ipsam.
              Voluptates quibusdam veniam et laborum?</swiper-slide
            >
            <swiper-slide
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur nostrum dolorem eum inventore? Maiores molestiae nisi
              iure assumenda alias, facere architecto esse quasi similique?
              Magni molestiae repellat sunt pariatur et! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quia cumque deserunt
              necessitatibus minima porro molestias, enim provident, praesentium
              sequi voluptatibus voluptatem culpa quisquam adipisci ipsam.
              Voluptates quibusdam veniam et laborum?</swiper-slide
            >
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
.swiper-container {
  display: flex;
  justify-content: center;
  min-height: 20vh;
  padding: 1rem;
  background: white;
  border-radius: 3px;
}

.mySwiper {
  text-align: center;
}
</style>