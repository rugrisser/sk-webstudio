<template>
  <div
      @click="goToPersonPage"
      class="employee"
      :style="'background: url(' + image + ') 100% 100%;'">
    <div>
      <h1>{{ name }}</h1>
      <span>{{ description }}</span>
    </div>
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
      personID: {
        type: Number,
        required: true,
      },
    },
    methods: {
      goToPersonPage() {
        window.location = '/person/' + this.personID;
      }
    },
  }
</script>

<style scoped lang="scss">
  .employee {
    cursor: pointer;
    display: inline-flex;
    width: 100vw;
    height: 350px;
    margin-bottom: 5px;
    background-position: center !important;
    background-attachment: fixed;
    background-size: cover !important;
    @media (min-width: $medium) {
      width: 324px !important;
    }
    @media (min-width: $large) {
      width: 300px !important;
    }
    @media (min-width: $extra-large) {
      width: 258px !important;
    }
    div {
      box-sizing: content-box;
      width: 80%;
      padding: 16px;
      margin: auto 0 0 auto;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transform: translate(5px, 5px);
      background-color: $primary;
      h1 {
        color: $black-darker;
        margin: 0;
        font-size: 24px;
        font-family: 'Open Sans';
      }
      span {
        color: $black-darker;
        opacity: 0.8;
        font-size: 16px;
        font-family: 'Open Sans';
      }
    }
  }
</style>