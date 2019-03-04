import Vue from 'vue'
import Router from 'vue-router'
import authenticationComponent from './views/auth/authContainer.vue'
import loginComponent from './views/auth/login.vue'
import dashboardComponent from "./views/dashboard/dashContainer.vue"
import newsComponent from "./views/dashboard/news.vue"
import institutionComponent from "./views/dashboard/institution.vue"
import criteriaComponent from "./views/dashboard/criteria.vue"; 
import usersComponent from "./views/dashboard/user.vue"; 

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login",
      component: authenticationComponent,
      children: [
        {
          path: "/login",
          component: loginComponent
        }
      ]
    },
    {
      path: "/navs",
      component: dashboardComponent,
      children: [
        {
          path: "/news",
          component: newsComponent
        },
        {
          path: "/institution",
          component: institutionComponent
        },
        {
          path: "/criteria",
          component: criteriaComponent
        },
        {
          path: "/users",
          component: usersComponent
        }
      ]
    }
  ]
});
