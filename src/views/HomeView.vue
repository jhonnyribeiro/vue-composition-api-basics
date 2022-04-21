<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>Hard-code title:</h3>
    <div>
      <button class="btn">--</button>
      <button class="btn">-</button>
      <span class="counter">32</span>
      <button class="btn">+</button>
      <button class="btn">++</button>
    </div>

    <p>This counter is odd/even</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-autofocus>
    </div>
  </div>
</template>

<!-- Vue 3.2 -->
<script setup>
/**
 * Imports
 */
import {onMounted, ref} from "vue";
import {vAutofocus} from "../directives/vAutofocus";

/**
 * App Title
 */
const appTitle = 'My Counter APP in Vue';

const appTitleRef = ref(null);

onMounted(() => {
  console.log('Related to appTitle');
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide! `);
});
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
