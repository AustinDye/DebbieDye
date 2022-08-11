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
        <span
          class="d-flex pt-lg-2 mt-lg-2 justify-content-between pt-sm-1 pt-md-5"
        >
          <div class="text-center fs-1 p-2 info-square">con</div>
          <div class="text-center fs-1 p-2 info-square-2">con</div>
          <div class="text-center fs-1 p-2 info-square-3">con</div></span
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

    <!--Services and Price SECTION-->
    <ServicesSection />
  </div>
  <Footer />
</template>

<script>
import ServicesSection from "../components/ServicesSection.vue";
export default {
  name: "Home",
  components: { ServicesSection },
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";

//top section
.word-wrapper {
  z-index: 2;
  color: white;
  padding: 2em;
  width: 50vw;
  top: 30%;
  left: 45%;
}

.info-square-3 {
  background-color: rgba($secondary, 0.2);
}
.info-square-2 {
  background-color: rgba($secondary, 0.4);
}
.info-square {
  background-color: rgba($secondary, 0.8);
}

@media (max-width: 1100px) {
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
  z-index: 1;
  height: 85vh;
  background-color: rgba($primary, 1);
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
  border-top: 85vh solid rgba($primary, 0.2);
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
  border-top: 85vh solid rgba($primary, 0.5);
  border-right: 40vw solid transparent;
  position: absolute;
}

.angle4 {
  z-index: 1;
  border-top: 85vh solid rgba($primary, 0.4);
  border-right: 20vw solid transparent;
  position: absolute;
}

@media (max-width: 1100px) {
  .angle {
    border-top: 10vh solid rgba($primary, 0.2);
    border-right: 0em solid transparent;
    position: relative;
    z-index: 0;
  }
  .angle2 {
    border-top: 10vh solid rgba($primary, 0.8);
    border-right: 0em solid transparent;
    position: relative;
    z-index: 0;
  }

  .angle3 {
    z-index: 0;
    border-top: 10vh solid rgba($primary, 1);
    border-right: 0vw solid transparent;
    position: relative;
  }

  .angle4 {
    z-index: 0;
    border-top: 10vh solid rgba($primary, 0.4);
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
    background-color: rgba($primary, 1);
  }
}

@media (max-width: 760px) {
  .about-holder {
    padding-top: 10em;
  }
  .head-img {
    bottom: 0;
    z-index: 1;
    left: 0;
    width: 425px;
  }

  .angle {
    border-top: 15vh solid rgba($primary, 0.2);
    border-right: 0em solid transparent;
    position: relative;
    z-index: 0;
  }
  .angle2 {
    border-top: 15vh solid rgba($primary, 0.8);
    border-right: 0em solid transparent;
    position: relative;
    z-index: 0;
  }

  .angle3 {
    z-index: 0;
    border-top: 15vh solid rgba($primary, 1);
    border-right: 0vw solid transparent;
    position: relative;
  }

  .angle4 {
    z-index: 0;
    border-top: 15vh solid rgba($primary, 0.4);
    border-right: 0vw solid transparent;
    position: relative;
  }
}
</style>
