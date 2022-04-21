<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>Show dark modals
        <input type="checkbox" v-model="showDarkModals"></label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component :userData="userData" :is="showDarkModals ? ModalDark : Modal" v-model="showModal"
               title="Modal title via props">
      <template v-slot:title>This is a modal</template>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus, enim est eum excepturi explicabo
        harum, ipsam iste iusto laudantium modi officia perspiciatis quae rem repudiandae vel velit voluptate.
        Dolorem!</p>
    </component>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Modal from "../components/Modal.vue";
import ModalDark from "../components/ModalDark.vue";

/**
 * Modals
 */
const showModal = ref(false);
const showDarkModals = ref(false);

/**
 * Props
 */
const props = defineProps({userData: {type: Object}});

</script>
