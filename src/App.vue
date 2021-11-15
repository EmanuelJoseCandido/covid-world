<template>
  <div id="app">
    <router-view />
    <modals-container></modals-container>
    <vue-scroll-progress-bar
      height="2.5px"
      backgroundColor="linear-gradient(to right, #fa705c, #ea4659)"
    />
    <back-to-top>
      <button type="button" class="back-to-top">
        <v-icon name="chevron-up" class="icon" />
      </button>
    </back-to-top>
  </div>
</template>

<script>
import { ModalsContainer } from "vue-final-modal";
export default {
  components: {
    ModalsContainer,
  },
};
</script>

<style>
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

/* ea4659 */

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
