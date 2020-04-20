<template>
    <div>
           <section class="ftco-section">
            <div class="container">
            <div class="col-md-12 col-sm-12" >
        <h1>{{vote.title}}</h1>

       <div class="vote-card" v-if="vote">
            
            <p>{{vote.description}}</p>
            <p>Début : {{vote.start_date | formatDate}} </p>
            <p> Clôture :  {{vote.end_date | formatDate}} </p>
            <PieChart v-bind:results="vote.uuid_votes" />
           <!-- <Chart v-bind:artists="vote.uuid_votes" /> -->
            <div v-if=" Date.now() > new Date(vote.end_date) ">
                <p>Vous ne pouvez plus soumettre votre bulletin. Les votes sont clôs.</p>
            </div>
            <div v-else>
                <div v-if="hasVoted()">
                     <p>Vous avez soumis votre vote</p>
                </div>
                <div v-else>
                <router-link :to="{ name: 'submit', params: { voteid: vote.uuid }}">Soumettre votre vote</router-link>
                </div>
                
            </div>
            <div v-if="checkLevelAccess()">
                    <p>
                    <router-link :to="{ name: 'edit', params: { voteid: vote.uuid }}">Éditer ce sujet de vote</router-link>
                    </p>
                     <p>
                    <router-link :to="{ name: 'delete', params: { voteid: vote.uuid }}">Supprimer ce sujet de vote</router-link>
                    </p>
                </div>

        </div>
        <div v-else>
            <span>{{msg}}</span>
        </div>

            </div>
            </div>
        </section>
    </div>
</template>

<script>
//import Chart from './chart'
import Axios from 'axios'
import PieChart from './PieChart'

export default {
      name: 'Single',
      components:{
          PieChart
      },
      props:{
          id:String,
          vote:{},
          msg:String,
          voterList:Array
      },
      creted(){
          this.results = []
      },
      methods:{
          getDataVote() {

               Axios
              .get('http://localhost:8081/api/vote/show/'+this.id)
              .then(response => {
                    if(response.data.status){
                        
                        this.vote = response.data.vote
                        var arr = []
                        var voterID = []
                        for (let index = 0; index < response.data.vote.uuid_votes.length; index++) {
                            voterID.push(response.data.vote.uuid_votes[index].split('||')[0])
                            arr.push(response.data.vote.uuid_votes[index].split('||')[1])
                        }

                        this.voterList = voterID
                        this.vote.uuid_votes = arr
                        this.results = this.vote.uuid_votes

                    }else{
                        this.msg = response.data.message
                    }                   
               })
          },
          hasVoted:function(){ 
                if(this.voterList != undefined){
                    console.log(this.voterList)
                    if(this.voterList.find(el => el === localStorage.getItem('UUID') )) return true
                    else return false
                }
          },
          checkLevelAccess(){
                if(localStorage.getItem('access_level')){
                
                    if(localStorage.getItem('access_level') == 2) return true
                    else return false

                }else{
                 
                    return false
                }
          }
      },
      beforeMount(){
          this.id = this.$route.params.voteid
          this.getDataVote() 
      },
      updated(){
          this.hasVoted()
          this.results = this.vote.uuid_votes
      },
      beforeUpdate(){
          this.results = this.vote.uuid_votes
      }
}
</script>

<style scoped>

.vote-card , h1{
    text-align :left;
}

</style>