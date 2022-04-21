<template>
  <teleport to="body">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }} </h1>
      <slot></slot>
      <button @click="$emit('hideModal')">Hide modal</button>
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
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
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'No title specified'
  }
});
console.log(props.title)

/**
 * Emits
 */

const emit = defineEmits(['update:modelValue', 'hideModal']);

/**
 * emit event on click
 */

// const handleButtonClick = () => {
//   emit('update:modelValue', false);
//   // emit('hideModal');
// };
</script>


<style scoped>
.modal-dark {
  background: #333;
  padding: 10px;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>