import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueNumber from "vue-number-animation";
import VModal from "vue-js-modal";
import Icon from "vue-awesome/components/Icon";
import "./plugins/icons";

Vue.config.productionTip = false;
Vue.component("v-icon", Icon);
Vue.use(VueNumber);
Vue.use(VModal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
