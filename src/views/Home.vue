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

export default {
  name: "Home",

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
  --color-gray: #2c3e50;
  --color-small-gray: #f2f2f2;
  --color-white: #ffffff;
}

.home,
.hero,
.main {
  width: 100%;
  font-style: italic;
}
</style>
