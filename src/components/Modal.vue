<template>
  <teleport to="body">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus, enim est eum excepturi explicabo
        harum, ipsam iste iusto laudantium modi officia perspiciatis quae rem repudiandae vel velit voluptate.
        Dolorem!</p>
      <button>Hide modal</button>
    </div>
  </teleport>
</template>


<script>
export default {
  name: "Modal"
}
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