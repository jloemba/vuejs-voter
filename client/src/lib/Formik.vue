<template>
    <div>
        <slot name="form"></slot>
        {{message}}
    </div>
</template>
<script>
import { vueBus } from '../main';
import Axios from 'axios';

export default {
    name:"Formik",
    props:{
        parentProps:{},
        message:String

    },
    created(){

         /* vueBus.$on('initFormik', (value) => {
                console.log(value)
                console.log(this.parentProps)
          });

          vueBus.$on('toFormik', (value) => {
              console.log(value)
              //this.parentProps[value['property']] = value['value']
          });*/
          vueBus.$on('submit', () => {
              this.validate();

                if(this.message === undefined){ // S'il n'y a pas d'erreur, on soumet. Autrement , la props message affiche déjà le message d'erreur
                    this.onSubmit()
                }
          })

    },
    methods:{
         validate:function(){//OK

            if(this.parentProps.case === "login"){
                    //check si le mot de passe est pas vide
                if(this.parentProps.password === undefined || this.parentProps.password === ""){
                    this.message = "Veuillez remplir le champs mot de passe"
                }
                
                //check si le email est pas vide
                if(this.parentProps.email === undefined || this.parentProps.email === ""){
                    this.message = "Veuillez remplir le champs email"
                }

                //check si le username est pas vide
                /* if(this.parentProps.username === undefined || this.parentProps.username === ""){
                        this.message = "Veuillez remplir le champs username"
                    }*/
            }

            if(this.parentProps.case === "register"){


                if(this.parentProps.password === undefined || this.parentProps.password === ""){
                    this.message = "Veuillez remplir le champs mot de passe"
                }

                if(this.parentProps.confirmation != this.parentProps.password){
                    this.message = "Les deux mots de passe ne sont pas identiques"
                }

                if(this.parentProps.birthdate === undefined || this.parentProps.birthdate === ""){
                    this.message = "Tu n'as pas indiqué la date de naissance"
                }else{
                    var cur = new Date();
                    var diff = cur-(new Date(this.parentProps.birthdate)); // This is the difference in milliseconds
                    var age = Math.floor(diff/31557600000);
                    console.log(age)
                    if(age<18){
                        this.message = "Vous devez être majeur pour obtenir un compte."
                    }

                }

                //check si le email est pas vide
                if(this.parentProps.confirmation === undefined || this.parentProps.confirmation === ""){
                    this.message = "Veuillez remplir la confirmation de votre mot de passe"
                }

                if(this.parentProps.lastname === undefined || this.parentProps.lastname === ""){
                    this.message = "Veuillez indiquer votre nom"
                }

                if(this.parentProps.firstname === undefined || this.parentProps.firstname === ""){
                    this.message = "Veuillez indiquer votre prénom"
                } 
                
             
                
             
            }
            

        },
        onSubmit:function(){

            if(this.parentProps.case === "login"){

                Axios
                .post('http://localhost:8081/api/user/login/',{
                        "email": this.parentProps.email,
                        "password":this.parentProps.password
                })
                .then(response=> {
                    //console.log(response)
                    var data = response.data
                    console.log(data)
                    if(data.status == true ){
                        
                        localStorage.setItem('UUID',data.account.uuid)
                        localStorage.setItem('email',data.account.email)
                        localStorage.setItem('firstname',data.account.first_name)
                        localStorage.setItem('lastname',data.account.last_name)
                        localStorage.setItem('token',data.account.token)
                        localStorage.setItem('createdAt',data.account.CreatedAt)
                        localStorage.setItem('updatedAt',data.account.UpdatedAt)
                        localStorage.setItem('access_level',data.account.access_level)

                        this.message = "Bienvenue "+data.account.first_name
                        this.$router.push('/')

                    }else{
                        this.message = "Vos informations sont incorrectes."
                    }
                    
                })
            }

            if(this.parentProps.case === "register"){
                console.log(this.parentProps)
                Axios.post('http://localhost:8081/api/user/new/',{
                        
                        "first_name":this.parentProps.firstname,
                        "last_name":this.parentProps.lastname,
                        "email": this.parentProps.email,
                        "password":this.parentProps.password,
                        "birthdate":(new Date(this.parentProps.birthdate))
                })
                .then(response=> {
                    //console.log(response)
                    var data = response.data
                    if(data.status){
                        this.message = data.message
                    }else{
                        this.message = data.message
                    }
                   
                })
            }   
        }  
    }
}
</script>
