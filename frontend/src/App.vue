<template>
  <div id="app">
    <UserMessages />
    <TicTacToeBoard />
  </div>
</template>

<script>
import UserMessages from "./components/UserMessages.vue";
import TicTacToeBoard from "./components/TicTacToeBoard.vue";

export default {
  name: "App",
  components: {
    UserMessages,
    TicTacToeBoard,
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
