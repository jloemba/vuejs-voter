<template>
    <div  >
        
        <slot name="form"></slot>
        {{message}}
    </div>
</template>
<script>
import { vueBus } from '../main';

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
              console.log(this.message)
                if(this.message === undefined){ // S'il n'y a pas d'erreur, on soumet. Autrement , la props message affiche déjà le message d'erreur
                    this.onSubmit()
                }
          })

    },
    methods:{
         validate:function(){//OK
            console.log(this.message)

            //check si le mot de passe est pas vide
            if(this.parentProps.password === undefined || this.parentProps.password === ""){
                //this.message = "Veuillez remplir le champs mot de passe"
                this.message = "Veuillez remplir le champs mot de passe"
            }
            
            //check si le email est pas vide
            if(this.parentProps.email === undefined || this.parentProps.email === ""){
                //this.message = "Veuillez remplir le champs email"
                this.message = "Veuillez remplir le champs email"
            }
            //check si le username est pas vide
            if(this.parentProps.username === undefined || this.parentProps.username === ""){
                this.message = "Veuillez remplir le champs username"
            }

        },
        onSubmit:function(){
            alert(this.username+" , vos infos ont bien été soumises")
        }  
    }
}
</script>
