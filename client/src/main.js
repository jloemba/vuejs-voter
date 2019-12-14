import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./lib/router"

import Formik from "./lib/Formik"
import MyInput from "./lib/MyInput"



// Enregistrement global de mes components
Vue.component("Formik",Formik)
Vue.component("MyInput",MyInput)

Vue.use(VueRouter);

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(value).toLocaleDateString('fr-FR', options)
})

export const vueBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


