<template>
  <div id="app">

    <div v-if="user != 'Connexion' ">
      <router-link to="/">Home</router-link>
      <router-link to="/profil">{{user}}</router-link>
      <router-view name="header"></router-view>
    </div>
    <div v-else>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-view name="header"></router-view>
    </div>
    
    <router-view></router-view>
  </div>
</template>
<script>

//import FetchVote from './components/vote/FetchVote.vue'

export default {
  name: 'app',
  props:{
    user: String
  },
  created(){
    var store = null
    if(localStorage.getItem('firstname') != undefined && localStorage.getItem('lastname') != undefined ){
      store = localStorage.getItem('firstname')+" "+localStorage.getItem('lastname')
    }else{
      store = "Connexion"
    }
    this.user = store
  },
  updated(){
    var store = null
    if(localStorage.getItem('firstname') != undefined && localStorage.getItem('lastname') != undefined ){
      store = localStorage.getItem('firstname')+" "+localStorage.getItem('lastname')
    }else{
      store = "Connexion"
    }
    this.user = store
  },
  method:{
    checkAuth(){
      if(localStorage.getItem('UUID')){
        console.log(true)
        return true
      }else{
        console.log(false)
        return false
      }
    }
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
