<template>
    <div>
          <section class="ftco-section">
            <div class="container">
            <div class="col-md-12 col-sm-12" >
        <p>Voulez-vous vraiment supprimez le sujet <u>{{vote.title}}</u> ?</p>
            <br>
        <p>
            <button v-on:click="consentToDelete" >Oui</button>
            <button v-on:click="cancelDelete" >Non</button>
        </p>
        <div>
            <p>{{msg}}</p>
        </div>


     </div>
            </div>
        </section>
    </div>  
</template>

<script>
import Axios from "axios";
export default {
    name:"Delete",
    props:{
        id:Number,
        msg: String,
        vote: {}
    },
    methods :{
        getDataVote() {
              Axios
              .get('http://localhost:8081/api/vote/show/'+this.id)
              .then(response => {
                    if(response.data.status) this.vote = response.data.vote
               })
        },
        consentToDelete(){
            Axios
            .delete('http://localhost:8081/api/vote/delete/'+this.id)
            .then(response => {
                this.msg = response.data.message
            })
        },
        cancelDelete(){
            this.$router.push('/vote') 
        }
    },
    beforeMount(){
        this.id = this.$route.params.voteid
        this.getDataVote()
    }
}
</script>