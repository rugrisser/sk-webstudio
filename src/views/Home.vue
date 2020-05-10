<template>
  <div class="home">
    <Slide class="headSlide">
      <div class="darkBackground">
        <div class="body">
          <h1>Тебе точно нужен сайт!</h1>
          <span>А мы его сделаем. Sk.WebStudio</span>
        </div>
      </div>
    </Slide>
    <Slide style="display: flex; height: 120vh;">
      <div class="container " style="display: flex;">
        <div style="width: 100%; margin: auto;">
          <div class="row">
            <span class="smallHeading">
              Команда
            </span>
          </div>
          <div class="row" style="display: flex;">
            <span class="bigHeading" style="margin: auto 0;">
              Наши сотрудники
            </span>
            <ButtonSecondary style="margin: auto 0 auto auto;">
              Вся команда
            </ButtonSecondary>
          </div>
          <div class="row" style="margin-top: 72px;">
            <Carousel :employers="employers" />
          </div>
          <div class="horizontalLine"></div>
          <div class="row" style="margin-top: 36px;">
            <SmallFact
                value="20+"
                description="человек в команде"/>
            <SmallFact
                value="7"
                description="лет на рынке" />
            <SmallFact
                value="800+"
                description="выполненных проектов" />
            <SmallFact
                value="200K"
                description="просмотров на Behance" />
            <SmallFact
                value="0"
                description="плохих отзывов" />
            <SmallFact
                value="4"
                description="раза я подрочил сегодня" />
          </div>
        </div>
      </div>
    </Slide>
  </div>
</template>

<script>
import Slide from "@/components/Slide";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import Carousel from "@/components/Carousel";
import SmallFact from "@/components/SmallFact";

class Employer {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export default {
  name: 'Home',
  components: {
    SmallFact,
    Carousel,
    ButtonSecondary,
    Slide
  },
  data() {
    return {
      employers: [
        new Employer(
          'Test',
          'Lorem ipsum dolor',
          '/img/employee/1.jpg'
        ),
        new Employer(
          'Test',
          'Lorem ipsum dolor',
          '/img/employee/2.jpg'
        ),
        new Employer(
          'Test',
          'Lorem ipsum',
          '/img/employee/3.jpg'
        ),
        new Employer(
          'Test',
          'Lorem ipsum dolor',
          '/img/employee/4.jpg'
        ),
        new Employer(
          'Test',
          'Lorem ipsum',
          '/img/employee/5.jpg'
        ),
      ],
    }
  }
}
</script>

<style lang="scss">
  .home {
    background-color: $black-darker;
  }
  .headSlide {
    background: url("/img/background.jpg") 100% 100%;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    .darkBackground {
      display: flex;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      .body {
        margin: auto;
        text-align: center;
        h1 {
          color: $primary;
          font-family: 'Oswald';
          font-weight: bold;
          font-size: 72px;
          margin-bottom: 8px;
        }
        span {
          color: white;
          font-family: 'Open Sans';
          font-size: 2em;
        }
      }
    }
  }
  .smallHeading {
    color: $primary;
    font-size: 24px;
    font-family: 'Open Sans';
  }
  .bigHeading {
    color: $light;
    font-size: 48px;
    font-family: 'Oswald';
    text-transform: uppercase;
  }
  .horizontalLine {
    width: 100%;
    height: 2px;
    background-color: $black-lighter;
  }
</style>
