<template>
    
    <div>

            <section class="ftco-section">
            <div class="container">
            <div class="col-md-12 col-sm-12" >

        <div v-if="username != '' ">

            <h1>{{username}}</h1>
            <p>Adresse mail : {{email}}</p>
            <p>Date de création: {{createdAt}}</p>
            <p>Date de mise à jour: {{updatedAt}}</p>

            <br>
            
            <p>  
                <button @click="logout()" class="btn btn-link">Vous déconnecter</button>
             </p>
        </div>
        <div>

            
        </div>
        
        
  </div>
 
</div>

</section>
</div>
</template>

<script>
//import vue from '../../main'
export default {
    name:"Profile",
    props:{
        username:String,
        email:String,
        createdAt:Date,
        updatedAt:Date
    },
    methods:{
        checkAuth(){
            if(localStorage.getItem('UUID')){
                console.log(true)
                return true
            }else{
                console.log(false)
                return false
            }
        },
        logout:function(){
            console.log("Déconnexion")
            localStorage.clear()
            this.$router.push('/')
        }
    },
    created(){
        this.username = localStorage.getItem('firstname')+" "+localStorage.getItem('lastname')
        this.email = localStorage.getItem('email')
        this.createdAt = localStorage.getItem('createdAt')
        this.updatedAt = localStorage.getItem('updatedAt')
    }
}
</script>