import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import VueSweetalert2 from 'vue-sweetalert2';
import {
  faKey,
  faBars,
  faBan,
  faCheck,
  faEllipsisV,
  faSearch,
  faCog,
  faBookReader,
  faUserAlt,
  faUserTie,
  faTh,
  faBookmark,
  faThLarge,
  faUniversity,
  faBookOpen,
  faListAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faBell, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
library.add(
  faKey,
  faCheck,
  faBan,
  faBars,
  faEllipsisV,
  faSearch,
  faBookReader,
  faCog,
  faUserAlt,
  faUserPlus,
  faUserTie,
  faTh,
  faBell,
  faBookmark,
  faThLarge,
  faUniversity,
  faListAlt,
  faBookOpen,
  faNewspaper
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
