<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   
    <FetchVote/>
  </div>
</template>

<script>

import FetchVote from './components/vote/FetchVote.vue'

export default {
  name: 'app',
  components: {
    FetchVote
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
