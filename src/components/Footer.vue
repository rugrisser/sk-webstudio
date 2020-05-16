<template>
  <footer class="footer">
    <div class="container">
      <div class="row d-flex">
        <img src="/img/logo.svg" style="max-height: 50vw">
        <span class="title" style="margin: auto 0 auto 0.95vw;">
          Sk.WebStudio
        </span>
        <div class="menu">
          <a href="#">Главная</a>
          <a href="#">Команда</a>
          <a href="#">Портфолио</a>
          <a href="#">О проекте</a>
        </div>
      </div>
      <div class="additional row d-flex" style="margin-top: 1vw;">
        <span>
          Copyright © 2020.
        </span>
        <span style="margin-left: auto;">
          +7 967 089 88 99
        </span>
      </div>
      <div class="additional row d-flex" style="margin-top: 0.7vw;">
        <span>
          All Rights Reserved
        </span>
        <span style="margin-left: auto;">
          skwebstudio@gmail.com
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
.footer {
  padding: 4vw 0 4vw 0;
  background-color: $panel;
  .title {
    color: $light;
    font-size: 1.9vw;
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
      font-size: 1.5vw;
      margin-left: 4vw;
      text-decoration: none;
      text-transform: uppercase;
      transition: 300ms ease-out;
      &:hover {
        opacity: 1;
      }
    }
  }
  .additional {
    span {
      color: #EBEBF0;
      opacity: 0.5;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 1.6vw;
      line-height: 1.9vw;
    }
  }
}
</style>