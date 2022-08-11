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

  <!--Services and Price SECTION-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
      <h1 class="text-center">transaction coordination</h1>
      <p class="px-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit rem
        porro consectetur distinctio exercitationem cupiditate repellat sequi,
        ut, optio, laboriosam sunt. Repellendus fuga consequatur necessitatibus
        cumque dolores fugiat assumenda illo?
      </p>
    </div>
    <div class="col-md-6 p-5">
        <div class="card p-4">
          <b class="fs-1">contract to close</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            facilis totam nisi doloribus obcaecati ipsa! Magni repellat dolores
            sequi vel ipsa neque exercitationem numquam dolorem, enim saepe
            reiciendis minus assumenda?
          </p>
        </div>
      </div>
      <div class="col-md-6 p-5">
        <div class="card p-4">
          <b class="fs-1">contract to close</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            odit cumque, exercitationem nobis placeat molestiae veniam, nostrum
            fugit facere enim reprehenderit quibusdam magnam earum sed? Minima
            excepturi suscipit itaque aut?
          </p>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-center p-5">
        <div class="d-block p-2">
          <h1>Pricing</h1>
          <ul class="">
            <li>lorem lorem lorem : $250</li>
            <li></li>
            Ipsum Ipsum Ipsum : $250
          </ul>
        </div>
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

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.angle-holer {
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
