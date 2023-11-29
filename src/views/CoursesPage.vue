<template>
   <div class="container">
    <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="course in courses" :key="course.id">
      <th scope="row">{{course.id}}</th>
      <td>{{course.name}}</td>
      <td>{{course.amount}}</td>
      <td>
        <button class="btn btn-warning">Update</button>
        <button class="btn btn-danger">Delete</button>
      </td>
    </tr>
   
  </tbody>
</table> 
   </div>
</template>
<script>
import axios from 'axios';
   export default{
       name:'CoursesPage',
       data(){
            return{
                courses:[],
            }
       },
       methods:{
        async getCourses(){
            const response = await axios.get("http://127.0.0.1:8000/api/get-courses");
            this.courses= response.data;
        }
       },
       created(){
        this.getCourses();
       }
   }
</script>