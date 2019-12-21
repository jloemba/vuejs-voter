<template>
    <div>
          <h1>Inscription</h1>

            <Formik :parentProps="$props" @interface="parentData = $props;" v-on:submit.prevent="handleSubmit"  >
            <form slot="form" @submit="handleSubmit">

                  <!-- -->
                  <input
                  type="text"
                  value=""
                  placeholder="votre prénom"
                  v-model="firstname"
                  />
                  
                  <!-- -->
                  <input
                  type="text"
                  value=""
                  placeholder="votre nom"
                  v-model="lastname"
                  />

                   <input
                  type="password"
                  value=""
                  placeholder="password"
                  v-model="password"
                  />

                  <input
                  type="password"
                  value=""
                  placeholder="Confirmer votre mot de passe"
                  v-model="confirmation"
                  />

                  <input
                  type="email"
                  value=""
                  placeholder="email"
                  v-model="email"
                  />


                  <input
                  type="date"
                  value=""
                  placeholder="Votre date de naissance"
                  v-model="birthdate"
                  />

                 

                <!--  
                  <MyInput inputType="text" inputValue="" inputPlaceholder="Votre nom d utilisateur" inputName="username"  @interface="inputValue = username;"  />

                  <MyInput inputType="email" inputValue="" inputPlaceholder="Votre adresse mail" inputName="email"  @interface="inputValue = email;" />

                  <MyInput inputType="password" inputValue="" inputPlaceholder="Votre mot de passe" inputName="password"  @interface="inputValue = password;" />
                -->
                  <input type="submit" value="Submit">

            </form>
            </Formik>


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