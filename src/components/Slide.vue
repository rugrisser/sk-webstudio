<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Slide"
  }
</script>

<style scoped>
  .slide {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>