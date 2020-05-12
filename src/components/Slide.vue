<template>
  <div
      :class="[{ 'dark': dark }]"
      class="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Slide",
    props: {
      dark: {
        type: Boolean,
        required: false,
        default: false,
      },
    }
  }
</script>

<style scoped lang="scss">
  .slide {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  .dark {
    background-color: $panel;
  }
</style>