<template>
  <div class="direction">
    <img
        :src="image"
        :alt="title"
        height="90px"/>
    <h1>{{ title }}</h1>
    <span>{{ description }}</span>
  </div>
</template>

<script>
  export default {
    name: "Direction",
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
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
  .direction {
    background-color: $black;
    border-radius: 8px;
    padding: 30px;
    height: 100%;
    h1 {
      color: $light;
      font-size: 24px;
      font-weight: 500;
      font-family: 'Oswald';
      font-style: normal;
      margin: 24px 0;
    }
    span {
      color: $light;
      font-size: 18px;
      font-weight: normal;
      font-family: 'Open Sans';
      font-style: normal;
    }
  }
</style>