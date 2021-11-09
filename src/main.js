import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueNumber from "vue-number-animation";
import { vfmPlugin } from "vue-final-modal";

Vue.config.productionTip = false;
Vue.use(VueNumber);

Vue.use(
  vfmPlugin({
    key: "$vfm",
    componentName: "VueFinalModal",
    dynamicContainerName: "ModalsContainer",
  })
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
