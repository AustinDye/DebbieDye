<template >
  <!-- Modal -->
  <div id="modal-1" class="modalDialog">
    <div class="modalContent">
      <slot name="modal-content-slot"></slot>
    </div>
  </div>
</template>


<script>
import { onMounted } from "@vue/runtime-core";
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    onMounted(() => {
      console.log(props.showModal);
    });
    return {
      props,
    };
  },
};
</script>


<style lang="scss" scoped>
.modalDialog {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  top: -75vh;
  left: 0;
  background: rgba(0, 0, 0, 0.466);
  width: 110vw;
  height: 200vh;
}
.modalContent {
  background: white;
  border-radius: 3px;
  width: 95vw;
  height: 90vh;
}
</style>