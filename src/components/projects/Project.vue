<template>
  <div class="project">
    <div class="cover" :style="'background: url(' + image + ') 100% 100%;'">
      <div class="description">
        {{ description }}
      </div>
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
  export default {
    name: "Project",
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
      }
    }
  }
</script>

<style scoped lang="scss">
.project {
  display: inline-flex;
  flex-direction: column;
  .cover {
    display: flex;
    width: 90vw;
    height: 450px;
    background-position: center !important;
    background-attachment: fixed;
    background-size: cover !important;
    @media (min-width: $medium) {
      width: 340px !important; // 30
    }
    @media (min-width: $large) {
      width: 300px !important; // 25
    }
    @media (min-width: $extra-large) {
      width: 360px !important; // 25
    }
    .description {
      max-width: 85%;
      padding: 15px 30px 15px 20px;
      margin: 30px 0 auto auto;
      background-color: $primary;
      box-shadow: 0px 5px 5px rgba(139, 116, 10, 0.3);
      color: $black-lighter;
      font-size: 18px;
      font-family: 'Open Sans';
      transform: translateX(10px);
    }
  }
  span {
    color: $light;
    margin-top: 16px;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    font-family: 'Open Sans';
    width: 90vw;
    @media (min-width: $medium) {
      width: 325px !important; // 30
    }
    @media (min-width: $large) {
      width: 285px !important; // 25
    }
    @media (min-width: $extra-large) {
      width: 345px !important; // 25
    }
  }
}
</style>