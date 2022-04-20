<template>
  <teleport to="body">
    <div class="modal">
      <h1>{{ title }} </h1>
      <slot></slot>
      <button @click="$emit('hideModal')">Hide modal</button>
      <button @click="handleButtonClick">Hide modal</button>
      <!--      <pre>{{ $slots.title() }}</pre>-->
    </div>
  </teleport>
</template>


<script setup>
import {useSlots} from "vue";

const slots = useSlots();

console.log(slots.title())
/**
 * props
 */

const props = defineProps({
  title: {
    type: String,
    default: 'No title specified'
  }
});
console.log(props.title)

/**
 * Emits
 */

const emit = defineEmits(['hideModal']);

/**
 * emit event on click
 */

const handleButtonClick = () => {
  emit('hideModal');
};
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