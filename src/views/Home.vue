<template>
  <div class="home">
    <Header />
    <Hero />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";
import ModalBuildWebSite from "../components/ModalBuildWebSite.vue";

export default {
  name: "Home",

  mounted() {
    this.$modal.show(ModalBuildWebSite);
  },

  components: {
    Header,
    Hero,
    Main,
    Footer,
  },
};
</script>

<style>
:root {
  --color-red: #ea4659;
  --color-green: #42b984;
  --color-rose: #fa705c;
  --color-gray: #455a64;
  --color-small-gray: #f2f2f2;
  --color-white: #ffffff;
}

.home,
.hero {
  width: 100%;
}
</style>
