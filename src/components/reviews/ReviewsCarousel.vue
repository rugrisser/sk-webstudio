<template>
  <div class="reviewsCarousel">
    <div class="row d-flex">
      <span class="bigHeading" style="margin: auto 0;">
        Нам доверяют
      </span>
      <div style="margin: auto 0 auto auto;">
        <div class="bigArrow">
          <img
              @click="moveLeft"
              @mouseover="arrow.leftHover = true"
              class="activated"
              v-if="currentPosition > 0 && !arrow.leftHover"
              src="/img/icons/arrows/left_enabled.svg" />
          <img
              @click="moveLeft"
              @mouseout="arrow.leftHover = false"
              class="activated"
              v-else-if="currentPosition > 0 && arrow.leftHover"
              src="/img/icons/arrows/left_hover.svg" />
          <img v-else src="/img/icons/arrows/left_disabled.svg">
        </div>
        <div class="bigArrow" style="margin-left: 72px;">
          <img
              @click="moveRight"
              @mouseover="arrow.rightHover = true"
              class="activated"
              v-if="currentPosition < maximalPosition && !arrow.rightHover"
              src="/img/icons/arrows/right_enabled.svg" />
          <img
              @click="moveRight"
              @mouseout="arrow.rightHover = false"
              class="activated"
              v-else-if="currentPosition < maximalPosition && arrow.rightHover"
              src="/img/icons/arrows/right_hover.svg" />
          <img v-else src="/img/icons/arrows/right_disabled.svg">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="body">
        <div class="slider" :style="'transform: translateX(-' + offset + ');'">
          <div
              v-for="(review, index) in reviews"
              :key="index"
              style=" ">
            <Review
                :author="review.author"
                :description="review.description"
                :text="review.text"
                :avatar="review.avatar"/>
            <div class="space"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const SMALL = 1, MEDIUM = 2, LARGE = 3, EXTRA_LARGE = 4;

  import Review from "@/components/reviews/Review";

  export default {
    name: "ReviewCarousel",
    components: {Review},
    props: {
      reviews: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        count: 0,
        currentPosition: 0,
        maximalPosition: 0,
        mode: 0,
        arrow: {
          leftHover: false,
          rightHover: false,
        }
      }
    },
    computed: {
      offset() {
        let result = '';

        switch (this.mode) {
          case EXTRA_LARGE:
            result = this.currentPosition * 385 + 'px';
            break;
          case LARGE:
            result = this.currentPosition * 325 + 'px';
            break;
          case MEDIUM:
            result = this.currentPosition * 370 + 'px';
            break;
          case SMALL:
            result = this.currentPosition * 100 + 'vw';
            break;
          default:
            break;
        }

        return result;
      },
    },
    methods: {
      setMaximalPosition(mode) {
        this.mode = mode;
        if (mode === EXTRA_LARGE) {
          mode--;
        }

        this.maximalPosition = Math.max(0, this.count - mode);
      },
      moveLeft() {
        this.currentPosition--;
      },
      moveRight() {
        this.currentPosition++;
      },
      processViewport() {
        let viewportWidth = window.innerWidth;
        let sizes = this.$store.getters.getScreenSizes;

        this.count = this.reviews.length;

        if (viewportWidth >= sizes.extra_large) {
          this.setMaximalPosition(EXTRA_LARGE);
        } else if (viewportWidth >= sizes.large) {
          this.setMaximalPosition(LARGE);
        } else if (viewportWidth >= sizes.medium) {
          this.setMaximalPosition(MEDIUM);
        } else {
          this.setMaximalPosition(SMALL);
        }
      },
    },
    mounted() {
      this.processViewport();
    }
  }
</script>

<style scoped lang="scss">
  .reviewsCarousel {
    width: 100%;
    margin-bottom: 36px;
    .bigArrow {
      display: inline;
      .activated {
        cursor: pointer;
      }
    }
    .body {
      margin-top: 72px;
      overflow: hidden;
      width: 100%;
      .slider {
        display: flex;
        width: 9999px;
        transition: 250ms ease-out;
        .space {
          display: inline-block;
          width: 10vw;
          @media (min-width: $medium) {
            width: 30px !important;
          }
          @media (min-width: $large) {
            width: 25px !important;
          }
        }
      }
    }
  }
</style>