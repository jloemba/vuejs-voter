<template>
<div>


<section class="ftco-section">
<div class="container">
  <div class="col-md-12 col-sm-12" >

   <h1>
        <p><a v-bind:href="'/vote/'">Fil des sujets de vote</a></p>
        <router-view></router-view>
    </h1>

  </div>
 
</div>

</section>
</div>
</template>


<script>
//import Axios from 'axios'
export default {
      name: 'Vote'
}
</script>