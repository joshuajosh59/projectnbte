import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faKey, faBars, faSearch, faCog, faBookReader, faUserAlt, faUserTie, faTh, faBookmark, faThLarge, faUniversity, faBookOpen, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false
Vue.use(BootstrapVue);
library.add(faKey, faBars, faSearch, faBookReader, faCog, faUserAlt, faUserTie, faTh, faBell, faBookmark, faThLarge, faUniversity, faListAlt, faBookOpen);

Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
