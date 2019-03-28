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
import addCriteria from './views/dashboard/addCriteria.vue';
import addNews from './views/dashboard/addNews.vue';
import addWebometrics from './views/dashboard/addWebometrics.vue';
import addProgrammes from './views/dashboard/addProgrammes.vue';
import programmeComponent from './views/dashboard/programmes.vue';
import addStaff from './views/dashboard/addStaff.vue';
import staffComponent from './views/dashboard/staff.vue';
import webometricsComponent from './views/dashboard/webometrics.vue';
import editInstitution from './views/dashboard/editInstitution.vue';
import editStaff from './views/dashboard/editStaff.vue';
import editCriteria from './views/dashboard/editCriteria.vue';
import editNews from './views/dashboard/editNews.vue';
import editProgrammes from './views/dashboard/editProgrammes.vue';
import editWebometrics from './views/dashboard/editWebometrics.vue';
import { authGuard, loginAuth } from './util';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      redirect: '/admin/login',
      component: authenticationComponent,
      children: [
        {
          path: '/admin/login',
          beforeEnter: loginAuth,
          component: loginComponent,
        },
      ],
    },
    {
      path: '/admin/navs',
      component: dashboardComponent,
      children: [
        {
          path: '/admin/news',
          beforeEnter: authGuard,
          component: newsComponent,
        },
        {
          path: '/admin/institution',
          beforeEnter: authGuard,
          component: institutionComponent,
        },
        {
          path: '/admin/rank',
          beforeEnter: authGuard,
          component: rankComponent,
        },
        {
          path: '/admin/rankinstitution/:Id',
          beforeEnter: authGuard,
          component: rankInstitutionComponent,
        },
        {
          path: '/admin/editinstitution/:Id',
          beforeEnter: authGuard,
          component: editInstitution,
        },
        {
          path: '/admin/editstaff/:Id',
          beforeEnter: authGuard,
          component: editStaff,
        },
        {
          path: '/admin/editcriteria/:Id',
          beforeEnter: authGuard,
          component: editCriteria,
        },
        {
          path: '/admin/editnews/:Id',
          beforeEnter: authGuard,
          component: editNews,
        },
        {
          path: '/admin/editprogramme/:Id',
          beforeEnter: authGuard,
          component: editProgrammes,
        },
        {
          path: '/admin/editwebometrics/:Id',
          beforeEnter: authGuard,
          component: editWebometrics,
        },
        {
          path: '/admin/addnew',
          beforeEnter: authGuard,
          component: addInstitution,
        },
        {
          path: '/admin/addnews',
          beforeEnter: authGuard,
          component: addNews,
        },
        {
          path: '/admin/addCriteria',
          beforeEnter: authGuard,
          component: addCriteria,
        },
        {
          path: '/admin/addWebometrics',
          beforeEnter: authGuard,
          component: addWebometrics,
        },
        {
          path: '/admin/webometrics',
          beforeEnter: authGuard,
          component: webometricsComponent,
        },
        {
          path: '/admin/addprogrammes',
          beforeEnter: authGuard,
          component: addProgrammes,
        },
        {
          path: '/admin/programmes',
          beforeEnter: authGuard,
          component: programmeComponent,
        },
        {
          path: '/admin/addstaff',
          beforeEnter: authGuard,
          component: addStaff,
        },
        {
          path: '/admin/staff',
          beforeEnter: authGuard,
          component: staffComponent,
        },
        {
          path: '/admin/criteria',
          beforeEnter: authGuard,
          component: criteriaComponent,
        },
        {
          path: '/admin/users',
          beforeEnter: authGuard,
          component: usersComponent,
        },
      ],
    },
  ],
});
