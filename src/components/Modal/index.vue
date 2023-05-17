<template>
  <div class="modal">
    <div class="modal-content" :class="pd && 'pd'">
      <div class="close">
        <slot name="close"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    pd: Boolean
  }
})
</script>

<style scoped>
.modal {
  @apply flex items-center justify-center;
  position: fixed;
  top: 0;
  overflow: auto;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  overflow: auto;
}

.modal-content {
  background: white;
  position: relative;
  margin: auto 5%;
}

.pd {
  padding: 20px;
}

.close {
  position: absolute;
  top: 20px;
  right: 26px;
  cursor: pointer;
}
</style>
