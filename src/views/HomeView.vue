<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title">
    </div>
  </div>
</template>

<!-- Vue 3.2 -->
<script setup>
import {reactive} from "vue";

const appTitle = 'My Counter APP in Vue'

const counterData = reactive({
  count: 0,
  title: 'My Object Counter'
});

const increaseCounter = (amount, e) => {
  console.log(e);
  counterData.count = counterData.count + amount;
};

const decreaseCounter = (amount) => {
  counterData.count = counterData.count - amount;
};
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
