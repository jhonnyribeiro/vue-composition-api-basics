<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal" title="Modal title via props" @hideModal="showModal = false">
      <template v-slot:title>This is a modal</template>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus, enim est eum excepturi explicabo
        harum, ipsam iste iusto laudantium modi officia perspiciatis quae rem repudiandae vel velit voluptate.
        Dolorem!</p>
    </Modal>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Modal from "../components/Modal.vue";

name: "ModalsView";

/**
 * Modals
 */

const showModal = ref(false);

</script>
