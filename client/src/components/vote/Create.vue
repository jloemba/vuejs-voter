<template>
      <div>
                      <section class="ftco-section">
            <div class="container">
            <div class="col-md-12 col-sm-12" >
        <h1>Créer un sujet de vote</h1>
            <br>
            <br>
            <form action="#">

                  <div class="row">
			<div class="col-lg-6 col-sm-6">    


                        <div class="form-group has-default">
                                    <label for="title">Titre</label>
                                    <input v-model="title" placeholder="Ex : Présidentiel 2022 "  class="form-control">
                        </div>
                        <div class="form-group has-default">
                                    <label for="title">Description</label>
                                    <textarea v-model="description" placeholder="Ex: ..."  class="form-control"></textarea>
                        </div>
                              <div class="form-group has-default">
                                    <label for="title">Date de début</label>
                                    <input type="date" v-model="startDate" placeholder="AAAA/MM/JJ"  class="form-control" >
                        </div>  
                        <div class="form-group has-default">
                                    <label for="title">Date de fin</label>
                                    <input type="date" v-model="endDate" placeholder="AAAA/MM/JJ"  class="form-control">
                        </div> 

                        <div class="form-group has-default">
                                        <button @click="handleSubmit" class="btn btn-link">Créer</button>
                        </div> 



                   </div> 
                </div>
            </form>
            <p>{{msg}}</p>

                 </div>
            </div>
        </section>
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