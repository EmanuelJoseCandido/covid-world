<template>
  <div class="home">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
:root {
  --color-rose: #fa705c;
  --color-gray: #455a64;
  --color-small-gray: #f2f2f2;
  --color-white: #ffffff;
}

.home {
  width: 100%;
}
</style>
