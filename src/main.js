import Vue from "vue";
import App from "./App.vue";
import VueNumber from "vue-number-animation";
import Icon from "vue-awesome/components/Icon";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";
import BackToTop from "vue-backtotop";
import VueScrollTo from "vue-scrollto";
import "./plugins/icons";

Vue.config.productionTip = false;
Vue.component("v-icon", Icon);
Vue.use(VueScrollProgressBar);
Vue.use(BackToTop);
Vue.use(VueNumber);
Vue.use(VueScrollTo, {
  duration: 700,
  easing: "ease",
  offset: -65,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
