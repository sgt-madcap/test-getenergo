<template>
  <div class="navbar-wrapper">
    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link to="/">
          Главная
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/catalog">
          Каталог
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/_variables';

.navbar-wrapper {
  z-index: 2000;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 14px;
  overflow: hidden;
  background-color: $main-color;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;

  .nav-item {
    display: inline;
    margin: 0 10px;

    a {
      text-decoration: none;
      color: $navbar-link-color;
      font-weight: bold;
    }

    .nuxt-link-exact-active {
      color: $navbar-link-active-color;
    }
  }
}
</style>
