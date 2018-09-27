import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueVisible from "vue-visible";
import firebase from "firebase";

Vue.use(VueVisible);

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
});
