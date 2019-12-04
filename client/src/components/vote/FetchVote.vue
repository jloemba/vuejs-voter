<template>
    <div>
        <h1>{{msg}}</h1>
        <ul>
            <li
            v-for="l in list"
            v-bind:key="l.ID"
            v-bind:title="l.title"
            >{{l.title}}</li>
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
      methods:{
            getVote: function() {
               
                Axios
                .get('http://localhost:8081/api/vote/')
                .then(response => {
                        var data = response.data
                        this.msg = data.message
                        this.list = data.vote
                })
            }
        },
      beforeMount () {
        this.getVote()   
      }
}
</script>

<style lang="stylus" scoped>

</style>