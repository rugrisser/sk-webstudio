<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row d-flex">
        <img src="/img/logo.svg" id="logo">
        <span class="title" style="margin: auto 0 auto 18px;">
          Sk.WebStudio
        </span>
        <div class="menu">
          <a href="#">Главная</a>
          <a href="#">Команда</a>
          <a href="#">Портфолио</a>
          <a href="#">О проекте</a>
        </div>
      </div>
      <div class="additional row d-flex" style="margin-top: 24px;">
        <span>
          Copyright © 2020.
        </span>
        <span style="margin-left: auto;">
          +7 967 089 88 99
        </span>
      </div>
      <div class="additional row d-flex" style="margin-top: 12px;">
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
  padding: 3% 5% 2% 5%;
  background-color: $panel;
  .title {
    color: $light;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 800;
    font-family: 'Open Sans';
    text-transform: uppercase;
  }

  #logo {
    width: 5%;
  }

  .menu {
    margin: auto 0 auto auto;
    a {
      color: #EBEBF0;
      opacity: 0.75;
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 500;
      white-space: nowrap;
      font-size: 1.2vw;
      margin-left: 40px;
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
      font-size: 1.1vw;
      line-height: 1.7vw;
    }
  }
}
</style>