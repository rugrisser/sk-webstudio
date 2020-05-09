<template>
  <a class="buttonSecondary">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: "ButtonSecondary"
  }
</script>

<style scoped lang="scss">
  .buttonSecondary {
    cursor: pointer;
    display: inline;
    height: fit-content;
    padding: 16px 36px 16px 36px;
    border: 3px solid $primary;
    border-radius: 8px;
    color: $light;
    font-size: 18px;
    font-family: 'Oswald';
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      color: $primary;
    }
  }
</style>