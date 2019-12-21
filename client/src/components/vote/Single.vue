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
                <div v-if="hasVoted()">
                    <p><a v-bind:href="'/vote/submit/'+ vote.uuid">Soumettre votre vote </a></p>
                </div>
                <div v-else>
                    <p>Vous avez soumis votre vote</p>
                </div>
                <div v-if="checkLevelAccess()">
                  <p><a v-bind:href="'/vote/update/'+ vote.uuid">Éditer ce sujet de vote </a></p>
                  <p><a v-bind:href="'/vote/delete/'+ vote.uuid">Supprimer ce sujet de vote </a></p>
                </div>
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
          ballotpaper:Array,
          voterList:Array
      },
      creted(){
        

      },
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
                        var voterID = []
                        for (let index = 0; index < response.data.vote.uuid_votes.length; index++) {
                            voterID.push(response.data.vote.uuid_votes[index].split('||')[0])
                            arr.push(response.data.vote.uuid_votes[index].split('||')[1])
                        }
                        this.voterList = voterID
                        this.vote.uuid_votes = arr
                        //console.log(this.vote.uuid_votes)
                    }else{
                        //console.log(response.data.message)
                        this.msg = response.data.message
                    }                   
               })
          },
          hasVoted:function(){ //pour vérifier si l'user a déjà voté
                //console.log(this.voterList)
                if(this.voterList.filter(el => el === localStorage.getItem('UUID')) > 0 ) return true
                else return false
          },
          checkLevelAccess(){
                if(localStorage.getItem('access_level')){
                    //console.log(true)
                    if(localStorage.getItem('access_level') == 2) return true
                    else return false

                }else{
                    //console.log(false)
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
      }
}
</script>

<style scoped>

.vote-card , h1{
    text-align :left;
}

</style>