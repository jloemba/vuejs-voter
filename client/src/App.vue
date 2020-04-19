<template>
  <div id="app">

	<section class="ftco-section pb-0">
	<div class="container">
    <div class="row">
      <div class="col-md-12">
         <!-- <img src="./thumb_bigger_formation-vue-js.png" alt="VueJS logo"> -->
      </div>
    </div>
		<div class="row">
      <div class="col-md-8 heading-title">
        <h4> <b>Vuejs Voter</b> </h4>
      </div>
			<div class="col-md-2 heading-title">
        
      <div v-if="user != 'Connexion' ">
          <router-link to="/">Accueil</router-link>
          <router-link to="/profil">{{user}}</router-link>
          <router-view name="header"></router-view>
        </div>
        <div v-else>
          <router-link to="/">Accueil</router-link>
          <router-link to="/register">S'inscrie</router-link>
          <router-link to="/login">S'identifier</router-link>
          <router-view name="header"></router-view>
        </div>

      </div>
	</div>
	</div>
	</section>

 



    <section class="ftco-section pb-0">
    <router-view></router-view>
    </section>

     <footer class="ftco-section ftco-section-2">
   <div class="col-md-12 text-center">
          <p class="mb-0">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
  </footer>
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

a{
    padding: 4px;
    
} 

#menu {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
