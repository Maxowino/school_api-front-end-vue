<template>
  <div class="container">
     <form @submit.prevent="createCourse" method="post">
  
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
    <button type="submit" class="btn btn-primary">Create</button>
    <button type="reset" class="btn btn-warning">Reset</button>
    
  </div>
</form>
</div>
</template>
  

   
<script>
import axios from 'axios';
import router from '../router';

 export default{
   name:'NewCourse',
   data(){
    return {
      name:'',
      amount:''
    };
   },
   methods:{
    async createCourse(){
      await axios.post('http://127.0.0.1:8000/api/create-course',{
        'name':this.name,
        'amount':this.amount
       
      });
       router.push('/courses');
    },
   
   }
 }
</script>