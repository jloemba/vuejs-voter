<template>
    <div>
           <section class="ftco-section">
            <div class="container">
            <div class="col-md-12 col-sm-12" >
        <h1>Edition d'un sujet de vote</h1>

        <!-- Si le vote existe -->
       <div v-if="vote">
           <!-- -->
            <form action="#">
                <div class="row">
				<div class="col-lg-6 col-sm-6">    

                      <div class="form-group has-default">
                            <label for="title">Titre</label>
                            <input v-model="title" :placeholder="[[ vote.title ]]" class="form-control">
                            
                    </div>

                </div>
  
                <div class="col-lg-12 col-sm-12">    

                      <div class="form-group has-default">
                            <label for="title">Description</label>
                            <textarea v-model="description" :placeholder="[[ vote.description ]]" class="form-control"></textarea>
                            
                    </div> 
                    <button @click="handleSubmit" class="btn btn-link">Editer</button>

                </div> 
                </div> 
            </form>


       </div>
        <div v-else>
            <p>Sujet de vote inexistant</p>
        </div>
        <p>{{msg}}</p>
        <!-- Sinon , "vote inexistant" -->

     </div>
            </div>
        </section>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name:"Edit",
    props:{
          id:String, //ID du sujet de vote 
          vote : {},  // L'objet du vote
          msg: String,  // Un message d'erreur/de success  
          title:String,
          description:String,
          startDate:Date,
          endDate:Date
    },
    methods:{
          getDataVote() {
              Axios
              .get('http://localhost:8081/api/vote/show/'+this.id)
              .then(response => {
                    if(response.data.status){
                        console.log(response.data)
                        this.vote = response.data.vote
                    }else{
                        console.log(response.data.message)
                        this.msg = response.data.message
                    }               
               })
          },
          updateVote(){
              Axios
              .put('http://localhost:8081/api/vote/update/'+this.id,{
                  title: this.title,
                  description:this.description
              })
              .then(response => {
                    //console.log(response.data)  
                    this.msg = response.data.message
   
               })
          }
          ,
          handleSubmit(e){
              e.preventDefault()
              this.updateVote()
          }
    } ,
    beforeMount(){
          this.id = this.$route.params.voteid
          this.getDataVote()
    }
}
</script>