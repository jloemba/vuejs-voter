<template>
    <div>
    <h1>Information sur le sujet de vote </h1>

       <div class="vote-card" v-if="vote">
            <p>{{vote.title}}</p> 
            <p>{{vote.description}}</p>
            Début : {{vote.start_date | formatDate}}  <br>
            Clôture :  {{vote.end_date | formatDate}} 
            <p> _____ </p>
            <p><a v-bind:href="'/vote/update/'+ vote.uuid">Éditer ce sujet de vote </a></p>
            <p><a v-bind:href="'/vote/delete/'+ vote.uuid">Supprimer ce sujet de vote </a></p>
        </div>
        <div v-else>
            <span>{{msg}}</span>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
      name: 'Single',
      props:{
          id:String,
          vote : {},
          msg: String
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
          }
      },
      beforeMount(){
          this.id = this.$route.params.voteid
          this.getDataVote()
      }
}
</script>

<style scoped>

.vote-card , h1{
    text-align :left;
}

</style>