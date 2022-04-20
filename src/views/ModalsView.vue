<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <div class="modal" v-if="showModal">
      <h1>This is a modal</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus, enim est eum excepturi explicabo
        harum, ipsam iste iusto laudantium modi officia perspiciatis quae rem repudiandae vel velit voluptate.
        Dolorem!</p>
      <button @click="showModal = false">Hide modal</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

name: "ModalsView";

/**
 * Modals
 */

const showModal = ref(false);

</script>

<style scoped>
.modal {
  background: beige;
  padding: 10px;
  color: #2c3e50;
}
</style>