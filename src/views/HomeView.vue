<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counter.title }}</h3>
    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" type="text" v-autofocus>
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
import {useCounterStore} from "../stores/counter";

/**
 * App Title
 */
const appTitle = 'My Counter APP in Vue';

const appTitleRef = ref(null);

onMounted(() => {
  console.log('Related to appTitle');
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide! `);
});

/**
 * Counter pinia
 */
const counter = useCounterStore();
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
