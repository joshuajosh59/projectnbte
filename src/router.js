import Vue from 'vue'
import Router from 'vue-router'
import authenticationComponent from './views/auth/authContainer.vue'
import loginComponent from './views/auth/login.vue'

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
    }
  ]
});
