<template>
  <div class="home">
    <Header />
    <Main />
    <Footer/>
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
