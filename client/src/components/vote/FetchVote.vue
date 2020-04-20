<template>
    <div>

            <section class="ftco-section">
<div class="container">
  <div class="col-md-12 col-sm-12" >
        <h1>{{msg}}</h1>
        <div v-if="checkLevelAccess()" >
            <p>
                <router-link :to="{ name: 'create'}">Créer un sujet de vote</router-link>
            </p>
        </div>
  
            <div style="list-style:none;"
            v-for="l in list"
            v-bind:key="l.ID"
            v-bind:title="l.title"
            id="single"
            >
            
            <h2>
                <router-link :to="{ name: 'single', params: { voteid: l.uuid }}">{{l.title}}</router-link>
                </h2>
            <h3> {{l.description}} </h3>
            
            <div>
                <div v-if="l.uuid_votes">
                    Nombre de vote effectués : {{l.uuid_votes.length }}
                </div>
            </div>

            Début : {{l.start_date | formatDate}}<br>
            Clôture :  {{l.end_date | formatDate}}
        
            </div>
        
        

</div>
  </div>
           </section>

    </div>
</template>

<script>
import Axios from 'axios'
export default {
      name: 'FetchVote',
      props:{
          msg:String,
          list:Array
      },
      methods:
        {
            getVote: function() {
                Axios
                .get('http://localhost:8081/api/vote/')
                .then(response => {

                        var data = response.data
                        this.msg = data.message
                        this.list = data.vote
                }); 
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
        beforeMount () {
            this.getVote()
        }
        
        
}


</script>

<style scoped>


ul{
    text-align: left;
    width: 60%;
}

#single{
    margin:60px 0;
}


</style>