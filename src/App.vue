<template>
  <div id="app">
      <AppLayout/>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";

export default {
  name: 'App',
  components: {
    AppLayout,
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .row {
    padding-left: 50px;
    padding-right: 50px;
  }

  .button {
      padding: 15px 10px;
      font-size: 16px;
      line-height: 100%;
      font-weight: 700;
      background-color: rgb(241, 166, 25);
      outline: none;
      border: none;
      cursor: pointer;
      transition: all ease-in-out .4s;

      &:hover {
        box-shadow: 0 0 10px #333;
      }

      &:disabled {
          background-color: #ccc;
          color: #333;
      }

      &.button_delete {
        background-color: rgb(221, 62, 62);
        color: #fff;
      }

      &.button_cancel {
        background-color: rgb(221, 62, 62);
        color: #fff;
      }
  }
</style>