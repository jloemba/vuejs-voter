import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./lib/router"

Vue.use(VueRouter);

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(value).toLocaleDateString('fr-FR', options)
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
