<template>
<div>


<section class="ftco-section pb-0">
  <div class="container">
  <div class="row">
  <div class="col-md-12 heading-title">
            <h1>S'identifier</h1>
        </div>
  </div>
  </div>
  </section>

<section class="ftco-section">
<div class="container">
  
   <Formik :parentProps="$props" @interface="parentData = $props;" v-on:submit.prevent="handleSubmit"  >
            <form slot="form" @submit="handleSubmit">

	<div class="row">
					<div class="col-lg-6 col-sm-6">    
           
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

					<div class="col-lg-6 col-sm-6">    

            <div class="form-group has-default">

                  <input
                  type="password"
                  value=""
                  placeholder="mot de passe"
                  v-model="password"
                   class="form-control"
                  />
            </div>
             </div>
               </div>

                <!--  
                  <MyInput inputType="text" inputValue="" inputPlaceholder="Votre nom d utilisateur" inputName="username"  @interface="inputValue = username;"  />

                  <MyInput inputType="email" inputValue="" inputPlaceholder="Votre adresse mail" inputName="email"  @interface="inputValue = email;" />

                  <MyInput inputType="password" inputValue="" inputPlaceholder="Votre mot de passe" inputName="password"  @interface="inputValue = password;" />
                -->
                  
           
              <button type="submit" class="btn btn-link" >Soumettre</button>     

            </form>
            </Formik>
  </div>
         
            


   
  </section>
  </div>
</template>

<script>

import { vueBus } from '../../main';

export default {
    name:"Login",
    props:{
            case:String,
            password:String,
            username:String,
            email:String,
            msg:String
    },
     methods:{
        handleSubmit(e){
                e.preventDefault();
                //console.log(" Login component ")
                //console.log(this.$props)
                //console.log(this.$refs.child.$props)
                vueBus.$emit('submit')
        }
    },
    created(){
      this.case = "login"
    }
}
</script>

<style>



</style>