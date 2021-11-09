<template>
  <div class="home">
    <Menu />
    <Main />
    <Footer/>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Menu,
    Main,
    Footer,
  },
};
</script>
