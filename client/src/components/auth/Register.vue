<template>
<div>


<section class="ftco-section pb-0">
  <div class="container">
  <div class="row">
  <div class="col-md-12 heading-title">
            <h1>S'inscrire</h1>
        </div>
  </div>
  </div>
  </section>

<section class="ftco-section pb-0">
  <div class="container">
  <div class="row">


            <Formik :parentProps="$props" @interface="parentData = $props;" v-on:submit.prevent="handleSubmit"  >
            <form slot="form" @submit="handleSubmit">

	<div class="row">

					<div class="col-lg-7 col-sm-7"> 
            <div class="form-group has-default">
                  <!-- -->
                  <input
                  type="text"
                  value=""
                  placeholder="votre prénom"
                  v-model="firstname"
                  class="form-control"
                  />
            </div>
            </div>


                  <!-- -->
                  <div class="col-lg-7 col-sm-7"> 
            <div class="form-group has-default">
                  <input
                  type="text"
                  value=""
                  placeholder="votre nom"
                  v-model="lastname"
                  class="form-control"
                  />
                  </div>
             </div>

                    <div class="col-lg-7 col-sm-7"> 
                                  <div class="form-group has-default">
                   <input
                  type="password"
                  value=""
                  placeholder="password"
                  v-model="password"
                  class="form-control"
                  />
                  </div>
             </div>

                    <div class="col-lg-7 col-sm-7">
                                  <div class="form-group has-default"> 
                  <input
                  type="password"
                  value=""
                  placeholder="Confirmer votre mot de passe"
                  v-model="confirmation"
                  class="form-control"
                  />
                  </div>
             </div>

                    <div class="col-lg-7 col-sm-7"> 
                                  <div class="form-group has-default">
                  <input
                  type="email"
                  value=""
                  placeholder="votre adresse mail"
                  v-model="email"
                  class="form-control"
                  />
                  </div>
             </div>

                    <div class="col-lg-7 col-sm-7"> 
                                  <div class="form-group has-default">
                  <input
                  type="date"
                  value=""
                  placeholder="Votre date de naissance"
                  v-model="birthdate"
                  class="form-control"
                  />
                  </div>
                </div>

                   
 </div>

                                <button type="submit" class="btn btn-link" >Soumettre</button>     


            </form>
            </Formik>
 
         
              </div>  </div>


   
  </section>
  </div>
</template>


<script>
import { vueBus } from '../../main';

export default {
    name:"Login",
    props:{
            firstname:String,
            lastname:String,
            password:String,
            confirmation:String,
            email:String,
            msg:String,
            birthdate:Date,
            case:String
    },
     methods:{
        handleSubmit(e){
                e.preventDefault();
                vueBus.$emit('submit')

        }
    },
    created(){
        this.case = "register"
    }
}
</script>