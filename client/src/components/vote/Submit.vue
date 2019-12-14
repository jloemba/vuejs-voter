<template>
    <div>

        <h1>Votre bulletin de vote</h1>
        <h2>{{vote.title}}</h2>

        <form action="#">
                <div class="grid-row">
                    <input type="radio" v-model="submission" name="uuid_votes" value="POUR" checked>
                    <label >Pour</label> <br>
                    <input type="radio" v-model="submission" name="uuid_votes" value="CONTRE" >
                    <label >Contre</label> <br>
                </div>   
                <button @click="handleSubmit">Créer</button>
            </form>

    </div>
</template>
<script>
import Axios from "axios";

export default {
    name:"Submit",
     props:{
          id:String,
          vote : {},
          msg: String,
          submission:String
      },
      methods:{       
          handleSubmit(e){
                  e.preventDefault();
                  this.submissionVote()
          },
          submissionVote(){

              Axios
              .put('http://localhost:8081/api/vote/submit/',{
                  uuid: this.vote.uuid,
                  uuid_votes:[this.vote.uuid.concat('||',this.submission)]
              })
              .then(response => {
                    this.msg = response.data.message
               })
          },
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
          }
      },
      beforeMount(){
          console.log(this.$route.params.voteid)
          this.id = this.$route.params.voteid
          this.getDataVote()
      }
}
</script>
