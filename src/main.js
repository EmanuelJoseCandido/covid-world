import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueNumber from "vue-number-animation";
import VModal from "vue-js-modal";
import Icon from "vue-awesome/components/Icon";
import VueYouTubeEmbed from "vue-youtube-embed";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";
import BackToTop from "vue-backtotop";
import VueScrollTo from "vue-scrollto";
import "./plugins/icons";

Vue.config.productionTip = false;
Vue.component("v-icon", Icon);
Vue.use(VueScrollProgressBar);
Vue.use(VueYouTubeEmbed);
Vue.use(BackToTop);
Vue.use(VueNumber);
Vue.use(VModal);
Vue.use(VueScrollTo, {
  duration: 700,
  easing: "ease",
  offset: -65,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
