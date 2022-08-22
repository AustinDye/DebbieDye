<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
    <div class="container-fluid nav-container">
      <button
        @click="toggleStyle"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#myNavbar"
        aria-controls="myNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="float">
        <a class="debbie" @click="$emit('scroll', 'Landing')"
          ><h2 class="mb-0">Debbie Dye</h2></a
        >
      </div>
      <div
        class="collapse navbar-collapse justify-content-md-around"
        id="myNavbar"
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
import { onMounted, ref, watchEffect } from "@vue/runtime-core";
export default {
  setup() {
    const nav = ref(null);
    onMounted(() => {
      let main = document.querySelector("main");
      let prevScrollpos = main.scrollTop;
      let nav = document.querySelector(".navbar");
      main.onscroll = function () {
        let currentScrollPos = main.scrollTop;
        if (prevScrollpos > currentScrollPos) {
          // @ts-ignore
          nav.classList.add("navbar_show");
        } else {
          // @ts-ignore
          nav.classList.remove("navbar_show");
        }
        prevScrollpos = currentScrollPos;
      };
    });
    return {
      // nav,
      toggleStyle() {
        let nav = document.querySelector(".navbar");
        console.log(nav);
        if (nav.classList.contains("opaque")) {
          console.log(nav.classList.contains("opaque"), "removing");
          nav.classList.remove("opaque");
        } else {
          console.log(nav.classList.contains("opaque"), "adding");
          nav.classList.add("opaque");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.navbar {
  background-color: #5d0149;
  transform: translate3d(0, -100%, 0);
  transition: transform 0.2s ease-out, background-color 0.4s ease-out 0.15s;
}

.opaque {
  @media (max-width: 576px) {
    background-color: rgba(255, 255, 255, 0.171) !important;
  }
}

.navbar_show {
  transform: translate3d(0, 0, 0);
}

.nav-container {
  position: relative;
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
  h2 {
    font-family: "nycd";
  }
  // text-decoration: none;
  @media (max-width: 576px) {
    color: black;
  }
  color: white;
}

ul {
  z-index: 11;
}

a:hover {
  cursor: pointer;
}

@media (max-width: 576px) {
  .navbar {
    // background: rgb(0, 0, 0);
    // background: linear-gradient(
    //   90deg,
    //   rgba(0, 0, 0, 0.3981967787114846) 0%,
    //   rgba(0, 0, 0, 0.20211834733893552) 50%,
    //   rgba(0, 0, 0, 0) 100%
    // );
    background: transparent;
  }
  .navbar-collapse {
    position: absolute;
    top: 120%;
    left: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.171);
  }
  .float {
    position: static;
    width: auto;
    height: auto;
  }
  .nav-link {
    color: rgba(0, 0, 0, 0.774) !important;
    padding-left: 0.5rem;
    padding-right: 45vw;
  }
  // .float {
  //   position: relative;
  // }
  .debbie {
    padding-left: 1rem;
  }
}
</style>
