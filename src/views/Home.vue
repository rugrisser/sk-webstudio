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
      <div class="container d-flex">
        <div style="width: 100%; margin: auto;">
          <div class="row">
            <span class="smallHeading">
              Команда
            </span>
          </div>
          <div class="row d-flex">
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
    <Slide dark style="height: auto; padding: 20vh 0;">
      <div class="container d-flex" style="height: 100%;">
        <div style="width: 100%; margin: auto;">
          <div class="row">
            <div class="directionsHead directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <h1>
                Наши направления
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </span>
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Сайты"
                  description="Важнейший элемент любого бизнеса. Такой метод взаимодействия значительно упрощает путь клиента."
                  image="/img/icons/directions/web.svg" />
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Интернет-магазины"
                  description="Полноценный и эффективный инструмент повышения продаж. Отличительной особенностью является простота и легкость в использовании."
                  image="/img/icons/directions/shop.svg" />
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Чат-боты"
                  description="Простой и эффективный способ быть на связи с любым клиентом. Чат-боты позволяют ответить на вопросы клиента, а при необходимости, помогут связаться со специалистом."
                  image="/img/icons/directions/chat.svg" />
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Машинное обучение"
                  description="Простой и эффективный способ быть на связи с любым клиентом. Чат-боты позволяют ответить на вопросы клиента, а при необходимости, помогут связаться со специалистом."
                  image="/img/icons/directions/neural.svg" />
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Мобильные приложения"
                  description="Простой и эффективный способ быть на связи с любым клиентом. Чат-боты позволяют ответить на вопросы клиента, а при необходимости, помогут связаться со специалистом."
                  image="/img/icons/directions/app.svg" />
            </div>
          </div>
        </div>
      </div>
    </Slide>
    <Slide>
      <div class="container d-flex" style="height: 100%;">
        <div style="width: 100%; margin: auto;">
          <div class="row">
            <span class="smallHeading">
              Протфолио
            </span>
          </div>
          <div class="row d-flex">
            <span class="bigHeading" style="margin: auto 0;">
              Наши работы
            </span>
            <ButtonSecondary style="margin: auto 0 auto auto;">
              Все работы
              <img
                  style="margin-left: 14px;"
                  src="/img/icons/go_to.svg" height="16px">
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </Slide>
  </div>
</template>

<script>
import Slide from "@/components/Slide";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import Carousel from "@/components/employees/EmployeesCarousel";
import SmallFact from "@/components/SmallFact";
import Direction from "@/components/Direction";

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
    Direction,
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
  .directionsHead {
    text-align: left;
    h1 {
      color: $primary;
      margin-top: 0;
      font-size: 48px;
      font-weight: 500;
      font-family: 'Oswald';
      text-transform: uppercase;
    }
    span {
      color: $light;
      font-size: 18px;
      font-family: 'Open Sans';
    }
  }
  .directionColumn {
    padding: 16px;
  }
</style>
