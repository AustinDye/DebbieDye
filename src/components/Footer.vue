<template>
  <div class="no-parallax">
    <div class="container bg-light">
      <div class="row justify-content-center align-items-center pt-5">
        <div class="col-4 d-sm-none d-none d-md-flex">
          <p class="text-center text-muted">
            Debbie Dye <br />
            Transaction Coordination
            <br />
            ©2022
          </p>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
          <p class="text-center text-muted fw-bold">Get started Today!</p>
          <p class="text-center text-muted">
            EMAIL: debbie@debdyetcservices.com
          </p>
          <p class="text-center text-muted">PHONE: (208)-870-5635</p>
        </div>
        <div class="col-4 d-md-flex d-sm-none d-none">
          <p class="text-center text-muted">
            Website Developed by <br />
            Pleiades ProjectWorks <br />
            ©2022
          </p>
        </div>
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
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 20%;
  width: 100%;
  z-index: 2;
  transform-style: preserve-3d;
  margin-bottom: 5vh;
  @media (min-width: 1400px) {
    margin-top: 10%;
  }
  @media (max-width: 500px) {
    margin-top: 25%;
  }
}
</style>
