<template>
      <div>
        <h1>Créer un sujet de vote</h1>

            <form action="#">
                <div class="grid-row">
                        <label for="title">Titre</label>
                        <input v-model="title" placeholder="Ex : Présidentiel 2022 ">
                </div>
                <div class="grid-row">
                        <label for="title">Description</label>
                        <textarea v-model="description" placeholder="Ex: ..."></textarea>
                </div>
                 <div class="grid-row">
                        <label for="title">Date de début</label>
                        <input type="date" v-model="startDate" placeholder="AAAA/MM/JJ" >
                </div>  
                <div class="grid-row">
                        <label for="title">Date de fin</label>
                        <input type="date" v-model="endDate" placeholder="AAAA/MM/JJ">
                </div>   
                <button @click="handleSubmit">Créer</button>
            </form>
            <p>{{msg}}</p>
      </div>

        
</template>
<script>
import Axios from 'axios'
export default {
      name: 'Create',
      props:{
            msg:String,
            title:String,
            description:String,
            startDate:String,
            endDate:String
      },
      methods:{
            handleSubmit(e){
                  e.preventDefault();
                  this.startDate = new Date(this.startDate);
                  this.endDate = new Date(this.endDate);
                  this.createVote()
            },
            createVote() {
               Axios
              .post('http://localhost:8081/api/vote/create/',
              {
                    title:this.title,
                    description : this.description,
                    start_date:this.startDate,
                    end_date:this.endDate
              })
              .then(response => {
                    this.msg = response.data.message
              })
            }
      }
}
</script>