<template>
    <div>
          <h1>Formulaire Formik</h1>

            <Formik :parentProps="$props" @interface="parentData = $props;" v-on:submit.prevent="handleSubmit"  >
            <form slot="form" @submit="handleSubmit">

                  <input
                  type="text"
                  value=""
                  placeholder="username"
                  v-model="username"
                  />

                  <input
                  type="email"
                  value=""
                  placeholder="email"
                  v-model="email"
                  />

                  <input
                  type="password"
                  value=""
                  placeholder="password"
                  v-model="password"
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
    }
}
</script>