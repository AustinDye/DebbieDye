<template>
  <!-- <div class="row nav-container">
    <div class="col-md-2 d-flex justify-content-between align-items-center">
      <b>About Me</b>
      <b>Services</b>
    </div>
    <div class="col-md-4 d-flex justify-content-center">
      <div>
        <h2>Debbie Dye</h2>
      </div>
    </div>
    <div class="col-md-2 d-flex justify-content-between align-items-center">
      <b>Reviews</b>
      <b>Contact</b>
    </div>
  </div> -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container-fluid nav-container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample08"
        aria-controls="navbarsExample08"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="float">
        <a class="nav-link active debbie" aria-current="page" href="#"
          ><h2 class="mb-0">Debbie Dye</h2></a
        >
      </div>
      <div
        class="collapse navbar-collapse justify-content-md-around"
        id="navbarsExample08"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>

        <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown08"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Dropdown</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown08">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
      </div>
    </div>
  </nav>
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

.nav-container {
  display: flex;
  justify-content: start;
  // background: lighten($primary, 20);
}

.float {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.debbie {
  position: absolute;
}

@media (max-width: 576px) {
  .nav-container {
    // width: 75%;
  }
  .float,
  .debbie {
    position: relative;
    width: auto;
  }
}
</style>
