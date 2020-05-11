<template>
  <div class="review">
    <div class="author">
      <img :src="avatar">
      <div style="margin: auto auto auto 20px;">
        <span class="name">{{ author }}</span>
        <span class="description">{{ description }}</span>
      </div>
    </div>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "Review",
    props: {
      author: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
    }
  }
</script>

<style scoped lang="scss">
.review {
  display: inline-flex;
  width: 90vw;
  height: 100%;
  background-color: $black;
  flex-direction: column;
  @media (min-width: $medium) {
    width: 340px !important; // 30
  }
  @media (min-width: $large) {
    width: 300px !important; // 25
  }
  @media (min-width: $extra-large) {
    width: 360px !important; // 25
  }
  .author {
    display: flex;
    background-color: $primary;
    height: fit-content;
    margin-left: 10px;
    margin-right: 0;
    width: inherit;
    padding: 20px;
    img {
      width: auto;
      height: 64px;
      border-radius: 32px;
    }
    .name {
      color: $black-darker;
      font-style: normal;
      font-size: 20px;
      font-family: 'Open Sans';
      font-weight: 500;
      display: block;
    }
    .description {
      color: $black-darker;
      display: block;
      font-style: normal;
      font-size: 16px;
      font-family: 'Open Sans';
      font-weight: normal;
    }
  }
  p {
    margin: 30px;
    color: $light;
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
  }
}
</style>