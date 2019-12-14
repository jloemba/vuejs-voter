<template>
    <div>
    <h1>Information sur le sujet de vote </h1>

       <div class="vote-card" v-if="vote">
            <p>{{vote.title}}</p> 
            <p>{{vote.description}}</p>
            <p>Début : {{vote.start_date | formatDate}} </p>
            <p> Clôture :  {{vote.end_date | formatDate}} </p>
           
            <Chart v-bind:artists="vote.uuid_votes" />
            <div v-if=" Date.now() > new Date(vote.end_date) ">
                <p>Vous ne pouvez plus soumettre votre bulletin. Les votes sont clôs.</p>
            </div>
            <div v-else>
                <p><a v-bind:href="'/vote/submit/'+ vote.uuid">Soumettre votre vote </a></p>
                <p><a v-bind:href="'/vote/update/'+ vote.uuid">Éditer ce sujet de vote </a></p>
                <p><a v-bind:href="'/vote/delete/'+ vote.uuid">Supprimer ce sujet de vote </a></p>
            </div>
        </div>
        <div v-else>
            <span>{{msg}}</span>
        </div>
    </div>
</template>

<script>
import Chart from './chart'
import Axios from 'axios'
export default {
      name: 'Single',
      components:{
          Chart
      },
      props:{
          id:String,
          vote:{},
          msg:String,
          ballotpaper:Array
      }
      ,
      methods:{
          getDataVote() {

               Axios
              .get('http://localhost:8081/api/vote/show/'+this.id)
              .then(response => {
                    if(response.data.status){
                        //console.log(response.data)
                        this.vote = response.data.vote
                        //var ballotPaperExisting = response.data.vote.uuid_votes
                        //this.ballotpaper.push("dd")
                        var arr = []
                        for (let index = 0; index < response.data.vote.uuid_votes.length; index++) {
                            arr.push(response.data.vote.uuid_votes[index].split('||')[1])
                        }
                        this.vote.uuid_votes = arr
                        //console.log(this.vote.uuid_votes)
                    }else{
                        //console.log(response.data.message)
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