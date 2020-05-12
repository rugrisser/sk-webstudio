<template>
  <header v-bind:class="['navigationBar']">
    <nav class="container">
      <div class="row d-flex">
        <a style="display: flex; text-decoration: none;" href="/">
          <img src="/img/logo.svg" height="48px">
          <span class="title" style="margin: auto 0 auto 18px;">
            Sk.WebStudio
          </span>
        </a>
        <div class="menu">
          <a href="/#">Главная</a>
          <a href="/#team">Команда</a>
          <a href="/#projects">Портфолио</a>
          <a href="#">О проекте</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "NavigationBar",
    props: {
      startTransparent: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        showBackground: false,
      }
    },
    mounted() {
      if (this.startTransparent) {
        this.showBackground = true;
        window.addEventListener('scroll', function () {
          if (window.scrollY >= window.innerHeight) {
            this.showBackground = true;
            document.querySelector('.navigationBar').classList.add('background');
          } else {
            this.showBackground = false;
            document.querySelector('.navigationBar').classList.remove('background');
          }
        });
      } else {
        document.querySelector('.navigationBar').classList.add('background');
      }
    }
  }
</script>

<style scoped lang="scss">
  .navigationBar {
    position: fixed;
    z-index: 1000;
    width: 100%;
    padding: 16px 0;
    .title {
      color: $light;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      font-family: 'Open Sans';
      text-transform: uppercase;
    }
    .menu {
      margin: auto 0 auto auto;
      a {
        color: #EBEBF0;
        opacity: 0.75;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        margin-right: 40px;
        text-decoration: none;
        text-transform: uppercase;
        transition: 300ms ease-out;
        &:hover {
          opacity: 1;
        }
      }
    }
    transition: background-color 300ms ease-out;
  }
  .background {
    background-color: $panel;
  }
  @media (max-width: 767px) {
    .navigationBar {
      display: none;
    }
  }
  @media (max-height: 473px) {
    .navigationBar {
      display: none;
    }
  }
</style>