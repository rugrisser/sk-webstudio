<template>
  <header v-bind:class="['navigationBar']">
    <nav class="container">
      <div class="row d-flex">
        <a style="display: flex; text-decoration: none;" href="/">
          <img src="/img/logo.svg" style="max-height: 50vw">
          <span class="title" style="margin: auto 0 auto 0.95vw;">
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
        eventListener: null,
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
    },
  }
</script>

<style scoped lang="scss">
  .navigationBar {
    position: fixed;
    z-index: 1000;
    width: 100%;
    padding: 2% 7%;
    max-height: 12vh;
    .title {
      color: $light;
      font-size: 1.5vw;
      font-style: normal;
      font-weight: 800;
      font-family: 'Open Sans';
      text-transform: uppercase;
    }
    #logo {
      width: 5%;
    }
    .menu {
      margin: auto 5% auto auto;
      a {
        color: #EBEBF0;
        opacity: 0.75;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 500;
        font-size: 1.2vw;
        margin-right: 10%;
        white-space: nowrap;
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
</style>