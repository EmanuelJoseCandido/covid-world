<template>
  <div id="app">
    <div class="content">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
    <vue-scroll-progress-bar
      height="2.5px"
      backgroundColor="linear-gradient(to right, #fa705c, #ea4659)"
    />
    <back-to-top bottom="30px">
      <button type="button" class="back-to-top" aria-label="back-to-top">
        <v-icon name="chevron-up" class="icon" />
      </button>
    </back-to-top>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

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

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
  color: #455a64;
}

.back-to-top {
  background: var(--color-red);
  color: var(--color-white);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

@media screen and (max-width: 858px) {
  .back-to-top {
    background: var(--color-red);
    color: var(--color-white);
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
