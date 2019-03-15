import Vue from 'vue';
import Router from 'vue-router';
import authenticationComponent from './views/auth/authContainer.vue';
import loginComponent from './views/auth/login.vue';
import dashboardComponent from './views/dashboard/dashContainer.vue';
import newsComponent from './views/dashboard/news.vue';
import institutionComponent from './views/dashboard/institution.vue';
import rankComponent from './views/dashboard/rank.vue';
import rankInstitutionComponent from './views/dashboard/rankInstitution.vue';
import criteriaComponent from './views/dashboard/criteria.vue';
import usersComponent from './views/dashboard/user.vue';
import addInstitution from './views/dashboard/addInstitution.vue';
import { authGuard } from './util';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: authenticationComponent,
      children: [
        {
          path: '/login',
          component: loginComponent,
        },
      ],
    },
    {
      path: '/navs',
      component: dashboardComponent,
      children: [
        {
          path: '/news',
          beforeEnter: authGuard,
          component: newsComponent,
        },
        {
          path: '/institution',
          beforeEnter: authGuard,
          component: institutionComponent,
        },
        {
          path: '/rank',
          beforeEnter: authGuard,
          component: rankComponent,
        },
        {
          path: '/rankinstitution/:Id',
          beforeEnter: authGuard,
          component: rankInstitutionComponent,
        },
        {
          path: '/addnew',
          beforeEnter: authGuard,
          component: addInstitution,
        },
        {
          path: '/criteria',
          beforeEnter: authGuard,
          component: criteriaComponent,
        },
        {
          path: '/users',
          beforeEnter: authGuard,
          component: usersComponent,
        },
      ],
    },
  ],
});
