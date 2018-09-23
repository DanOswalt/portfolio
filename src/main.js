import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueVisible from 'vue-visible';

Vue.use(VueVisible);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
