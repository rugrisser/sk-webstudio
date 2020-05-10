<template>
  <div class="smallFact col-2">
    <h1>
      {{ value }}
    </h1>
    <span>
      {{ description }}
    </span>
  </div>
</template>

<script>
  export default {
    name: "SmallFact",
    props: {
      value: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style scoped lang="scss">
  .smallFact {
    text-align: center;
    h1 {
      color: $light;
      font-size: 36px;
      font-family: 'Oswald';
      font-weight: 600;
      margin-top: 0;
    }
    span {
      color: $light;
      opacity: 0.75;
      font-family: 'Open Sans';
      font-size: 18px;
    }
  }
</style>