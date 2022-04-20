<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" v-autofocus>
    </div>
  </div>
</template>

<!-- Vue 3.2 -->
<script setup>
/**
 * Imports
 */
import {computed, nextTick, onMounted, reactive, ref, watch} from "vue";
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

/**
 * Counter
 */
const counterData = reactive({
  count: 0,
  title: 'My Object Counter'
});

watch(() => counterData.count, (newCount, oldCount) => {
  if (newCount == 20) {
    alert('You made it 20!! Go ahead... ')
  }
});

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

const increaseCounter = (amount, e) => {
  counterData.count = counterData.count + amount;
  nextTick(() => {
    console.log("do something after dom had updated")
  });
};

const decreaseCounter = (amount) => {
  counterData.count = counterData.count - amount;
};

onMounted(() => {
  console.log('Related to counter');
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
