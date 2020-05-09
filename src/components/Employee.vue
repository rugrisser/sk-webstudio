<template>
  <div class="employee" :style="'background: url(' + image + ') 100% 100%;'">

  </div>
</template>

<script>
  export default {
    name: "Employee",
    props: {
      image: {
        type: String,
        required: true,
      },
      name: {
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
  .employee {
    display: inline-block;
    width: 100vw;
    height: 350px;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    @media (min-width: $medium) {
      width: 410px !important;
    }
    @media (min-width: $large) {
      width: 288px !important;
    }
    @media (min-width: $extra-large) {
      width: 274px !important;
    }
  }
</style>