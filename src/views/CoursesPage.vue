<template>
   <div class="container">
    <h1>Courses</h1>
    <button class="btn btn-primary" @click="newcourse()">New Course</button>
    
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
        <button class="btn btn-warning" @click="updatCourse(course.id)">Update</button>
        <button class="btn btn-danger" @click="deleteCourse(course.id)">Delete</button>
      </td>
    </tr>
   
  </tbody>
</table> 
   </div>
</template>
<script>
import axios from 'axios';
import router from '../router';
   export default{
       name:'CoursesPage',
       data(){
            return{
                courses:[],
            }
       },
       methods:{
       
        async getCourses(){
          try{
            const response = await axios.get("http://127.0.0.1:8000/api/get-courses");
            this.courses= response.data;}
            catch(error){
              console.error("Error Creating Course",error)
            }
        },
        newcourse(){
          router.push('/newCourse');
        },
       
       async updateCourse(id){
        router.push('/updatecourse',{'id':id});
          
       },
       async deleteCourse(id){
            try {
                console.log("Deleted ID is :", id);
                await axios.delete(`http://127.0.0.1:8000/api/deleteCourse/${id}`);
                window.location.reload();
            } catch (error) {
                console.error("Error deleting course", error);
    }}
  },
       created(){
        this.getCourses();
       }
   }
</script>