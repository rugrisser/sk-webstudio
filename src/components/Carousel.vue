<template>
  <div class="carousel">
    <div class="body">
      <div class="slider">
        <div
            v-for="(employee, index) in employers"
            style="display: inline;"
            :key="index">
          <Employee
            :name="employee.name"
            :description="employee.description"
            :image="employee.image" />
          <div class="space"></div>
        </div>
      </div>
    </div>
    <div style="display: flex; margin-top: 36px;">
      <div style="margin: 0 auto;">
        <div class="arrow">
          <img src="/img/icons/arrows/left_disabled.svg" height="18px">
        </div>
        <div class="arrow" style="margin-left: 36px;">
          <img src="/img/icons/arrows/right_disabled.svg" height="18px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Employee from "@/components/Employee";
  export default {
    name: "Carousel",
    components: {Employee},
    props: {
      employers: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style scoped lang="scss">
.carousel {
  width: 100%;
  .arrow {
    cursor: pointer;
    display: inline;
  }
  .body {
    overflow: hidden;
    width: 100%;
    .slider {
      width: 9999px;
      transition: 250ms ease-out;
      .space {
        display: inline-block;
        width: 0;
        @media (min-width: $medium) {
          width: 93px !important;
        }
        @media (min-width: $large) {
          width: 32px !important;
        }
        @media (min-width: $extra-large) {
          width: 11px !important;
        }
      }
    }
  }
}
</style>