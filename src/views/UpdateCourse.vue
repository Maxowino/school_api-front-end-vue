<template>
  <div class="container">
     <form @submit.prevent="updateCourse(id)" method="post">
    
  <input type="text" class="form-control" v-model="name" id="id" placeholder="Course id">
  <div class="col-md-4">
    <label for="inputAddress" class="form-label">Course Name</label>
    <input type="text" class="form-control" v-model="name" id="name" placeholder="Course Name">
  </div>
  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Amount</label>
    <input type="number" class="form-control" v-model="amount" id="amount" placeholder="Kshs ....">
  </div>
  <br>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Update</button>
    <button type="reset" class="btn btn-warning">Cancel</button>
    
  </div>
</form>
</div>
</template>
  

   
<script>
import axios from 'axios';
import router from '../router';

 export default{
   name:'updatecourse',
   data(){
    return {
      id:1,
      name:'',
      amount:'',
    };
   },
   methods:{
    async updateCourse(id){
      await axios.put('http://127.0.0.1:8000/api/updateCourse/${id}',{
        'name':this.name,
        'amount':this.amount
      });
      router.push('/courses');
    }, 
    async getCourse(id){
      try{
        const response = await axios.get("http://127.0.0.1:8000/api/get-course/${id}");
            this.name= response.data.name;
            this.amount=response.data.amount;
      }
      catch(error){
        console.log("Error fetching data with id:",id);        
      }
    }
   
   },
   created(){
    
   }
 }
</script>