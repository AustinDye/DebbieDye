<template>
  <div class="row">
    <!--TODO  make sections into components-->
    <div class="col-12 sticky-top bg-secondary w-100"><h1>Header</h1></div>

    <!--Top SECTION-->

    <div class="col-md-12 bg-primary blue-2 d-flex p-0">
      <img
        class="img-fluid"
        src="src/assets/img/Screen Shot 2022-08-10 at 5.36.51 PM.png"
        alt=""
      />
      <div class="position-absolute word-wrapper">
        <h1>Hello World</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
          tempore repellat repudiandae ut aperiam atque molestias fuga dolorem
          dolor dolorum odit, totam doloribus nam delectus! Deleniti molestias
          soluta aliquid.
        </h5>
      </div>
    </div>

    <div class="col-md-6 bg-primary blue d-flex p-0">
      <div class="angle-other-3 position-absolute"></div>
      <div class="angle-other-2 position-absolute"></div>
      <div class="angle-other-4 position-absolute"></div>
      <div class="">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
          tempore repellat repudiandae ut aperiam atque molestias fuga dolorem
          dolor dolorum odit, totam doloribus nam delectus! Deleniti molestias
          soluta aliquid.
        </p>
      </div>
    </div>

    <div class="col-md-6 d-flex p-0">
      <div class="angle3 position-absolute"></div>
      <div class="angle2 position-absolute"></div>
      <div class="angle4 position-absolute"></div>
      <div class="angle"></div>
      <img
        class="head-img position-absolute"
        src="src/assets/img/stock-photo-remove-bg.png"
        alt=""
      />
    </div>
    <!--About SECTION-->

    <!--Services and Price SECTION-->
    <div class="col-md-6 p-5">
      <div class="card p-4">
        <h1>contract to close</h1>
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
        <h1>contract to close</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          odit cumque, exercitationem nobis placeat molestiae veniam, nostrum
          fugit facere enim reprehenderit quibusdam magnam earum sed? Minima
          excepturi suscipit itaque aut?
        </p>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center p-5">
      <div class="d-block p-2">
        <h1>Pricing</h1>
        <ul class="">
          <li>lorem lorem lorem : $250</li>
          <li></li>
          Ipsum Ipsum Ipsum : $250
        </ul>
      </div>
    </div>
    <div class="col-12 bg-primary w-100 h-25"><h1>Footer</h1></div>
  </div>
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

.word-wrapper {
  z-index: 2;
  padding: 2em;
  width: 70vw;
  top: 25%;
  left: 10%;
  background-color: rgba(255, 255, 255, 0.253);
}
.blue {
  height: 85vh;
}
.blue-2 {
  height: 85vh;
}

.second {
  height: 100vh;
  top: 86%;
  z-index: 5;
}

.head-img {
  z-index: 5;
  width: 650px;
}
.img-col {
}
.angle,
.angle2,
.angle3,
.angle4 {
  z-index: 3;
  border-top: 85vh solid rgba($primary, 0.2);
  border-right: 80vw solid transparent;
}

.angle2 {
  border-top: 85vh solid rgba($primary, 1);
  border-right: 10vw solid transparent;
  z-index: 2;
}

.angle3 {
  z-index: 1;
  border-top: 85vh solid rgba($primary, 0.4);
  border-right: 40vw solid transparent;
}

.angle4 {
  z-index: 1;
  border-top: 85vh solid rgba($primary, 0.8);
  border-right: 20vw solid transparent;
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
</style>
