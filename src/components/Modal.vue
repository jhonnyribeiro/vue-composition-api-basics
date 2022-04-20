<template>
  <teleport to="body">
    <div class="modal">
      <h1>
        <slot name="title"></slot>
      </h1>
      <slot></slot>
      <button>Hide modal</button>
      <!--      <pre>{{ $slots.title() }}</pre>-->
    </div>
  </teleport>
</template>


<script setup>
import {useSlots} from "vue";

const slots = useSlots();

console.log(slots.title())
</script>


<style scoped>
.modal {
  background: beige;
  padding: 10px;
  color: #2c3e50;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>