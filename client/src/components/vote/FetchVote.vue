<template>
    <div>
        <h1>{{msg}}</h1>
        <div v-if="checkLevelAccess()" >
            <p><a v-bind:href="'/vote/create/'">Créer un sujet de vote </a></p>
        </div>
        <ul>
            <li style="list-style:none;"
            v-for="l in list"
            v-bind:key="l.ID"
            v-bind:title="l.title"
            >
            
            <h2><a v-bind:href="'/vote/'+ l.uuid">{{l.title}} </a></h2>
            <h3> {{l.description}} </h3>
            
            <div>
                <div v-if="l.uuid_votes">
                    Nombre de vote effectués : {{l.uuid_votes.length }}
                </div>
            </div>

            Début : {{l.start_date | formatDate}}<br>
            Clôture :  {{l.end_date | formatDate}}
            </li>
            ________
            <br>
        </ul>
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


</style>