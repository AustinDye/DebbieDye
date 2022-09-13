<template>
  <div class="no-parallax container">
    <div class="spacer-10"></div>

    <div class="row justify-content-center align-items-center pt-5">
      <div class="col-6">
        <p class="text-center text-muted">
          Debbie Dye <br />
          Transaction Coordination
          <br />
          ©2022
        </p>
      </div>
      <div class="col-6">
        <p class="text-center text-muted">
          Website Developed by <br />
          Pleiades ProjectWorks <br />
          ©2022
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.no-parallax {
  @media (max-width: 500px) {
    padding-top: 13vh;
    padding-right: 2em;
  }
}
</style>
