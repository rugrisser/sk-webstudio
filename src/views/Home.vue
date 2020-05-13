<template>
  <div class="home">
    <NavigationBar start-transparent />
    <Slide class="headSlide">
      <div class="darkBackground">
        <div class="body">
          <h1>Тебе точно нужен сайт!</h1>
          <span>А мы его сделаем. Sk.WebStudio</span>
        </div>
      </div>
    </Slide>
    <Slide style="display: flex; height: 120vh;" id="team">
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
            <Carousel :employers="employees" />
          </div>
          <div class="horizontalLine"></div>
          <div class="row" style="margin-top: 36px;">
            <SmallFact
                value="23"
                description="человека в команде"/>
            <SmallFact
                value="37"
                description="хакатонов на нашем счету" />
            <SmallFact
                value="36"
                description="выполненных проектов" />
            <SmallFact
                value="9"
                description="хороших отзывов" />
            <SmallFact
                value="0"
                description="плохих отзывов" />
            <SmallFact
                value="6"
                description="получится если 12 разделить на 2" />
          </div>
        </div>
      </div>
    </Slide>
    <Slide dark style="height: auto; padding: 20vh 0;" id="directions">
      <div class="container d-flex" style="height: 100%;">
        <div style="width: 100%; margin: auto;">
          <div class="row">
            <div class="directionsHead directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <h1>
                Наши направления
              </h1>
              <span>
                Бесспорным преимуществом команды Sk.WebStudio является широкая направленность: мы подарим жизнь Вашему продукты на любом устройстве
              </span>
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Сайты"
                  description="Важнейший элемент любого бизнеса. Такой метод взаимодействия значительно упрощает путь клиента"
                  image="/img/icons/directions/web.svg" />
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Интернет-магазины"
                  description="Полноценный и эффективный инструмент повышения продаж. Отличительной особенностью является простота и легкость в использовании"
                  image="/img/icons/directions/shop.svg" />
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Чат-боты"
                  description="Простой и эффективный способ быть на связи с любым клиентом. Чат-боты позволяют ответить на вопросы клиента, а при необходимости, помогут связаться со специалистом"
                  image="/img/icons/directions/chat.svg" />
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Машинное обучение"
                  description="Использование алгоритмов машинного обучения позволяет находить закономерность, которая даёт возможность предсказывать различные показатели, что, в свою очередь, приводит к увеличению эффективности компании"
                  image="/img/icons/directions/neural.svg" />
            </div>
            <div class="directionColumn col-12 col-md-6 col-lg-4 col-xl-4">
              <Direction
                  title="Мобильные приложения"
                  description="Постоянный, быстрый и недорогой способ связи с Вашими клиентами. Мобильные приложения повышают лояльность клиентов и продажи"
                  image="/img/icons/directions/app.svg" />
            </div>
          </div>
        </div>
      </div>
    </Slide>
    <Slide id="projects">
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
          <div class="row" style="margin-top: 72px;">
            <ProjectsCarousel :projects="projects" />
          </div>
        </div>
      </div>
    </Slide>
    <Slide dark>
      <div class="container d-flex" style="height: 100%;">
        <div style="width: 100%; margin: auto;">
          <div class="row">
            <span class="smallHeading">
              Отзывы
            </span>
          </div>
          <ReviewCarousel :reviews="reviews" />
        </div>
      </div>
    </Slide>
    <Slide>
      <div class="d-flex" style="height: 100%;">
        <div style="width: 100%; margin: auto;">
          <div class="container">
            <div class="row">
              <span class="smallHeading">
                Оставить заявку
              </span>
            </div>
            <div class="row">
              <span class="bigHeading">
                Напиши нам
              </span>
            </div>
          </div>
          <div class="row feedback" style="margin-top: 72px;">
            <div class="yellowBackground"></div>
            <div class="container" style="margin: 60px auto; z-index: 1000;">
              <div class="row">
                <div class="col-6 left">
                  <h1>Контакты</h1>
                  <div class="contacts">
                    <span>Telegram: @Sk_Web</span>
                    <span>E-mail: skwebstudio@gmail.com</span>
                    <span>Instagram: sk.webstudio</span>
                    <span>Tel: +7 967 089 88 99</span>
                  </div>
                </div>
                <div class="col-6 d-flex">
                  <UAnimateContainer style="margin: 0 auto;">
                    <UAnimate
                        delay="0"
                        duration="1s"
                        animate-class="animated"
                        :begin="false"
                        name="fadeIn">
                      <img
                          src="/img/illustrations/contacts.svg"
                          style="height: 100%;" />
                    </UAnimate>
                  </UAnimateContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
    <Footer />
  </div>
</template>

<script>
import Slide from "@/components/Slide";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import Carousel from "@/components/employees/EmployeesCarousel";
import SmallFact from "@/components/SmallFact";
import Direction from "@/components/Direction";
import ProjectsCarousel from "@/components/projects/ProjectsCarousel";
import ReviewCarousel from "@/components/reviews/ReviewsCarousel";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

class Employer {
  constructor(name, description, image, personID) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.personID = personID;
  }
}

class Project {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

class Review {
  constructor(author, description, text, avatar) {
    this.author = author;
    this.description = description;
    this.text = text;
    this.avatar = avatar;
  }
}

export default {
  name: 'Home',
  components: {
    NavigationBar,
    Footer,
    ReviewCarousel,
    ProjectsCarousel,
    Direction,
    SmallFact,
    Carousel,
    ButtonSecondary,
    Slide
  },
  data() {
    return {
      reviewsCarousel: {
        count: 0,
        currentPosition: 0,
        maximalPosition: 0,
        mode: 0,
        arrow: {
          leftHover: false,
          rightHover: false,
        }
      },
      employees: [
        new Employer(
          'Владимир Яфаров',
          'Основатель студии / CEO',
          '/img/employees/1.jpg',
          3
        ),
        new Employer(
          'Эмиль Насыров',
          'Сооснователь / CIO',
          '/img/employees/2.jpg',
          1
        ),
        new Employer(
          'Фаррух Исматов',
          'Главный менеджер / СОО',
          '/img/employees/3.jpg',
          4
        ),
        new Employer(
          'Вадим Циндяйкин',
          'Ведущий Разработчик',
          '/img/employees/15.jpg',
          2
        ),
        new Employer(
          'Михаил Бесхитров',
          'Разработчик',
          '/img/employees/4.jpg',
          5
        ),
        new Employer(
          'Георгий Шишов',
          'Дизайнер',
          '/img/employees/5.jpg',
          6
        ),
        new Employer(
          'Диана Колпакова',
          'Разработчик',
          '/img/employees/6.jpg',
          14
        ),
        new Employer(
          'Дарья Андреева',
          'SMM',
          '/img/employees/7.jpg',
          8
        ),
        new Employer(
          'Мария Генчева',
          'Дизайнер',
          '/img/employees/8.jpg',
          7
        ),
        new Employer(
          'Дарья Гаврилова',
          'Менеджер',
          '/img/employees/9.jpg',
          10
        ),
        new Employer(
          'Александр Цымбалов',
          'Разработчик',
          '/img/employees/10.jpg',
          11
        ),
        new Employer(
          'Ярослав Мирошниченко',
          'Разработчик',
          '/img/employees/11.jpg',
          9
        ),
        new Employer(
          'Вячеслав Рыжков',
          'Разработчик',
          '/img/employees/12.jpg',
          13
        ),
        new Employer(
          'Максим Дмитриев',
          'Менеджер',
          '/img/employees/13.jpg',
          15
        ),
        new Employer(
          'Кирилл Харланов',
          'Менеджер',
          '/img/employees/14.jpg',
          12
        ),
      ],
      projects: [
        new Project(
          'COVID-19 Application',
          'Mobile Application',
          '/img/projects/1.png'
        ),
        new Project(
          'Outli',
          'Web',
          '/img/projects/2.jpg'
        ),
        new Project(
          'Messenger',
          'Mobile Application',
          '/img/projects/3.png'
        ),
        new Project(
          'Finderr',
          'Web',
          '/img/projects/4.png'
        ),
      ],
      reviews: [
        new Review(
          'Ethan James',
          'CEO Компании',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
          'https://randomuser.me/api/portraits/men/69.jpg',
        ),
        new Review(
          'Glenda Graham',
          'CEO Компании',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          'https://randomuser.me/api/portraits/women/43.jpg',
        ),
        new Review(
          'Jose Kim',
          'CEO Компании',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis dolor vitae nulla pretium porttitor et sed ante. Donec efficitur sodales condimentum.',
          'https://randomuser.me/api/portraits/men/13.jpg',
        ),
        new Review(
          'Lester Payne',
          'CEO Компании',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis consequat justo, sit amet luctus dolor pellentesque eget.',
          'https://randomuser.me/api/portraits/men/32.jpg',
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
    font-weight: 500;
    font-family: 'Open Sans';
  }
  .bigHeading {
    color: $light;
    font-size: 48px;
    font-weight: 500;
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
  .bigArrow {
    display: inline;
    img {
      height: 36px;
    }
    .activated {
      cursor: pointer;
    }
  }
  .feedback{
    position: relative;
    width: 100vw;
    margin-top: 72px;
    background-color: $black;
    .yellowBackground {
      top: 0;
      bottom: 0;
      position: absolute;
      background-color: $primary;
      width: 50%;
      height: initial;
    }
    .left {
      padding-right: 96px;
      h1 {
        color: black;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        font-family: 'Open Sans';
      }
      p {
        color: $black-darker;
        opacity: 0.75;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        font-family: 'Open Sans';
      }
      .contacts {
        margin-top: 64px;
        span {
          display: block;
          color: $black-darker;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          font-family: 'Open Sans';
          margin-top: 10px;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }
</style>
