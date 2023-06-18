<template v-slot:header>
    <header class="header">
      <div class="row">
        <div class="menu">
            <router-link to="/" class="menu__item">
              <span>Главная</span>
            </router-link>
            <router-link to="/todo" class="menu__item">
              <span>Список</span>
            </router-link>
        </div>
      </div>
    </header>
  </template>
  
<script>
  export default {
    name: "AppLayoutHeader",
  };
</script>

<style>
  .header {
    display: flex;
    align-items: center;
    background: rgba(0,0,0, .5);
    width:100%;
    min-height: 60px;
    position: fixed;
    
  }

  .menu {
    display: flex;
    align-items: center;
  }

  .menu__item {
    margin-right: 10px;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: orange;
    }
  }
</style>