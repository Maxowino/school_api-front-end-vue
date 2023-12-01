import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesPage from '../views/CoursesPage.vue';
import NewCourse from '../views/NewCourse.vue';
import UpdateCourse from '../views/UpdateCourse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses',
      name: 'Courses',
      component: CoursesPage
    },
    {
      path: '/newCourse',
      name: 'NewCourse',
      component: NewCourse
    },
    {
      path: '/updatecourse',
      name: 'updatecourse',
      component: UpdateCourse
    },
  ]
})

export default router
