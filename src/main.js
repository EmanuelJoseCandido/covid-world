import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueNumber from "vue-number-animation";

Vue.config.productionTip = false;
Vue.use(VueNumber);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
