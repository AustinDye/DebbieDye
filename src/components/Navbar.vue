<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
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
        <a class="nav-link active debbie" @click="$emit('scroll', 'Landing')"
          ><h2 class="mb-0">Debbie Dye</h2></a
        >
      </div>
      <div
        class="collapse navbar-collapse justify-content-md-around"
        id="navbarsExample08"
      >
        <ul class="navbar-nav">
          <li class="nav-item mx-md-5">
            <a class="nav-link" @click="$emit('scroll', 'Bio')">About Me</a>
          </li>
          <li class="nav-item mx-md-5">
            <a class="nav-link" @click="$emit('scroll', 'Services')"
              >Services</a
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item mx-md-5">
            <a class="nav-link" @click="$emit('scroll', 'Reviews')">Reviews</a>
          </li>
          <li class="nav-item mx-md-5">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      let main = document.querySelector("main");
      let prevScrollpos = main.scrollTop;
      let nav = document.querySelector(".navbar");
      main.onscroll = function () {
        let currentScrollPos = main.scrollTop;
        if (prevScrollpos > currentScrollPos) {
          // @ts-ignore
          nav.classList.remove("navbar_hidden");
        } else {
          // @ts-ignore
          nav.classList.add("navbar_hidden");
        }
        prevScrollpos = currentScrollPos;
      };
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.navbar {
  background: $dark;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease-out;
}

.navbar_hidden {
  transform: translate3d(0, -100%, 0);
}

.nav-container {
  display: flex;
  justify-content: start;
}

.float {
  z-index: 10;
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

ul {
  z-index: 11;
}

a:hover {
  cursor: pointer;
}

@media (max-width: 576px) {
  .navbar {
    // background: linear-gradient(
    //   90deg,
    //   rgba(0, 0, 0, 0.25843840954350494) 0%,
    //   rgba(0, 0, 0, 0) 45%,
    //   rgba(0, 0, 0, 0) 100%
    // );
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3981967787114846) 0%,
      rgba(0, 0, 0, 0.20211834733893552) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .float,
  .debbie {
    position: relative;
    width: auto;
  }
}
</style>
