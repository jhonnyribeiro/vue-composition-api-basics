<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
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
// const counter = ref(0);
// const counterTitle = ref('My Counter');

const counterData = reactive({
  count: 32,
  title: 'My Object Counter'
});

const increaseCounter = () => {
  counterData.count++;
};

const decreaseCounter = () => {
  counterData.count--;
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
